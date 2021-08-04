import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretUp(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 17.5L15.5 12.5L20.5 17.5"
        stroke="#000"
        strokeLinecap="round"
        {...props}
      />
    </Svg>
  );
}

export default SvgCaretUp;
