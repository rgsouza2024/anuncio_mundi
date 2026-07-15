"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CommonAreaImage } from "@/data/property";

type CommonAreasGalleryProps = {
  images: readonly CommonAreaImage[];
};

export function CommonAreasGallery({ images }: CommonAreasGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<number | null>(null);
  const isOpen = active !== null;

  const next = () => setActive((current) => (current === null ? 0 : (current + 1) % images.length));
  const previous = () => setActive((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
  const close = () => setActive(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? 0 : (current + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
      }
      if (event.key === "Tab") {
        const dialog = closeButtonRef.current?.closest("[role='dialog']");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  const openAt = (index: number, opener: HTMLElement) => {
    openerRef.current = opener;
    setActive(index);
  };

  const current = active === null ? null : images[active];

  return (
    <>
      <div className="shell-wide common-areas-gallery" aria-label="Seleção de áreas comuns do condomínio">
        {images.map((image, index) => (
          <button
            className="common-area-card"
            key={image.src}
            type="button"
            onClick={(event) => openAt(index, event.currentTarget)}
            aria-label={`Abrir foto ${index + 1} de ${images.length}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 1100px) 50vw, 33vw"
            />
            <span className="common-area-caption">{image.label}</span>
          </button>
        ))}
      </div>

      <div className="shell common-areas-action">
        <button className="button common-areas-more" type="button" onClick={(event) => openAt(0, event.currentTarget)}>
          Ver todas as {images.length} fotos <span aria-hidden="true">↗</span>
        </button>
      </div>

      {current && active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria das áreas comuns, imagem ${active + 1} de ${images.length}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          onTouchStart={(event) => {
            touchStartRef.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartRef.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? touchStartRef.current) - touchStartRef.current;
            if (Math.abs(distance) > 50) {
              if (distance < 0) next();
              else previous();
            }
            touchStartRef.current = null;
          }}
        >
          <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={close} aria-label="Fechar galeria">
            Fechar <span aria-hidden="true">×</span>
          </button>
          <button className="lightbox-arrow previous" type="button" onClick={previous} aria-label="Foto anterior">
            ←
          </button>
          <figure className="lightbox-figure">
            <div className="lightbox-image">
              <Image src={current.src} alt={current.alt} fill sizes="95vw" priority />
            </div>
            <figcaption>
              <span>{current.label}</span>
              <p>{current.alt}</p>
              <strong>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</strong>
            </figcaption>
          </figure>
          <button className="lightbox-arrow next" type="button" onClick={next} aria-label="Próxima foto">
            →
          </button>
        </div>
      )}
    </>
  );
}
