import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgSharedWallet(props) {
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
        d="M6 4h9v5h1V4a1 1 0 00-1-1H6a1 1 0 00-1 1v13a1 1 0 001 1h5v-1H6V4z"
        fill={props.color}
      />
      <Path d="M5 15h6v3H6a1 1 0 01-1-1v-2z" fill={props.color} />
      <Rect
        x={12.5}
        y={10.5}
        width={6}
        height={10}
        rx={0.5}
        stroke={props.color}
      />
      <Path
        d="M12.5 18.5h6V20a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1.5z"
        fill={props.color}
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgSharedWallet;
