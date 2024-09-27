import React from 'react';

// highlight-start
import Button from '@ra/buttons';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='text' color='primary' type='text' disabled />
        <Button text='ghost' color='primary' type='ghost' disabled />
        <Button text='link' color='primary' type='link' disabled />
        <Button text='inverse' color='primary' type='inverse' disabled />
        <Button text='default' color='primary' disabled />
      </div>
    );
  }
}