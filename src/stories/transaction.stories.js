import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import Transaction from '../components/transaction';
import {light} from '../components/themeColor';

storiesOf('Transactions', module)
  .addDecorator((story) => (
    <MainContent style={{ justifyContent: 'center', padding: 10 }}>
      {story()}
    </MainContent>
  ))
  .add('Transaction', () => <Transaction type="Received" btc ="0.0000001" amt="1.23" time="Yesterday" colors={light} />);
