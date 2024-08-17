import React from 'react';

// highlight-start
import Badge from 'ra-badges';
// highlight-end
import Button from 'ra-buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' backgroundColor='crimson'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' backgroundColor='#ed143d'>
          <Button text="#ed143d"/>
        </Badge>
        <Badge text='10' backgroundColor='rgb(237, 20, 61)'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' backgroundColor='rgba(237, 20, 61, 0.5)'>
          <Button text="rgba(237, 20, 61, 0.5)"/>
        </Badge>
      </div>
    );
  }
}