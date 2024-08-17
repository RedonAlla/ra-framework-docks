import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' color='primary' fillMode='solid' />
        <Avatar text='R A' type='text' color='primary' fillMode='none' />
        <Avatar text='R A' type='text' color='primary' fillMode='ghost' />
      </div>
    );
  }
}