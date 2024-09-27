import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='crimson' backgroundColor='crimson' />
          <NumericTextBox material label='Label' placeholder='#ed143d' backgroundColor='#ed143d' />
          <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' backgroundColor='hwb(349 8% 7%)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' backgroundColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' backgroundColor='rgba(237, 20, 61, 0.5)' />
          <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' backgroundColor='hsl(349, 86%, 50%)' />
          <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' backgroundColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}