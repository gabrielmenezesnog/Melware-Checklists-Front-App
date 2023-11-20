import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CloseIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#9C9C9C"
      d="M6.969 6.969a.75.75 0 0 1 1.062 0L12 10.939l3.969-3.97a.75.75 0 1 1 1.062 1.062L13.061 12l3.97 3.969a.752.752 0 0 1-1.062 1.062L12 13.061l-3.969 3.97a.752.752 0 0 1-1.282-.531.751.751 0 0 1 .22-.531L10.939 12 6.97 8.031a.75.75 0 0 1 0-1.062Z"
    />
  </Svg>
);
export default CloseIcon;
