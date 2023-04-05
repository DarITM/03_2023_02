const { expect } = require('@playwright/test');

exports.Autocomplete = class Autocomplete{

constructor (page) {
    this.page = page
    this.search = page.locator('[id="myInput"][type="text"]')
    this.autocomplete = page.locator('[id="myInputautocomplete-list"] strong')
    this.submitButton = page.locator('[id="submit-button"]')
}


async goToAutocomplete() {
    await this.page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=')
    const title = await this.page.title()
    expect(title).toBe('WebDriver | Contact Us')  
    await expect (this.search).toBeEmpty()

}
async inputaText(inputText){
    await this.search.type(inputText)
    const listElementsCounter = await this.autocomplete.count()
    for(let i = 0; i <listElementsCounter; ++i){
     await expect(this.autocomplete.nth(i)).toHaveText(inputText,{ ignoreCase: true })
    }
    }
    async chooseElementsfromAutocompleteList(quantity){
        await this.autocomplete.nth(quantity).click()
    }





async submitFoodItem(){
    await this.submitButton.click()
    await expect (this.search).toBeEmpty()

}

}