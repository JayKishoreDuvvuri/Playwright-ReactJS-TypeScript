import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as checkoutYourInformationPagePageObjects from '../pageobjects/checkoutYourInformationPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class CheckoutYourInformationPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async verifyLogoVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.appLogo)
	}

	async titleVisible(): Promise<void> {
		await this.isElementVisible(checkoutYourInformationPagePageObjects.title)
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

	async verifyErrorMessage(): Promise<void> {
		await this.isElementVisible(
			checkoutYourInformationPagePageObjects.errorMessage
		)
	}

	async VerifyTextFirstNameOfErrorMessage(): Promise<void> {
		await this.verifyElementText(
			checkoutYourInformationPagePageObjects.errorMessage,
			testData.errorMessageFirstName
		)
	}

	async VerifyTextLastNameOfErrorMessage(): Promise<void> {
		await this.verifyElementText(
			checkoutYourInformationPagePageObjects.errorMessage,
			testData.errorMessageLasttName
		)
	}

	async VerifyTextPostalCodeOfErrorMessage(): Promise<void> {
		await this.verifyElementText(
			checkoutYourInformationPagePageObjects.errorMessage,
			testData.errorMessagePostalCode
		)
	}

	async getRandomName(): Promise<string> {
		let randomNumber = Math.floor(Math.random() * 100) + 1
		return `name${new Date().getTime().toString()}${randomNumber}`
	}

	async typeFirstName(): Promise<void> {
		const firstNameText = await this.getRandomName()
		await this.waitAndFill(
			checkoutYourInformationPagePageObjects.firstName,
			firstNameText
		)
	}

	async typeLastName(): Promise<void> {
		const lastNameText = await this.getRandomName()
		await this.waitAndFill(
			checkoutYourInformationPagePageObjects.lastName,
			lastNameText
		)
	}

	async typePostalCode(): Promise<void> {
		const postalCodeText = await this.getRandomName()
		await this.waitAndFill(
			checkoutYourInformationPagePageObjects.postalCode,
			postalCodeText
		)
	}

	async cancelBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(
			checkoutYourInformationPagePageObjects.cancelButton
		)
	}

	async clickCancelBtn(): Promise<void> {
		await this.waitAndClick(checkoutYourInformationPagePageObjects.cancelButton)
	}

	async continueBtnIsEnabled(): Promise<void> {
		await this.isElementEnabled(
			checkoutYourInformationPagePageObjects.continueButton
		)
	}

	async VerifySocialandFooterLinks(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickContinueBtn(): Promise<void> {
		await this.waitAndClick(
			checkoutYourInformationPagePageObjects.continueButton
		)
	}
}
