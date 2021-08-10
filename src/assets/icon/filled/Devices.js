import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDevices(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 4A1.5 1.5 0 007 5.5v13A1.5 1.5 0 008.5 20h7a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0015.5 4h-7zm1.25 2a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zM9 14.25c0 .414.336.75.75.75h.5a.75.75 0 000-1.5h-.5a.75.75 0 00-.75.75zm4.75.75a.75.75 0 010-1.5h.5a.75.75 0 010 1.5h-.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgDevices;
