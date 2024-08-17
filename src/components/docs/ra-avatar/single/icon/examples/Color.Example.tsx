import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' color='primary'/>
        <Avatar icon='avatar' type='icon' color='secondary'/>
        <Avatar icon='avatar' type='icon' color='success'/>
        <Avatar icon='avatar' type='icon' color='info'/>
        <Avatar icon='avatar' type='icon' color='warning' />
        <Avatar icon='avatar' type='icon' color='error'/>
        <Avatar icon='avatar' type='icon' color='default'/>
        <Avatar icon='avatar' type='icon' color='dark'/>
        <Avatar icon='avatar' type='icon' color='light'/>

        <Avatar icon='avatar' type='icon' color='crimson'/>
        <Avatar icon='avatar' type='icon' color='#ed143d'/>
        <Avatar icon='avatar' type='icon' color='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}