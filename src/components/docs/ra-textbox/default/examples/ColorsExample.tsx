import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox placeholder='primary' color='primary'/>
          <TextBox placeholder='dark' color='dark'/>
          <TextBox placeholder='info' color='info'/>
          <TextBox placeholder='warning' color='warning' />
          <TextBox placeholder='default' color='default'/>
          <TextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          <TextBox placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
          <TextBox placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
        </div>

        <div className='column'>
          <TextBox placeholder='secondary' color='secondary'/>
          <TextBox placeholder='light' color='light'/>
          <TextBox placeholder='success' color='success'/>
          <TextBox placeholder='error' color='error'/>
          <TextBox placeholder='crimson' color='crimson'/>
          <TextBox placeholder='#ed143d' color='#ed143d'/>
          <TextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
          <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}