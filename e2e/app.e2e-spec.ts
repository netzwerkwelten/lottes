import { LottesPage } from './app.po';

describe('lottes App', () => {
  let page: LottesPage;

  beforeEach(() => {
    page = new LottesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
