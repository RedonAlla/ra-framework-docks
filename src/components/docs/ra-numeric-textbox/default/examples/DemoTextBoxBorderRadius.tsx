import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox placeholder='none' radius='none'/>
          <NumericTextBox placeholder='medium' radius='medium'/>
          <NumericTextBox placeholder='full radius' radius='full'/>
        </div>

        <div className='column'>
          <NumericTextBox placeholder='small' radius='small'/>
          <NumericTextBox placeholder='large' radius='large' />
          <NumericTextBox placeholder='12' radius={12} />
        </div>

      </div>
    );
  }
}