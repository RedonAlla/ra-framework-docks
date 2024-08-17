import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block inline-grid'>
        <Tag color='primary' size='small' text='small' />
        <Tag color='primary' size='default' text='default' />
        <Tag color='primary' size='medium' text='medium' />
        <Tag color='primary' size='large'text='large' />
      </div>
    );
  }
}