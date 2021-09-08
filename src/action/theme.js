/**
 * @fileOverview action to handle the overall theme of components
 */
 import {light , dark} from '../components/themeColor';

 class ThemeAction {
   constructor(store) {
     this._store = store;
   }

   // Theme actions

   /**
    * Changes the theme to dark
    * @return {undefined}
    */
   darkTheme() {
     this._store.theme.type = 'dark';
     this._store.theme.color = dark;
   }

   /**
    * Changes the theme to light
    * @return {undefined}
    */
   lightTheme() {
    this._store.theme.type = 'light';
    this._store.theme.color = light;
  }

   /**
    * Changes the theme to user defined
    * @return {undefined}
    */
  userTheme() {
    this._store.theme.type = 'user';
    this._store.theme.color = this._store.theme.userColor;
  }

  /**
    * Changes the color of user theme
    * @param  {string} options.colorName, The type of field of which color is changed
    * @param  {string} options.color, The new color of the param
    * @return {undefined}
    */
   changeUserColors({param , color}) {
    this._store.theme.userColor[param] = color;
  }
}
 export default ThemeAction;
 