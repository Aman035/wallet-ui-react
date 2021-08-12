/**
 * @fileOverview action to handle the overall theme of components
 */

 class ThemeAction {
   constructor(store) {
     this._store = store;
   }

   // Theme actions

   /**
    * Changes the theme to light , dark or user defined
    * @return {undefined}
    */
   changeTheme(theme) {
        if(theme === 'dark' || theme === 'light' || theme === 'user')
        {
          this._store.theme = theme;
        }
   }
}
 export default ThemeAction;
 