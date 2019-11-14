import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './index';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('text1',
        () => <Button onClick={action('clicked')} size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}>text1</Button>
    )
    .add('text2',
        () => <Button onClick={action('clicked')} size={text('size', 'small')}>text2</Button>
    )
