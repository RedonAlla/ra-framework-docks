import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' size='small' />
        <Avatar text='R A' type='text' size='medium' />
        <Avatar text='R A' type='text' size='large' />
        <Avatar text='R A' type='text' size={120} />
      </div>
    );
  }
}