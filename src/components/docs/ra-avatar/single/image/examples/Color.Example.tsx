import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' color='primary'/>
        <Avatar source='/img/logo.svg' color='secondary'/>
        <Avatar source='/img/logo.svg' color='success'/>
        <Avatar source='/img/logo.svg' color='info'/>
        <Avatar source='/img/logo.svg' color='warning' />
        <Avatar source='/img/logo.svg' color='error'/>
        <Avatar source="/img/logo.svg" color='default'/>
        <Avatar source="/img/logo.svg" color='dark'/>
        <Avatar source="/img/logo.svg" color='light'/>

        <Avatar source="/img/logo.svg" color='crimson'/>
        <Avatar source="/img/logo.svg" color='#ed143d'/>
        <Avatar source="/img/logo.svg" color='rgb(237, 20, 61)'/>
        <Avatar source="/img/logo.svg" color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}