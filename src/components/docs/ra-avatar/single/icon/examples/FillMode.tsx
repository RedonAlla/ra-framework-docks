import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='solid' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='ghost' />
      </div>
    );
  }
}