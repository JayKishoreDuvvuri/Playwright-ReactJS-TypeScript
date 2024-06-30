import { Page, expect } from '@playwright/test'

export class BasePage {
	readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async open(): Promise<void> {
		await this.page.goto('/')
	}

	async getTitle(): Promise<string> {
		return await this.page.title()
	}

	async pause(): Promise<void> {
		await this.page.pause()
	}

	async getUrl(): Promise<string> {
		return this.page.url()
	}

	async wait(): Promise<void> {
		await this.page.waitForTimeout(2000)
	}

	async waitForPageLoad(): Promise<void> {
		await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector: string): Promise<void> {
		await this.page.click(selector)
	}

	async waitAndFill(selector: string, text: string): Promise<void> {
		await this.page.fill(selector, text)
	}

	async keyPress(selector: string, key: string): Promise<void> {
		await this.page.press(selector, key)
	}

	async takeScreenShot(): Promise<void> {
		expect(await this.page.screenshot()).toMatchSnapshot('MyScreenShot.png')
	}

	async verifyElementText(selector: string, text: string): Promise<void> {
		const locatorText = this.page.locator(selector)
		await expect(locatorText).toHaveText(text)
	}

	async verifyElementContainsText(
		selector: string,
		text: string
	): Promise<void> {
		const locatorText = this.page.locator(selector)
		await expect(locatorText).toContainText(text)
	}

	async selectValueFromDropdown(selector: string, text: string): Promise<void> {
		const dropdown = this.page.locator(selector)
		await dropdown.selectOption({ value: text })
	}

	async verifyElementAttribute(
		selector: string,
		attribute: string,
		value: string
	): Promise<void> {
		const getAttribute = this.page.locator(selector)
		expect(getAttribute).toHaveAttribute(attribute, value)
	}

	async getFirstElementFromTheList(selector: string): Promise<any> {
		const rows = this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector: string): Promise<any> {
		const rows = this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(5).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector: string): Promise<void> {
		const rows = this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}

	async isElementVisible(selector: string): Promise<void> {
		const element = this.page.locator(selector)
		await expect(element).toBeVisible()
	}

	async isElementNotVisible(selector: string): Promise<void> {
		const element = this.page.locator(selector)
		await expect(element).not.toBeVisible()
	}

	async isElementEnabled(selector: string): Promise<void> {
		const element = this.page.locator(selector)
		await expect(element).toBeEnabled()
	}

	async isElementChecked(selector: string): Promise<void> {
		const element = this.page.locator(selector)
		await expect(element).toBeChecked()
	}
}
export default BasePage
