import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
        </div>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
        </div>

      </div>
    );
  }
}