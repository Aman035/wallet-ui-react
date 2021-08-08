import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDown(props) {
  return (
    <Svg
      width={44}
      height={44}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.012 3L12 20.79M19 14.012L12 21l-7-6.988"
        stroke= {props.stroke?props.stroke :"#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgArrowDown;
