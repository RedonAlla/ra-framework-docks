import React from 'react';

// highlight-start
import Button from 'ra-buttons';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='crimson' type='text' borderWidth='thick' activeBorderColor='crimson' />
        <Button text='#ed143d' type='text' borderWidth='thick' activeBorderColor='#ed143d' />
        <Button text='rgb(237, 20, 61)' type='text' borderWidth='thick' activeBorderColor='rgb(237, 20, 61)' />
        <Button text='rgba(237, 20, 61, 0.5)' type='text' borderWidth='thick' activeBorderColor='rgba(237, 20, 61, 0.5)' />
      </div>
    );
  }
}