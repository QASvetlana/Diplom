import { expect } from '@wdio/globals';
import MainPage from '../pageobjects/main.page';
import QuickSearchFrame from '../pageobjects/frames/quickSearch.frame';
import AuthPage from '../pageobjects/auth.page';
import RegistrationPage from '../pageobjects/registration.page';
import { testUserLogin, testUserPassword, userToken } from '../../data/userData';
import ArticlePage from '../pageobjects/article.page';
import catalogPage from '../pageobjects/catalog.page';
import mainPage from '../pageobjects/main.page';



describe('Onliner website', () => {
    const addCookies = async () => {
        await browser.setCookies([
         {
            name: 'oss',
            value: userToken,
            path: '/',
            domain: '.onliner.by',
            secure: true,
            httpOnly: true,
            expiry: 1750047387,
            sameSite: 'Lax'
        },
        {
            name: 'logged_in',
            value: '1',
            path: '/',
            domain: '.onliner.by',
            secure: true,
            httpOnly: false,
            expiry:1750047387,
            sameSite: 'Lax'  
        }
    ]);
};

const removeCookies = async () => {
    await browser.deleteCookies(['oss', 'logged_in']);
};

beforeEach(async () => {
    await browser.url('/');
    await browser.maximizeWindow();
});

afterEach(async () => {
    await removeCookies();
});

    it.skip('Login test', async () => {
        await MainPage.btnEntryClick();
        await AuthPage.haveLogo();
        await AuthPage.enterEmailField(testUserLogin);
        await AuthPage.enterPasswordField(testUserPassword);
        await AuthPage.btnEntyLogin;
        let captchaIsExist = await AuthPage.captchaExist();
        expect (captchaIsExist).toBeTruthy;
     })

    it.skip('Registration test', async () => {
        await MainPage.btnEntryClick();
        await RegistrationPage.registrationLinkClick();
        let emailRegistration = "sve7887@yandex.ru";
        let passwordRegistration = "Qaz128456";
        await RegistrationPage.enterEmailFieldForRegistration(emailRegistration);
        await RegistrationPage.enterEmailFieldForPassword(passwordRegistration);
        await RegistrationPage.enterEmailFieldForPasswordRepeat(passwordRegistration);
        await RegistrationPage.checkboxRegistration.scrollIntoView();
        await RegistrationPage.checkboxForAgreementRegistration();
        await RegistrationPage.btnRegistrationClick();
        let confirmPicture = await RegistrationPage.confirmeEmailPicture();
        expect(confirmPicture).toBeDisplayed;
        
    })

    it.skip('User can rate the article', async () => {
        await addCookies();
        await MainPage.clickFirstAutoArticle();
        await browser.pause(70000);
        await ArticlePage.visibleNearestLocator();
        await ArticlePage.clickRateArticle();
        let articleRateExist = await ArticlePage.clickRateArticle();
        expect (articleRateExist).toBeTruthy;  

    })

    it.skip('Quick search test', async () => {
        let searchTerm = "Lenovo";
        await MainPage.fillQuickSearchField(searchTerm);
        await QuickSearchFrame.switchTo();
        let productsCount = await QuickSearchFrame.getDisplayingProductsCount();
        expect(productsCount).toEqual(10);
        await QuickSearchFrame.verifyAllDisplayingProductsContainsWord(searchTerm);
    })


    it.only('Filtering the catalog page test', async () => {
        await mainPage.clickToCatalog();
        await catalogPage.moveToComputers();
        await catalogPage.moveToSideMenuNotebook();
        await catalogPage.clickToNotebookPicture();
       // await browser.pause(70000);
        await catalogPage.chooseCheckboxAsus();
        await catalogPage.scrollToFrequency();
})

    it.skip('Authorisation form exist and can be closed test', async () => {
        await MainPage.btnEntryClick();
        await AuthPage.haveLogo();
        await AuthPage.authClosed();
       let authClosedForm = await AuthPage.authClosed();
       expect (authClosedForm).toBeClickable;  
    })

    it.skip('Age limit test', async () => {
       await MainPage.checkAgeLimit();
       let ageRestrictions = await MainPage.checkAgeLimit();
       expect (ageRestrictions).toHaveText("18+");  
    })

    it.skip('Logo test', async () => {
        await MainPage.checkLogoExist();
        let logoExist = await MainPage.checkAgeLimit();
        expect (logoExist).toBeTruthy;  
     })

     it.skip('Weather icon test', async () => {
        await MainPage.checkWeatherIconExist();
        let weatherIconExist = await MainPage.checkWeatherIconExist();
        expect (weatherIconExist).toBeTruthy;  
     })
    })




