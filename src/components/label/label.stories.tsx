import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Label from './index';

storiesOf('Label', module)
    .addDecorator(withKnobs)
    .add('large label',
        () => <Label color={select('color', { blackTwo: 'black-two', deepSkyBlue: 'deep-sky-blue' }, 'black-two')}
            weight={select('weight', { light: 'light', normal: 'normal', semi: 'semi', bold: 'bold' }, 'bold')}
            size="large">필터링</Label>
    )
    .add('medium label',
        () => <Label size="medium">결과 내 재검색</Label>
    )
    .add('custom label',
        () => <Label color={select('color', { greyishBrown: 'greyish-brown', lightGray: 'light-gray' }, 'greyishBrown')}
            weight={select('weight', { light: 'light', normal: 'normal', semi: 'semi', bold: 'bold' }, 'light')}
            size={text('size', '13px')}>[동사] 어떤 목표로 뜻이 쏠리어 향하다.</Label>
    )
