import React from 'react';
import { storiesOf } from '@storybook/react';
import Cover from '../view/cover';
import ChoosePin from '../view/choose_pin';
import ConfirmPin from '../view/confirm_pin';
import LoginPin from '../view/login';
import Loading from '../view/loading';
import Home1 from '../view/home1';
import Simplified_Home from '../view/simplified_home';
import MultiSig_Home from '../view/multisig_home';
import Simplified_Home2 from '../view/simplified_home2';
import Theme_Changer from '../view/theme_changer';
import Transaction from '../view/transaction';
import Receive from '../view/receive';
import BtcCoverNew from '../view/onboarding/btc_cover_new';
import BtcCoverExisting from '../view/onboarding/btc_cover_existing';
import { Store } from '../store';
import Auth from '../action/auth';
import ThemeAction from '../action/theme';
import ExchangeAction from '../action/exchange'; 
import TransactionAction from '../action/transaction';


const store = new Store();
store.init();
const auth = new Auth(store);
const theme = new ThemeAction(store);
const exchange = new ExchangeAction(store);
exchange.init();
const transactions = new TransactionAction(store);
transactions.init();

storiesOf('Screens', module)
  .add('Theme Changer', () => <Theme_Changer store = {store} theme = {theme} />)
  .add('Cover', () => <Cover store={store} />)
  .add('Choose Pin', () => <ChoosePin store={store} auth={auth} />)
  .add('Confirm Pin', () => <ConfirmPin store={store} auth={auth} />)
  .add('Login Pin', () => <LoginPin store={store} auth={auth} />)
  .add('Loading', () => <Loading store={store} />)
  .add('Home', () => <Home1 store={store} />)
  .add('Simplified Home', () => <Simplified_Home store={store} />)
  .add('MultiSig Home', () => <MultiSig_Home store={store} />)
  .add('Simplified Home2', () => <Simplified_Home2 store={store} />)
  .add('Transaction', () => <Transaction store={store} />)
  .add('Receive', () => <Receive store={store} />);

  storiesOf('Screens/Onboarding', module)
  .add('New User', () => <BtcCoverNew store={store} />)
  .add('Existing User', () => <BtcCoverExisting store={store} />)