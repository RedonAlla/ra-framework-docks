import React from 'react';

// highlight-start
import Button from 'ra-buttons';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='default' color='primary' />
        <Button color='primary' text={{value: 'Custom colors', color: '#072541', activeColor: '#FFCD4B'}} />
      </div>
    );
  }
}