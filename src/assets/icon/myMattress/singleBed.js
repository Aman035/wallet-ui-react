import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgSingleBed(props) {
  return (
    <Svg width="50" height="50" fill="none" viewBox="0 0 50 50" {...props}>
      <Rect
        width="21"
        height="39"
        x="14.5"
        y="5.5"
        stroke={props.color}
        rx="1.5"
      ></Rect>
      <Path
        stroke={props.color}
        d="M14.5 17c4.667-3.464 14 3.464 21 0M31 18v-5a2 2 0 00-2-2h-8a2 2 0 00-2 2v2.762"
      ></Path>
    </Svg>
  );
}

export default SvgSingleBed;
