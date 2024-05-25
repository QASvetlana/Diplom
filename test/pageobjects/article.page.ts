import { $ } from '@wdio/globals'
import Page from './page';
import { articlePageUrl } from '../../data/urls'

class ArticlePage extends Page {
    //раздел архитектура
    get nearestLocator () {
        return $("(//a[contains(@href,'https://t.me/vitpetrovich')])[1]");  
    }

    public async visibleNearestLocator() {
        await browser.setTimeout({ 'pageLoad': 20000 })
        await this.nearestLocator.scrollIntoView();
        await this.nearestLocator.waitForStable();
        await browser.pause(10000);
        await (await this.nearestLocator).isDisplayed();
    }
    //реакция на статью
        get rateArticle () {
            return $("(//div[contains(@data-reaction,'slight_smile')]/span[contains(@class,'st-count')]/ancestor::div[contains(@class,'st-selected')])[1]");  
        }
    
        public async clickRateArticle() {
            await browser.setTimeout({ 'pageLoad': 20000 })
            await this.rateArticle.scrollIntoView();
            await this.rateArticle.waitForStable();
         //   await browser.pause(10000);
            await this.rateArticle.click();
        }
   
    
    }
    
    export default new ArticlePage(articlePageUrl);
