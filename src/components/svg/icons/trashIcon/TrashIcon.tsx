import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TrashIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#B2B2B2"
      d="M3.054 18c-.56 0-1.04-.196-1.438-.587A1.91 1.91 0 0 1 1.018 16V3A.994.994 0 0 1 0 2a.994.994 0 0 1 1.018-1h4.071a.994.994 0 0 1 1.018-1h4.072a.994.994 0 0 1 1.017 1h4.072a.994.994 0 0 1 1.018 1 .994.994 0 0 1-1.018 1v13c0 .55-.2 1.02-.598 1.413a1.978 1.978 0 0 1-1.438.587H3.054Zm3.053-4a.994.994 0 0 0 1.018-1V6a.994.994 0 0 0-1.018-1A.994.994 0 0 0 5.09 6v7a.994.994 0 0 0 1.018 1Zm4.072 0a.994.994 0 0 0 1.017-1V6a.994.994 0 0 0-1.018-1 .994.994 0 0 0-1.017 1v7a.994.994 0 0 0 1.018 1Z"
    />
  </Svg>
);
export default TrashIcon;
