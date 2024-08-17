import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='default' type='default' />
        <Tag color='primary' text='ghost' type='ghost' />
        <Tag color='primary' text='text' type='text' />
      </div>
    );
  }
}