import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox placeholder='outlined' type='outlined' disabled />
        </div>

        <div className='demo-column'>
          <NumericTextBox placeholder='underlined' type='underlined' disabled />
        </div>

      </div>
    );
  }
}