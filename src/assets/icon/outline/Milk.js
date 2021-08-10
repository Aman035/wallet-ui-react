import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgMilk(props) {
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
        d="M8.008 11.996l.5.027-.5-.027zm7.986.001l-.5.02.5-.02zM10.816 6h2.402V5h-2.402v1zm-2.309 6.023c.053-.972.377-2.125.772-3.199.392-1.066.84-2.017 1.12-2.575l-.896-.446A27.287 27.287 0 008.34 8.479c-.406 1.104-.77 2.369-.831 3.49l.998.054zm-.007.267v-.286h-1v.286h1zm0 6.21v-6.21h-1v6.21h1zM10 20a1.5 1.5 0 01-1.5-1.5h-1A2.5 2.5 0 0010 21v-1zm4 0h-4v1h4v-1zm1.5-1.5A1.5 1.5 0 0114 20v1a2.5 2.5 0 002.5-2.5h-1zm0-6.21v6.21h1v-6.21h-1zm0-.287v.287h1v-.287h-1zm-1.884-5.779c.569 1.042 1.784 3.528 1.878 5.794l1-.042c-.105-2.515-1.426-5.178-2-6.231l-.878.48zM8.004 11.5a.504.504 0 00-.504.504h1a.496.496 0 01-.496.496v-1zm-.495.47c.015-.272.24-.47.495-.47v1c.26 0 .489-.202.503-.477l-.998-.054zM13.219 6c.176 0 .323.09.397.224l.877-.479A1.444 1.444 0 0013.218 5v1zm3.281 6.003a.503.503 0 00-.503-.503v1a.497.497 0 01-.497-.497h1zm-.503-.503c.264 0 .485.208.496.476l-.999.042a.503.503 0 00.503.482v-1zM10.816 5a1.46 1.46 0 00-1.313.803l.895.446A.46.46 0 0110.816 6V5z"
        fill={props.color}
      />
      <Rect x={9} y={3.5} width={6} height={2} rx={0.5} stroke={props.color} />
      <Rect x={9.5} y={12} width={1} height={6.5} rx={0.5} fill={props.color} />
    </Svg>
  );
}

export default SvgMilk;
