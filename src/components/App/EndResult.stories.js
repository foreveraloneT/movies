import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { EndResult } from './EndResult';

storiesOf('EndOfResult', module)
  .add('with no params', () => (
    <EndResult />
  ))
