import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' radius='none' />
        <Avatar text='R A' type='text' radius='small' />
        <Avatar text='R A' type='text' radius='medium' />
        <Avatar text='R A' type='text' radius='large' />
        <Avatar text='R A' type='text' radius='full' />
        <Avatar text='R A' type='text' radius={15} />
      </div>
    );
  }
}