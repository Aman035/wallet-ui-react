import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEdit(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.146 19.354l.354.353-.354-.353zm8.5-8.5l.353.354.353-.353L16 10.5l-.354.354zm-2.5-2.5l.353-.353-.354-.353-.353.353.353.354zm-8.5 8.5l.354.353-.354-.353zM15.09 6.41l-.354-.353-.353.353.353.354.354-.354zm2.5 2.5l-.354.354.354.353.353-.353-.353-.354zm1.203-1.203l-.354-.353.354.353zm0-1.414l.353-.354-.353.354zm-1.086-1.086l-.353.354.353-.354zm-1.414 0l.353.354-.353-.354zM5 19v-1.793H4V19h1zm0 0H4a1 1 0 001 1v-1zm1.793 0H5v1h1.793v-1zm0 0v1a1 1 0 00.707-.293L6.793 19zm8.499-8.499L6.792 19l.708.707 8.499-8.499-.707-.707zm.707 0l-2.5-2.5-.707.707 2.5 2.5.707-.707zM5 17.207l8.499-8.499-.707-.707-8.5 8.499.708.707zm0 0l-.707-.707a1 1 0 00-.293.707h1zm9.736-10.443l2.5 2.5.707-.707-2.5-2.5-.707.707zm3.703.59l-1.203 1.203.707.707 1.203-1.203-.707-.707zm0-.708a.5.5 0 010 .708l.707.707a1.5 1.5 0 000-2.122l-.707.707zm-1.085-1.085l1.085 1.085.707-.707-1.085-1.085-.707.707zm-.708 0a.5.5 0 01.708 0l.707-.707a1.5 1.5 0 00-2.122 0l.707.707zm-1.203 1.203l1.203-1.203-.707-.707-1.203 1.203.707.707z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgEdit;