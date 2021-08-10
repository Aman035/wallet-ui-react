import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMiner(props) {
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
        d="M5.642 18.37a1.224 1.224 0 010-1.74A8.972 8.972 0 0112 14a8.971 8.971 0 016.358 2.63 1.224 1.224 0 010 1.74A8.972 8.972 0 0112 21a8.972 8.972 0 01-6.358-2.63z"
        fill={props.color}
      />
      <Path
        d="M8.5 8v-.5H8V8h.5zm7 0h.5v-.5h-.5V8zM9 8H8h1zm3 4c-1.547 0-3-1.667-3-4H8c0 2.637 1.681 5 4 5v-1zm3-4c0 2.333-1.453 4-3 4v1c2.319 0 4-2.363 4-5h-1zm0 0h1-1zm.5-.5h-7v1h7v-1z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c2.485 0 4.5 2.239 4.5 5h-9c0-2.761 2.015-5 4.5-5zm0 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.color}
      />
      <Path
        d="M7 8.5h10"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgMiner;
