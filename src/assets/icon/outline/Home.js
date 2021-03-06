import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHome(props) {
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
        d="M19.213 11.208l.357-.35-.357.35zm-14.459.008l-.373-.333.373.333zm.373.333l6.178-6.92-.746-.665-6.178 6.918.746.667zM5 19.5v-7.618H4V19.5h1zm3.5.5h-3v1h3v-1zm1.5-.5V16H9v3.5h1zm.5-4h3v-1h-3v1zm3.5.5v3.5h1V16h-1zm4.5 4h-3v1h3v-1zm.5-8.091V19.5h1v-7.591h-1zm-6.966-7.297l6.823 6.947.713-.701-6.822-6.947-.714.701zM20 11.91a1.5 1.5 0 00-.43-1.051l-.713.7a.5.5 0 01.143.351h1zM18.5 21a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM14 19.5a1.5 1.5 0 001.5 1.5v-1a.5.5 0 01-.5-.5h-1zm-.5-4a.5.5 0 01.5.5h1a1.5 1.5 0 00-1.5-1.5v1zM10 16a.5.5 0 01.5-.5v-1A1.5 1.5 0 009 16h1zm-1.5 5a1.5 1.5 0 001.5-1.5H9a.5.5 0 01-.5.5v1zM4 19.5A1.5 1.5 0 005.5 21v-1a.5.5 0 01-.5-.5H4zm7.305-14.87a.5.5 0 01.73-.018l.713-.7a1.5 1.5 0 00-2.19.052l.747.666zM4.38 10.883a1.5 1.5 0 00-.381.999h1a.5.5 0 01.127-.333l-.746-.666z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgHome;
