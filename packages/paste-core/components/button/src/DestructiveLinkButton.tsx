import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box, BoxStyleProps, PseudoStylesProps} from '@twilio-paste/box';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor: BoxStyleProps = {color: 'colorTextLinkDestructive'};

const baseDestructiveLinkStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
  ...buttonTextColor,
  backgroundColor: 'none',
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
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveLinkStyles._hover,
  },
  _focus: {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    ...baseDestructiveLinkStyles._focus,
  },
  _active: {
    // @ts-ignore
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
    // @ts-ignore
    ...baseDestructiveLinkStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    // @ts-ignore
    ...baseDestructiveLinkStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    // @ts-ignore
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
    // @ts-ignore
    ...baseDestructiveLinkStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    // @ts-ignore
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
  as = 'a',
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
