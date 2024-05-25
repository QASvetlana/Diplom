import { $ } from '@wdio/globals'
import Page from './page';
import { registrationPageUrl } from '../../data/urls'

class RegistrationPage extends Page {
//лого регистрации
    get logoRegistration () {
        return $("//div[contains(@class,'auth-form__title')]");
    }

    public async checkRegistrationLogoExist() {
        await (await this.logoRegistration).isDisplayed();
    }

    //импут ввода почты!!!
    get inputRegistrationEmail () {
        return $("//input[contains(@class, 'auth-input_primary') and @type='email']");
    }

    public async enterEmailFieldForRegistration(emailRegistration: string) {
        await this.inputRegistrationEmail.setValue(emailRegistration);
    }

     //импут ввода пароля клик
     get inputRegistrationPasswordClick () {
        return $("(//input[contains(@class, 'auth-input_primary') and @type='password'])[1]");
    }

    public async emailFieldForPasswordClick() {
        await (await this.inputRegistrationPasswordClick).click();

    }


     //импут ввода пароля!!!
     get inputRegistrationPassword () {
        return $("(//input[contains(@class, 'auth-input_primary') and @type='password'])[1]");
    }

    public async enterEmailFieldForPassword(passwordRegistration: string) {
        await this.inputRegistrationPassword.setValue(passwordRegistration);

    }
    //импут ввода повтора пароля
    get inputRegistrationPasswordRepeat () {
        return $("(//input[contains(@class, 'auth-input_primary') and @type='password'])[2]");
    }

    public async enterEmailFieldForPasswordRepeat(passwordRegistrationRepeat: string) {
        await this.inputRegistrationPasswordRepeat.setValue(passwordRegistrationRepeat);
}

//чекбокс согласия обработки данных
get checkboxRegistration () {
    return $("//span[contains(@class,'auth-checkbox__faux')]");
}

public async checkboxForAgreementRegistration() {
    (await this.checkboxRegistration).scrollIntoView;
    await this.checkboxRegistration.click();
}
// Зарегистрироваться на Onlíner
get registrationLink () {
    return $("(//a[contains(@class,'auth-form__link')])[1]");
}

public async registrationLinkClick() {
    await this.registrationLink.click();
}

//кнопка "Регистрации"
get btnRegistration () {
    return $("//button[contains(@class,'auth-button')]");
}

public async btnRegistrationClick() {
    await this.btnRegistration.click();
}

//Подтвердите ваш e-mail
get confirmeEmail () {
    return $("//div[contains(@class,'auth-form__title')]");
}

public async confirmeEmailPicture() {
    await this.confirmeEmail.isDisplayed();
}

}
export default new RegistrationPage(registrationPageUrl);