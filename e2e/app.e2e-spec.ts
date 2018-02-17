import { BookSharingPage } from './app.po';

describe('book-sharing App', () => {
  let page: BookSharingPage;

  beforeEach(() => {
    page = new BookSharingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
