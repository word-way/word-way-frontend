import React from 'react';
import styled from 'styled-components';

export interface IconProps {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    className?: string;
    color: string;
}

const Icon = (props: IconProps): React.ReactElement<IconProps> => {
    const {
        children,
        size,
        className,
        color,
    } = props;
    const fontSize = (!size || size === 'medium') ? 1.1 : (size === 'small' ? 0.8 : 1.8);
    const StyleSpan = styled.span`
        width: 1em;
        height: 100%;
        font-size: ${fontSize + 'em'};
        display: flex;
        svg {
            width: 100%;
            height: 100%;
            fill: ${color};
        }
    `;

    return (
        <StyleSpan className={className}>{children}</StyleSpan>
    );
};

Icon.defaultProps = {
    size: 'medium',
    color: 'black',
};

export default Icon;
