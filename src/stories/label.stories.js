import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import {BalanceLabel , BalanceLabelNumeral ,SmallBalanceLabel} from '../components/label';
import {color} from '../components/style';
storiesOf('Label', module)
  .addDecorator(story => (
      <MainContent style={{ justifyContent: 'center',padding : 10 }}>{story()}</MainContent>
  ))
  .add('Bitcoin Balance', () => (
    <BalanceLabel>
      <BalanceLabelNumeral style={{ color: color.blackText }}>
        1.62402785
      </BalanceLabelNumeral>
    </BalanceLabel>
  ))
  .add('Bitcoin Balance', () => (
    <BalanceLabel>
      <BalanceLabelNumeral style={{ color: color.blackText }}>
        1.6240 2785
      </BalanceLabelNumeral>
    </BalanceLabel>
  ))
  .add('Small Balance USD', () => (
    <SmallBalanceLabel style={{ color: color.blackText }}>
      $41,328.9
    </SmallBalanceLabel>
  ));