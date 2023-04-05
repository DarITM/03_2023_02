const { expect,webdriverio } = require('@playwright/test');

exports.ajaxloader = class Ajaxloader{

constructor (page) {
    this.page = page
    this.button = page.locator('[id="button1"] p')
    this.successmessage = page.locator('[class="modal-title"]')
}
async goToAjaxLoaderpage() {
    await this.page.goto('https://webdriveruniversity.com/Ajax-Loader/index.html')
    const title = await this.page.title()
    expect(title).toBe('WebDriver | Ajax-Loader')
     
    }
async success() {
    await this.button.waitFor() 
    expect(this.successmessage).toHaveText('Well Done For Waiting....!!!')
}
 

    



}