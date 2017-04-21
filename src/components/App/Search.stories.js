import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { Search } from './Search';

storiesOf('Search', module)
  .add('Search', () => (
    <Search />
  ))
