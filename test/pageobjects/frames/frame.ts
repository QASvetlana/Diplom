import { $ } from '@wdio/globals'

export default class Frame {

    constructor(protected frameLocator: string) {}

    get iframe () {
        return $(this.frameLocator);
    }

    async switchTo() {
        await this.iframe.waitForDisplayed();
        await browser.switchToFrame(await this.iframe);
    }

    async leave() {
        await browser.switchToFrame(null);
    }
}