import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

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
        d="M14.33 7.17C13.588 7.058 12.807 7 12 7c-4.97 0-9 2.239-9 5 0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 015.076-5.076l1.043-1.043zm-3.1 8.756a4 4 0 004.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5-.598 0-1.183-.032-1.749-.094l.98-.98z"
        fill={props.color}
      />
      <Rect
        x={18.5}
        y={4.5}
        width={2}
        height={20}
        rx={1}
        transform="rotate(45 18.5 4.5)"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgHidden;
