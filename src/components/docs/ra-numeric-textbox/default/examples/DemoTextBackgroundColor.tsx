import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox placeholder='crimson' backgroundColor='crimson' />
          <NumericTextBox placeholder='#ed143d' backgroundColor='#ed143d' />
          <NumericTextBox placeholder='hwb(349 8% 7%)' backgroundColor='hwb(349 8% 7%)' />
          <NumericTextBox placeholder='rgba(237, 20, 61 / 0.5)' backgroundColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='demo-column'>
          <NumericTextBox placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' />
          <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' backgroundColor='rgba(237, 20, 61, 0.5)' />
          <NumericTextBox placeholder='hsl(349, 86%, 50%)' backgroundColor='hsl(349, 86%, 50%)' />
          <NumericTextBox placeholder='hsla(349, 86%, 50% / 0.5)' backgroundColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}