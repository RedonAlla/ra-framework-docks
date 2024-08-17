import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' backgroundColor='crimson'/>
        <Avatar icon='avatar' type='icon' backgroundColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}