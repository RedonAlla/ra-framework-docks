import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' size='small' />
        <Avatar icon='avatar' type='icon' size='medium' />
        <Avatar icon='avatar' type='icon' size='large' />
        <Avatar icon='avatar' type='icon' size={120} />
      </div>
    );
  }
}