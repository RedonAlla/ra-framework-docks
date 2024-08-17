import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth='none'/>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth='base'/>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar source='/img/logo.svg' color='primary' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}