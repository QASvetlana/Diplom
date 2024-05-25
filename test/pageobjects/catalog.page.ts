import { $ } from '@wdio/globals'
import Page from './page';
import { catalogPageUrl } from '../../data/urls';

class CatalogPage extends Page {
//Перейти в категорию "Компьютеры и сети"
get computers () {
    return $("(//span[contains(@class, 'catalog-navigation-classifier__item-title')])[5]");
}
//метод
public async moveToComputers() {
    return await this.computers.click();
}
//Перейти в категорию "Ноутбуки, компьютеры, мониторы"
    get sideMenuNotebook () {
        return $("(//div[contains(@class, 'catalog-navigation-list__aside-title')])[1]");
    }

    public async moveToSideMenuNotebook() {
        return await this.sideMenuNotebook.click();
    }
    //Перейти в категорию "Ноутбуки, компьютеры, мониторы"
        get notebookPicture () {
            return $("(//span[contains(@class, 'catalog-navigation-list__dropdown-data')])[1]");
        }
        public async clickToNotebookPicture() {
            return await this.notebookPicture.click();
        }
    //Установить Производитель = ASUS
    get checkboxAsus () {
        return $("//div[contains(@class, 'catalog-form__checkbox-sign') and text()='ASUS']");
    }
    public async chooseCheckboxAsus() {
            await this.checkboxAsus.scrollIntoView();
            await this.checkboxAsus.waitForStable();
        return await this.checkboxAsus.click();
    }
//Установить Частота матрицы от 120 до 165 Гц
get setFrequency () {
    return $("(//div[contains(@class, 'catalog-form__label-title')])[20]");
}
public async scrollToFrequency() {
        await this.setFrequency.scrollIntoView();
        await this.setFrequency.waitForStable();
    return await this.setFrequency.isDisplayed();
}

}

export default new CatalogPage(catalogPageUrl);