import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <NumericTextBox placeholder='input with helper text' helperText="Helper text" />
      </div>
    );
  }
}