export class NbWebPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('NbWeb-app p')).getText(); }
}
