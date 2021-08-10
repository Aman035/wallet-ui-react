import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContacts(props) {
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
        opacity={0.25}
        d="M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.549 3.549 0 0015.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 001.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9.5v-2a3.5 3.5 0 117 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 00.629.928l1.586.635A4.431 4.431 0 0119 19H5a4.431 4.431 0 012.785-4.114l1.586-.635a1 1 0 00.629-.928v-.95A3.496 3.496 0 018.5 9.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgContacts;
