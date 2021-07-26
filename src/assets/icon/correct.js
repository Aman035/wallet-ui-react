import React from "react";
import Svg , {Path} from '../../components/svg';

const  Correct = (props)=> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      fill="none"
      viewBox="0 0 61 61"
      {...props}
    >
      <Path
        fill="#27AE60"
        d="M.5 30.5c0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30z"
      ></Path>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.5 32.01l6.35 5.49 9.157-14"
      ></Path>
    </Svg>
  );
}

export default Correct;
