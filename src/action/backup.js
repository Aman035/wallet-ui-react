/**
 * @fileOverview action to handle wallet backup from cloud provider
 * Currently This File Contains boilerplate code only
 */

 class BackupAction {
   constructor(store) {
     this._store = store;
   }

   // Cloud Backup actions


   /**
    * Basic Validity Checks on Password
    * @param  {string} pass The initial password entered by user
    * @return {undefined}
    */
    validatePassword(pass){
        if( pass.length >= 6)
        return true;
        return false;
    }

    /**
    * Checks if the confirmed Password and Initial Password Are Equal or not
    * @return {undefined}
    */
     checkConfirm() {
        const pass = this._store.backup.newPass;
        const confirmedPass = this._store.backup.confirmedPass;
        if( this.validatePassword(pass) && pass === confirmedPass )
          this._store.backup.valid = true;
        else
          this._store.backup.valid = false;

       }
 
   /**
    * Change the status of password or confirmed Password
    * @param  {string} options.param The cloud backup parameter name
    * @param  {string} options.pass The new password state of the cloud Wallet param
    * @return {undefined}
    */
   changePassword({ param, pass}) {
     const { backup } = this._store;
     backup[param] = pass;
     this.checkConfirm();
    }
}
 export default BackupAction;
 