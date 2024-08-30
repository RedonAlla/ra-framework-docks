import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox material label='Label' placeholder='primary' color='primary'/>
          <TextBox material label='Label' placeholder='dark' color='dark'/>
          <TextBox material label='Label' placeholder='info' color='info'/>
          <TextBox material label='Label' placeholder='warning' color='warning' />
          <TextBox material label='Label' placeholder='default' color='default'/>
          <TextBox material label='Label' placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          <TextBox material label='Label' placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
          <TextBox material label='Label' placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
        </div>

        <div className='column'>
          <TextBox material label='Label' placeholder='secondary' color='secondary'/>
          <TextBox material label='Label' placeholder='light' color='light'/>
          <TextBox material label='Label' placeholder='success' color='success'/>
          <TextBox material label='Label' placeholder='error' color='error'/>
          <TextBox material label='Label' placeholder='crimson' color='crimson'/>
          <TextBox material label='Label' placeholder='#ed143d' color='#ed143d'/>
          <TextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
          <TextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}