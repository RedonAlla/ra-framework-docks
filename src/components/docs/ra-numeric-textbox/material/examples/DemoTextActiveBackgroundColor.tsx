import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='crimson' activeBackgroundColor='crimson' />
          <NumericTextBox material label='Label' placeholder='#ed143d' activeBackgroundColor='#ed143d' />
          <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' activeBackgroundColor='hwb(349 8% 7%)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' activeBackgroundColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' />
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' activeBackgroundColor='rgba(237, 20, 61, 0.5)' />
          <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' activeBackgroundColor='hsl(349, 86%, 50%)' />
          <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' activeBackgroundColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}