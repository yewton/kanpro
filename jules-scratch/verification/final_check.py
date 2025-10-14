import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Check background image in intro slide #7
        print("Checking background image in intro.html#7...")
        await page.goto("http://localhost:3000/intro.html#7", wait_until="networkidle")
        slide_7 = page.locator(".slidev-page.page-7")
        await slide_7.wait_for(state="visible", timeout=15000)
        await expect(slide_7).to_have_css("background-image", 'url("http://localhost:3000/assets/cc_book_e.jpg")')
        await page.screenshot(path="jules-scratch/verification/final_check_intro_7.png")
        print("Background image in intro.html#7 is correct.")

        # 2. Check for removed {w:fit} in oop slide #2
        print("Checking for removed {w:fit} in oop.html#2...")
        await page.goto("http://localhost:3000/oop.html#2", wait_until="networkidle")
        slide_2_oop = page.locator(".slidev-page.page-2")
        await slide_2_oop.wait_for(state="visible", timeout=15000)
        h1_oop = slide_2_oop.locator("h1")
        await expect(h1_oop).not_to_contain_text("{w:fit}")
        await page.screenshot(path="jules-scratch/verification/final_check_oop_2.png")
        print("{w:fit} is removed from oop.html#2.")

        await browser.close()
        print("All visual checks passed!")

if __name__ == "__main__":
    asyncio.run(main())