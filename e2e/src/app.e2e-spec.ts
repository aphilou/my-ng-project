import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('header works!');
  });

  it('should enter a password and see it in clear', () => {
    page.navigateTo();
    const input = element(by.css('input[type=password]'));
    input.clear();
    input.sendKeys('azerty');
    browser.sleep(2000);
    const button = element(by.css('fa-icon'));
    button.click();
    browser.sleep(2000);
    const input2 = element(by.css('input[type=text]'));
    console.log('input2', input2);
    expect(input2.getAttribute('value')).toEqual('azerty');
  });
});
