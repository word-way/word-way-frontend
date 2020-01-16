import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import styles from './input.module.scss';
import { ColorList } from '../../static/const';

export interface InputProps {
  disabled: boolean;
  value: string;
  label: string;
  color: string;
  type: 'text';
  className: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps): React.ReactElement<InputProps> => {
  const { 
    disabled,
    className,
    color,
    ...inputProps
  } = props;

  const themeColor = color ? Object(ColorList)[color] : ColorList.default;
  const StyleInput = styled.input`
    background: transparent;
    border-radius: 4px;
    padding: 6px 16px;
    min-width: 64px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;
    border: 1px solid ${themeColor};
  `;
  const classProps: string = classnames(
    {
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <StyleInput 
        className={classProps}
        {...inputProps}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  color: 'primary',
  type: 'text',
  label: '',
  className: null,
  value: '',
};

export default Input;
