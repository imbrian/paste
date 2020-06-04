import * as React from 'react';
import {Display, IconSize, TextColor} from '@twilio-paste/style-props';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';

export interface IconWrapperProps extends Pick<BoxProps, 'element' | 'variant'> {
  as?: keyof JSX.IntrinsicElements;
  display?: Display;
  size?: IconSize;
  iconColor?: TextColor;
}

const IconWrapper: React.FC<IconWrapperProps> = ({display, iconColor, size, ...props}) => {
  return (
    <Box element="ICON" {...safelySpreadBoxProps(props)} as="span" color={iconColor} display={display} size={size} />
  );
};

IconWrapper.defaultProps = {
  display: 'inline-flex',
  iconColor: 'currentColor',
  size: 'sizeIcon30',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
