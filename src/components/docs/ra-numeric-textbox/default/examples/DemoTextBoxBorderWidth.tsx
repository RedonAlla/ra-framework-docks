import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox placeholder='none (default)' borderWidth='none' />
          <NumericTextBox placeholder='hairline' borderWidth='hairline' />
          <NumericTextBox placeholder='thin' borderWidth='thin' />
        </div>

        <div className='column'>
          <NumericTextBox placeholder='base' borderWidth='base' />
          <NumericTextBox placeholder='thick' borderWidth='thick' />
          <NumericTextBox placeholder='3' borderWidth={3}/>
        </div>

      </div>
    );
  }
}