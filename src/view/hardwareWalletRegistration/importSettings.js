import React from 'react';
import { View, StyleSheet } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { H3Text, H6Text } from '../../components/text';
import ListItem from '../../components/listItem';
import { IconButton } from '../../components/button';
import SettingsIcon from '../../assets/icon/filled/Gear';

const ImportSettings = ({ store, hardwareWallet }) => {
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
		list: {
			borderBottomWidth: 1,
			borderBottomColor: color.neutral3,
		},
	});

	return (
		<MainContent style={gstyles.container}>
			<H6Text style={[gstyles.text, styles.align, { lineHeight: 40 }]}>
				Which hardware wallet do you want to connect to?
			</H6Text>
			<ListItem
				color={color}
				style={styles.list}
				onPress={() =>
					hardwareWallet.registerWallet({ param: 'type', wallet: 'ledger' })
				}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						<SettingsIcon color={color.stroke} width={35} />
					</View>
					<View style={{ flex: 3 }}>
						<H3Text style={gstyles.text}>Ledger</H3Text>
					</View>
				</View>
			</ListItem>
			<ListItem
				color={color}
				style={gstyles.align}
				onPress={() =>
					hardwareWallet.registerWallet({ param: 'type', wallet: 'trezor' })
				}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						<SettingsIcon color={color.stroke} width={35} />
					</View>
					<View style={{ flex: 3 }}>
						<H3Text style={gstyles.text}>Trezor</H3Text>
					</View>
				</View>
			</ListItem>
		</MainContent>
	);
};

export default ImportSettings;
