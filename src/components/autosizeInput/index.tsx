import React, { useEffect, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import useAutosizeInput from '../../hooks/useAutosizeInput';
export interface AutosizeInputProps {
    type: 'text';
    maxLength: number;
    minWidth: number;
    className?: string;
    placeholder?: string;
    label?: string;
    color?: string;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
const BaseInput = (props: AutosizeInputProps): React.ReactElement<AutosizeInputProps> => {
    const {
        className,
        placeholder,
        minWidth,
        onChange,
        ...other
    } = props;
    const { AutosizeInputState, onChangeValue, onChangeWidth } = useAutosizeInput();
    let sizerEle: HTMLSpanElement | null;
    let placeHolderSizer: HTMLSpanElement | null;
    let newInputWidth: number;

    const resizeInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        if (!sizerEle || typeof sizerEle.scrollWidth === 'undefined') {
            return;
        }
        const changeValue = e.target.value;
        onChangeValue(changeValue);
    };

    const updateInputWidth = () => {
        if (!sizerEle) {
            return;
        } else if (placeHolderSizer && !AutosizeInputState.value) {
            newInputWidth = Math.max(sizerEle.scrollWidth, placeHolderSizer.scrollWidth) + 2;
        } else {
            newInputWidth = sizerEle.scrollWidth + 2;
        }
        if (newInputWidth <= minWidth) {
            newInputWidth = minWidth;
        }
        onChangeWidth(newInputWidth);
    };

    useEffect(() => updateInputWidth(), [AutosizeInputState.value]);

    const HiddenText = styled.span`
        position: absolute;
        overflow: scroll;
        white-space: pre;
        letter-spacing: -0.9px;
        font-weight: 500;
        font-size: 1.1em;
        white-space: pre;
        display: block;
        visibility: hidden;
    `;
    const dynamicStyle = {
        width: `${AutosizeInputState.inputWidth}px`,
    };

    return (
        <div className={className}>
            <input
                onChange={(e) => resizeInput(e)}
                style={dynamicStyle}
                value={AutosizeInputState.value}
                placeholder={placeholder}
                {...other}
                autoFocus
            />
            <HiddenText ref={(ref) => { sizerEle = ref; }}>
                {AutosizeInputState.value}
            </HiddenText>
            {
                placeholder
                && (
                    <HiddenText ref={(ref) => { placeHolderSizer = ref; }}>
                        {placeholder}
                    </HiddenText>
                )
            }
        </div>
    );
};

const AutosizeInput = styled(BaseInput)((props) => {
    const { color } = props;
    const StyleButton = css`
        display: inline-block;
        position: relative;
        display: flex;
        width: fit-content;
        align-items: center;
        input {
            box-sizing: content-box;
            white-space: pre;
            letter-spacing: -0.9px;
            font-weight: 500;
            font-size: 1.1em;
            border: none;
            color: ${color};
            caret-color: ${color};
            outline: none;
            background: transparent;
        }
  `;

    return StyleButton;
});

BaseInput.defaultProps = {
    color: 'black',
    type: 'text',
    minWidth: 1,
    maxLength: 17,
    onChange: () => {},
};

export default AutosizeInput;
