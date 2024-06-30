import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as yourCartPagePageObjects from '../pageobjects/yourCartPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class YourCartPage extends BasePage {
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

	async shoppingCartCount(): Promise<void> {
		await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async titleVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.title)
	}

	async quantityAndDescriptionLabelVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantityLabel)
		await this.isElementVisible(yourCartPagePageObjects.cartDescriptionLabel)
	}

	async cartQuantityVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantity)
		await this.verifyElementText(
			yourCartPagePageObjects.cartQuantity,
			testData.cartQuantity
		)
	}

	async itemNameVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.fleeceJacketname)
	}

	async itemTextVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.flecceJacketText)
	}

	async itemPriceVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.fleeceJacketPrice)
	}

	async continueShoppingBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(yourCartPagePageObjects.continueShoppingButton)
	}

	async removeBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(yourCartPagePageObjects.removeButton)
	}

	async checkoutBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(yourCartPagePageObjects.checkoutButton)
	}

	async VerifySocialandFooterLinks(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickContinueShoppingBtn(): Promise<void> {
		await this.waitAndClick(yourCartPagePageObjects.continueShoppingButton)
	}

	async clickCheckoutBtn(): Promise<void> {
		await this.waitAndClick(yourCartPagePageObjects.checkoutButton)
	}

	async clickRemoveBtnForItems(): Promise<void> {
		await this.waitAndClick(yourCartPagePageObjects.removeButton)
		await this.waitAndClick(yourCartPagePageObjects.removeButtonTshirtRed)
	}

	async cartItemAndQuantityLabelNotVisible(): Promise<void> {
		await this.isElementNotVisible(yourCartPagePageObjects.cartQuantityLabel)
		await this.isElementNotVisible(yourCartPagePageObjects.cartItemLabel)
	}
}
