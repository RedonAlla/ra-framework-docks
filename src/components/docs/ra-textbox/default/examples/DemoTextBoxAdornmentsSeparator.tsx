import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
        </div>

        <div className='column'>
          <TextBox placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
        </div>

      </div>
    );
  }
}