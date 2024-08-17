import React from 'react';

// highlight-start
import Badge from 'ra-badges';
// highlight-end
import Button from 'ra-buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' color='primary' position='top-left'>
          <Button text="top-left"/>
        </Badge>
        <Badge text='10' color='primary' position='top-right'>
          <Button text="top-right (default)"/>
        </Badge>
        <Badge text='10' color='primary' position='bottom-left'>
          <Button text="bottom-left"/>
        </Badge>
        <Badge text='10' color='primary' position='bottom-right'>
          <Button text="bottom-right"/>
        </Badge>
        <Badge text='10' color='primary' position={{ top: 5, bottom: 8, right: -25 }}>
          <Button text="{ top: 5, bottom: 8, right: -25 }"/>
        </Badge>
      </div>
    );
  }
}