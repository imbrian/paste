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

const basePrimaryStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
  ...buttonTextColor,
  _hover: buttonTextColor,
  _focus: buttonTextColor,
  _active: buttonTextColor,
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...basePrimaryStyles,
  ...CursorStyles.enabled,
  backgroundColor: 'colorBackgroundPrimary',
  borderColor: 'colorBorderPrimary',

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._hover,
    backgroundColor: 'colorBackgroundPrimaryDarker',
    borderColor: 'colorBorderPrimaryDarker',
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._focus,
    borderColor: 'colorBorderPrimaryDarker',
    boxShadow: 'shadowFocus',
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._active,
    backgroundColor: 'colorBackgroundPrimaryDark',
    borderColor: 'colorBorderPrimaryDarker',
  },
};
const baseLoadingStyles = {
  backgroundColor: 'colorBackgroundPrimaryDarker',
  borderColor: 'colorBorderPrimaryDarker',
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...basePrimaryStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...basePrimaryStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...basePrimaryStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...basePrimaryStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  backgroundColor: 'colorBackgroundPrimaryLight',
  borderColor: 'colorBorderPrimaryLight',
};
const disabledStyles = {
  ...basePrimaryStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...basePrimaryStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...basePrimaryStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const PrimaryButton: React.FC<DirectButtonProps> = ({
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
