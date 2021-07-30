import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNoDollars(props) {
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
        d="M18.509 18.216A9 9 0 115.784 5.49l3.097 3.097c-.145.319-.224.674-.224 1.06 0 1.352.98 2.156 2.549 2.607l.392.113v3.71c-1.03-.108-1.872-.637-1.96-1.647H8.383c.113 1.544 1.289 2.622 3.215 2.75v1.093h.804V17.18c1.64-.114 2.707-.908 3.073-1.999l3.034 3.034zm.651-.763l-3.574-3.574c-.193-1.248-1.252-1.841-2.158-2.158l-1.026-1.026V7.937c1.039.103 1.794.662 1.902 1.554h1.176c-.05-1.432-1.304-2.52-3.078-2.637V5.726h-.804v1.142c-.853.087-1.598.405-2.124.899L6.547 4.84A9 9 0 0119.16 17.454zM9.834 9.541v.048c0 .933.897 1.353 1.624 1.576L9.834 9.54zm1.764.35l-1.337-1.337c.308-.312.768-.527 1.337-.602V9.89zm1.513 2.927a8.841 8.841 0 00-.67-.21l-.04-.01v3.48c1.187-.133 2.04-.819 2.04-1.804 0-.045-.002-.09-.006-.132l-1.324-1.324z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgNoDollars;
