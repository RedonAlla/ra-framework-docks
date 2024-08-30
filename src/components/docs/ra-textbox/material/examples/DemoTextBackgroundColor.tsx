import React from 'react';

// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox material label='Label' placeholder='crimson' backgroundColor='crimson' />
          <TextBox material label='Label' placeholder='#ed143d' backgroundColor='#ed143d' />
          <TextBox material label='Label' placeholder='hwb(349 8% 7%)' backgroundColor='hwb(349 8% 7%)' />
          <TextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' backgroundColor='rgba(237, 20, 61 / 0.5)' />
        </div>

        <div className='column'>
          <TextBox material label='Label' placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' />
          <TextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' backgroundColor='rgba(237, 20, 61, 0.5)' />
          <TextBox material label='Label' placeholder='hsl(349, 86%, 50%)' backgroundColor='hsl(349, 86%, 50%)' />
          <TextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' backgroundColor='hsla(349, 86%, 50% / 0.5)' />
        </div>

      </div>
    );
  }
}