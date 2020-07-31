import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box, BoxStyleProps, PseudoStylesProps} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor: BoxStyleProps = {color: 'colorTextLink'};

const baseSecondaryStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
  ...buttonTextColor,
  _hover: {color: 'colorTextLinkDarker'},
  _focus: {color: 'colorTextLinkDarker'},
  _active: {color: 'colorTextLinkDarker'},
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseSecondaryStyles,
  ...CursorStyles.enabled,
  backgroundColor: 'colorBackgroundBody',
  borderColor: 'colorBorderPrimary',

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...baseSecondaryStyles._hover,
    backgroundColor: 'colorBackgroundPrimaryLightest',
    borderColor: 'colorBorderPrimaryDarker',
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseSecondaryStyles._focus,
    backgroundColor: 'colorBackgroundPrimaryLightest',
    borderColor: 'colorBorderPrimaryDarker',
    boxShadow: 'shadowFocus',
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseSecondaryStyles._active,
    backgroundColor: 'colorBackgroundPrimaryLightest',
    borderColor: 'colorBorderPrimaryDarker',
  },
};
const baseLoadingStyles = {
  color: 'colorTextLinkDarker',
  backgroundColor: 'colorBackgroundPrimaryLighter',
  borderColor: 'colorBorderPrimaryLighter',
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...baseSecondaryStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...baseSecondaryStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...baseSecondaryStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...baseSecondaryStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  color: 'colorTextLinkLight',
  backgroundColor: 'colorBackgroundBody',
  borderColor: 'colorBorderPrimaryLight',
};
const disabledStyles = {
  ...baseSecondaryStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...baseSecondaryStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...baseSecondaryStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const SecondaryButton: React.FC<DirectButtonProps> = ({
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
