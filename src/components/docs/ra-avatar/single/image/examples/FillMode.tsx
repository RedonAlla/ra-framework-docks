import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' color='primary' fillMode='solid' />
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' />
        <Avatar source='/img/logo.svg' color='primary' fillMode='ghost' />
      </div>
    );
  }
}