import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const GetBackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#9C9C9C"
        fillRule="evenodd"
        d="M2 16a14 14 0 1 0 28 0 14 14 0 0 0-28 0Zm30 0a16 16 0 1 1-32 0 16 16 0 0 1 32 0Zm-9-1a1 1 0 0 1 0 2H11.414l4.294 4.292a1.001 1.001 0 0 1-1.416 1.416l-6-6a1 1 0 0 1 0-1.416l6-6a1.001 1.001 0 1 1 1.416 1.416L11.414 15H23Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GetBackIcon;
