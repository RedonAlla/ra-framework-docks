import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source="/img/logo.svg" backgroundColor='crimson'/>
        <Avatar source="/img/logo.svg" backgroundColor='#ed143d'/>
        <Avatar source="/img/logo.svg" backgroundColor='rgb(237, 20, 61)'/>
        <Avatar source="/img/logo.svg" backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}