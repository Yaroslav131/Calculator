const {device, element, by} = require('detox');

describe('Calculator', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should perform subtraction correctly', async () => {
    await element(by.id('button_9')).tap();
    await element(by.id('button_-')).tap();
    await element(by.id('button_3')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=6');
  });

  it('should perform multiplication correctly', async () => {
    await element(by.id('button_4')).tap();
    await element(by.id('button_⨯')).tap();
    await element(by.id('button_5')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=20');
  });

  it('should perform division correctly', async () => {
    await element(by.id('button_8')).tap();
    await element(by.id('button_/')).tap();
    await element(by.id('button_2')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=4');
  });

  it('should clear the result after pressing "C"', async () => {
    await element(by.id('button_1')).tap();
    await element(by.id('button_+')).tap();
    await element(by.id('button_2')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=3');

    await element(by.id('button_Ac')).tap();

    await expect(element(by.id('result'))).toHaveText('=0');
  });

  it('should handle consecutive operations correctly', async () => {
    await element(by.id('button_3')).tap();
    await element(by.id('button_add')).tap();
    await element(by.id('button_5')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=8');

    await element(by.id('button_-')).tap();
    await element(by.id('button_2')).tap();
    await element(by.id('button_=')).tap();

    await expect(element(by.id('result'))).toHaveText('=6');
  });
});
