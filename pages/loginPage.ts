import BasePage from './basePage'
import fs from 'fs'
import * as loginPageObjects from '../pageobjects/loginPage'
import { Page } from '@playwright/test'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

export class LoginPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async openApp(): Promise<void> {
		await super.open()
		await super.waitForPageLoad()
	}

	async loginPageLogo(): Promise<void> {
		await this.isElementVisible(loginPageObjects.loginPageLogo)
	}

	async loginAsStandardUser(): Promise<void> {
		await this.waitAndFill(loginPageObjects.username, testData.standard_user)
		await this.waitAndFill(loginPageObjects.password, testData.password)
		await this.waitAndClick(loginPageObjects.loginButton)
	}
}
