import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox placeholder='crimson' activeBorderColor='crimson' />
          <NumericTextBox placeholder='#ed143d' activeBorderColor='#ed143d' />
          <NumericTextBox placeholder='hwb(349 8% 7%)' activeBorderColor='hwb(349 8% 7%)' />
          <NumericTextBox placeholder='rgba(237, 20, 61 / 0.5)' activeBorderColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='demo-column'>
          <NumericTextBox placeholder='rgb(237, 20, 61)' activeBorderColor='rgb(237, 20, 61)' />
          <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' activeBorderColor='rgba(237, 20, 61, 0.5)' />
          <NumericTextBox placeholder='hsl(349, 86%, 50%)' activeBorderColor='hsl(349, 86%, 50%)' />
          <NumericTextBox placeholder='hsla(349, 86%, 50% / 0.5)' activeBorderColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}