import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag text='crimson' textColor='crimson'/>
        <Tag text='#ed143d' textColor='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' textColor='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' textColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}