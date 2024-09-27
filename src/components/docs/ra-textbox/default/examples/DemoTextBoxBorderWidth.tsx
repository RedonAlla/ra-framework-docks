import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <TextBox placeholder='none (default)' borderWidth='none' />
          <TextBox placeholder='hairline' borderWidth='hairline' />
          <TextBox placeholder='thin' borderWidth='thin' />
        </div>

        <div className='demo-column'>
          <TextBox placeholder='base' borderWidth='base' />
          <TextBox placeholder='thick' borderWidth='thick' />
          <TextBox placeholder='3' borderWidth={3}/>
        </div>

      </div>
    );
  }
}