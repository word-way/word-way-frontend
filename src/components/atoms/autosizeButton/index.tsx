import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import IconButton from '../iconButton';
import AutosizeInput, { AutosizeInputProps } from '../autosizeInput';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';

export interface AutosizeButtonProps extends AutosizeInputProps {
    onCancle?: () => void;
}
const AutosizeButton = (props: AutosizeButtonProps): React.ReactElement<AutosizeButtonProps> => {
    const {
        className,
        onCancle,
        ...other
    } = props;
    const theme = useContext(ThemeContext);

    const AutosizeInputWrapp = styled.div`
        display: inline-block;
        padding: 6px 14px;
        background: ${theme.colors.g100};
        border-radius: 30px;
        position: relative;
        width: fit-content;
        align-items: center;
        .content_wrapp {
            display: flex;
        }
    `;

    return (
        <AutosizeInputWrapp className={className}>
            <div className='content_wrapp'>
                <AutosizeInput {...other} />
                <CloseButton
                    onClick={onCancle}
                    icon={<CloseIcon />}
                    variant='text'
                    size='small'
                    color={theme.colors.blue}
                />
            </div>
        </AutosizeInputWrapp >
    );
};

const CloseButton = styled(IconButton)`
    padding: 0px 0px 0px 6px !important;
`;

AutosizeButton.defaultProps = {
    color: 'black',
    type: 'text',
    minWidth: 1,
    maxLength: 17,
    autoFocus: true,
    onChange: () => {},
};

export default AutosizeButton;
