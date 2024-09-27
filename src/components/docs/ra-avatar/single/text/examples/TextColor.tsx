import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' textColor='crimson'/>
        <Avatar text='R A' type='text' textColor='#ed143d'/>
        <Avatar text='R A' type='text' textColor='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' textColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}