import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKey(props) {
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
        d="M13.46 14.313l-.025-.5-.26.014-.138.22.423.266zm-3.435 5.471l.423.266-.423-.266zM5.43 17.092l-.423-.266.423.266zm3.157-5.028l.424.266.182-.29-.205-.275-.4.299zm4.154-5.58l-.121-.485.12.485zm1.995 8.143c3.337-.832 5.425-4.12 4.614-7.374l-.97.242c.668 2.682-1.049 5.454-3.885 6.161l.242.97zm-1.25.185c.414-.02.832-.081 1.25-.185l-.241-.97c-.355.088-.71.14-1.06.157l.05.998zm-3.038 5.238l3.436-5.471-.847-.532-3.435 5.471.846.532zm-1.512 1.096a2.5 2.5 0 001.512-1.096l-.846-.532a1.5 1.5 0 01-.908.658l.242.97zm-1.974.493l1.974-.492-.242-.97-1.974.491.242.97zm-1.818-1.093a1.5 1.5 0 001.818 1.093l-.242-.97a.5.5 0 01-.606-.365l-.97.242zm-.446-1.786l.446 1.786.97-.242-.445-1.786-.97.242zm.309-1.934a2.5 2.5 0 00-.309 1.934l.97-.242a1.5 1.5 0 01.186-1.16l-.847-.532zm3.157-5.028l-3.157 5.028.847.532L9.01 12.33l-.847-.532zm-.962-1.516c.193.773.533 1.474.984 2.08l.802-.597a4.838 4.838 0 01-.816-1.725l-.97.242zm4.613-7.374c-3.337.832-5.425 4.12-4.613 7.374l.97-.242c-.669-2.682 1.048-5.454 3.885-6.161l-.242-.97zm7.535 4.345c-.812-3.254-4.199-5.177-7.535-4.345l.242.97c2.837-.707 5.654.935 6.322 3.617l.97-.242zm-4.67.809a1.5 1.5 0 01-1.093 1.818l.242.97a2.5 2.5 0 001.821-3.03l-.97.242zm-1.818-1.093a1.5 1.5 0 011.818 1.093l.97-.242a2.5 2.5 0 00-3.03-1.821l.242.97zm-1.093 1.818a1.5 1.5 0 011.093-1.818l-.242-.97a2.5 2.5 0 00-1.821 3.03l.97-.242zm1.818 1.093a1.5 1.5 0 01-1.818-1.093l-.97.242a2.5 2.5 0 003.03 1.821l-.242-.97z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgKey;
