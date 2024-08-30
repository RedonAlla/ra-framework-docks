import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='small' size='small' />
          <NumericTextBox material label='Label' placeholder='large' size='large' />
        </div>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='default' size='default' />
          <NumericTextBox material label='Label' placeholder='medium' size='medium' />
        </div>

      </div>
    );
  }
}