import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='outlined' type='outlined' readOnly />
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='underlined' type='underlined' readOnly />
        </div>

      </div>
    );
  }
}