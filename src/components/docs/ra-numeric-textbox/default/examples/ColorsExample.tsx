import React from 'react';

// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox placeholder='primary' color='primary'/>
          <NumericTextBox placeholder='dark' color='dark'/>
          <NumericTextBox placeholder='info' color='info'/>
          <NumericTextBox placeholder='warning' color='warning' />
          <NumericTextBox placeholder='default' color='default'/>
          <NumericTextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          <NumericTextBox placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
          <NumericTextBox placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
        </div>

        <div className='demo-column'>
          <NumericTextBox placeholder='secondary' color='secondary'/>
          <NumericTextBox placeholder='light' color='light'/>
          <NumericTextBox placeholder='success' color='success'/>
          <NumericTextBox placeholder='error' color='error'/>
          <NumericTextBox placeholder='crimson' color='crimson'/>
          <NumericTextBox placeholder='#ed143d' color='#ed143d'/>
          <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
          <NumericTextBox placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}