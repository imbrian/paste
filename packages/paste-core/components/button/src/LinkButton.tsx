import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor = {color: 'colorTextLink'};

const baseLinkStyles = {
  ...ResetStyles,
  ...buttonTextColor,
  backgroundColor: 'transparent',
  _hover: {color: 'colorTextLinkDark', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkDark', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDarker', textDecoration: 'underline'},
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseLinkStyles,
  ...CursorStyles.enabled,

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._hover,
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._focus,
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._active,
  },
};
const baseLoadingStyles = {
  color: 'colorTextLinkDarker',
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...baseLinkStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...baseLinkStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...baseLinkStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...baseLinkStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  color: 'colorTextLinkLight',
};
const disabledStyles = {
  ...baseLinkStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...baseLinkStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...baseLinkStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const LinkButton: React.FC<DirectButtonProps> = ({
  as = 'button',
  loading,
  disabled,
  size,
  children,
  buttonState,
  fullWidth,
  ...props
}) => {
  return (
    // @ts-ignore
    <Box as={as} width={fullWidth ? '100%' : 'auto'} {...props} {...SizeStyles[size]} {...ButtonStyles[buttonState]}>
      {children}
    </Box>
  );
};
