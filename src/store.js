/**
 * @fileOverview the global application store used by mobx for
 * state management. These values are either rendered directly
 * in react components or used as a basis for computed values.
 */

import { extendObservable } from 'mobx';
import { primary, dark } from './components/themeColor';
import ComputedTransaction from './computed/transaction';

export class Store {
  constructor() {
    extendObservable(this, {
      auth: {
        pin: '',
        newPin: '',
        pinVerify: '',
        resetPinCurrent: '',
        resetPinNew: '',
        resetPinVerify: '',
      },
      theme: {
        type: 'dark',
        primary: primary,
        color: dark,
      },
      transactions : []
    });
  }

  init() {
    ComputedTransaction(this);
  }
}

export default new Store();
