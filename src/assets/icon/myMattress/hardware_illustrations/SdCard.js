import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgSdCard(props) {
  return (
    <Svg
      width={231}
      height={300}
      fill="none"
      viewBox="0 0 231 300"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 10a9 9 0 019-9h176.578L225 39.407V290a9 9 0 01-9 9H11a9 9 0 01-9-9V10z"
        stroke={props.color}
        strokeWidth={2}
      />
      <Rect
        opacity={0.25}
        x={26}
        y={16}
        width={18}
        height={38}
        rx={9}
        stroke={props.color}
        strokeWidth={2}
      />
      <Rect
        opacity={0.25}
        x={106}
        y={16}
        width={18}
        height={38}
        rx={9}
        stroke={props.color}
        strokeWidth={2}
      />
      <Rect
        opacity={0.25}
        x={66}
        y={16}
        width={18}
        height={38}
        rx={9}
        stroke={props.color}
        strokeWidth={2}
      />
      <Rect
        opacity={0.25}
        x={146}
        y={16}
        width={18}
        height={38}
        rx={9}
        stroke={props.color}
        strokeWidth={2}
      />
      <Path
        opacity={0.25}
        d="M25 299v-48.5c0-8.284 6.716-15 15-15h145c8.284 0 15 6.716 15 15V299"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgSdCard;
