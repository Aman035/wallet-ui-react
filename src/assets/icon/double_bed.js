import React from "react";
import Svg, { Path, Rect } from "../../components/svg";

function DoubleBedIcon(props) {
  return (
    <Svg width="50" height="50" fill="none" viewBox="0 0 50 50" {...props}>
      <Rect
        width="39"
        height="39"
        x="5.5"
        y="5.5"
        stroke="#000"
        rx="1.5"
      ></Rect>
      <Path
        stroke="#000"
        d="M5.5 17c8.667-3.464 26 3.464 39 0M22 17v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v2.762"
      ></Path>
      <Path
        stroke="#000"
        d="M39 17.774V13a2 2 0 00-2-2h-8a2 2 0 00-2 2v4.5"
      ></Path>
    </Svg>
  );
}

export default DoubleBedIcon;
