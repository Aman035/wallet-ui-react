import React from 'react';
import { View, StyleSheet } from 'react-native';
import gStyle from '../../components/globalStyleSheet';
import MainContent from '../../components/main-content';
import { Back_Header } from '../../components/header';
import { H3Text, H6Text } from '../../components/text';
import ListItem from '../../components/listItem';

const Backup = ({ store }) => {
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
        list : {
            borderBottomWidth : 1,
            borderBottomColor : color.neutral3
        }
	});

	return (
		<MainContent style={[gstyles.container, { padding: 0 }]}>
			<Back_Header color={color.stroke} />
			<View style={{ padding: 20 }}>
				<H6Text style={[gstyles.text, styles.align, { lineHeight: 40 }]}>
                    Which service do you want to use for a cloud backup?
				</H6Text>
				<H3Text style={[gstyles.secText, styles.align, { lineHeight: 30 }]}>
                    This will back up your seed phrase with your preferred cloud storage provider.
				</H3Text>
                <ListItem color={color} style={styles.list}>
                    <H3Text style = {gstyles.text}>Apple iCloud</H3Text>
                </ListItem>
                <ListItem color={color}>
                    <H3Text style={gstyles.text}>Google Drive</H3Text>
                </ListItem>
			</View>
		</MainContent>
	);
};

export default Backup;
