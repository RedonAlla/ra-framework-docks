import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox placeholder='Step 1 (default)' />
          <NumericTextBox placeholder='Step 5' step={5} />
          <NumericTextBox placeholder='Step 10' step={10} />
        </div>

        <div className='demo-column'>
          <NumericTextBox placeholder='Step 50' step={50} />
          <NumericTextBox placeholder='Step 100' step={100} />
          <NumericTextBox placeholder='Step 1000' step={1000} />
        </div>

      </div>
    );
  }
}