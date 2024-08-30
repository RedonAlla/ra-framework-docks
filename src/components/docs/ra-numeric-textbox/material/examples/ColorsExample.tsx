import React from 'react';

// highlight-start
import { NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='primary' color='primary'/>
          <NumericTextBox material label='Label' placeholder='dark' color='dark'/>
          <NumericTextBox material label='Label' placeholder='info' color='info'/>
          <NumericTextBox material label='Label' placeholder='warning' color='warning' />
          <NumericTextBox material label='Label' placeholder='default' color='default'/>
          <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
          <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
        </div>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='secondary' color='secondary'/>
          <NumericTextBox material label='Label' placeholder='light' color='light'/>
          <NumericTextBox material label='Label' placeholder='success' color='success'/>
          <NumericTextBox material label='Label' placeholder='error' color='error'/>
          <NumericTextBox material label='Label' placeholder='crimson' color='crimson'/>
          <NumericTextBox material label='Label' placeholder='#ed143d' color='#ed143d'/>
          <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
          <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}