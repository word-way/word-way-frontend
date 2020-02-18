import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../icon';
import Button, { ButtonProps } from '../button';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export interface IconButtonProps extends ButtonProps {
    left: boolean;
    icon: object;
    btnInnerIc: boolean;
}

const IconButton = (props: IconButtonProps): React.ReactElement<IconButtonProps> => {
    const {
        children,
        left,
        icon,
        color,
        variant,
        btnInnerIc,
    } = props;
    const theme = useContext(ThemeContext);

    let icColor: string;
    if (variant === 'contained' && color === theme.colors.g100) {
        icColor = theme.colors.g500;
    } else if (variant === 'contained') {
        icColor = theme.colors.g100;
    } else {
        icColor = color;
    }
    const StyleButton = styled(Button)`
        align-items: center;
        display: flex;
        .label_wrapp {
            width: 100%;
            justify-content: inherit;
            display: inherit;
            align-items: inherit;
            position: relative;
            .ic_wrapp {
                width: 100%;
                position: absolute;
            }
            .text_wrapp {
                flex: 1;
            }
        }
        ${!children && !btnInnerIc && css`
            min-width: auto !important;
            padding: 12px !important;
        `}
    `;

    const StyleIc = styled(Icon)`
        margin: 0 auto;
        ${!btnInnerIc && children && css`
            ${left && css`
                padding-right: 8px;
            `}
            ${!left && css`
                padding-left: 8px;
            `}
        `}
    `;
    const ic = <StyleIc size='small' color={icColor}>{icon}</StyleIc>;
    const iconEl = (btnInnerIc ? <div className='ic_wrapp'>{ic}</div> : ic);
    return (
        <StyleButton {...props}>
            <div className='label_wrapp'>
                {left && iconEl}
                <div className='text_wrapp'>
                    {btnInnerIc ? <br /> : children}
                </div>
                {left || iconEl}
            </div>
        </StyleButton>
    );
};

IconButton.defaultProps = {
    type: 'button',
    corner: 'default',
    size: 'medium',
    onClick: () => {},
    disabled: false,
    variant: 'contain',
    color: 'black',
    left: false,
    btnInnerIc: false,
};

export default IconButton;
