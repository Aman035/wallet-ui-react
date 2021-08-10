import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFile(props) {
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
        d="M13.5 4.5l.353-.353L13.707 4H13.5v.5zm4 4.004h.5v-.207l-.146-.147-.354.354zM8 5h5.5V4H8v1zM7 6a1 1 0 011-1V4a2 2 0 00-2 2h1zm0 12V6H6v12h1zm1 1a1 1 0 01-1-1H6a2 2 0 002 2v-1zm8 0H8v1h8v-1zm1-1a1 1 0 01-1 1v1a2 2 0 002-2h-1zm0-9.496V18h1V8.504h-1zm.854-.354l-4-4.003-.708.706 4 4.004.708-.707z"
        fill={props.color}
      />
      <Path
        d="M13 5v4h4"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFile;
