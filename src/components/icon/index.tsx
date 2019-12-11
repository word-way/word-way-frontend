import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
    children: React.ReactNode,
    size: 'small' | 'medium' | 'large',
}

const Icon = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    const { children, size } = props
    const StyleSpan = styled.span`
        svg {
            width: 20px;
            height: 20px;
            mask-size: contain;
            mask-position: 50% 50%;
            mask-repeat: no-repeat; 

            ${size === 'small' && css`
                width: 12px;
                height: 12px;
            `}

            ${size === 'large' && css`
                width: 28px;
                height: 28px;
            `}
        }
    `

    return (
        <StyleSpan>{children}</StyleSpan>
    )
}

Icon.defaultProps = {
    size: 'medium'
}

export default Icon
