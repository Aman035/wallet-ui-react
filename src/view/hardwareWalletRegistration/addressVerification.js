import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { Back_Header } from '../../components/header';
import { H3Text, H6Text } from '../../components/text';

const AddressVerification = ({ store }) => {
	const color = store.theme.color;
	const gstyles = gStyle(color);
	const styles = StyleSheet.create({
		iconContainer: {
			backgroundColor: store.theme.primary.purple,
			marginBottom: 20,
		},
		btn: {
			backgroundColor: store.theme.primary.bitcoin_orange,
			marginTop: 40,
		},
		alignTxt: {
			textAlign: 'left',
		},
		alignSelf: {
			alignSelf: 'flex-start',
			marginVertical: 20,
		},
	});

	return (
		<MainContent style={[gstyles.container, { padding: 0 }]}>
			<Back_Header color={color.stroke} />
			<View style={{ padding: 20 }}>
				<ActivityIndicator
					size={60}
					color={color.neutral3}
					style={styles.alignSelf}
				/>
				<H6Text style={[gstyles.text, styles.alignTxt, { lineHeight: 40 }]}>
					Verify your address on your hardware wallet
				</H6Text>
				<H3Text style={[gstyles.secText, styles.alignTxt, { lineHeight: 30 }]}>
					Please verify the address on your hardware wallet. We currently only
					support the Ledger Nano S.
				</H3Text>
			</View>
		</MainContent>
	);
};

export default AddressVerification;
