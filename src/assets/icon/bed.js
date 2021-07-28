import React from "react";
import Svg , {Path , Rect} from '../../components/svg';

function BedIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="50"
      fill="none"
      viewBox="0 0 51 50"
    >
      <Rect width="21" height="39" x="15" y="5.5" stroke="#000" rx="1.5"></Rect>
      <Path
        stroke="#000"
        d="M15 17c4.667-3.464 14 3.464 21 0M31.5 18v-5a2 2 0 00-2-2h-8a2 2 0 00-2 2v2.762"
      ></Path>
    </Svg>
  );
}

export default BedIcon;
