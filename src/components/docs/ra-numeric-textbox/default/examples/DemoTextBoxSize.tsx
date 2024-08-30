import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox placeholder='small' size='small' />
          <NumericTextBox placeholder='large' size='large' />
        </div>

        <div className='column'>
          <NumericTextBox placeholder='default' size='default' />
          <NumericTextBox placeholder='medium' size='medium' />
        </div>

      </div>
    );
  }
}