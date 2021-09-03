import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/main-content';
import * as AllFilled from '../assets/icon/filled';
import * as AllOutlined from '../assets/icon/outline';
import * as Hardware from '../assets/icon/myMattress/hardware_illustrations';
import * as MattIcon from '../assets/icon/myMattress';
import MatressLogo from '../assets/icon/myMattress/Logo';
import { H4Text } from '../components/text';

const Filled = Object.values(AllFilled);
const Outline = Object.values(AllOutlined);
const Illustration = Object.values(Hardware);
const MattressIcon = Object.values(MattIcon);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dark: {
    backgroundColor: '#000',
  },
});

const Container = ({
  icons,
  theme = 'light',
  height = '50',
  width = '50',
  fill = 'none',
}) => (
  <MainContent
    style={[styles.container, theme === 'dark' ? styles.dark : null]}
  >
    {icons.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each
          height={height}
          width={width}
          color={theme === 'light' ? '#000' : '#fff'}
          fill={fill}
        />
        <H4Text style={{color : theme === 'light' ? '#000' : '#fff' , margin : 10}}>{Each.name.substr(3)}</H4Text>
      </View>
    ))}
  </MainContent>
);

storiesOf('Icons', module)
  .add('Filled Light', () => <Container icons={Filled} />)
  .add('Outlined Light', () => <Container icons={Outline} />)
  .add('Filled Dark', () => <Container icons={Filled} theme="dark" />)
  .add('Outlined Dark', () => <Container icons={Outline} theme="dark" />);

storiesOf('Icons/Mattress', module)
  .add('Hardware Light', () => (
    <Container icons={Illustration} height="100" width="100" />
  ))
  .add('Hardware Dark', () => (
    <Container icons={Illustration} height="100" width="100" theme="dark" />
  ));

storiesOf('Icons/Mattress', module)
  .add('Icon Light', () => <Container icons={MattressIcon} />)
  .add('Icon Dark', () => <Container icons={MattressIcon} theme="dark" />)
  .add('Logo Light', () => (
    <MainContent style={{ justifyContent: 'center' , alignItems : 'center' }}>
      <MatressLogo color="#000" />
    </MainContent>
  ))
  .add('Logo Dark', () => (
    <MainContent style={{ justifyContent: 'center', alignItems : 'center', backgroundColor: '#000' }}>
      <MatressLogo color="#fff" />
    </MainContent>
  ));
