import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} color='primary'/>
        <Avatar source={imageExample} color='secondary'/>
        <Avatar source={imageExample} color='success'/>
        <Avatar source={imageExample} color='info'/>
        <Avatar source={imageExample} color='warning' />
        <Avatar source={imageExample} color='error'/>
        <Avatar source={imageExample} color='default'/>
        <Avatar source={imageExample} color='dark'/>
        <Avatar source={imageExample} color='light'/>

        <Avatar source={imageExample} color='crimson'/>
        <Avatar source={imageExample} color='#ed143d'/>
        <Avatar source={imageExample} color='rgb(237, 20, 61)'/>
        <Avatar source={imageExample} color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}