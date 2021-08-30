import React from 'react';
import { View, StyleSheet } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { Back_Header } from '../../components/header';
import { PinInput } from '../../components/input';
import { Button2_Small } from '../../components/button';
import { H3Text, H6Text } from '../../components/text';
import { observer } from 'mobx-react';

const Password = ({ store, backup }) => {
	const color = store.theme.color;
	const gstyles = gStyle(color);
	const styles = StyleSheet.create({
		iconContainer: {
			backgroundColor: store.theme.primary.purple,
			marginBottom: 20,
		},
		btn: {
			backgroundColor: store.theme.primary.bitcoin_orange,
			marginVertical: 30,
		},
		disableBtn : {
			backgroundColor : color.neutral3,
			marginVertical : 30		},
		align: {
			textAlign: 'left',
		},
        input : {
            marginTop : 20,
            color : color.stroke
        }
	});
	return (
		<MainContent style={[gstyles.container, { padding: 0 }]}>
			<Back_Header color={color.stroke} />
			<View style={{ padding: 20 }}>
				<H6Text style={[gstyles.text, styles.align, { lineHeight: 40 }]}>
                    Choose a password
				</H6Text>
				<H3Text style={[gstyles.secText, styles.align, { lineHeight: 30 }]}>
                    Please use a password you will remember. It cannot be recovered.
				</H3Text>
                <PinInput color={color} style={styles.input} 
					onChange = {(pass)=>backup.changePassword({pass, param : 'newPass'})}
					value = {store.backup.newPass}/>
                <PinInput color={color} style={styles.input}
					onChange = {(pass)=>backup.changePassword({pass , param : 'confirmedPass'})}
					value = {store.backup.confirmedPass}/>
				<Button2_Small style={store.backup.valid?styles.btn : styles.disableBtn} disabled={!store.backup.valid}>
					<H3Text style={gstyles.btnText}>Continue</H3Text>
				</Button2_Small>
                <H3Text style={[gstyles.secText, styles.align, { lineHeight: 30 }]}>
                    This is used to encrypt your wallet. This prevents your cloud service provider from accessing it.
				</H3Text>
			</View>
		</MainContent>
	);
};

export default observer(Password);
