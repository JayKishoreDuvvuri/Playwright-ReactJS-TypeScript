import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as productDetailsPagePageObjects from '../pageobjects/productDetailsPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class ProductDetailsPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async verifyLogoVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.appLogo)
	}

	async verifyBurgerMenuButtonVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.burgerMenuBtn)
	}

	async shoppingCartLinkVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.shoppingCartLink)
	}

	async imageVisible(): Promise<void> {
		await this.isElementVisible(productDetailsPagePageObjects.image)
	}

	async backToProductsButtonIsEnabled(): Promise<void> {
		await this.isElementEnabled(
			productDetailsPagePageObjects.backToProductsButton
		)
	}

	async productNameVisible(): Promise<void> {
		await this.isElementVisible(productDetailsPagePageObjects.productName)
	}

	async productDescriptionVisible(): Promise<void> {
		await this.isElementVisible(
			productDetailsPagePageObjects.productDescription
		)
	}

	async productPriceVisible(): Promise<void> {
		await this.isElementVisible(productDetailsPagePageObjects.productPrice)
	}

	async clickAddToCartButton(): Promise<void> {
		await this.isElementEnabled(productDetailsPagePageObjects.addToCartButton)
		await this.waitAndClick(productDetailsPagePageObjects.addToCartButton)
	}

	async clickRemoveButton(): Promise<void> {
		await this.isElementEnabled(productDetailsPagePageObjects.removeButton)
		await this.waitAndClick(productDetailsPagePageObjects.removeButton)
	}

	async shoppingCartCount(): Promise<void> {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async shoppingCartCountAsEmpty(): Promise<void> {
		await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async VerifySocialandFooterLinks(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickBackToProductsButton(): Promise<void> {
		await this.waitAndClick(productDetailsPagePageObjects.backToProductsButton)
	}
}
