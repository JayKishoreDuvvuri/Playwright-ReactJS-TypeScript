import BasePage from './basePage'
import fs from 'fs'
import * as productsPageObjects from '../pageobjects/productsPage'
import * as checkoutCompletePagePageObjects from '../pageobjects/checkoutCompletePage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class CheckoutCompletePage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async verifyLogoVisible(): Promise<void> {
		await this.isElementVisible(productsPageObjects.appLogo)
	}

	async verifyBurgerMenuButtonVisible(): Promise<void> {
		await this.isElementVisible(productsPageObjects.burgerMenuBtn)
	}

	async shoppingCartLinkVisible(): Promise<void> {
		await this.isElementVisible(productsPageObjects.shoppingCartLink)
	}

	async shoppingCartCount(): Promise<void> {
		await this.verifyElementText(
			productsPageObjects.shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async titleVisible(): Promise<void> {
		await this.isElementVisible(checkoutCompletePagePageObjects.title)
	}

	async completeHeaderVisible(): Promise<void> {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeHeader)
		await this.verifyElementText(
			checkoutCompletePagePageObjects.completeHeader,
			testData.completeHeaderText
		)
	}

	async completeTextVisible(): Promise<void> {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeText)
		await this.verifyElementText(
			checkoutCompletePagePageObjects.completeText,
			testData.completeOrderText
		)
	}

	async ponyExpressImageVisible(): Promise<void> {
		await this.isElementVisible(
			checkoutCompletePagePageObjects.ponyExpressImage
		)
	}

	async backHomeButtonISEnabled(): Promise<void> {
		await this.isElementEnabled(checkoutCompletePagePageObjects.backHomeButton)
	}

	async VerifySocialandFooterLinks(): Promise<void> {
		await this.isElementVisible(productsPageObjects.facebookLink)
		await this.isElementVisible(productsPageObjects.twitterLink)
		await this.isElementVisible(productsPageObjects.linkedInLink)
		await this.isElementVisible(productsPageObjects.footerText)
	}

	async clickBackHomeButton(): Promise<void> {
		await this.waitAndClick(checkoutCompletePagePageObjects.backHomeButton)
	}
}
