import React from "react";
import Svg, { Path, Rect } from "../../components/svg";

function TripleBedIcon(props) {
  return (
    <Svg width="50" height="50" fill="none" viewBox="0 0 50 50" {...props}>
      <Rect
        width="49"
        height="39"
        x="0.5"
        y="5.5"
        stroke="#000"
        rx="1.5"
      ></Rect>
      <Path
        stroke="#000"
        d="M.5 17c10.889-3.464 32.667 3.464 49 0M16 16v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v2.762"
      ></Path>
      <Path
        stroke="#000"
        d="M46 17.774V13a2 2 0 00-2-2h-8a2 2 0 00-2 2v4.5M31 17.774V13a2 2 0 00-2-2h-8a2 2 0 00-2 2v3.5"
      ></Path>
    </Svg>
  );
}

export default TripleBedIcon;
