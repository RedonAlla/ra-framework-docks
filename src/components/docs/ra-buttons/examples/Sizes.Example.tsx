import React from 'react';

// highlight-start
import Button from 'ra-buttons';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block inline-grid'>
        <Button text='small' color='primary' size='small' />
        <Button text='default' color='primary' size='default' />
        <Button text='medium' color='primary' size='medium' />
        <Button text='large' color='primary' size='large' />
      </div>
    );
  }
}