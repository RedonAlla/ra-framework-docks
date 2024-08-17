import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' radius='none' />
        <Avatar source='/img/logo.svg' radius='small' />
        <Avatar source='/img/logo.svg' radius='medium' />
        <Avatar source='/img/logo.svg' radius='large' />
        <Avatar source='/img/logo.svg' radius='full' />
        <Avatar source='/img/logo.svg' radius={15} />
      </div>
    );
  }
}