import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCart(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={19} r={1.5} stroke="#000" />
      <Circle cx={17} cy={19} r={1.5} stroke="#000" />
      <Path
        d="M3.5 4h2l3.504 11H17"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 13L6 6h13.337a.5.5 0 01.48.637l-1.713 6a.5.5 0 01-.481.363H8.5z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgCart;
