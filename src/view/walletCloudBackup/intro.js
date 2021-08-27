import React from 'react';
import { View, StyleSheet } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { Back_Header } from '../../components/header';
import { CircularContainer } from '../../components/container';
import CloudIcon from '../../assets/icon/filled/Cloud';
import { Button2_Small } from '../../components/button';
import { H3Text, H6Text } from '../../components/text';

const Intro = ({ store }) => {
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
		align: {
			textAlign: 'left',
		},
	});

	return (
		<MainContent style={[gstyles.container, { padding: 0 }]}>
			<Back_Header color={color.stroke} />
			<View style={{ padding: 20 }}>
				<CircularContainer style={[gstyles.align, styles.iconContainer]}>
					<CloudIcon color={color.fill} height={40} width={40} />
				</CircularContainer>
				<H6Text style={[gstyles.text, styles.align, { lineHeight: 40 }]}>
					Back up your wallet to iCloud or Google Drive
				</H6Text>
				<H3Text style={[gstyles.secText, styles.align, { lineHeight: 30 }]}>
					Don’t lose your wallet. Save an encrypted copy to your cloud service.
				</H3Text>
				<Button2_Small style={styles.btn}>
					<H3Text style={gstyles.btnText}>Next</H3Text>
				</Button2_Small>
			</View>
		</MainContent>
	);
};

export default Intro;
