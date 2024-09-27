import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} color='primary' fillMode='solid' />
        <Avatar source={imageExample} color='primary' fillMode='none' />
        <Avatar source={imageExample} color='primary' fillMode='ghost' />
      </div>
    );
  }
}