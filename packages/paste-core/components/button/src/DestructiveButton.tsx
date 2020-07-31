import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box, BoxStyleProps, PseudoStylesProps} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor: BoxStyleProps = {color: 'colorTextInverse'};

const baseDestructiveStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
  ...buttonTextColor,
  _hover: buttonTextColor,
  _focus: buttonTextColor,
  _active: buttonTextColor,
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseDestructiveStyles,
  ...CursorStyles.enabled,
  backgroundColor: 'colorBackgroundDestructive',
  borderColor: 'colorBorderDestructive',

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveStyles._hover,
    backgroundColor: 'colorBackgroundDestructiveDarker',
    borderColor: 'colorBorderDestructiveDarker',
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveStyles._focus,
    borderColor: 'colorBorderDestructiveDarker',
    boxShadow: 'shadowFocus',
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveStyles._active,
    backgroundColor: 'colorBackgroundDestructiveDarker',
    borderColor: 'colorBorderDestructiveDarker',
  },
};
const baseLoadingStyles = {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundDestructiveDarker',
  borderColor: 'colorBorderDestructiveDarker',
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...baseDestructiveStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...baseDestructiveStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...baseDestructiveStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...baseDestructiveStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundDestructiveLight',
  borderColor: 'colorBorderDestructiveLight',
};
const disabledStyles = {
  ...baseDestructiveStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...baseDestructiveStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...baseDestructiveStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const DestructiveButton: React.FC<DirectButtonProps> = ({
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
    // @ts-ignore
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
