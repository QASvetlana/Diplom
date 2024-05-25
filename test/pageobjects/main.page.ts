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
        return $("//*[contains(@class, 'auth-bar__item') and text()='Вход']");
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

    //первая статья
    get firstAutoArticle () {
        return $("(//h2/a[contains(text(),'Авто')]/ancestor::div[contains(@class,'b-main-page-news-2')]//span[contains(@class,'text-i')])[1]");
    }

    public async clickFirstAutoArticle() {
        await this.firstAutoArticle.click();
    }

    //переход в каталог
    get goToCatalog () {
        return $("(//a[contains(@class,'b-main-navigation__link')])[1]");
    }

    public async clickToCatalog() {
        await browser.pause(5000);
        await this.goToCatalog.click();
    }

    
    }
   
    


export default new MainPage(mainPageUrl);