import React from "react";
import Svg , {Path} from '../../components/svg';

const Right_Arrow = (props) =>{
  return (
    <Svg
      width="19"
      height="17"
      fill="none"
      viewBox="0 0 19 17"
      {...props}
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.333 1.83L18 8.497l-6.667 6.666"
      ></Path>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.333 8.663L1 8.663"
      ></Path>
    </Svg>
  );
}

export default Right_Arrow;
