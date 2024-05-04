import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/main.page'
import QuickSearchFrame from '../pageobjects/frames/quickSearch.frame'
import AuthPage from '../pageobjects/auth.page'
import RegistrationPage from '../pageobjects/registration.page'

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url("/");
    });

    it('Quick search test', async () => {
        let searchTerm = "Lenovo";
        await MainPage.fillQuickSearchField(searchTerm);
        await QuickSearchFrame.switchTo();
        let productsCount = await QuickSearchFrame.getDisplayingProductsCount();
        expect(productsCount).toEqual(10);
        await QuickSearchFrame.verifyAllDisplayingProductsContainsWord(searchTerm);
    })

 /*   it('Authorisation form exist and can be closed test', async () => {
        await MainPage.btnEntryClick();
        await AuthPage.haveLogo();
        await AuthPage.authClosed();
       let authClosedForm = await AuthPage.authClosed();
       expect (authClosedForm).toBeClickable;  
    })

    it('Age limit test', async () => {
       await MainPage.checkAgeLimit();
       let ageRestrictions = await MainPage.checkAgeLimit();
       expect (ageRestrictions).toHaveText("18+");  
    })

    it('Logo test', async () => {
        await MainPage.checkLogoExist();
        let logoExist = await MainPage.checkAgeLimit();
        expect (logoExist).toBeTruthy;  
     })

     it('Weather icon test', async () => {
        await MainPage.checkWeatherIconExist();
        let weatherIconExist = await MainPage.checkWeatherIconExist();
        expect (weatherIconExist).toBeTruthy;  
     })*/

   /*  it('Registration test', async () => {
        await MainPage.btnEntryClick();
        await AuthPage.haveLogo();
        await RegistrationPage.btnRegistrationClick();
        await RegistrationPage.checkRegistrationLogoExist();
        let emailRegistration = "sve7987@yandex.ru";
        await RegistrationPage.enterEmailFieldForRegistration(emailRegistration);
        let passwordRegistration = "Qaz123456";
        await RegistrationPage.enterEmailFieldForPassword(passwordRegistration);
        let passwordRegistrationRepeat = "Qaz123456";
        await RegistrationPage.enterEmailFieldForPasswordRepeat(passwordRegistrationRepeat);
        await RegistrationPage.checkboxForAgreementRegistration();
    })*/


})


