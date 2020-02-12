import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ReactComponent as DelIc } from '../../assets/icons/cross.svg';
import { ReactComponent as SearchIc } from '../../assets/icons/search.svg';
import { ThemeDecorator } from '../../static/themeDecorator';
import { theme } from '../../static/theme';
import Icon from './index';
import Button from '../button';

export default {
    title: 'components|atomic/Icon',
    component: Icon,
    decorators: [withKnobs, ThemeDecorator],
};

export const icon = () => {
    const size = select('size', {
        small: 'small',
        medium: 'medium',
        large: 'large',
    }, 'medium');
    return <Icon size={size}>
        <SearchIc></SearchIc>
    </Icon>;
};
icon.story = {
    name: 'Default',
};

export const iconWithButton = () => {
    return <Button corner='rounded' variant='contained' color={theme.colors.blue}>
        <span>향하다</span>
        <Icon size='small'>
            <DelIc></DelIc>
        </Icon>
    </Button>;
};
