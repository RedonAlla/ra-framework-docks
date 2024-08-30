import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end
import { imageExample } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={imageExample} backgroundColor='crimson'/>
        <Avatar source={imageExample} backgroundColor='#ed143d'/>
        <Avatar source={imageExample} backgroundColor='rgb(237, 20, 61)'/>
        <Avatar source={imageExample} backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}