import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { Header } from './Header';

storiesOf('Header', module)
  .add('Header', () => (
    <Header />
  ))
