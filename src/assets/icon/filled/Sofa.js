import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSofa(props) {
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
        d="M3 11.5a1.5 1.5 0 013 0V14h12v-2.5a1.5 1.5 0 013 0v5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5v-5z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 7.5A1.5 1.5 0 017 6h10a1.5 1.5 0 011.5 1.5v1.708A2.5 2.5 0 0017 11.5V13H7v-1.5a2.5 2.5 0 00-1.5-2.292V7.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgSofa;
