import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMining(props) {
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
        d="M20.587 9.406c-1.726-1.655-4.163-3.002-7.014-3.713-2.852-.71-5.636-.666-7.937-.015 1.865-1.764 5.069-2.503 8.36-1.683 3.29.82 5.773 2.978 6.59 5.41z"
        fill={props.color}
      />
      <Path
        d="M20.587 9.406l-.346.36a.5.5 0 00.82-.52l-.474.16zM5.637 5.678l-.345-.363a.5.5 0 00.48.844l-.136-.48zm7.815.5c2.775.692 5.132 2 6.789 3.589l.692-.722c-1.795-1.721-4.312-3.107-7.24-3.837l-.241.97zm-7.68-.019c2.21-.625 4.904-.673 7.68.02l.242-.971c-2.928-.73-5.8-.688-8.194-.01l.272.961zm.208-.118c1.714-1.622 4.73-2.35 7.895-1.56l.242-.971c-3.418-.852-6.81-.102-8.825 1.805l.688.726zm7.895-1.56c3.164.788 5.486 2.847 6.238 5.084l.948-.318c-.884-2.63-3.526-4.885-6.944-5.737l-.242.97z"
        fill={props.color}
      />
      <Path
        fill={props.color}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.724 5.997l1.455.363-1.21 4.851-1.455-.362z"
      />
      <Path
        fill={props.color}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.03 10.727l2.425.605-2.298 9.218-2.426-.605zM12.358 3.329l3.396.847-.665 2.668-3.396-.847z"
      />
    </Svg>
  );
}

export default SvgMining;
