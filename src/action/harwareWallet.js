/**
 * @fileOverview action to handle registration of hardware Wallet
 * Currently This File Contains boilerplate code only
 */

class HardwareWalletAction {
	constructor(store) {
		this._store = store;
	}

	// Hardware Wallet actions

	/**
	 * Register The Hardware Wallet
	 * @param  {string} options.param The hardware wallet parameter name
	 * @param  {string} options.wallet Type of hardware wallet
	 * @return {undefined}
	 */
	async registerWallet({ param, wallet }) {
		const { hardwareWallet } = this._store;
		hardwareWallet[param] = wallet;
		hardwareWallet.identifying = true;
		hardwareWallet.identified = await this.identify();
		hardwareWallet.identifying = true;

		if (hardwareWallet.identified) {
			hardwareWallet.verifying = true;
			hardwareWallet.identified = await this.verify();
			hardwareWallet.verifying = true;
		}
		if (hardwareWallet.verified && hardwareWallet.identified)
			hardwareWallet.registered = true;
	}

	/**
	 * Identify The Hardware Wallet
	 * @return boolean
	 */
	async identify() {
		const { hardwareWallet } = this._store;
		if (hardwareWallet.identifying === true) {
			//code here for identification part
			return true;
		}
		return false;
	}

	/**
	 * Verify The Hardware Wallet
	 * @return boolean
	 */
	async verify() {
		const { hardwareWallet } = this._store;
		if (hardwareWallet.identifying === true && hardwareWallet.verify === true) {
			//code here for verification part
			return true;
		}
		return false;
	}
}
export default HardwareWalletAction;
