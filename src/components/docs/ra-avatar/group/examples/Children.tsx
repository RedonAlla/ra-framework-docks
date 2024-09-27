import React from 'react';

// highlight-start
import Avatar, { AvatarGroup } from '@ra/avatar';
import { imageExample } from '../../single/image/examples/constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        {/* Group Avatar with type text */}
        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        {/* Group Avatar with type icon */}
        <AvatarGroup>
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
        </AvatarGroup>


        {/* Group Avatar with type image */}
        <AvatarGroup>
          <Avatar source={imageExample} color='primary' />
          <Avatar source={imageExample} color='primary' />
          <Avatar source={imageExample} color='primary' />
        </AvatarGroup>

        {/* Group Avatar with mixed types */}
        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar source={imageExample} color='primary' />
        </AvatarGroup>

      </div>
    );
  }
}