import React from 'react';

// highlight-start
import Avatar from 'ra-avatar';
// highlight-end

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' fillMode='none' borderWidth='none'/>
        <Avatar text='R A' type='text' fillMode='none' borderWidth='hairline'/>
        <Avatar text='R A' type='text' fillMode='none' borderWidth='thin'/>
        <Avatar text='R A' type='text' fillMode='none' borderWidth='base'/>
        <Avatar text='R A' type='text' fillMode='none' borderWidth='thick'/>
        <Avatar text='R A' type='text' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}