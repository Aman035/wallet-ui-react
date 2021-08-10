import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClearCharacter(props) {
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
        d="M7.5 5a.5.5 0 000 1V5zm0 13.5l-.432.252.432-.252zm0-13l-.42-.273.42.273zM4.47 11.064l3.448-5.29-.838-.547-3.447 5.29.837.547zm3.46 7.184l-3.49-5.987-.863.504 3.49 5.986.864-.503zM8 18.5H7h1zm1-.5H7.5v1H9v-1zm9.859 0H9v1h9.859v-1zm1.14-10.859v9.718h1V7.14h-1zM9 6h9.859V5H9v1zM7.5 6H9V5H7.5v1zm.5-.5H7h1zM7.5 5a.5.5 0 00-.5.5h1a.5.5 0 01-.5.5V5zM21 7.141A2.141 2.141 0 0018.859 5v1c.63 0 1.14.51 1.14 1.141h1zM7 18.5a.5.5 0 00.5.5v-1a.5.5 0 01.5.5H7zm.068.252A.5.5 0 017 18.5h1a.5.5 0 00-.068-.252l-.864.503zm11.79.248A2.141 2.141 0 0021 16.859h-1c0 .63-.511 1.141-1.141 1.141v1zM7.919 5.773A.5.5 0 008 5.5H7a.5.5 0 01.08-.273l.839.546zm-4.284 4.745a2.141 2.141 0 00-.056 2.247l.864-.504a1.141 1.141 0 01.03-1.197l-.838-.546z"
        fill={props.color}
      />
      <Path
        d="M10 8.5l7 7M10 15.5l6.93-7"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgClearCharacter;
