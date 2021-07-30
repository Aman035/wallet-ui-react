import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMagicWand(props) {
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
        d="M7.999 20l7-7.003a2.822 2.822 0 00-3.99-3.993l-7.007 6.997a2.827 2.827 0 103.997 4zM11 11l2 2 1-1a1.414 1.414 0 10-2-2l-1 1z"
        fill="#000"
      />
      <Path
        d="M6.758 4.897c.067-.247.417-.247.483 0L7.6 6.225a.25.25 0 00.176.176l1.328.358c.247.066.247.416 0 .482L7.775 7.6a.25.25 0 00-.176.176L7.24 9.103c-.066.247-.416.247-.482 0L6.4 7.775a.25.25 0 00-.176-.176l-1.329-.358c-.246-.066-.246-.416 0-.482L6.225 6.4a.25.25 0 00.176-.176l.357-1.328zM16.759 3.897c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 00.176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 00-.176.176l-.358 1.328c-.066.247-.416.247-.482 0L16.4 6.775a.25.25 0 00-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 00.177-.176l.358-1.328zM17.759 12.897c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 00.176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 00-.176.176l-.358 1.328c-.066.247-.416.247-.482 0l-.358-1.328a.25.25 0 00-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 00.177-.176l.358-1.328z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgMagicWand;
