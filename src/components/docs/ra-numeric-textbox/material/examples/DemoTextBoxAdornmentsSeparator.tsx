import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
        </div>

      </div>
    );
  }
}