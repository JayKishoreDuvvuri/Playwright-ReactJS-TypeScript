import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class ProductsPage extends BasePage {
	constructor(page: Page) {
		super(page) 




		
	}

	async verifyProductsPageLogoVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.appLogo)
	}

	async verifyProductsPageTitleVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.landingPageTitle)
	}

	async verifyPeekImage(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.landingPageImage)
	}

	async burgerButtonVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.burgerMenuBtn)
	}

	async burgerButtonClick(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.burgerMenuBtn)
	}

	async burgerCrossButtonVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.burgerCrossButton)
	}

	async burgerCrossButtonClick(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.burgerCrossButton)
	}

	async allItemsSideBarLink(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.allItemsSideBarLink)
	}

	async aboutSideBarLink(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.aboutSideBarLink)
	}

	async clickAboutSideBarLink(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.aboutSideBarLink)
	}

	async logoutSideBarLink(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.logoutSideBarLink)
		await this.waitForPageLoad()
	}

	async clickLogoutSideBarLink(): Promise<void> {
		await this.wait()
		await this.waitAndClick(productsPagePageObjects.logoutSideBarLink)
	}

	async resetSideBarLink(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.resetSideBarLink)
	}

	async shoppingCartLink(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.shoppingCartLink)
	}

	async shoppingCartCount(): Promise<void> {
		await this.verifyElementText(
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

	async shoppingCartCountAsTwo(): Promise<void> {
		await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountAsTwo
		)
	}

	async shoppingCartCountAsSix(): Promise<void> {
		await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountAsSix
		)
	}

	async clickShoppingCartLink(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.shoppingCartLink)
	}

	async productSortContainerVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.productSortContainer)
	}

	async selectZAFromDropDown(): Promise<void> {
		await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionZA
		)
	}

	async selectLowToHighFromDropDown(): Promise<void> {
		await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionLowToHigh
		)
	}

	async selectHighToLowFromDropDown(): Promise<void> {
		await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionHighToLow
		)
	}

	async inventoryContainerVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.inventoryContainer)
	}

	async backPackItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.backPackImage)
		await this.isElementVisible(productsPagePageObjects.backPackName)
		await this.isElementVisible(productsPagePageObjects.backPackText)
		await this.verifyElementText(
			productsPagePageObjects.backPackText,
			testData.backPackText
		)
		await this.isElementVisible(productsPagePageObjects.backPackPrice)
		await this.isElementEnabled(productsPagePageObjects.backPackAddToCartBtn)
	}

	async addToCartButtonIsEnabled(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.backPackAddToCartBtn)
	}

	async clickBackPackItem(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.backPackImage)
	}

	async clickAddToCartBtn(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.backPackAddToCartBtn)
	}

	async clickRemoveButton(): Promise<void> {
		await this.waitAndClick(productsPagePageObjects.removeButton)
	}

	async boltTshirtItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.allItemsSideBarLink)
		await this.isElementVisible(productsPagePageObjects.boltTshirtName)
		await this.isElementVisible(productsPagePageObjects.boltTshirtText)
		await this.verifyElementText(
			productsPagePageObjects.boltTshirtText,
			testData.boltTshirtText
		)
		await this.isElementVisible(productsPagePageObjects.boltTshirtPrice)
		await this.isElementEnabled(productsPagePageObjects.boltTshirtAddToCartBtn)
	}

	async onesieItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.onesieImage)
		await this.isElementVisible(productsPagePageObjects.onesieName)
		await this.isElementVisible(productsPagePageObjects.onesieText)
		await this.verifyElementText(
			productsPagePageObjects.onesieText,
			testData.onesieText
		)
		await this.isElementVisible(productsPagePageObjects.onesiePrice)
		await this.isElementEnabled(productsPagePageObjects.onesieAddToCartBtn)
	}

	async bikeLightItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.bikeLightImage)
		await this.isElementVisible(productsPagePageObjects.bikeLightName)
		await this.isElementVisible(productsPagePageObjects.bikeLightText)
		await this.verifyElementText(
			productsPagePageObjects.bikeLightText,
			testData.bikeLightText
		)
		await this.isElementVisible(productsPagePageObjects.bikeLightPrice)
		await this.isElementEnabled(productsPagePageObjects.bikeLightAddToCartBtn)
	}

	async fleeceJacketItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.fleeceJacketImage)
		await this.isElementVisible(productsPagePageObjects.fleeceJacketname)
		await this.isElementVisible(productsPagePageObjects.flecceJacketText)
		await this.verifyElementText(
			productsPagePageObjects.flecceJacketText,
			testData.fleeceJacketText
		)
		await this.isElementVisible(productsPagePageObjects.fleeceJacketPrice)
		await this.isElementEnabled(
			productsPagePageObjects.fleeceJacketAddToCartBtn
		)
	}

	async clickAddToCart(): Promise<void> {
		await this.isElementEnabled(
			productsPagePageObjects.fleeceJacketAddToCartBtn
		)
		await this.waitAndClick(productsPagePageObjects.fleeceJacketAddToCartBtn)
	}

	async clickAddToCartForItems(): Promise<void> {
		await this.clickAllElements(productsPagePageObjects.addtoCartBtnAll)
	}

	async tshirtRedItem(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.tshirtRedImage)

		await this.isElementVisible(productsPagePageObjects.tshirtRedName)

		await this.isElementVisible(productsPagePageObjects.tshirtRedText)

		await this.verifyElementText(
			productsPagePageObjects.tshirtRedText,
			testData.tshirtRedText
		)

		await this.isElementVisible(productsPagePageObjects.tshirtRedPrice)

		await this.isElementEnabled(productsPagePageObjects.tshirtRedAddToCartBtn)
	}

	async getFirstItemFromInventory(): Promise<string> {
		const firstItem = await this.getFirstElementFromTheList(
			productsPagePageObjects.listOfElements
		)
		return firstItem
	}

	async getLastItemFromInventory(): Promise<string> {
		const lastItem = await this.getLastElementFromTheList(
			productsPagePageObjects.listOfElements
		)
		return lastItem
	}

	async footerTextVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async socialChannelLinksVisible(): Promise<void> {
		await this.isElementVisible(productsPagePageObjects.twitterLink)

		await this.isElementVisible(productsPagePageObjects.facebookLink)

		await this.isElementVisible(productsPagePageObjects.linkedInLink)
	}
}
