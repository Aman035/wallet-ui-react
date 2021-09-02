/**
 * @fileOverview action to handle exchnage rates and fefault currency settings 
 * Currently This File Contains boilerplate code only
 */

 class ExchangeAction {
   constructor(store) {
     this._store = store;
   }

   init() {
    this.getExchangeRates();
  }
   // Exchange actions
   async getExchangeRates(){
     this._store.exchangeRate = {
       usd : 0.0004443528,
       eur : 0.0003794520,
       gbp : 0.0003794520
     }
   }
}
 export default ExchangeAction;
 