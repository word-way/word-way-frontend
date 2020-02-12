import React from 'react';
import styled, { css } from 'styled-components';

export interface IconProps {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    className: string;
}

const Icon = (props: IconProps): React.ReactElement<IconProps> => {
    const {
        children,
        size,
        className,
    } = props;

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
    `;

    return (
        <StyleSpan className={className}>{children}</StyleSpan>
    );
};

Icon.defaultProps = {
    size: 'medium',
    className: '',
};

export default Icon;
