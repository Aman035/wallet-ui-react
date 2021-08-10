import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCar(props) {
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
        d="M18.447 5.17h0v.004l2.053 5.91V19c0 .274-.226.5-.5.5h-1a.503.503 0 01-.5-.5v-1.5h-13V19c0 .274-.226.5-.5.5H4a.503.503 0 01-.5-.5v-7.916l2.052-5.908c.143-.4.511-.676.948-.676h11c.443 0 .814.28.947.67z"
        stroke={props.color}
      />
      <Path
        d="M6.5 14.5c-.554 0-1-.446-1-1s.446-1 1-1 1 .446 1 1-.446 1-1 1zM17.5 14.5c-.554 0-1-.446-1-1s.446-1 1-1 1 .446 1 1-.446 1-1 1zM18.306 9.5H5.694L6.86 6h10.28l1.166 3.5z"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgCar;
