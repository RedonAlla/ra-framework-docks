import React from 'react';

// highlight-start
import { Spinner } from '@ra/icons';
// highlight-end

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='star' />
        <Spinner name='star' size={16} />
        <Spinner name='star' size={18} />
        <Spinner name='star' size={24} />
        <Spinner name='star' size={32} />
        <Spinner name='star' size={64} />
      </div>
    );
  }
}