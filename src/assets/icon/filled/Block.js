import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlock(props) {
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
        d="M21 8.344a.73.73 0 00-.364-.645l-7.494-4.395a2.21 2.21 0 00-2.23-.003L3.368 7.698a.73.73 0 00-.365.646H3v7.43h.004a.73.73 0 00.376.622l7.563 4.242a2.21 2.21 0 002.167-.003l7.515-4.24a.73.73 0 00.375-.62v-7.43zm-16.236.564a.375.375 0 00-.368.653l6.359 3.588a2.585 2.585 0 002.551-.006l6.278-3.583a.375.375 0 00-.372-.651l-6.278 3.582c-.56.32-1.248.322-1.81.005l-6.36-3.588z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgBlock;
