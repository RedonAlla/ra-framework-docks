import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source='/img/logo.svg' color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
        <Avatar source='/img/logo.svg' color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
        <Avatar source='/img/logo.svg' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        <Avatar source='/img/logo.svg' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}