import BasePage from './basePage'
import fs from 'fs'
import * as productsPageObjects from '../pageobjects/productsPage'
import * as yourCartPagePageObjects from '../pageobjects/yourCartPage'
import { cancelButton } from '../pageobjects/checkoutYourInformationPage'
import * as checkoutOverviewPagePageObjects from '../pageobjects/checkoutOverviewPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class CheckoutOverviewPage extends BasePage {
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
			testData.shoppingCartCount
		)
	}

	async titleVisible(): Promise<void> {
		await this.isElementVisible(checkoutOverviewPagePageObjects.title)
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
		await this.isElementVisible(productsPageObjects.fleeceJacketname)
	}

	async itemTextVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.flecceJacketText)
	}

	async itemPriceVisible(): Promise<void> {
		await this.isElementVisible(yourCartPagePageObjects.fleeceJacketPrice)
	}

	async paymentInformationLabelVisible(): Promise<void> {
		await this.isElementVisible(
			checkoutOverviewPagePageObjects.paymentInformationLabel
		)
	}

	async secureCardInfoVisible(): Promise<void> {
		await this.isElementVisible(checkoutOverviewPagePageObjects.secureCardInfo)
	}

	async shippingInformationLabelVisible(): Promise<void> {
		await this.isElementVisible(
			checkoutOverviewPagePageObjects.shippingInformationLabel
		)
	}

	async deliveryMessageVisible(): Promise<void> {
		await this.isElementVisible(checkoutOverviewPagePageObjects.deliveryMessage)
	}

	async itemTotalLabelVisible(): Promise<void> {
		await this.isElementVisible(checkoutOverviewPagePageObjects.itemTotalLabel)
	}

	async itemTaxLabelVisible(): Promise<void> {
		await this.isElementVisible(checkoutOverviewPagePageObjects.itemTaxLabel)
	}

	async summaryTotalLabelVisible(): Promise<void> {
		await this.isElementVisible(
			checkoutOverviewPagePageObjects.summaryTotalLabel
		)
	}

	async cancelBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(cancelButton)
	}

	async finishBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(checkoutOverviewPagePageObjects.finishButton)
	}

	async VerifySocialandFooterLinks(): Promise<void> {
		await this.isElementVisible(productsPageObjects.facebookLink)
		await this.isElementVisible(productsPageObjects.twitterLink)
		await this.isElementVisible(productsPageObjects.linkedInLink)
		await this.isElementVisible(productsPageObjects.footerText)
	}

	async clickFinishBtn(): Promise<void> {
		await this.waitAndClick(checkoutOverviewPagePageObjects.finishButton)
	}
}
