import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ReactComponent as DelIc } from '../../assets/icons/cross.svg';
import { ReactComponent as SearchIc } from '../../assets/icons/search.svg';
import { ThemeDecorator } from '../../static/themeDecorator';
import { theme } from '../../static/theme';
import Icon from './index';
import Button from '../button';

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .addDecorator(ThemeDecorator)
    .add('icon only',
        () => <Icon
            size={select('size', {
                small: 'small',
                medium: 'medium',
                large: 'large',
            }, 'medium')}>
            <SearchIc></SearchIc>
        </Icon>
    )
    .add('icon with button',
        () => <Button corner='rounded' variant='contained' color={theme.colors.blue}>
            <span>향하다</span>
            <Icon size='small'>
                <DelIc></DelIc>
            </Icon>
        </Button>
    );
