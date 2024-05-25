import { $ } from '@wdio/globals'
import Page from './page';
import { mainPageUrl } from '../../data/urls';

class AuthPage extends Page {
//локатор
//кнопка"Вход"
    get existLogo () {
        return $("//div[contains(@class,'auth-form__title')]");
    }
//метод
    public async haveLogo() {
        return await this.existLogo.isDisplayed();
    }
//локатор
//крестик закрытия формы
   get authFormClosed () {
        return $("//div[contains(@class,'auth-form__close')]");
    }

    public async authClosed() {
        return await this.authFormClosed.isDisplayed();
    }
//локатор
//ввод емейла
get inputEmail () {
    return $("//input[contains(@class, 'auth-input_primary') and @type='text']");
}
//метод
public async enterEmailField(email: string) {
    await this.inputEmail.setValue(email);
}

//локатор
//ввод пароля
get inputPassword () {
    return $("//input[contains(@class, 'auth-input_primary') and @type='password']");
}
//метод
public async enterPasswordField(password: string) {
    await this.inputPassword.setValue(password);
}

//локатор
//кнопка входа
get btnEntyLogin () {
    return $("//button[contains(@class, 'auth-button_primary')]");
}
//метод
public async clickBottonLogOn() {
    await this.btnEntyLogin.click();
}


//Зарегистрироваться на Onlíner
get linkRegistration () {
    return $("(//input[contains(@class,'auth-form__input')])[2]");
}
//метод
public async clickRegistrationLink() {
    await this.linkRegistration.click();
}

//Капча
get captcha () {
    return $("//iframe[@title= 'reCAPTCHA']");
}
//метод
public async captchaExist() {
    await this.captcha.isDisplayed();
}
}

export default new AuthPage(mainPageUrl);