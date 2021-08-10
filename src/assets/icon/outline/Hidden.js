import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHidden(props) {
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
        d="M13.892 7.108A16.378 16.378 0 0012 7c-2.412 0-4.62.517-6.244 1.376C4.154 9.224 3 10.481 3 12c0 1.44 1.037 2.645 2.51 3.488l.736-.736a11.267 11.267 0 01-.022-.012C4.748 13.96 4 12.966 4 12c0-.966.748-1.96 2.224-2.74C7.676 8.49 9.718 8 12 8c.329 0 .652.01.97.03l.921-.922zm-2.863 8.862c.318.02.642.03.971.03 2.282 0 4.324-.49 5.776-1.26C19.252 13.96 20 12.966 20 12c0-.966-.748-1.96-2.224-2.74l-.024-.013.736-.736C19.962 9.354 21 10.559 21 12c0 1.52-1.154 2.776-2.756 3.624C16.621 16.484 14.412 17 12 17c-.648 0-1.281-.037-1.892-.108l.921-.922z"
        fill={props.color}
      />
      <Path
        d="M19 5L5 19"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgHidden;
