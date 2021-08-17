import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text, H5Text } from '../components/text';
import { Button } from '../components/button';

const ThemeChanger = ({ store, theme }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: store.theme.color.fill,
      paddingVertical: 20,
    },
    text: {
      color: store.theme.color.stroke,
    },
    btn: {
      marginVertical: 30,
      borderRadius: 5,
      backgroundColor: store.theme.primary.bitcoin_orange,
      width: '100%',
      padding: 2,
    },
  });

  return (
    <MainContent style={styles.container}>
      <H5Text style={styles.text}>Theme Changer</H5Text>
      <MainContent style={{ justifyContent: 'center' }}>
        <Button style={styles.btn} onPress={() => theme.lightTheme()}>
          <H3Text style={styles.text}>Light</H3Text>
        </Button>
        <Button style={styles.btn} onPress={() => theme.darkTheme()}>
          <H3Text style={styles.text}>Dark</H3Text>
        </Button>
        <Button disabled style={styles.btn} onPress={() => theme.userTheme()}>
          <H3Text style={styles.text}>User Defined (Coming Soon)</H3Text>
        </Button>
      </MainContent>
    </MainContent>
  );
};

export default observer(ThemeChanger);
