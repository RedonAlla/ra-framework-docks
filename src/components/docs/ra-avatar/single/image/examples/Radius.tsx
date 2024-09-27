import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} radius='none' />
        <Avatar source={imageExample} radius='small' />
        <Avatar source={imageExample} radius='medium' />
        <Avatar source={imageExample} radius='large' />
        <Avatar source={imageExample} radius='full' />
        <Avatar source={imageExample} radius={15} />
      </div>
    );
  }
}