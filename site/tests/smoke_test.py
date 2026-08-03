from __future__ import annotations

import argparse
import json
from pathlib import Path

from playwright.sync_api import expect, sync_playwright


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)

    console_errors: list[str] = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)

        for width, height in ((360, 800), (768, 900), (1440, 900)):
            page = browser.new_page(viewport={"width": width, "height": height})
            page.on(
                "console",
                lambda message: console_errors.append(message.text)
                if message.type == "error"
                else None,
            )
            response = page.goto(
                f"http://127.0.0.1:3000/?assets={width}", wait_until="networkidle"
            )
            assert response is not None and response.ok
            assert "Mundi Consciente Square" in page.title()
            assert page.locator("h1").count() == 1
            assert "R$ 1.650.000,00" in page.locator("body").inner_text()
            meta_description = page.locator('meta[name="description"]').get_attribute(
                "content"
            )
            assert meta_description is not None
            assert "147 m²" in meta_description
            assert "R$ 1.650.000,00" in meta_description
            assert page.locator('link[rel="canonical"]').get_attribute("href") == (
                "http://localhost:3000"
            )
            assert page.locator('meta[property="og:image"]').count() == 1
            structured_data = json.loads(
                page.locator('script[type="application/ld+json"]').text_content()
                or "{}"
            )
            assert structured_data["floorSize"]["value"] == 147
            assert structured_data["numberOfBedrooms"] == 3
            assert structured_data["address"]["streetAddress"] == "Rua 27"
            assert structured_data["offers"]["price"] == 1650000
            common_area_cards = page.locator(".common-area-card")
            assert common_area_cards.count() == 17
            assert page.locator(".common-area-card:visible").count() == (
                6 if width == 360 else 17
            )
            assert page.get_by_role(
                "button", name="Ver todas as 17 fotos"
            ).count() == (1 if width == 360 else 0)
            common_area_text = (
                page.locator(".common-areas-gallery").text_content() or ""
            )
            assert "Piscina e cascatas" in common_area_text
            assert "Piscina à noite" in common_area_text
            assert "Piscina e vista" in common_area_text
            assert "Praça do Fogo" in page.locator(".common-areas-gallery").inner_text()
            assert "2001" not in page.locator("body").inner_text()
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
            page.evaluate(
                """async () => {
                    document.documentElement.style.scrollBehavior = 'auto';
                    for (let y = 0; y < document.body.scrollHeight; y += innerHeight) {
                        scrollTo(0, y);
                        await new Promise(resolve => setTimeout(resolve, 60));
                    }
                    scrollTo(0, 0);
                }"""
            )
            for image in page.locator("img").all():
                if image.is_visible():
                    image.scroll_into_view_if_needed()
            page.wait_for_function(
                """() => [...document.images]
                    .filter(image => image.offsetParent !== null)
                    .every(image => image.complete && image.naturalWidth > 0)""",
                timeout=15_000,
            )
            broken_images = page.locator("img").evaluate_all(
                "images => images.filter(image => image.offsetParent !== null && (!image.complete || image.naturalWidth === 0)).map(image => image.currentSrc || image.src)"
            )
            assert not broken_images, f"Imagens não carregadas em {width}px: {broken_images}"
            assert response.headers.get("x-content-type-options") == "nosniff"
            assert "frame-ancestors 'none'" in response.headers.get(
                "content-security-policy", ""
            )
            assert "unsafe-eval" not in response.headers.get(
                "content-security-policy", ""
            )
            assert page.locator('a[href^="https://wa.me/5562999455780"]').count() >= 3
            whatsapp_float = page.get_by_role(
                "link", name="Falar com Rodrigo pelo WhatsApp"
            )
            assert whatsapp_float.is_visible()
            assert whatsapp_float.locator("svg").count() == 1
            assert page.locator('a[href*="google.com/maps"][rel*="noopener"]').count() == 1
            page.close()
            page = browser.new_page(viewport={"width": width, "height": height})
            page.on(
                "console",
                lambda message: console_errors.append(message.text)
                if message.type == "error"
                else None,
            )
            page.goto(
                f"http://127.0.0.1:3000/?interactions={width}",
                wait_until="networkidle",
            )
            assert page.evaluate("scrollY") == 0
            page.screenshot(path=args.output_dir / f"hero-{width}.png")

            if width == 360:
                assert not console_errors, console_errors
                menu_button = page.get_by_role("button", name="Abrir menu")
                menu_button.click()
                mobile_menu = page.locator("#mobile-menu")
                expect(mobile_menu).to_have_attribute("aria-hidden", "false")
                assert page.evaluate("document.body.style.overflow") == "hidden"
                first_menu_link = mobile_menu.get_by_role("link").first
                last_menu_link = mobile_menu.get_by_role("link").last
                page.wait_for_function(
                    "() => document.activeElement === document.querySelector('#mobile-menu a')"
                )
                assert first_menu_link.evaluate(
                    "element => element === document.activeElement"
                )
                page.keyboard.press("Shift+Tab")
                assert last_menu_link.evaluate(
                    "element => element === document.activeElement"
                )
                page.keyboard.press("Tab")
                assert first_menu_link.evaluate(
                    "element => element === document.activeElement"
                )
                page.keyboard.press("Escape")
                expect(mobile_menu).to_have_attribute("aria-hidden", "true")
                assert menu_button.evaluate(
                    "element => element === document.activeElement"
                )

                first_gallery = page.locator(".gallery-item").first
                first_gallery.scroll_into_view_if_needed()
                first_gallery.click()
                dialog = page.get_by_role("dialog")
                assert dialog.is_visible()
                assert "01 / 21" in dialog.inner_text()
                assert dialog.get_by_role("button", name="Fechar galeria").is_visible()
                box = dialog.bounding_box()
                assert box is not None and box["width"] >= width and box["height"] >= height
                page.wait_for_timeout(300)
                page.screenshot(path=args.output_dir / "lightbox-360.png")
                page.keyboard.press("ArrowRight")
                assert "02 / 21" in dialog.inner_text()
                page.keyboard.press("Escape")
                assert not dialog.is_visible()
                assert first_gallery.evaluate("element => element === document.activeElement")

            page.evaluate(
                """async () => {
                    document.documentElement.style.scrollBehavior = 'auto';
                    for (let y = 0; y < document.body.scrollHeight; y += innerHeight) {
                        scrollTo(0, y);
                        await new Promise(resolve => setTimeout(resolve, 60));
                    }
                }"""
            )
            page.wait_for_timeout(300)
            parking_image = page.locator(".parking-visual img")
            assert parking_image.evaluate(
                "image => image.complete && image.naturalWidth > 0"
            )
            if width in (360, 1440):
                page.locator(".parking-visual").screenshot(
                    path=args.output_dir / f"parking-{width}.png"
                )

            page.screenshot(
                path=args.output_dir / f"site-{width}.png",
                full_page=True,
            )
            page.close()

        browser.close()

    assert not console_errors, f"Erros no console: {console_errors}"
    print("Smoke test concluído: 360, 768 e 1440 px.")


if __name__ == "__main__":
    main()
