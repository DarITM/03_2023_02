const { test, expect } = require('@playwright/test');
import { page } from '@playwright/test';
const { ContactUsPage } = require('./ContactUsPage');

class PageObjectsManager {
    constructor(page) {
        this.page = Page
        this.contactUsPage = new ContactUsPage(this.page)
    }
    getContactUsPage() {
        return this.contactUsPage
    }}

    export {PageObjectsManager}
    // module.exports = { PageObjectsManager };
