import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgNode3Connections(props) {
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
        d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234c-.486.19-.867.591-1.03 1.092L12.54 7.165zm4.295 5.374l-4.296 4.296c.5.162.902.543 1.092 1.03l4.233-4.234a1.755 1.755 0 01-1.03-1.092zm-5.374 4.296l-4.296-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03zm0-9.67l-4.296 4.296a1.755 1.755 0 00-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03z"
        fill={props.color}
      />
      <Circle
        cx={12}
        cy={5.5}
        r={1.75}
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Circle
        cx={12}
        cy={18.5}
        r={1.75}
        fill={props.color}
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Circle
        cx={5.5}
        cy={12}
        r={1.75}
        fill={props.color}
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Circle
        cx={18.5}
        cy={12}
        r={1.75}
        fill={props.color}
        stroke={props.color}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgNode3Connections;
