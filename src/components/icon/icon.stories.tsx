import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ReactComponent as SearchIc } from '../../assets/icons/search.svg';
import { ThemeDecorator } from '../../static/themeDecorator';
import Icon from './index';

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
