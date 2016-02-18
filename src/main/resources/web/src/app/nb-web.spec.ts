import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NbWebApp} from '../app/nb-web';

beforeEachProviders(() => [NbWebApp]);

describe('App: NbWeb', () => {
  it('should have the `defaultMeaning` as 42', inject([NbWebApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NbWebApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

