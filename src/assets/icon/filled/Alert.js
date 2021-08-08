import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const SvgAlert = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={16.75} r={1.25} fill="black" />
    <Rect x={11} y={6} width={2} height={8} fill="black" />
  </Svg>
);

export default SvgAlert;
