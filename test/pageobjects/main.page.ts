import { $ } from '@wdio/globals'
import Page from './page';
import { mainPageUrl } from '../../data/urls'

class MainPage extends Page {
//импут ввода
    get inputQuickSearch () {
        return $("//input[contains(@class,'fast-search__input')]");
    }

    public async fillQuickSearchField(searchTerm: string) {
        await this.inputQuickSearch.setValue(searchTerm);
    }
//кнопка "Вход"
    get btnEntry () {
        return $("//div[contains(@class, 'auth-bar__item--text')]");
    }

    public async btnEntryClick() {
        await this.btnEntry.click();
    }
//18+
    get ageLimit () {
        return $("//div[contains(@class,'navigation-age')]");
    }

    public async checkAgeLimit() {
        await this.ageLimit.isDisplayed();
    }
//логотип онлайнер
    get haveLogo () {
        return $("//div[contains(@class,'b-top-logo')]");
    }

    public async checkLogoExist() {
        await this.haveLogo.isDisplayed();
    }
//иконка погоды
    get haveWeatherIcon () {
        return $("(//a[contains(@href,'pogoda')])[2]");
    }

    public async checkWeatherIconExist() {
        await this.haveWeatherIcon.isDisplayed();
    }

}

export default new MainPage(mainPageUrl);