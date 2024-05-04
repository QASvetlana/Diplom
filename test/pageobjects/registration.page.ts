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

    //импут ввода почты
    get inputRegistrationEmail () {
        return $("(//input[contains(@class,'auth-input')])[1]");
    }

    public async enterEmailFieldForRegistration(emailRegistration: string) {
        await this.inputRegistrationEmail.setValue(emailRegistration);
    }

     //импут ввода пароля
     get inputRegistrationPassword () {
        return $("(//input[contains(@class,'auth-input')])[2]");
    }

    public async enterEmailFieldForPassword(passwordRegistration: string) {
        await this.inputRegistrationEmail.setValue(passwordRegistration);

    }
    //импут ввода повтора пароля
    get inputRegistrationPasswordRepeat () {
        return $("(//input[contains(@class,'auth-input')])[3]");
    }

    public async enterEmailFieldForPasswordRepeat(passwordRegistrationRepeat: string) {
        await this.inputRegistrationEmail.setValue(passwordRegistrationRepeat);
}

//чекбокс согласия обработки данных
get checkboxRegistration () {
    return $("//input[contains(@class,'auth-checkbox')]");
}

public async checkboxForAgreementRegistration() {
    await (await this.checkboxRegistration).click();
}
//кнопка "Регистрации"
get btnRegistration () {
    return $("//button[contains(@class,'auth-button')]");
}

public async btnRegistrationClick() {
    await this.btnRegistration.click();
}
}
export default new RegistrationPage(registrationPageUrl);