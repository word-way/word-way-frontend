import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { ReactComponent as CloseIc } from '../../../assets/icons/cross.svg';
import Label from '../../atoms/label';
import Button from '../../atoms/button';
import IconButton from '../../atoms/iconButton';

export interface Word {
    title: string;
}
export interface CardModel {
    title: string;
    desc: string;
    words: Word[];
}
export interface CardProps {
    canDel: boolean;
    data: CardModel;
}

const Card = (props: CardProps): React.ReactElement<CardProps> => {
    const {
        canDel,
        data,
    } = props;
    const multi = data.words.length > 0 ? false : true;
    const theme = useContext(ThemeContext);

    const CardIc = styled(IconButton)`
        position: absolute;
        right: 4px;
        top: 4px;
    `;
    const StyleDiv = styled.div`
        width: 320px;
        border-radius:20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0px 0px 16px 0px rgba(84, 84, 84, .1);
        position: relative;
        min-height: 135px;
        .contentWrapp {
            padding: 18px 18px 0px
        }
        ${multi === true && css`
            display: flex;
            align-items: center;
            &::after {
                width:95%;
                height:100%;
                content: '';
                position: absolute;
                left: calc((100% - 95%) / 2);
                top: 10px;
                z-index: -1;
                background: white;
                border-radius: 8px;
                box-shadow: 0px 0px 16px 0px rgba(84, 84, 84, .1);
            }
        `}
    `;
    const DescLabel = styled(Label)`
        padding: 8px 0px 16px 0px;
        white-space: nowrap;
    `;
    const KeywordWrapp = styled.div`
        position: relative;
        white-space: nowrap;
        overflow-x: scroll;
        -ms-overflow-style: none;
        padding-bottom: 18px;
        &::-webkit-scrollbar {
            display: none !important;
        }
        * {
            margin: 0px 4px;
            &:first-of-type {
                margin-left: 18px;
            }
            &:last-of-type {
                margin-right: 18px;
            }
        }
    `;

    return (
        <StyleDiv>
            <div className='contentWrapp'>
                {canDel && <CardIc icon={<CloseIc />} variant='text' size='small'></CardIc>}
                <Label color={theme.colors.blue}
                    weight='light'
                    size='large'>{data.title}</Label>
                <DescLabel color={theme.colors.g500}
                    weight='light'
                    size='13px'>{multi ? ('2개의 뜻 존재') : data.desc}
                </DescLabel>
            </div>
            {!multi &&
                <KeywordWrapp>
                    {data.words.map((word: Word, index: number) =>
                        <Button color={theme.colors.g100} corner='rounded' variant='contained' size='small' key={index}>
                            {word.title}
                        </Button>
                    )}
                </KeywordWrapp>
            }
        </StyleDiv>
    );
};

Card.defaultProps = {
    canDel: true,
};

export default Card;
