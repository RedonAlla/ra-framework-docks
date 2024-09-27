import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='small' size='small' />
          <TextBox material label='Label' placeholder='large' size='large' />
        </div>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='default' size='default' />
          <TextBox material label='Label' placeholder='medium' size='medium' />
        </div>

      </div>
    );
  }
}