import {BoxStyleProps} from '@twilio-paste/box';

export const SizeStyles: {[key: string]: BoxStyleProps} = {
  default: {
    paddingTop: 'space30',
    paddingBottom: 'space30',
    paddingLeft: 'space50',
    paddingRight: 'space50',
    borderRadius: 'borderRadius20',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  small: {
    paddingTop: 'space10',
    paddingBottom: 'space10',
    paddingLeft: 'space30',
    paddingRight: 'space30',
    borderRadius: 'borderRadius10',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  icon: {
    padding: 'space30',
    borderRadius: 'borderRadius20',
    fontSize: '100%',
    /* To fix abnormal button padding-bottom */
    // unset is throwing off the height. Need to check with an icon.
    // lineHeight: 'unset',
    lineHeight: 'lineHeight20',
  },
  reset: {
    padding: 'space0',
    fontSize: '100%',
  },
};

export const ResetStyles: BoxStyleProps = {
  appearance: 'none',
  background: 'none',
  borderWidth: 'borderWidth20',
  borderStyle: 'solid',
  borderColor: 'transparent',
  display: 'inline-block',
  outline: 'none',
  backgroundColor: 'none',
  transition: 'background-color 100ms ease-in, border-color 100ms ease-in',
  fontFamily: 'fontFamilyText',
  fontWeight: 'fontWeightSemibold',
  textDecoration: 'none',
  position: 'relative',
  // @ts-ignore
  __moz_focus_inner: {
    border: 'none',
  },
};

export const CursorStyles: {[key: string]: BoxStyleProps} = {
  enabled: {
    cursor: 'pointer',
  },
  disabled: {
    cursor: 'not-allowed',
  },
  loading: {
    cursor: 'wait',
  },
};
