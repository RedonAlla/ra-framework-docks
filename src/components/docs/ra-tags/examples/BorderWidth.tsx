import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='none (default)' type='ghost' borderWidth='none' />
        <Tag color='primary' text='hairline' type='ghost' borderWidth='hairline' />
        <Tag color='primary' text='thin' type='ghost' borderWidth='thin' />
        <Tag color='primary' text='base' type='ghost' borderWidth='base' />
        <Tag color='primary' text='thick' type='ghost' borderWidth='thick' />
        <Tag color='primary' text='2' type='ghost' borderWidth={2} />
      </div>
    );
  }
}