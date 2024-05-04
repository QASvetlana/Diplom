import { browser } from '@wdio/globals'


//подготавливаем оснастку, пейдж обжект, конструктор, реализовываем метод опен
export default class Page {
    constructor(protected url: string) {}

    public open () {
        return browser.url(this.url);
    }
}
