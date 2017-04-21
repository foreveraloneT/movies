import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { Navbar } from './Navbar';

storiesOf('Navbar', module)
  .add('Navbar', () => (
    <Navbar />
  ))
