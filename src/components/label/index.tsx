import React from 'react';
import styled, { css } from 'styled-components';

export interface LabelProps {
    children: React.ReactNode;
    color: string;
    size: 'medium' | 'large' | string;
    weight: 'light' | 'normal' | 'semi' | 'bold';
    className: string;
}

const Label = (props: LabelProps): React.ReactElement<LabelProps> => {
    const {
        children,
        size,
        color,
        weight,
        className,
    } = props;

    const StyleDiv = styled.div`
        font-weight: normal;
        color: ${color};
        ${size === 'medium' && css`
            font-size: 15px;
            font-weight: 500;
        `}
        ${size === 'large' && css`
            font-size: 24px;
        `}
        ${size !== 'large' && size !== 'medium' && css`
            font-size: ${size};
        `}

        ${weight === 'light' && css`
            font-weight: 300;
        `}
        ${weight === 'semi' && css`
            font-weight: 500;
        `}
        ${weight === 'bold' && css`
            font-weight: bold;
        `}
    `;

    return (
        <StyleDiv className={className}>{children}</StyleDiv>
    );
};

Label.defaultProps = {
    size: 'medium',
    color: 'black',
    weight: 'normal',
    className: '',
};

export default Label;
