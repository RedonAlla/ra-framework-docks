import React from 'react';

// highlight-start
import Badge from 'ra-badges';
// highlight-end
import Button from 'ra-buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' type='default' color='primary'>
          <Button text="default"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary'>
          <Button text="ghost"/>
        </Badge>
        <Badge text='10' type='text' color='primary'>
          <Button text="text"/>
        </Badge>
      </div>
    );
  }
}