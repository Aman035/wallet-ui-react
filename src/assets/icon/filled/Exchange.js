import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchange(props) {
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
        d="M19.013 10.15a.546.546 0 00-.145.493 7 7 0 01-12.036 6.079.528.528 0 00-.76-.032.475.475 0 00-.026.654 8 8 0 0013.788-6.971c-.079-.383-.545-.498-.821-.222zm-1.224-2.989a.475.475 0 00.018-.664A8 8 0 004.192 13.75c.084.378.546.488.82.215.13-.13.18-.32.142-.5A7 7 0 0117.038 7.14a.528.528 0 00.75.021z"
        fill={props.color}
      />
      <Path
        d="M18.125 5.5v2h-2M7.875 16.5h-2v2"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17a5 5 0 100-10 5 5 0 000 10zm.224-1.5h-.448v-.61c-1.075-.07-1.731-.672-1.794-1.534h.7c.05.563.52.859 1.094.919v-2.07l-.219-.063c-.875-.251-1.422-.7-1.422-1.454 0-.86.703-1.455 1.64-1.55V8.5h.45v.629c.99.066 1.69.673 1.716 1.471h-.656c-.06-.498-.481-.81-1.06-.867v1.944l.218.06c.58.154 1.575.493 1.575 1.543 0 .853-.645 1.53-1.794 1.61v.61zm0-3.166v1.941c.662-.074 1.138-.457 1.138-1.006 0-.558-.525-.766-1.116-.93l-.022-.005zm-1.433-1.68c0 .556.57.786.985.903V9.741c-.602.08-.985.44-.985.914z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgExchange;
