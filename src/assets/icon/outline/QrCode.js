import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQrCode(props) {
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
        stroke={props.color}
        d="M5.5 5.5H9V9H5.5zM15 5.5h3.5V9H15zM5.5 15H9v3.5H5.5z"
      />
      <Path
        stroke={props.color}
        strokeWidth={0.75}
        d="M5.375 11.625h.75v.75h-.75zM8.375 11.625h.75v.75h-.75zM11.542 11.625h.75v.75h-.75zM11.542 14.75h.75v.75h-.75zM11.542 17.875h.75v.75h-.75zM11.542 8.5h.75v.75h-.75zM11.542 5.375h.75v.75h-.75zM14.708 11.625h.75v.75h-.75zM17.875 11.625h.75v.75h-.75zM14.708 14.75h.75v.75h-.75zM17.875 14.75h.75v.75h-.75zM14.708 17.875h.75v.75h-.75zM17.875 17.875h.75v.75h-.75z"
      />
    </Svg>
  );
}

export default SvgQrCode;
