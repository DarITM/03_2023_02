const { expect } = require('@playwright/test');

exports.Dropdown = class Dropdown{

constructor (page) {
        this.page = page
        this.dropdownMenu1 = page.locator('[id="dropdowm-menu-1"]')
        this.dropdownMenu2 = page.locator('[id="dropdowm-menu-2"]')
        this.dropdownMenu3 = page.locator('[id="dropdowm-menu-3"]')
        this.commentField = page.locator('[name="message"]')
        this.resetButton = page.locator('[type="reset"]')
        this.submitButton = page.locator('[type="submit"]')
        this.contactReplay = page.locator('#contact_reply h1')
        this.errorReplay = page.locator('body')

    }
    async goToDropdown() {
        await this.page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        const title = await this.page.title()
        expect(title).toBe('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    }
    async selectOptionFirstDropdownList(itemName) {
        const dropdownItem = await this.dropdownMenu1.locator('text=' + itemName)
        const itemValue = {
            "JAVA": "java",
            "C#": "c#",
            "Python": "python",
            "SQL": "sql"
        }
        await this.dropdownMenu1.selectOption(itemName)
        await expect(dropdownItem).toHaveJSProperty('selected', true)
        await expect(dropdownItem).toHaveJSProperty('value', itemValue[itemName])
    }
}