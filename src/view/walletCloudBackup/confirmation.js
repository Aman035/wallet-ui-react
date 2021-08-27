import React from 'react';
import { View, StyleSheet } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { CircularContainer } from '../../components/container';
import CheckIcon from '../../assets/icon/filled/Check';
import { Button2_Small } from '../../components/button';
import { H3Text, H6Text } from '../../components/text';

const Confirmation = ({ store }) => {
	const color = store.theme.color;
	const gstyles = gStyle(color);
	const styles = StyleSheet.create({
		iconContainer: {
			backgroundColor: store.theme.primary.green,
			marginBottom: 20,
		},
		btn: {
			backgroundColor: store.theme.primary.bitcoin_orange,
			marginTop: 40,
		},
		align: {
			textAlign: 'left',
		},
	});

	return (
		<MainContent style={gstyles.container}>
			<View>
				<CircularContainer style={[gstyles.align, styles.iconContainer]}>
					<CheckIcon color={color.fill} height={40} width={40} />
				</CircularContainer>
				<H6Text style={[gstyles.text, styles.align, { lineHeight: 40 }]}>
                    Your wallet is backed up
				</H6Text>
				<H3Text style={[gstyles.secText, styles.align, { lineHeight: 30 }]}>
                    If you lose this device, you can recover your encrypted wallet backup from iCloud.
				</H3Text>
				<Button2_Small style={styles.btn}>
					<H3Text style={gstyles.btnText}>Continue</H3Text>
				</Button2_Small>
			</View>
		</MainContent>
	);
};

export default Confirmation;
