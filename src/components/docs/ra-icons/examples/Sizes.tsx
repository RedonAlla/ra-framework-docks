import React from 'react';

// highlight-start
import Icon from 'ra-icons';
// highlight-end

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Icon name='star' />
        <Icon name='star' size={16} />
        <Icon name='star' size={18} />
        <Icon name='star' size={24} />
        <Icon name='star' size={32} />
        <Icon name='star' size={64} />
      </div>
    );
  }
}