import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMnemonic(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6.5A1.5 1.5 0 016.5 5h11A1.5 1.5 0 0119 6.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 17.5v-11zm1.5 0H9V8H6.5V6.5zM9 9.667H6.5v1.5H9v-1.5zm-2.5 3.166H9v1.5H6.5v-1.5zM9 16H6.5v1.5H9V16zm1.75-9.5h2.5V8h-2.5V6.5zm2.5 3.167h-2.5v1.5h2.5v-1.5zm-2.5 3.166h2.5v1.5h-2.5v-1.5zM13.25 16h-2.5v1.5h2.5V16zM15 6.5h2.5V8H15V6.5zm2.5 3.167H15v1.5h2.5v-1.5zM15 12.833h2.5v1.5H15v-1.5zM17.5 16H15v1.5h2.5V16z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgMnemonic;