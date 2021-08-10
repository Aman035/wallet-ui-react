import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgSearch(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={11} cy={11} r={5.5} stroke={props.color} />
      <Path
        d="M15 15l4 4"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSearch;
