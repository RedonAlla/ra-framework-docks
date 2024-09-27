import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <TextBox placeholder='none' radius='none'/>
          <TextBox placeholder='medium' radius='medium'/>
          <TextBox placeholder='full radius' radius='full'/>
        </div>

        <div className='demo-column'>
          <TextBox placeholder='small' radius='small'/>
          <TextBox placeholder='large' radius='large' />
          <TextBox placeholder='12' radius={12} />
        </div>

      </div>
    );
  }
}