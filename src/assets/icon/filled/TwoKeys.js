import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTwoKeys(props) {
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
        d="M21 12.5c0 2.485-2.072 4.5-4.629 4.5a4.78 4.78 0 01-.934-.092l-3.626 3.526a2 2 0 01-1.394.566H9.143a1 1 0 01-1-1v-1.155a2 2 0 01.606-1.434l3.326-3.234a4.378 4.378 0 01-.332-1.677c0-2.485 2.072-4.5 4.628-4.5C18.928 8 21 10.015 21 12.5zm-4.114.5c.568 0 1.028-.448 1.028-1s-.46-1-1.029-1c-.568 0-1.028.448-1.028 1s.46 1 1.029 1z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.229 12c2.556 0 4.628-2.015 4.628-4.5S13.785 3 11.229 3C8.671 3 6.6 5.015 6.6 7.5c0 .593.118 1.159.332 1.677l-3.326 3.234A2 2 0 003 13.845V15a1 1 0 001 1h1.274a2 2 0 001.394-.566l3.626-3.526c.302.06.614.092.934.092zm1.543-5c0 .552-.461 1-1.03 1-.567 0-1.028-.448-1.028-1s.46-1 1.029-1c.568 0 1.028.448 1.028 1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgTwoKeys;
