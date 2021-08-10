import * as React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";

function SvgCoboVault(props) {
  return (
    <Svg
      width={85}
      height={150}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox = "0 0 85 150"
      {...props}
    >
      <Path
        stroke={props.color}
        strokeWidth={1.25}
        d="M1 2.5h83V149H1z"
      />
      <Path
        stroke={props.color}
        strokeWidth={1.25}
        d="M57.625.625h14.75v1.25h-14.75z"
      />
      <G opacity={0.25} stroke={props.color} strokeWidth={2}>
        <Path d="M8.5 12.5h68v119h-68z" />
        <Rect x={13.5} y={81} width={58} height={4} rx={2} />
        <Rect x={13.5} y={31} width={58} height={4} rx={2} />
        <Rect x={13.5} y={93.5} width={58} height={4} rx={2} />
        <Rect x={13.5} y={43.5} width={58} height={4} rx={2} />
        <Rect x={13.5} y={106} width={58} height={4} rx={2} />
        <Rect x={13.5} y={56} width={58} height={4} rx={2} />
        <Rect x={13.5} y={118.5} width={58} height={4} rx={2} />
        <Rect x={13.5} y={69} width={58} height={4} rx={2} />
        <Path d="M13.5 18.5h4v4h-4zM67.5 18.5h4v4h-4zM33.5 139h18v2h-18z" />
      </G>
    </Svg>
  );
}

export default SvgCoboVault;
