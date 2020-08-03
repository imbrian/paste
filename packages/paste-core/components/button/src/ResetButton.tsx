import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box, BoxStyleProps, PseudoStylesProps} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */

const baseLinkStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
};

const defaultStyles: BoxStyleProps = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseLinkStyles,
  ...CursorStyles.enabled,
};

const baseLoadingStyles: BoxStyleProps = {
  color: 'colorTextLinkDarker',
};

/* eslint-disable no-underscore-dangle */
const loadingStyles: BoxStyleProps = {
  ...baseLinkStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
};

const baseDisabledStyles: BoxStyleProps = {
  color: 'colorTextLinkLight',
};

const disabledStyles: BoxStyleProps = {
  ...baseLinkStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const ResetButton: React.FC<DirectButtonProps> = ({
  as = 'button',
  loading,
  size,
  href,
  children,
  buttonState,
  fullWidth,
  ...props
}) => {
  return (
    <Box
      as={as}
      href={href}
      width={fullWidth ? '100%' : 'auto'}
      {...props}
      {...SizeStyles[size]}
      {...ButtonStyles[buttonState]}
    >
      {children}
    </Box>
  );
};
