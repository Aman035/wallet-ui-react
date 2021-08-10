import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShare(props) {
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
        d="M20.336 3.221L3.873 8.71a.35.35 0 00-.027.654l6.05 2.593a.2.2 0 00.196-.021l5.931-4.238c.184-.13.41.096.28.28l-4.238 5.931a.2.2 0 00-.02.196l2.592 6.05a.35.35 0 00.654-.027L20.78 3.664a.35.35 0 00-.443-.443z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgShare;
