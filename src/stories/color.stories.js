import React from 'react';
import { storiesOf } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import {CircularContainer} from '../components/container';
import { H3Text, H4Text } from '../components/text';
import { primary, light, dark } from '../components/themeColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems : 'center'
  },
  dark : {
    backgroundColor : '#000'
  }
});

const Colors = ( {color} ) => {
  return (
    <MainContent style={[styles.container, {backgroundColor : color.fill}]}>
      {Object.keys(color).map((each, i) => {
        return (
          <View key={i}>
            <CircularContainer
              style={{ backgroundColor: color[each], margin: 20 }}
            />
            <H3Text style={{ textAlign: 'center', color: light.neutral6, padding : 5 }}>
              {each}
            </H3Text>
            <H4Text style={{ textAlign: 'center', color: light.neutral7 }}>
              {color[each]}
            </H4Text>
          </View>
        );
      })}
    </MainContent>
  );
};

storiesOf('Colors', module)
  .add('Primary', () => <Colors color={primary} />)
  .add('Light', () => <Colors color={light} />)
  .add('Dark', () => <Colors color={dark} theme="dark" />);
