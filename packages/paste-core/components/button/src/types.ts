type ButtonTypes = 'submit' | 'button' | 'reset';
export type ButtonSizes = 'small' | 'default' | 'icon' | 'reset';
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'destructive_link' | 'link' | 'reset';
export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  size?: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  type?: ButtonTypes;
  variant: ButtonVariants;
}

export interface DirectButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  size: ButtonSizes;
  tabIndex?: ButtonTabIndexes;
  type?: ButtonTypes;
  buttonState: ButtonStates;
}

export interface ButtonWrapperProps extends ButtonProps {
  buttonState: ButtonStates;
}

export interface ButtonChildrenProps {
  buttonState: ButtonStates;
}
export interface ButtonContentsProps {
  buttonState: ButtonStates;
  showLoading: boolean;
}
