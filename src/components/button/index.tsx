import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';
import { css } from 'styled-components';
import styled from '../../static/styled-components';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  corner: 'default' | 'rounded';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
  color: string;
}

const BaseButton = (props: ButtonProps): React.ReactElement<ButtonProps> => {
  const { type, onClick, children, className, disabled } = props;
  const classProps: string = classnames(
    {
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  );
};

const Button = styled(BaseButton)((themeProps) => {
  const { theme, size, variant, color, corner } = themeProps;
  const StyleButton = css`
    background: transparent;
    border-radius: 4px;
    color: ${theme.colors.g500};
    padding: 6px 16px;
    min-width: 64px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;

    ${variant === 'text' && css`
    border: 0;
    `}

    ${variant === 'contained' && css`
      color: ${theme.colors.g100};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${variant === 'outlined' && css`
    color: ${color};
    border: 1px solid ${color};
    `}

    ${corner === 'rounded' && css`
    border-radius: 20px;
    min-width: 90px;
    `}

    ${variant === 'contained' && color === 'default' && css`
      color: ${theme.colors.g500};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${size === 'small' && css`
    font-size: 0.85rem;
    `}
  `;
  return StyleButton;
});

BaseButton.defaultProps = {
  type: 'button',
  corner: 'default',
  size: 'medium',
  onClick: () => {},
  className: null,
  disabled: false,
  variant: 'contain',
  color: 'black',
};

export default Button;
