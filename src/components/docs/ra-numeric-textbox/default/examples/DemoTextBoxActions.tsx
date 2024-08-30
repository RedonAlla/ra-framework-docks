import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox placeholder='With actions' />
        </div>

        <div className='column'>
          <NumericTextBox placeholder='Without actions' actions={false} />
        </div>

      </div>
    );
  }
}