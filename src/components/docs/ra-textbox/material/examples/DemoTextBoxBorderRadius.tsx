import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox material label='Label' placeholder='none' radius='none'/>
          <TextBox material label='Label' placeholder='medium' radius='medium'/>
          <TextBox material label='Label' placeholder='full radius' radius='full'/>
        </div>

        <div className='column'>
          <TextBox material label='Label' placeholder='small' radius='small'/>
          <TextBox material label='Label' placeholder='large' radius='large' />
          <TextBox material label='Label' placeholder='12' radius={12} />
        </div>

      </div>
    );
  }
}