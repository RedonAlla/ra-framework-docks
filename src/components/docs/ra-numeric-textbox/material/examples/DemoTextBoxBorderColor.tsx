import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='crimson' borderColor='crimson' />
          <NumericTextBox material label='Label' placeholder='#ed143d' borderColor='#ed143d' />
          <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' borderColor='hwb(349 8% 7%)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' borderColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
          <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' borderColor='hsl(349, 86%, 50%)' />
          <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' borderColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}