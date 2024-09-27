import React from 'react';

// highlight-start
import Avatar from '@ra/avatar';
// highlight-end

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='none'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='hairline'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='thin'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='base'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='thick'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}