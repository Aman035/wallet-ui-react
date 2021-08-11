import * as React from "react";
import Svg, { G, Path, Mask, Defs, ClipPath } from "react-native-svg";

function SvgLogo(props) {
  return (
    <Svg
      width={121}
      height={100}
      viewBox="0 0 121 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#Logo_svg__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.818 72.748A1.93 1.93 0 009.694 74.2h81.833a9.075 9.075 0 007.781-4.406l13.241-22.069c.157-.26.234-.538.243-.81h3.637a5.285 5.285 0 01-.767 2.678l-13.241 22.069a12.705 12.705 0 01-10.894 6.168H9.694c-3.07 0-5.307-2.376-5.553-5.082h3.677z"
          fill={props.color}
        />
        <Path
          fill={props.color}
          d="M4.159 54.114h3.63v18.997h-3.63zM112.792 29.067h3.63v17.908h-3.63z"
        />
        <Mask
          id="Logo_svg__a"
          maskUnits="userSpaceOnUse"
          x={4}
          y={23}
          width={113}
          height={38}
        >
          <Path
            d="M18.012 30.036A12.463 12.463 0 0128.7 23.985h82.398c4.138 0 6.694 4.515 4.565 8.063l-13.241 22.069a12.705 12.705 0 01-10.894 6.168H9.694c-4.327 0-7-4.72-4.773-8.43l13.091-21.82z"
            fill="#C4C4C4"
          />
        </Mask>
        <G mask="url(#Logo_svg__a)" stroke={props.color} strokeWidth={3.63}>
          <Path d="M11.182 46.915l25.151 12.194M14.691 34.21l51.934 25.18M26.428 25.256l68.266 33.099M57.404 25.256l46.164 22.383M89.59 25.256l21.666 10.505M107.125 25.623L34.789 60.154M109.281 39.296L65.385 60.251M78.906 25.139L8.147 58.917M48.777 25.139L10.886 43.227" />
        </G>
        <Path
          d="M19.569 30.97a10.648 10.648 0 019.13-5.17h82.398c2.727 0 4.412 2.976 3.009 5.314l-13.241 22.069a10.891 10.891 0 01-9.338 5.287H9.694c-2.916 0-4.717-3.18-3.217-5.68L19.57 30.97z"
          stroke={props.color}
          strokeWidth={3.63}
        />
      </G>
      <Defs>
        <ClipPath id="Logo_svg__clip0">
          <Path
            fill="#fff"
            transform="translate(.484)"
            d="M0 0h120.032v100H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLogo;