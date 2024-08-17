import React from 'react';

// highlight-start
import Badge from 'ra-badges';
// highlight-end
import Button from 'ra-buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text="10" color='primary' size="small">
          <Button text="small"/>
        </Badge>
        <Badge text='10' color='primary' size="default">
          <Button text="default"/>
        </Badge>
        <Badge text='10' color='primary' size="medium">
          <Button text="medium"/>
        </Badge>
        <Badge text='10' color='primary' size="large">
          <Button text="large"/>
        </Badge>
      </div>
    );
  }
}