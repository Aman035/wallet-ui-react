import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLink(props) {
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
        d="M7.05 11.293L4.93 13.414a4 4 0 005.657 5.657l2.828-2.828a4 4 0 000-5.657l-.707.707a3 3 0 010 4.243l-2.828 2.828a3 3 0 11-4.243-4.243L7.757 12l-.707-.707z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.243 12l2.12-2.121a3 3 0 00-4.242-4.243l-2.828 2.828a3 3 0 000 4.243l-.707.707a4 4 0 010-5.657l2.828-2.828a4 4 0 015.657 5.657l-2.121 2.121-.707-.707z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgLink;
