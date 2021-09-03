import { StyleSheet } from 'react-native';

const gStyle = (color) => {
	const style = StyleSheet.create({
		container: {
			backgroundColor: color.fill,
			padding: 20,
		},
		text: {
			color: color.stroke,
		},
		secText: {
			color: color.neutral7,
		},
		btnText: {
			color: color.fill,
		},
		align: {
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
	return style;
};

export default gStyle;
