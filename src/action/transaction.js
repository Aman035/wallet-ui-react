/**
 * @fileOverview actions to set transactions state within the app
 * Currently This File Contains boilerplate code only
 */

import {exchange , toDate , TransacionCategory} from '../helper';

class TransactionAction {
  constructor(store) {
    this._store = store;
  }

  init() {
    this.getTransactions();
  }

  /**
   * List the on-chain transactions by calling the respective api and updating
   * the transactions array in the global store.\
   * Cureently we are using hardcoded data taken from signet
   * @return {Promise<undefined>}
   */
  async getTransactions() {
    try {
      const transactions = [
        {
          address: 'tb1qg9qk06vpf5rtwn5ukuwhrd3q0n50ep79hdq6rd',
          category: 'send',
          amount: -0.001,
          label: '',
          vout: 1,
          fee: -0.00000141,
          confirmations: 0,
          trusted: false,
          txid: '5fcad2f295be32a2084befa1ea4372a11cec2e510f11d16c38ed3bc7153f878f',
          walletconflicts: [],
          time: 1628756161,
          timereceived: 1628756161,
          'bip125-replaceable': 'unknown',
          abandoned: false,
        },
        {
          address: 'tb1qpzckzhcvyjzlwut20vu9s9aevx0kzakyjsyevf',
          category: 'receive',
          amount: 0.01,
          label: '',
          vout: 1,
          confirmations: 0,
          trusted: false,
          txid: '1f5fcbd8869c09081b7f44b095adfba69fb50f154992a1d29dd5d7a34d780de3',
          walletconflicts: [],
          time: 1628754861,
          timereceived: 1628754861,
          'bip125-replaceable': 'unknown',
        },

        {
          address: 'tb1qpzckzhcvyjzlwut20vu9s9aevx0kzakyjsyevd',
          category: 'send',
          amount: -0.01,
          label: '',
          vout: 1,
          confirmations: 0,
          trusted: false,
          txid: '1f5fcbd8869c09081b7f44b095adfba69fb50f154992a1d29dd5d7a34d780deef',
          walletconflicts: [],
          time: 1628754860,
          timereceived: 1628754860,
          'bip125-replaceable': 'unknown',
        },
      ];

      const Unit = this._store.defaultUnit;
      const Fiat = this._store.defaultFiat;
      const Rate = this._store.exchangeRate;

      this.formatTransaction(transactions ,Unit, Fiat,Rate);
      
    } catch (err) {
      console.error('Listing transactions failed', err);
    }
  }

  formatTransaction(transactions , unit ,fiat,rate){

    
    this._store.transactions = transactions.map((transaction) => ({
        id: transaction.txid,
        type: TransacionCategory(transaction.category , transaction.confirmations),
        address: transaction.address,
        amount: Number(Math.abs(transaction.amount)).toFixed(8),
        confirmations: transaction.confirmations,
        date : toDate(transaction.time),
        fiatAmount : exchange(Math.abs(transaction.amount) , unit , fiat,rate)
      }));
  }
}

export default TransactionAction;
