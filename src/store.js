/**
 * @fileOverview the global application store used by mobx for
 * state management. These values are either rendered directly
 * in react components or used as a basis for computed values.
 */

 import { extendObservable } from 'mobx';
 import { light, primary } from './components/themeColor';

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
       theme : {
         type : 'light',
         primary : primary,
         color : light
       }
     });
   }
 
   init() {
   }
 }
 
 export default new Store();
 