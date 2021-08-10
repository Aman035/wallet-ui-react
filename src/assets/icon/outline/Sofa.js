import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSofa(props) {
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
        d="M5.5 14.5H5v.5h.5v-.5zm13 0v.5h.5v-.5h-.5zM4.5 10A1.5 1.5 0 003 11.5h1a.5.5 0 01.5-.5v-1zM6 11.5A1.5 1.5 0 004.5 10v1a.5.5 0 01.5.5h1zm0 3v-3H5v3h1zm12.5-.5h-13v1h13v-1zm.5.5v-3h-1v3h1zm0-3a.5.5 0 01.5-.5v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.5a.5.5 0 01.5.5h1a1.5 1.5 0 00-1.5-1.5v1zm.5.5v4h1v-4h-1zm0 4v1h1v-1h-1zm-.5 2.5a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-15 0h15v-1h-15v1zM3 16.5A1.5 1.5 0 004.5 18v-1a.5.5 0 01-.5-.5H3zm0-1v1h1v-1H3zm0-4v4h1v-4H3zM18 8.708l.2.458.3-.13v-.328H18zM16.5 12.5v.5h.5v-.5h-.5zm-9 0H7v.5h.5v-.5zM6 8.708h-.5v.327l.3.131.2-.458zM7.5 6a2 2 0 00-2 2h1a1 1 0 011-1V6zm9 0h-9v1h9V6zm2 2a2 2 0 00-2-2v1a1 1 0 011 1h1zm0 .708V8h-1v.708h1zM17 11a2 2 0 011.2-1.834l-.4-.916A3 3 0 0016 11h1zm0 1.5V11h-1v1.5h1zm-9.5.5h9v-1h-9v1zM7 11v1.5h1V11H7zM5.8 9.166A2 2 0 017 11h1a3 3 0 00-1.8-2.75l-.4.916zM5.5 8v.708h1V8h-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgSofa;
