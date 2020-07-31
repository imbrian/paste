import * as React from 'react';
import * as PropTypes from 'prop-types';
// import {variant} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Spinner} from '@twilio-paste/spinner';
import {getButtonState, handlePropValidation} from './utils';

import {ButtonProps, ButtonStates, ButtonVariants, ButtonSizes, ButtonTabIndexes} from './types';
import {PrimaryButton} from './PrimaryButton';
import {SecondaryButton} from './SecondaryButton';
import {DestructiveButton} from './DestructiveButton';
import {LinkButton} from './LinkButton';
import {DestructiveLinkButton} from './DestructiveLinkButton';

// memo
// forwardref
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {size, variant, children, ...rest} = props;
  const buttonState = getButtonState(rest.disabled, rest.loading);
  // wrap in cache hook
  // eslint-disable-next-line no-nested-ternary
  // const cursor = loading ? 'wait' : disabled ? 'not-allowed' : 'pointer';
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
    'aria-busy': buttonState === 'loading' ? 'true' : 'false',
    className: undefined,
    style: undefined,
    ref,
  };

  switch (variant) {
    case 'primary':
      return (
        // @ts-ignore
        <PrimaryButton buttonState={buttonState} size={smartDefaultSize as ButtonSizes} {...rest} {...extraProps}>
          {children}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        // @ts-ignore
        <SecondaryButton buttonState={buttonState} size={smartDefaultSize as ButtonSizes} {...rest} {...extraProps}>
          {children}
        </SecondaryButton>
      );
    case 'destructive':
      return (
        // @ts-ignore
        <DestructiveButton buttonState={buttonState} size={smartDefaultSize as ButtonSizes} {...rest} {...extraProps}>
          {children}
        </DestructiveButton>
      );
    case 'link':
      return (
        // @ts-ignore
        <LinkButton buttonState={buttonState} size={smartDefaultSize as ButtonSizes} {...rest} {...extraProps}>
          {children}
        </LinkButton>
      );
    case 'destructive_link':
      return (
        // @ts-ignore
        <DestructiveLinkButton
          buttonState={buttonState}
          size={smartDefaultSize as ButtonSizes}
          {...rest}
          {...extraProps}
        >
          {children}
        </DestructiveLinkButton>
      );
    default:
      return null;
  }
});

/*
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({as, children, disabled, fullWidth, href, loading, size ='default', tabIndex, variant, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);
    const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';


    return (
      <ButtonWrapper
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        as={as}
        buttonState={buttonState}
        disabled={showDisabled}
        fullWidth={fullWidth}
        href={href}
        size={defaultSize}
        tabIndex={tabIndex}
        variant={variant}
        {...props}
        className={undefined}
        style={undefined}
        ref={ref}
      >
        <ButtonChildren buttonState={buttonState}>{children}</ButtonChildren>
        {showLoading ? (
          <SpinnerWrapper as="span">
            <Spinner decorative={false} title="Loading, please wait." delay={0} />
          </SpinnerWrapper>
        ) : null}
      </ButtonWrapper>
    );
  }
);

Button.defaultProps = {
  as: 'button',
  fullWidth: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

if (process.env.NODE_ENV === 'development') {
  Button.propTypes = {
    as: PropTypes.string,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']),
    tabIndex: PropTypes.oneOf([0, -1]),
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset']) as any,
  };
}

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
export {NewButton};
*/
