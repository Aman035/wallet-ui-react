import React, { useState } from 'react';
import { MaterialPicker } from 'react-color';

const ColorPicker = ({ color, changeColor }) => {
	const [background, setBackground] = useState(color);
	const handleChangeComplete = (color) => {
		setBackground(color.hex);
		changeColor(color.hex);
	};
	return (
		<MaterialPicker
			color={background}
			onChangeComplete={handleChangeComplete}
		/>
	);
};
export default ColorPicker;
