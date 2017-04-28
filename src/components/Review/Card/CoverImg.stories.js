import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { CoverImg } from './CoverImg';
import head from '../../../resources/img/header13.jpg'

storiesOf('CoverImg', module)
  .add('CoverImg', () => (
    <CoverImg imgSrc={head} />
  ))
