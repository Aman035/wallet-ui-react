import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text, H5Text } from '../components/text';
import { Button2 } from '../components/button';
import gStyle from '../components/globalStyleSheet';

const ThemeChanger = ({ store, theme }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_orange,
      marginVertical : 5
    },
  });

  return (
    <MainContent style={gstyles.container}>
      <View style={[gstyles.align, styles.container]}>
        <H5Text style={gstyles.text}>Theme Changer</H5Text>
      </View>
      <View style={[gstyles.align, styles.container]}>
        <Button2 style={styles.btn} onPress={() => theme.lightTheme()}>
          <H3Text style={gstyles.text}>Light</H3Text>
        </Button2>
      </View>
      <View style={[gstyles.align, styles.container]}>
        <Button2 style={styles.btn} onPress={() => theme.darkTheme()}>
          <H3Text style={gstyles.text}>Dark</H3Text>
        </Button2>
      </View>
      <View style={[gstyles.align, styles.container]}>
        <Button2 disabled style={styles.btn} onPress={() => theme.userTheme()}>
          <H3Text style={gstyles.text}>User Defined (Coming Soon)</H3Text>
        </Button2>
      </View>
    </MainContent>
  );
};

export default observer(ThemeChanger);
