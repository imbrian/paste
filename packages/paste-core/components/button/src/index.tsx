import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {styled} from '@twilio-paste/styling-library';
import {Spinner} from '@twilio-paste/spinner';
import {getButtonState, handlePropValidation} from './utils';
import {ButtonProps, ButtonSizes, ButtonChildrenProps, ButtonContentsProps} from './types';
import {PrimaryButton} from './PrimaryButton';
import {SecondaryButton} from './SecondaryButton';
import {DestructiveButton} from './DestructiveButton';
import {LinkButton} from './LinkButton';
import {DestructiveLinkButton} from './DestructiveLinkButton';
import {ResetButton} from './ResetButton';

export const ButtonChildren: React.FC<ButtonChildrenProps> = ({buttonState, children}) => {
  if (React.Children.count(children) > 1) {
    return (
      <Box as="span" textDecoration="inherit" opacity={buttonState === 'loading' ? '0' : '1'}>
        <Stack orientation="horizontal" spacing="space20">
          {children}
        </Stack>
      </Box>
    );
  }
  return (
    <Box as="span" textDecoration="inherit" opacity={buttonState === 'loading' ? '0' : '1'}>
      {children}
    </Box>
  );
};

export const SpinnerWrapper = styled(Absolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 14px;
`;

export const ButtonContents: React.FC<ButtonContentsProps> = ({buttonState, children, showLoading}) => {
  return (
    <>
      <ButtonChildren buttonState={buttonState}>{children}</ButtonChildren>
      {showLoading ? (
        <SpinnerWrapper as="span">
          <Spinner decorative={false} title="Loading, please wait." delay={0} />
        </SpinnerWrapper>
      ) : null}
    </>
  );
};

// memo
// forwardref
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {size, variant, children, ...rest} = props;
  const buttonState = getButtonState(rest.disabled, rest.loading);
  const showLoading = buttonState === 'loading';
  const showDisabled = buttonState !== 'default';

  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor

  const hoverStyles = {
    textDecoration: 'none',
  };
  const focusStyles = {
    boxShadow: 'shadowFocus',
  };
  */

  handlePropValidation(props);

  // If size isn't passed, come up with a smart default:
  // - 'reset' for variant 'link'
  // - 'icon' if there's 1 child that's an icon
  // - 'default' otherwise
  let smartDefaultSize = size;
  if (size == null) {
    if (variant === 'link' || variant === 'destructive_link') {
      smartDefaultSize = 'reset';
    } else if (React.Children.count(children) === 1) {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
            smartDefaultSize = 'icon';
          }
        }
      });
    } else {
      smartDefaultSize = 'default';
    }
  }

  const extraProps = {
    'aria-busy': buttonState === 'loading',
    className: undefined,
    style: undefined,
    ref,
  };

  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </PrimaryButton>
      );
    case 'secondary':
      return (
        // @ts-ignore
        <SecondaryButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </SecondaryButton>
      );
    case 'destructive':
      return (
        <DestructiveButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </DestructiveButton>
      );
    case 'link':
      return (
        <LinkButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </LinkButton>
      );
    case 'destructive_link':
      return (
        <DestructiveLinkButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </DestructiveLinkButton>
      );
    case 'reset':
      return (
        <ResetButton
          buttonState={buttonState}
          disabled={showDisabled}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          <ButtonContents buttonState={buttonState} showLoading={showLoading}>
            {children}
          </ButtonContents>
        </ResetButton>
      );
    default:
      return null;
  }
});

// Button.defaultProps = {
//   as: 'button',
//   fullWidth: false,
//   loading: false,
//   type: 'button',
//   variant: 'primary',
// };

// if (process.env.NODE_ENV === 'development') {
//   Button.propTypes = {
//     as: PropTypes.string,
//     fullWidth: PropTypes.bool,
//     href: PropTypes.string,
//     loading: PropTypes.bool,
//     size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']),
//     tabIndex: PropTypes.oneOf([0, -1]),
//     type: PropTypes.oneOf(['submit', 'button', 'reset']),
//     variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset']) as any,
//   };
// }

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
