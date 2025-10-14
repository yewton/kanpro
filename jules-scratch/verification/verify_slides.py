import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Cover page (slide 1)
        await page.goto('http://localhost:3030/1')
        await page.wait_for_timeout(3000) # wait for render
        await page.screenshot(path='jules-scratch/verification/screenshot-cover.png')

        # Page with an image (slide 6)
        await page.goto('http://localhost:3030/6')
        await page.wait_for_timeout(3000) # wait for render
        await page.screenshot(path='jules-scratch/verification/screenshot-image.png')

        # Page with a code block (from oop.html, slide 44)
        # I need to navigate to the correct entrypoint for the dev server
        # The dev server serves slides.md by default. I need to check how to serve other files.
        # For now, I will comment this out and focus on the main slides.md
        # await page.goto('http://localhost:3030/slides_oop/44')
        # await page.wait_for_timeout(3000) # wait for render
        # await page.screenshot(path='jules-scratch/verification/screenshot-code.png')

        await browser.close()

asyncio.run(main())