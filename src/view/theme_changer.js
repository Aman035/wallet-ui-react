import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { observer } from 'mobx-react';
import MainContent from '../components/main-content';
import { H3Text } from '../components/text';
import { Button2, Button2_Small } from '../components/button';
import gStyle from '../components/globalStyleSheet';
import { FlexContainer } from '../components/container';
import ColorPicker from '../components/colorPicker';

const ThemeChanger = ({ store, theme }) => {
	const color = store.theme.color;
	const gstyles = gStyle(color);

	const styles = StyleSheet.create({
		themeContainer: {
			paddingVertical: 40,
			alignSelf: 'center',
		},
		container: {
			flex: 1,
		},
    colorContainer : {

    },
		startAlign: {
			alignItems: 'flex-start',
		},
		centerAlign: {
			alignItems: 'center',
		},
		endAlign: {
			alignItems: 'flex-end',
		},
		btn: {
			backgroundColor: store.theme.primary.bitcoin_orange,
			marginVertical: 30,
		},
    btnSmall : {
      alignSelf : 'center',
      width : 150
    },
		switch: {
			transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
		},
    pickerStyle : {
        flex : 1,
        minWidth : 150,
        paddingHorizontal : 10,
        paddingBottom : 20
    }
	});

	const [isEnabled, setIsEnabled] = useState(store.theme.type === 'dark');
	const [isDisabled, setIsDisabled] = useState(store.theme.type === 'user');
	const [showCustom, setCustom] = useState(false);
  const colors = Object.entries(store.theme.userColor);
	const toggleSwitch = () => {
		if (isEnabled === false) theme.darkTheme();
		else theme.lightTheme();
		setIsEnabled((previousState) => !previousState);
	};

	return (
		<MainContent style={gstyles.container}>
			<FlexContainer style={styles.themeContainer}>
				<View style={[styles.container, styles.endAlign]}>
					<H3Text style={gstyles.text}>Light</H3Text>
				</View>
				<View style={[styles.container, styles.centerAlign]}>
					<Switch
						thumbColor={color.fill}
						disabled={isDisabled}
						onValueChange={toggleSwitch}
						style={styles.switch}
						value={isEnabled}
					/>
				</View>
				<View style={[styles.container, styles.startAlign]}>
					<H3Text style={gstyles.text}>Dark</H3Text>
				</View>
			</FlexContainer>

			<Button2 style={styles.btn} onPress={() => setCustom(!showCustom)}>
				<H3Text style={gstyles.btnText}>Choose A Custom Theme</H3Text>
			</Button2>

			{showCustom ? (
        <View>
					<FlexContainer style={{ flexWrap : 'wrap' , alignItems : 'center' , alignSelf : 'center' }}>
            {colors.map( (Each,i)=>{
              return(
              <View style={styles.pickerStyle} key = {i}>
                <View style={{width : 130 , alignSelf : 'center'}}>
                  <ColorPicker 
                    color={Each[1]} 
                    changeColor={(color)=> theme.changeUserColors({param : Each[0] , color})}
                  />
                </View>
                <H3Text style={[gstyles.text, { paddingVertical: 10 }]}>
                  {Each[0]}
                </H3Text>
              </View>
            )})}
					</FlexContainer>

          <Button2_Small style={[styles.btn , styles.btnSmall]} onPress={()=>theme.userTheme()}>
            <H3Text style={gstyles.btnText}>Apply Changes</H3Text>
          </Button2_Small>
          </View>
			) : null}
		</MainContent>
	);
};

export default observer(ThemeChanger);
