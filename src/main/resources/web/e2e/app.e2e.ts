/// <reference path="../typings/main.d.ts" />

import { NbWebPage } from './app.po';

describe('nb-web App', function() {
  let page: NbWebPage;

  beforeEach(() => {
    page = new NbWebPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('nb-web Works!');
  });
});
