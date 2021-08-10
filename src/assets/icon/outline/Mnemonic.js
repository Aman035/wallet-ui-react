import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgMnemonic(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={5.5}
        y={5.5}
        width={13}
        height={13}
        rx={1}
        stroke={props.color}
      />
      <Path
        fill={props.color}
        d="M7 7h2.5v1.5H7zM7 9.833h2.5v1.5H7zM7 12.667h2.5v1.5H7zM7 15.5h2.5V17H7zM10.75 7h2.5v1.5h-2.5zM10.75 9.833h2.5v1.5h-2.5zM10.75 12.667h2.5v1.5h-2.5zM10.75 15.5h2.5V17h-2.5zM14.5 7H17v1.5h-2.5zM14.5 9.833H17v1.5h-2.5zM14.5 12.667H17v1.5h-2.5zM14.5 15.5H17V17h-2.5z"
      />
    </Svg>
  );
}

export default SvgMnemonic;
