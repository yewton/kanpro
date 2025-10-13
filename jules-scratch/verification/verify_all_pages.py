from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # 1. index.html の確認
    page.goto("http://localhost:5000/index.html")
    expect(page.locator(".slidev-slide-container")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/index_page.png")

    # 2. intro.html の確認
    page.goto("http://localhost:5000/intro.html")
    expect(page.locator(".slidev-slide-container")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/intro_page.png")

    # 3. intro.html#6 (背景画像) の確認
    page.goto("http://localhost:5000/intro.html#6")
    expect(page.locator(".slidev-slide-container")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/intro_page_6.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)