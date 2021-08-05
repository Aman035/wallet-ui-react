/**
 * @fileOverview the global application store used by mobx for
 * state management. These values are either rendered directly
 * in react components or used as a basis for computed values.
 */

 import { extendObservable } from 'mobx';

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
       }
     });
   }
 
   init() {
   }
 }
 
 export default new Store();
 