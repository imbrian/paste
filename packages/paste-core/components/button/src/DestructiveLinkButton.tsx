import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor = {color: 'colorTextLinkDestructive'};

const baseDestructiveLinkStyles = {
  ...ResetStyles,
  ...buttonTextColor,
  backgroundColor: 'transparent',
  _hover: {color: 'colorTextLinkDestructiveDark', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkDestructiveDark', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDestructiveDarker', textDecoration: 'underline'},
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseDestructiveLinkStyles,
  ...CursorStyles.enabled,

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveLinkStyles._hover,
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveLinkStyles._focus,
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveLinkStyles._active,
  },
};
const baseLoadingStyles = {
  color: 'colorTextLinkDestructiveDarker',
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...baseDestructiveLinkStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...baseDestructiveLinkStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...baseDestructiveLinkStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...baseDestructiveLinkStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  color: 'colorTextLinkDestructiveLight',
};
const disabledStyles = {
  ...baseDestructiveLinkStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...baseDestructiveLinkStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...baseDestructiveLinkStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const DestructiveLinkButton: React.FC<DirectButtonProps> = ({
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
