import React, { useState } from 'react';
import { MaterialPicker } from 'react-color';

const ColorPicker = ({ color, changeColor }) => {
	const handleChangeComplete = (color) => {
		changeColor(color.hex);
	};
	return (
		<MaterialPicker
			color={color}
			onChange={handleChangeComplete}
		/>
	);
};
export default ColorPicker;
