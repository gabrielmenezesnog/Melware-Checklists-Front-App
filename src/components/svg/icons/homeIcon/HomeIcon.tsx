import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HomeIconProps {
  active: boolean;
  props?: any;
}

const HomeIcon: React.FC<HomeIconProps> = ({active, props}) => {
  const color = active ? '#fff' : '#b2b2b2';

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}>
      <Path
        fill={color}
        d="M0 19.635V7.77c0-.35.082-.68.245-.992.164-.313.39-.57.678-.772L8.615.441A2.28 2.28 0 0 1 9.995 0c.518 0 .981.147 1.39.441l7.692 5.565c.288.202.514.46.678.772.163.312.245.643.245.992v11.865c0 .366-.142.685-.427.957A1.403 1.403 0 0 1 18.57 21h-4.835c-.327 0-.6-.106-.822-.317a1.043 1.043 0 0 1-.332-.785v-6.51c0-.313-.11-.575-.331-.786a1.144 1.144 0 0 0-.822-.317H8.57c-.326 0-.6.106-.822.317a1.043 1.043 0 0 0-.331.785v6.51c0 .313-.111.575-.332.786a1.144 1.144 0 0 1-.822.317H1.429c-.383 0-.717-.136-1.002-.408C.142 20.32 0 20 0 19.635Z"
      />
    </Svg>
  );
};

export default HomeIcon;
