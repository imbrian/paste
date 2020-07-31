import {ButtonStates, ButtonProps} from './types';

export const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

export const handlePropValidation = ({href, tabIndex, variant, size, fullWidth, children}: ButtonProps): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  // if (as !== 'a' && hasHref) {
  //   throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
  // }
  // if (as === 'a' && !hasHref) {
  //   throw new Error(`[Paste: Button] Missing href prop for link button.`);
  // }
  // if (as === 'a' && variant === 'link') {
  //   throw new Error(`[Paste: Button] This should be a link. Use the [Paste: Anchor] component.`);
  // }

  // TODO: desctructive_link / href errors
  if (variant !== 'link' && hasHref) {
    throw new Error(
      `[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'variant="link"' or 'variant="destructive_link"'.`
    );
  }
  if (variant === 'link' && !hasHref) {
    throw new Error(`[Paste: Button] Missing href prop for link button.`);
  }
  if (variant === 'reset' && size !== 'reset') {
    throw new Error('[Paste: Button] The "RESET" variant can only be used with the "RESET" size.');
  }
  if (size === 'icon' && fullWidth) {
    throw new Error('[Paste: Button] Icon buttons should not be fullWidth.');
  }
  if (children == null) {
    throw new Error(`[Paste: Button] Must have non-null children.`);
  }
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Button] tabIndex must be 0 or -1.`);
  }
};
