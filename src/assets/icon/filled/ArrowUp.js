import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUp(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.012 21L12 3.211M19 9.988L12 3 5 9.988"
        stroke= {props.stroke?props.stroke :"#000"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgArrowUp;
