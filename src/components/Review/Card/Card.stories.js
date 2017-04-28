import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import { Card } from './Card';

storiesOf('Card', module)
  .add('Card', () => {
    return (
      <div style={{width:"60%"}}>
        <Card />
      </div>
    )
  })
