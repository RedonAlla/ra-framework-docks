import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='crimson'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}