import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlus(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 4v16M20 12H4"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgPlus;
