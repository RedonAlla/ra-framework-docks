import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='none (default)' borderWidth='none' />
          <TextBox material label='Label' placeholder='hairline' borderWidth='hairline' />
          <TextBox material label='Label' placeholder='thin' borderWidth='thin' />
        </div>

        <div className='demo-column'>
          <TextBox material label='Label' placeholder='base' borderWidth='base' />
          <TextBox material label='Label' placeholder='thick' borderWidth='thick' />
          <TextBox material label='Label' placeholder='3' borderWidth={3}/>
        </div>

      </div>
    );
  }
}