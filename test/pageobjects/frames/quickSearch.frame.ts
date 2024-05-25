import { $$ } from '@wdio/globals'
import Frame from './frame';

class QuickSearchFrame extends Frame {
    get linkSearchResults () {
        return $$("//a[contains(@class,'product__title-link')]");
    }

    async getDisplayingProductsCount() {
        await browser.waitUntil(async () => {
            return await this.linkSearchResults.length > 0;
        }, { timeout: 5000 });
        return await this.linkSearchResults.length;
    }

    async verifyAllDisplayingProductsContainsWord(expectedWord: string) {
        await this.linkSearchResults.forEach(async (result) => {
            let text = await result.getText();
            expect(text).toContain(expectedWord);
        })
    }

}

export default new QuickSearchFrame("//iframe[contains(@class,'modal-iframe')]");