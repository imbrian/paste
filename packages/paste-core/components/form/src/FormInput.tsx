import * as React from 'react';
import * as PropTypes from 'prop-types';
import {BoxProps, Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {FieldWrapper} from './shared/FieldWrapper';
import {Prefix} from './shared/Prefix';
import {Suffix} from './shared/Suffix';
import {FormInputTypes} from './shared/types';
import {safelySpreadFormControlProps} from './shared/Utils';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement>, Pick<BoxProps, 'element'> {
  id: string;
  type: FormInputTypes;
  value: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hasError?: boolean;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  className?: never;
  style?: never;
  size?: never;
  height?: never;
  width?: never;
}

interface TypeProps {
  type: FormInputTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

export const InputElement = React.forwardRef<HTMLInputElement, FormInputProps>(({element, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="input"
      appearance="none"
      borderWidth="borderWidth0"
      backgroundColor="transparent"
      element={element}
      outline="none"
      resize="none"
      display="block"
      width="100%"
      fontFamily="inherit"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightNormal"
      color="colorText"
      paddingTop="space30"
      paddingRight="space40"
      paddingBottom="space30"
      paddingLeft="space40"
      borderRadius="borderRadius20"
      boxShadow="none"
      _placeholder={{
        color: 'colorTextWeak',
        fontStyle: 'italic',
      }}
      _disabled={{
        cursor: 'not-allowed',
        color: 'colorTextWeak',
      }}
      ref={ref}
    />
  );
});

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      element = 'FORM_INPUT',
      type,
      name,
      value,
      placeholder,
      disabled,
      readOnly,
      required,
      hasError,
      insertBefore,
      insertAfter,
      ...props
    },
    ref
  ) => {
    const typeProps: TypeProps = {type};

    // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
    if (type === 'number') {
      typeProps.type = 'text';
      typeProps.inputmode = 'numeric';
      typeProps.pattern = '[0-9]*';
    }

    return (
      <FieldWrapper
        element={`${element}_WRAPPER`}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        hasError={hasError}
      >
        {insertBefore && <Prefix>{insertBefore}</Prefix>}
        <InputElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          {...typeProps}
          element={element}
          ref={ref}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
        />
        {insertAfter && <Suffix>{insertAfter}</Suffix>}
      </FieldWrapper>
    );
  }
);

FormInput.displayName = 'FormInput';

if (process.env.NODE_ENV === 'development') {
  FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']).isRequired as any,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
}

export {FormInput};
