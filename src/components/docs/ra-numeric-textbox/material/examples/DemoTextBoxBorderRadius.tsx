import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='none' radius='none'/>
          <NumericTextBox material label='Label' placeholder='medium' radius='medium'/>
          <NumericTextBox material label='Label' placeholder='full radius' radius='full'/>
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='small' radius='small'/>
          <NumericTextBox material label='Label' placeholder='large' radius='large' />
          <NumericTextBox material label='Label' placeholder='12' radius={12} />
        </div>

      </div>
    );
  }
}