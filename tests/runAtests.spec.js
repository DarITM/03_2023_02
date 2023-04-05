import { describe,test, expect } from '@playwright/test';
import { Autocomplete } from '../pageobjects/Autocomplete';
import { ContactUsPage } from '../pageobjects/ContactUsPage';
import { Datepicker } from '../pageobjects/DatePicker';
import { Dropdown } from '../pageobjects/Dropdown-Checkboxes-RadioButtons';
//import { describe } from 'jest';

// const { PageObjectsManager } = require('./pageobjects/pageObje')
// import { PageObjectsManager } from '../pageobjects/pageObjectsManager';
// import { ContactUsPage } from '../pageobjects/contactUsPage';

//const { chromium } = require('playwright')
//const pageObjectsManager = new PageObjectsManager(page)

//const contactUsPage = new ContactUsPage(page);
//const chromium = require('playwright-chromium');

// describe('Example Test', () => {
  // test('should take a screenshot in headless mode', async () => {
  // const browser = await chromium.launch({
  //  headless: false,
  //  });
  //  const context = await browser.newContext();
  //  const page = await context.newPage();
  
  // await page.goto('https://example.com');
  // await page.screenshot({ path: 'example.png' });
  // await browser.close();
  // });
  // });
  
 
//   beforeEach(async ({ page }) => {
//     (async () => {
//       const browser = await chromium.launch({
//       headless: true, // Set headless mode to true
//      });
//      const context = await browser.newContext();
//      const page = await context.newPage();
//     })
// });

test.describe('Group test for Contact us Page', () => {
     test.beforeEach( async ({ page }) => { 
      const contactUsPage = new ContactUsPage(page);
      await contactUsPage.goToContactUs(); 
      // const title = await page.title(); 
      // expect(title).toBe('WebDriver | Contact Us');
     });
   
     test('Reset data on the page',async ({page}) => {
      const contactUsPage = new ContactUsPage(page);
            await contactUsPage.resetEnteredData()
           await contactUsPage.fillUpContactUsForm('Dariusz','Kowalski','dkowalski@gmail.com','Ide do was')
           await contactUsPage.resetEnteredData()

 });
      test('Half way exeption -> lack of name',async ({page}) => {
        const contactUsPage = new ContactUsPage(page);
            await contactUsPage.resetEnteredData()
            await contactUsPage.fillUpContactUsForm('','Kowalski','dkowalski@gmail.com','Ide do was')
            await contactUsPage.submitForm()
            await contactUsPage.errorMessageAllFieldsRequired()
});

test('Half way exeption -> wrong e-mail',async ({page}) => {
  const contactUsPage = new ContactUsPage(page);
      await contactUsPage.resetEnteredData()
      await contactUsPage.fillUpContactUsForm('Dariusz','Kowalski','dkowalski@gmail..com','Ide do was')
      await contactUsPage.submitForm()
      await contactUsPage.errorMessageInvalidEmail()
});
test('Happy path',async ({page}) => {
  const contactUsPage = new ContactUsPage(page);
      await contactUsPage.resetEnteredData()
      await contactUsPage.fillUpContactUsForm('Dariusz','Kowalski','dkowalski@gmail.com','Ide do was')
      await contactUsPage.submitForm()
      await contactUsPage.messageFormSubmitedCorrect()
})
})

test.describe('Group tests for DropDowns Page', () => {
  test.beforeEach( async ({ page }) => { 
const dropDown = new Dropdown(page)
await dropDown.goToDropdown()
  })
test('Drop down 1',async ({page}) => {
  const dropDown = new Dropdown(page)
  await dropDown.selectOptionFirstDropdownList('JAVA')
  await dropDown.selectOptionFirstDropdownList('C#')
  await dropDown.selectOptionFirstDropdownList('Python')
  await dropDown.selectOptionFirstDropdownList('SQL')
})
test('Checkboxes',async ({page}) => {
 const selecttheCheckbox = new Dropdown(page)
 await selecttheCheckbox.selectCheckbox()
 await selecttheCheckbox.unselectCheckbox()

})
test('Radiobuttons',async ({page}) =>{
  const selecttheradiobuttons= new Dropdown(page)
  await selecttheradiobuttons.selectRadioButtons()
})
})

test.describe('Date picker', ()=> {
  test.beforeEach(async ({page}) => {
    const datepicker = new Datepicker(page)
    await datepicker.goToDatepickerpage()
  
})
  test('check todays date',async ({page}) =>{
    const datepicker = new Datepicker(page)
    await datepicker.chceckIfDefaultDateIsTodayDate()
  })
  test('pick a more days from today',async ({page}) =>{
    const datepicker = new Datepicker(page)
    await datepicker.selectDateFromToday(5)
  })
})
test.describe('Autocomplete', ()=> {
  test.beforeEach(async ({page}) => {
    const autocomplete = new Autocomplete(page)
    await autocomplete.goToAutocomplete()
  })
test.only('Type in autocomplete',async ({page}) =>{
  const autocomplete = new Autocomplete(page)
 // await autocomplete.search.type('a')
await autocomplete.inputaText('chi')
await autocomplete.chooseElementsfromAutocompleteList(1)
})

  })