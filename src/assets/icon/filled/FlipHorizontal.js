import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipHorizontal(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.389 16.5h12.61M8.398 20L5 16.5 8.398 13M17.611 7.5H5M15.601 11L19 7.5 15.6 4"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFlipHorizontal;