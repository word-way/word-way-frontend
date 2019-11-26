import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';
import styled, { css } from 'styled-components';
import { ColorList, TextColor } from '../../static/const';

export interface ButtonProps {
  type: 'button' | 'reset' | 'submit',
  theme: 'default' | 'rounded',
  size: 'small' | 'medium' | 'large',
  variant: 'text' | 'outlined' | 'contained',
  onClick: () => void,
  children: React.ReactNode,
  className: string,
  disabled: boolean,
  color: string
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
  const { type, onClick, children, theme, size, className, disabled, variant, color } = props;

  const themeColor = color ? Object(ColorList)[color] : ColorList.default;
  const StyleButton = styled.button`
    background: transparent;
    border-radius: 4px;
    color: ${TextColor.darkgray1};
    padding: 6px 16px;
    min-width: 64px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;

    ${variant === 'text' && css`
    border: 0;
    `}

    ${variant === 'contained' && css`
      color: ${TextColor.gray1};
      background: ${themeColor};
      border: 1px solid ${themeColor};
    `}

    ${variant === 'outlined' && css`
    color: ${themeColor};
    border: 1px solid ${themeColor};
    `}

    ${theme === 'rounded' && css`
    border-radius: 20px;
    min-width: 90px;
    `}

    ${variant == 'contained' && color === 'default' && css`
      color: ${TextColor.darkgray1};
      background: ${themeColor};
      border: 1px solid ${themeColor};
    `}

    ${size == 'small' && css`
    font-size: 0.85rem;
    `}
  `
  const classProps: string = classnames(
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <StyleButton type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </StyleButton>
  )
}

Button.defaultProps = {
  type: 'button',
  theme: 'default',
  size: 'medium',
  onClick: () => { },
  className: null,
  disabled: false,
  variant: 'contain',
  color: 'primary'
}

export default Button
