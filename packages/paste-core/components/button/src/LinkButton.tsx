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

const baseLinkStyles: BoxStyleProps | PseudoStylesProps = {
  ...ResetStyles,
  ...buttonTextColor,
  backgroundColor: 'none',
  _hover: {color: 'colorTextLinkDark', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkDark', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDarker', textDecoration: 'underline'},
};

const defaultStyles: BoxStyleProps | {[key: string]: BoxStyleProps} = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseLinkStyles,
  ...CursorStyles.enabled,

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._hover,
  },
  _focus: {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._focus,
  },
  _active: {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    ...baseLinkStyles._active,
  },
};

const baseLoadingStyles: BoxStyleProps = {
  color: 'colorTextLinkDarker',
};

/* eslint-disable no-underscore-dangle */
const loadingStyles: BoxStyleProps | {[key: string]: BoxStyleProps} = {
  ...baseLinkStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    // @ts-ignore
    ...baseLinkStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    // @ts-ignore
    ...baseLinkStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    // @ts-ignore
    ...baseLinkStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles: BoxStyleProps = {
  color: 'colorTextLinkLight',
};

const disabledStyles: BoxStyleProps | {[key: string]: BoxStyleProps} = {
  ...baseLinkStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    // @ts-ignore
    ...baseLinkStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    // @ts-ignore
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
