//const { expect } = require('@playwright/test');

const { expect } = require('@playwright/test');

exports.ContactUsPage = class ContactUsPage {


//class ContactUsPage {
    constructor (page) {
        this.page = page
        this.firstNameField = page.locator('[name="first_name"]')
        this.lastNameField = page.locator('[name="last_name"]')
        this.emailField = page.locator('[name="email"]')
        this.commentField = page.locator('[name="message"]')
        this.resetButton = page.locator('[type="reset"]')
        this.submitButton = page.locator('[type="submit"]')
        this.contactReplay = page.locator('#contact_reply h1')
        this.errorReplay = page.locator('body')

    }
    async goToContactUs() {
        await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        const title = await this.page.title()
        expect(title).toBe('WebDriver | Contact Us')
    }
    async fillUpContactUsForm(firstName,lastName, email, comment) {
        if (firstName !== null) await this.firstNameField.type(firstName)
        expect(await this.firstNameField).toHaveJSProperty('value',firstName)
        if (lastName !== null) await this.lastNameField.type(lastName)
        expect(await this.lastNameField).toHaveJSProperty('value',lastName)
        if (email !== null) await this.emailField.type(email)
        expect(await this.emailField).toHaveJSProperty('value',email)
        if (comment !== null) await this.commentField.type(comment)
        expect(await this.commentField).toHaveJSProperty('value',comment)
    }
    async resetEnteredData() {
        await this.resetButton.click()
        await expect(this.firstNameField).toBeEmpty()
        await expect(this.lastNameField).toBeEmpty()
        await expect(this.emailField).toBeEmpty()
        await expect(this.commentField).toBeEmpty()
    }
    async submitForm(){
        await this.submitButton.click();
        //expect(await this.contactReplay).toHaveJSProperty.toContainText('Thank You for your Message!')
    }
    async messageFormSubmitedCorrect(){
        await expect(this.contactReplay).toHaveText('Thank You for your Message!')
    }
    async errorMessageAllFieldsRequired(){
        await expect(this.errorReplay).toContainText('Error: all fields are required')
    }
    async errorMessageInvalidEmail(){
        await expect(this.errorReplay).toContainText('Error: Invalid email address')
    }
}
//export { ContactUsPage };