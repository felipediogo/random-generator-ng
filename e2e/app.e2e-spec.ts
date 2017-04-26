import { RandomGeneratorNgPage } from './app.po';

describe('random-generator-ng App', () => {
  let page: RandomGeneratorNgPage;

  beforeEach(() => {
    page = new RandomGeneratorNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
