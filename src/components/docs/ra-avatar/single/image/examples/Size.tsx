import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} size='small' />
        <Avatar source={imageExample} size='medium' />
        <Avatar source={imageExample} size='large' />
        <Avatar source={imageExample} size={120} />
      </div>
    );
  }
}