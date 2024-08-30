import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox placeholder='outlined' type='outlined' readOnly />
        </div>

        <div className='column'>
          <TextBox placeholder='underlined' type='underlined' readOnly />
        </div>

      </div>
    );
  }
}