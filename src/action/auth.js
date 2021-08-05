/**
 * @fileOverview action to handle mobile specific authentication using PINs
 */

 import { PIN_LENGTH } from '../config';

 class AuthAction {
   constructor(store) {
     this._store = store;
   }

   // PIN actions
 
   /**
    * Initialize the set pin view by resetting input values
    * and then navigating to the view.
    * @return {undefined}
    */
   initSetPin() {
     this._store.auth.newPin = '';
     this._store.auth.pinVerify = '';
   }
 
   /**
    * Initialize the pin view by resetting input values
    * and then navigating to the view.
    * @return {undefined}
    */
   initPin() {
     this._store.auth.pin = '';
   }
 
   /**
    * Initialize the reset pin flow by resetting input values
    * and then navigating to the view.
    * @return {undefined}
    */
   initResetPin() {
     this._store.auth.resetPinCurrent = '';
     this._store.auth.resetPinNew = '';
     this._store.auth.resetPinVerify = '';
   }
 
   /**
    * Initialize the reset new pin flow by resetting new values
    * and then navigating to the new pin view.
    * @return {undefined}
    */
   initResetPinNew() {
     this._store.auth.resetPinNew = '';
     this._store.auth.resetPinVerify = '';
   }
 
   /**
    * Append a digit input to the pin parameter.
    * @param  {string} options.digit The digit to append to the pin
    * @param  {string} options.param The pin parameter name
    * @return {undefined}
    */
   pushPinDigit({ digit, param }) {
     const { auth } = this._store;
     if (auth[param].length < PIN_LENGTH) {
       auth[param] += digit;
     }
    }

   /**
    * Remove the last digit from the pin parameter.
    * @param  {string} options.param The pin parameter name
    * @return {undefined}
    */
   popPinDigit({ param }) {
     const { auth } = this._store;
     if (auth[param]) {
       auth[param] = auth[param].slice(0, -1);
     } 
    }
}
 export default AuthAction;
 