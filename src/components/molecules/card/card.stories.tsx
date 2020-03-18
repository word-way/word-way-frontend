import React from 'react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import { ThemeDecorator } from '../../../static/themeDecorator';
import Card from './index';

export default {
    title: 'components|Molecules/Card',
    component: Card,
    decorators: [withKnobs, ThemeDecorator],
};

const cardValue = {
    title: '지향하다',
    desc: '[동사] 어떤 목표로 뜻이 쏠리어 향하다.',
    words: [
        {
            title: '향하다',
        },
        {
            title: '쏠리다',
        },
        {
            title: '쏠리다',
        },
        {
            title: '쏠리다',
        },
    ],
};
const multiCardValue = {
    title: '떼다',
    desc: '붙어 있거나 잇닿은 것을 떨어지게 하다.',
    words: [],
};

export const card = () => {
    const canDel = boolean('canDel', true);
    const data = object('data', cardValue, 'card data');
    return <Card canDel={canDel} data={data}></Card>;
};
card.story = {
    name: 'Default',
};

export const multiCard = () => {
    const canDel = boolean('canDel', true);
    const data = object('data', multiCardValue, 'card data');
    return <Card canDel={canDel} data={data}></Card>;
};
