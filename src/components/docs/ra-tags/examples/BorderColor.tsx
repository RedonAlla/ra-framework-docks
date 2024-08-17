import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' borderWidth='thin' type='ghost' text='crimson' borderColor='crimson'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='#ed143d' borderColor='#ed143d'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}