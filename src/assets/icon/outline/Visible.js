import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVisible(props) {
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
        d="M4 12c0-.966.748-1.96 2.224-2.74C7.676 8.49 9.718 8 12 8c2.282 0 4.324.49 5.776 1.26C19.252 10.04 20 11.034 20 12c0 .966-.748 1.96-2.224 2.74C16.325 15.51 14.282 16 12 16c-2.282 0-4.324-.49-5.776-1.26C4.748 13.96 4 12.966 4 12zm8-5c-2.412 0-4.62.517-6.244 1.376C4.154 9.224 3 10.481 3 12c0 1.52 1.154 2.776 2.756 3.624C7.379 16.484 9.588 17 12 17s4.62-.517 6.244-1.376C19.846 14.776 21 13.519 21 12c0-1.52-1.154-2.776-2.756-3.624C16.621 7.516 14.412 7 12 7zm0 7a2 2 0 100-4 2 2 0 000 4z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgVisible;
