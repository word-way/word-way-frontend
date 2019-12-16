import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ReactComponent as DelIc } from '../../assets/icons/cross.svg';
import { ReactComponent as SearchIc } from '../../assets/icons/search.svg';
import Icon from './index';
import Button from '../button';

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .add('icon only',
        () => <Icon size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}>
            <SearchIc></SearchIc>
        </Icon>
    )
    .add('icon with button',
        () => <Button theme='rounded' variant='contained' color='primary'>
            <span>향하다</span>
            <Icon size='small'>
                <DelIc></DelIc>
            </Icon>
        </Button>
    );
