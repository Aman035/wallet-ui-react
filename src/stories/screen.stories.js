import React from 'react';
import { storiesOf } from '@storybook/react';
import {Cover} from '../view/cover';
import ChoosePin from '../view/choose_pin';
import ConfirmPin from '../view/confirm_pin';
import LoginPin from '../view/login';
import Loading from '../view/loading';
import Home1 from '../view/home1';
import Simplified_Home from '../view/simplified_home';
import MultiSig_Home from '../view/multisig_home';
import Simplified_Home2 from '../view/simplified_home2';
import { Store } from '../store';
import Auth from '../action/auth';
import ThemeAction from '../action/theme';

const store = new Store();
store.init();
const auth = new Auth(store);
const theme = new ThemeAction(store);

storiesOf('Screens', module)
.add('Cover', () => <Cover store = {store}/>)
.add('Choose Pin', () => (<ChoosePin store={store} auth={auth}/>))
.add('Confirm Pin' , () => (<ConfirmPin store={store} auth={auth}/>))
.add('Login Pin' , () => (<LoginPin store={store} auth={auth}/>))
.add('Loading' , () => (<Loading/>))
.add('Home', () => (<Home1/>))
.add('Simplified Home' , () => <Simplified_Home/>)
.add('MultiSig Home' , () => <MultiSig_Home/>)
.add('Simplified Home2' , () => <Simplified_Home2/>)