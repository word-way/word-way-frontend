import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export interface ButtonProps {
  type: ButtonType,
  theme: string,
  size: string,
  onClick: () => void,
  children: React.ReactNode,
  className: string,
  disabled: boolean,
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
  const { type, onClick, children, theme, size, className, disabled } = props
  const classProps: string = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: null,
  disabled: false,
}

export default Button
