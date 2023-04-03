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
        this.checkbox1 = page.locator('[type="checkbox"][value="option-1"]')
        this.checkbox2 = page.locator('[type="checkbox"][value="option-2"]')
        this.checkbox3 = page.locator('[type="checkbox"][value="option-3"]')
        this.checkbox4 = page.locator('[type="checkbox"][value="option-4"]')
        this.radiobutton1 = page.locator('[type="radio"][value="green"]')
        this.radiobutton2 = page.locator('[type="radio"][value="blue"]')
        this.radiobutton3 = page.locator('[type="radio"][value="yellow"]')
        this.radiobutton4 = page.locator('[type="radio"][value="orange"]')
        this.radiobutton5 = page.locator('[type="radio"][value="purple"]')

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
    async selectCheckbox(){
        await this.checkbox1.click()
        await expect (this.checkbox1).toHaveJSProperty('checked',true)
        await this.checkbox2.click()
        await expect (this.checkbox2).toHaveJSProperty('checked',true)
        //await this.checkbox3.click()
        await expect (this.checkbox3).toHaveJSProperty('checked',true)
        await this.checkbox4.click()
        await expect (this.checkbox4).toHaveJSProperty('checked',true)
    }
    async unselectCheckbox(){
        await this.checkbox2.click()
        await expect (this.checkbox2).toHaveJSProperty('checked',false)
        await this.checkbox4.click()
        await expect(this.checkbox4).toHaveJSProperty('checked',false)
    }
    async selectRadioButtons(){
        await this.radiobutton1.click()
        await expect(this.radiobutton1).toHaveJSProperty('checked',true)
        await this.radiobutton2.click()
        await expect(this.radiobutton2).toHaveJSProperty('checked',true)
        await this.radiobutton3.click()
        await expect(this.radiobutton3).toHaveJSProperty('checked',true)
        await this.radiobutton4.click()
        await expect(this.radiobutton4).toHaveJSProperty('checked',true)
        await this.radiobutton5.click()
        await expect(this.radiobutton5).toHaveJSProperty('checked',true)
    }
}