import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNodeHardware(props) {
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
        d="M20.539 14.107h-.5v.025l.5-.025zm0-4.123l-.5-.025v.025h.5zm-.355 4.767l-.245-.435.245.435zm-7.13 4.024l.245.436-.246-.436zm-2.057.003l-.245.436.245-.436zM3.82 14.752l.245-.436-.245.436zm-.355-.659l.499.035v-.035h-.5zm0-4.095h.5v-.017l-.001-.018-.5.035zm.345-.653l-.252-.432.252.432zm7.157-4.172l-.252-.432.252.432zm2.116.003l-.253.43.253-.43zm7.112 4.17l-.253.431.253-.431zm.844 4.761V9.984h-1v4.123h1zm-.609 1.08c.426-.24.63-.682.608-1.104l-.998.049a.193.193 0 01-.101.184l.491.87zM13.3 19.21l7.131-4.024-.491-.871-7.132 4.024.492.87zm-2.547.003a2.597 2.597 0 002.547-.003l-.492-.871a1.597 1.597 0 01-1.566.002l-.489.872zm-7.176-4.026l7.176 4.026.49-.872-7.177-4.026-.49.872zm-.61-1.13c-.03.431.173.886.61 1.13l.489-.872a.194.194 0 01-.101-.188l-.998-.07zm-.001-4.06v4.095h1V9.998h-1zm.999-.035a.194.194 0 01.098-.186l-.504-.864a1.193 1.193 0 00-.592 1.12l.998-.07zm.098-.186l7.156-4.172-.503-.864-7.157 4.172.504.864zm7.156-4.172a1.597 1.597 0 011.612.002l.506-.863a2.597 2.597 0 00-2.621-.003l.503.864zm1.612.002l7.112 4.17.506-.862-7.112-4.17-.506.862zm7.112 4.17c.069.04.101.108.098.182l.998.05c.021-.417-.175-.85-.59-1.094l-.506.862z"
        fill="#000"
      />
      <Path
        d="M3.82 10.558a.699.699 0 01-.01-1.213l7.156-4.172a2.097 2.097 0 012.117.003l7.112 4.17a.699.699 0 01-.01 1.212l-7.132 4.023c-.638.36-1.417.361-2.056.003L3.82 10.558z"
        stroke="#000"
      />
    </Svg>
  );
}

export default SvgNodeHardware;
