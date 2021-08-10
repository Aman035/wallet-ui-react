import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgMilk(props) {
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
        d="M14.278 4.977a.946.946 0 00-.832-.477h-2.858a.96.96 0 00-.861.518c-.13.253-.296.589-.48.982h5.569a21.574 21.574 0 00-.538-1.023zM7.5 12c0-1.542.66-3.48 1.302-5h6.475c.616 1.43 1.223 3.275 1.223 5v7a2 2 0 01-2 2h-5a2 2 0 01-2-2v-7zM9 12a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6A.5.5 0 009 12z"
        fill={props.color}
      />
      <Rect x={8.5} y={3} width={7} height={3} rx={1} fill={props.color} />
    </Svg>
  );
}

export default SvgMilk;
