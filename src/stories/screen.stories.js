import React from 'react';
import { storiesOf } from '@storybook/react';
import {Cover} from '../view/cover';
import ChoosePin from '../view/choose_pin';
import ConfirmPin from '../view/confirm_pin';
import LoginPin from '../view/login';
import Loading from '../view/loading';
import Home1 from '../view/home1';

storiesOf('Screens', module)
.add('Cover', () => <Cover/>)
.add('Choose Pin', () => (<ChoosePin/>))
.add('Confirm Pin' , () => (<ConfirmPin/>))
.add('Login Pin' , () => (<LoginPin/>))
.add('Loading' , () => (<Loading/>))
.add('Home', () => (<Home1/>))