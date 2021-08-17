import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContent from './main-content';
import CircularContainer from './circular-container';
import { H4Text } from './text';
import { color } from './style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
const Colors = () => {
  return (
    <MainContent style={styles.container}>
      {Object.keys(color).map((each, i) => {
        return (
          <View key={i} style={{ marginVertical: 20 }}>
            <CircularContainer
              style={{ backgroundColor: color[each], margin: 20 }}
            />
            <H4Text style={{ textAlign: 'center' }}>{color[each]}</H4Text>
          </View>
        );
      })}
    </MainContent>
  );
};
export default Colors;
