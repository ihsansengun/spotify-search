import { SpotifySearchPage } from './app.po';

describe('spotify-search App', function() {
  let page: SpotifySearchPage;

  beforeEach(() => {
    page = new SpotifySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
