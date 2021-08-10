import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLock(props) {
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
        d="M5 11.5A1.5 1.5 0 016.5 10V9A2.5 2.5 0 004 11.5h1zm0 7v-7H4v7h1zM6.5 20A1.5 1.5 0 015 18.5H4A2.5 2.5 0 006.5 21v-1zm11 0h-11v1h11v-1zm1.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm0-7v7h1v-7h-1zM17.5 10a1.5 1.5 0 011.5 1.5h1A2.5 2.5 0 0017.5 9v1zm-11 0h11V9h-11v1zm6.5 5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-1 1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1z"
        fill={props.color}
      />
      <Path
        d="M7.75 9.5h8.5v-4a2 2 0 00-2-2h-4.5a2 2 0 00-2 2v4z"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgLock;
