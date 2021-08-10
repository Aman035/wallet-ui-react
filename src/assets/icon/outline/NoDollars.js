import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgNoDollars(props) {
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
        d="M11.598 18.274h.804V17.18c2.059-.143 3.215-1.358 3.215-2.887 0-1.882-1.784-2.49-2.823-2.764l-.392-.108V7.937c1.039.103 1.794.662 1.902 1.554h1.176c-.05-1.432-1.304-2.52-3.078-2.637V5.726h-.804v1.142c-1.681.172-2.94 1.24-2.94 2.78 0 1.352.98 2.156 2.548 2.607l.392.113v3.71c-1.03-.108-1.872-.637-1.96-1.647H8.383c.113 1.544 1.289 2.622 3.215 2.75v1.093zm.804-2.196v-3.48l.04.01c1.058.294 1.999.666 1.999 1.666 0 .985-.853 1.671-2.04 1.804zm-.804-4.872c-.745-.21-1.764-.622-1.764-1.617 0-.848.686-1.495 1.764-1.637v3.254z"
        fill={props.color}
      />
      <Circle cx={12} cy={12} r={8.5} stroke={props.color} />
      <Path
        d="M5.75 5.75l12.5 12.5"
        stroke={props.color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgNoDollars;
