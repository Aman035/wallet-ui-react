import React , {useState} from 'react';
import { View, StyleSheet,Switch } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H2Text, H3Text, H5Text } from '../components/text';
import { Button2 } from '../components/button';
import gStyle from '../components/globalStyleSheet';
import { MaterialPicker } from 'react-color';
import { FlexContainer } from '../components/container';

const ThemeChanger = ({ store, theme }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    btn: {
      backgroundColor: store.theme.primary.bitcoin_orange,
      marginVertical : 30
    },
  });

  const [isEnabled, setIsEnabled] = useState(store.theme.type === 'dark');
  const [isDisabled , setIsDisabled] = useState(store.theme.type === 'user');
  const [showCustom , setCustom] = useState(false);

  const toggleSwitch = () => {
    if(isEnabled === false)
    theme.darkTheme();
    else
    theme.lightTheme();
    setIsEnabled(previousState => !previousState);
  }

  return (
    <MainContent style={gstyles.container}>

    {/* <View style={[{flex : 1}, gstyles.align]}> */}

    <FlexContainer>
      <View style={{flex : 1 , alignItems : 'flex-end'}}>
      <H3Text style={gstyles.text}>Light</H3Text>
      </View>
      <View style={{flex : 1 , alignItems : 'center'}}>
      <Switch
        thumbColor={color.fill}
        disabled = {isDisabled}
        onValueChange={toggleSwitch}
        style={{ transform: [{ scaleX: 1.8 }, { scaleY:1.8 }] }}
        value={isEnabled}
      />
      </View>
      <View style={{flex : 1 , alignItems : 'flex-start'}}>
      <H3Text style={gstyles.text}>Dark</H3Text>
      </View>
    
   
    </FlexContainer>
    {/* </View> */}
    {/* <View style={[{flex : 1 } , gstyles.align]}> */}
        <Button2 style={styles.btn} onPress={() => setCustom(!showCustom)}>
          <H3Text style={gstyles.text}>Custom Theme</H3Text>
        </Button2>
    {/* </View> */}

    {/* <View style={[{flex : 1 } , gstyles.align]}> */}
    {showCustom?
        <View>
          <View>
            <MaterialPicker/>
          </View> 
          <View>
          <MaterialPicker/>
        </View>
        <View>
          <MaterialPicker/>
        </View>
        </View>
        :null}
  {/* </View> */}
    </MainContent>
  );
};

export default observer(ThemeChanger);
