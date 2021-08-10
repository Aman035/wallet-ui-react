import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLightningSdCard(props) {
  return (
    <Svg
      width={70}
      height={300}
      fill="none"
      viewBox="0 0 70 300"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={props.color}
        strokeWidth={2}
        d="M1 204h68v95H1z"
      />
      <Path
        opacity={0.25}
        stroke={props.color}
        strokeWidth={2}
        d="M33 283h4v6h-4z"
      />
      <Path
        stroke={props.color}
        strokeWidth={2}
        d="M30 180h10v24H30zM30 48h10v21H30zM28 3a2 2 0 012-2h10a2 2 0 012 2v10H28V3zM26 13h18v35H26zM32 69h6v111h-6z"
      />
      <Path
        opacity={0.25}
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M31.5 6V2M38.5 6V2M35 6V2"
      />
    </Svg>
  );
}

export default SvgLightningSdCard;
