"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/property";

type HeaderProps = {
  whatsappHref: string;
};

export function Header({ whatsappHref }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
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
        Falar com Rodrigo
      </a>

      <button
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

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="mobile-contact" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Falar com Rodrigo
          </a>
        </nav>
      </div>
    </header>
  );
}
