import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth='none'/>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth='base'/>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar source={imageExample} color='primary' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}