import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox material label='Label' placeholder='outlined' type='outlined' disabled />
        </div>

        <div className='column'>
          <TextBox material label='Label' placeholder='underlined' type='underlined' disabled />
        </div>

      </div>
    );
  }
}