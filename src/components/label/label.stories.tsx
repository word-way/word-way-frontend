import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { theme } from '../../static/theme';
import Label from './index';

storiesOf('Label', module)
    .addDecorator(withKnobs)
    .add('large label',
        () => <Label
            color={select('color', {
                blackTwo: theme.colors.b100,
                deepSkyBlue: theme.colors.blue,
            }, 'black-two')}
            weight={select('weight', {
                light: 'light',
                normal: 'normal',
                semi: 'semi',
                bold: 'bold',
            }, 'bold')}
            size='large'>필터링</Label>
    )
    .add('medium label',
        () => <Label size='medium'>결과 내 재검색</Label>
    )
    .add('custom label',
        () => <Label
            color={select('color', {
                grayishBrown: theme.colors.g300,
                lightGray: theme.colors.g100,
            }, theme.colors.g300)}
            weight={select('weight', {
                light: 'light',
                normal: 'normal',
                semi: 'semi',
                bold: 'bold',
            }, 'light')}
            size={text('size', '13px')}>[동사] 어떤 목표로 뜻이 쏠리어 향하다.</Label>
    );
