/**
 * @fileOverview action to handle the overall theme of components
 */

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
    this._store.theme.color = user;
  }
}
 export default ThemeAction;
 