import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' size='small' />
        <Avatar source='/img/logo.svg' size='medium' />
        <Avatar source='/img/logo.svg' size='large' />
        <Avatar source='/img/logo.svg' size={120} />
      </div>
    );
  }
}