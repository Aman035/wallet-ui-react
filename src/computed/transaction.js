/**
 * @fileOverview boiler plate for computing values that are used in transaction UI components.
 * This function currently does not perform any task currently
 * Once transaction data is fetched from from full nodes, it can be changed for rendering to frontend 
 */

import { extendObservable } from 'mobx';

const ComputedTransaction = store => {
  extendObservable(store, {
    get computedTransactions() {
      const { transactions } = store;
      return transactions;
    },
  });
};

export default ComputedTransaction;
