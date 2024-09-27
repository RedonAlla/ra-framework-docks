import React from 'react';

// highlight-start
import Tag from '@ra/tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag text='primary' color='primary'/>
        <Tag text='secondary' color='secondary'/>
        <Tag text='success' color='success'/>
        <Tag text='info' color='info'/>
        <Tag text='warning' color='warning' />
        <Tag text='error' color='error'/>
        <Tag text='default' color='default'/>
        <Tag text='dark' color='dark'/>
        <Tag text='light' color='light'/>
        <Tag text='crimson' color='crimson'/>
        <Tag text='#ed143d' color='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}