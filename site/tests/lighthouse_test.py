from __future__ import annotations

import json
import os
import shutil
import subprocess
from pathlib import Path

from playwright.sync_api import sync_playwright


SITE_DIR = Path(__file__).resolve().parents[1]
REPORT_PATH = SITE_DIR / ".lighthouse-mobile.json"
LIGHTHOUSE_CLI = SITE_DIR / "node_modules" / "lighthouse" / "cli" / "index.js"
MINIMUM_SCORE = 0.9
CATEGORIES = ("performance", "accessibility", "best-practices", "seo")


def main() -> None:
    node = shutil.which("node")
    if node is None:
        raise RuntimeError("Node.js não encontrado.")

    with sync_playwright() as playwright:
        chrome_path = playwright.chromium.executable_path

    env = os.environ.copy()
    env["CHROME_PATH"] = chrome_path
    REPORT_PATH.unlink(missing_ok=True)
    subprocess.run(
        [
            node,
            str(LIGHTHOUSE_CLI),
            "http://127.0.0.1:3000",
            "--quiet",
            "--chrome-flags=--headless --no-sandbox --disable-gpu",
            "--only-categories=performance,accessibility,best-practices,seo",
            "--output=json",
            f"--output-path={REPORT_PATH}",
        ],
        cwd=SITE_DIR,
        env=env,
        check=True,
    )

    report = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
    scores = {
        category: report["categories"][category]["score"] for category in CATEGORIES
    }
    print(
        "Lighthouse móvel: "
        + ", ".join(f"{category}={score * 100:.0f}" for category, score in scores.items())
    )
    failures = [
        f"{category}={score * 100:.0f}"
        for category, score in scores.items()
        if score < MINIMUM_SCORE
    ]
    assert not failures, "Pontuações abaixo de 90: " + ", ".join(failures)


if __name__ == "__main__":
    main()
