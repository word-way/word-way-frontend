import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './index';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('size',
        () => <Button size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}>text1</Button>
    )
    .add('variant',
        () => <Button color="primary" variant={select('variant', { text: 'text', outlined: 'outlined', contained: 'contained' }, 'outlined')}>text1</Button>
    )
    .add('theme',
        () => <Button color='primary' theme={select('theme', { default: 'default', rounded: 'rounded' }, 'default')}>text11</Button>
    )
    .add('mix',
        () => <Button color={select('color', { default: 'default', primary: 'primary', secondary: 'secondary' }, 'primary')} 
        theme={select('theme', { default: 'default', rounded: 'rounded' }, 'rounded')}
        variant={select('variant', { text: 'text', outlined: 'outlined', contained: 'contained' }, 'contained')}
        size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}>text1</Button>
    )
