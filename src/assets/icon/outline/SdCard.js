import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSdCard(props) {
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
        d="M6.5 8.5l-.354-.354L6 8.293V8.5h.5zm4-4V4h-.207l-.147.146.354.354zM6.854 8.854l4-4-.708-.708-4 4 .708.708zM10.5 5H16V4h-5.5v1zM16 5a1 1 0 011 1h1a2 2 0 00-2-2v1zm1 1v12h1V6h-1zm0 12a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1H8v1h8v-1zm-8 0a1 1 0 01-1-1H6a2 2 0 002 2v-1zm-1-1V8.5H6V18h1z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 6.5a.5.5 0 00-.5.5v3a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM13 7a.5.5 0 011 0v3a.5.5 0 01-1 0V7zm2 0a.5.5 0 011 0v3a.5.5 0 01-1 0V7z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgSdCard;
