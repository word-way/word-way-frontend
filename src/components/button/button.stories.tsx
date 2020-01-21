import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { theme } from '../../static/theme';
import { ThemeDecorator } from '../../static/themeDecorator';
import Button from './index';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(ThemeDecorator)
    .add('size',
        () => <Button
            size={select('size', {
                small: 'small',
                medium: 'medium',
                large: 'large',
            }, 'medium')}>
            text1</Button>
    )
    .add('variant',
        () => <Button
            color={theme.colors.blue}
            variant={select('variant', {
                text: 'text',
                outlined: 'outlined',
                contained: 'contained',
            }, 'outlined')}>
            text1</Button>
    )
    .add('corner',
        () => <Button
            color={theme.colors.blue}
            corner={select('corner', {
                default: 'default',
                rounded: 'rounded',
            }, 'default')}>
            text11</Button>
    )
    .add('mix',
        () => <Button
            color={select('color', {
                paleGray: theme.colors.g100,
                blue: theme.colors.blue,
                grayishBrown: theme.colors.g300,
            }, theme.colors.blue)}
            corner={select('corner', {
                default: 'default',
                rounded: 'rounded',
            }, 'rounded')}
            variant={select('variant', {
                text: 'text',
                outlined: 'outlined',
                contained: 'contained',
            }, 'contained')}
            size={select('size', {
                small: 'small',
                medium: 'medium',
                large: 'large',
            }, 'medium')}>
            text1</Button>
    );
