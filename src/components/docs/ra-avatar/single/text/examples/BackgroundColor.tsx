import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' backgroundColor='crimson'/>
        <Avatar text='R A' type='text' backgroundColor='#ed143d'/>
        <Avatar text='R A' type='text' backgroundColor='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}