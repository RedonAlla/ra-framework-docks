import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' radius='none' />
        <Avatar icon='avatar' type='icon' radius='small' />
        <Avatar icon='avatar' type='icon' radius='medium' />
        <Avatar icon='avatar' type='icon' radius='large' />
        <Avatar icon='avatar' type='icon' radius='full' />
        <Avatar icon='avatar' type='icon' radius={15} />
      </div>
    );
  }
}