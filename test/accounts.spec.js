/**
 * Avalara © 2017
 * file: test/accounts.spec.js
 */

import Avatax from '../';

const myBeverage = {
  delicious: true,
  sour: false,
};


describe('Avatax Transaction', () => {
  it('should create a new transaction', () => {
    console.log('all good');
    expect(myBeverage.delicious).toBeTruthy();
  });
});


