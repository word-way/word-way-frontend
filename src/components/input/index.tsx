import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

export interface InputProps {
  autoFocus: boolean;
  disabled: boolean;
  value: string;
  label: string;
  color: string;
  type: 'text' | 'number' | 'password';
  className: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput = (props: InputProps): React.ReactElement<InputProps> => {
  const { 
    disabled,
    className,
    color,
    ...inputProps
  } = props;

  return (
    <input
      {...inputProps}
    />
  );
};

const Input = styled(BaseInput)(() => {
  return css`
    background: transparent;
    border-radius: 4px;
    padding: 6px 16px;
    min-width: 64px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;
    border: 1px solid black;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  `;
});

BaseInput.defaultProps = {
  autofocus: false,
  disabled: false,
  color: 'primary',
  type: 'text',
  label: '',
  className: null,
  value: '',
};

export default Input;
