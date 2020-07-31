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
    lineHeight: 'unset',
  },
  reset: {
    padding: 'space0',
    fontSize: '100%',
  },
};

export const ResetStyles: BoxStyleProps = {
  appearance: 'none',
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

/*
 * Sizes
 */

/*
 * Style getters
 */
/*
const buttonStateVariantStyles = ({
  variant,
  buttonState,
}: ButtonWrapperProps): SerializedStyles | ((props: ButtonWrapperProps) => SerializedStyles) => {
  const isDisabled = buttonState === 'disabled';
  const isLoading = buttonState === 'loading';

  switch (variant) {
    case 'reset':
      if (isDisabled) return variantResetDisabled;
      if (isLoading) return variantResetLoading;
      return variantResetEnabled;
    case 'secondary':
      if (isDisabled) return variantSecondaryDisabled;
      if (isLoading) return variantSecondaryLoading;
      return variantSecondaryEnabled;
    case 'link':
      if (isDisabled) return variantLinkDisabled;
      if (isLoading) return variantLinkLoading;
      return variantLinkEnabled;
    case 'destructive':
      if (isDisabled) return variantDestructiveDisabled;
      if (isLoading) return variantDestructiveLoading;
      return variantDestructiveEnabled;
    case 'destructive_link':
      if (isDisabled) return variantDestructiveLinkDisabled;
      if (isLoading) return variantDestructiveLinkLoading;
      return variantDestructiveLinkEnabled;
    case 'primary':
    default:
      if (isDisabled) return variantPrimaryDisabled;
      if (isLoading) return variantPrimaryLoading;
      return variantPrimaryEnabled;
  }
};

const buttonFullWidthStyles = ({fullWidth}: ButtonWrapperProps): SerializedStyles => EmotionCSS`
  width: ${fullWidth ? '100%' : 'auto'};
`;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  /* To position the loading spinner correctly.
   * Pulled out of styles.ts so it works for the reset styles too.
   * /
  position: relative;
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonStateVariantStyles}
  ${buttonFullWidthStyles}
`;

const childrenOpacityStyles = ({buttonState}: ButtonChildrenProps): SerializedStyles => EmotionCSS`
  opacity: ${buttonState === 'loading' ? '0' : '100%'};
`;

export const ButtonChildren = styled.span<ButtonChildrenProps>`
  display: grid;
  grid-auto-flow: column;
  /*
   * Neat way to make sure children are spaced apart correctly
   * https://caniuse.com/#feat=multicolumn
   * /
  column-gap: ${themeGet('space.space20')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-decoration: inherit;
  ${childrenOpacityStyles}
`;

export const SpinnerWrapper = styled(Absolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 14px;
`;
*/
