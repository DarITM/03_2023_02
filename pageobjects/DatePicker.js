const { expect } = require('@playwright/test');

exports.Datepicker = class Datepicker{

constructor (page) {
        this.page = page
        this.datepicker = page.locator('[id="datepicker"] [class="form-control"]')
        this.monthswitch = page.locator('[class="datepicker-switch"]:visible')
        this.nextButton = page.locator('[class="next"]:visible')
        this.allDays = page.locator('[class="day"]')

}
async goToDatepickerpage() {
    await this.page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const title = await this.page.title()
    expect(title).toBe('WebDriver | Datepicker')
}
async chceckIfDefaultDateIsTodayDate() {
    let currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
    await expect(this.datepicker).toHaveJSProperty('value', currentDate)
    // expect(await this.datepicker.getAttribute('value')).toEqual(currentDate)
}
async selectDateFromToday(daynumber) {
    let date = new Date()
    date.setDate(date.getDate() + daynumber)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-us', { month: 'long' })
    await this.datepicker.click()

    const selectDayFromCurrent = async () => {

        const monthYear = await (this.monthswitch).textContent()
        if (!monthYear.includes(futureMonth)) {
            await this.nextButton.click()
            selectDayFromCurrent()
        } else {
            await this.allDays.locator('text=' + futureDay).nth(0).click()
        }
    }
    await selectDayFromCurrent()
    let futureDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')
    await expect(this.datepicker).toHaveJSProperty('value', futureDate)
}

}