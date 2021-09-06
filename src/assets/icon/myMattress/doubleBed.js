import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgDoubleBed(props) {
  return (
    <Svg width="50" height="50" fill="none" viewBox="0 0 50 50" {...props}>
      <Rect
        width="39"
        height="39"
        x="5.5"
        y="5.5"
        stroke={props.color}
        rx="1.5"
      ></Rect>
      <Path
        stroke={props.color}
        d="M5.5 17c8.667-3.464 26 3.464 39 0M22 17v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v2.762"
      ></Path>
      <Path
        stroke={props.color}
        d="M39 17.774V13a2 2 0 00-2-2h-8a2 2 0 00-2 2v4.5"
      ></Path>
    </Svg>
  );
}

export default SvgDoubleBed;
