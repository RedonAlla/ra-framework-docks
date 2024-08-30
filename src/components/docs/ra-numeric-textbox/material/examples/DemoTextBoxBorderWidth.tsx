import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='none (default)' borderWidth='none' />
          <NumericTextBox material label='Label' placeholder='hairline' borderWidth='hairline' />
          <NumericTextBox material label='Label' placeholder='thin' borderWidth='thin' />
        </div>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='base' borderWidth='base' />
          <NumericTextBox material label='Label' placeholder='thick' borderWidth='thick' />
          <NumericTextBox material label='Label' placeholder='3' borderWidth={3}/>
        </div>

      </div>
    );
  }
}