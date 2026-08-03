"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/property";

type HeaderProps = {
  whatsappHref: string;
};

export function Header({ whatsappHref }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const focusTimer = window.setTimeout(() => first?.focus(), 220);

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mundi Consciente Square, início">
        <span>Mundi Consciente</span>
        <strong>Square</strong>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">
        Falar pelo WhatsApp
      </a>

      <button
        ref={menuButtonRef}
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div ref={mobileMenuRef} id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="mobile-contact" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Falar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
