import React from 'react';

// highlight-start
import { TextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <TextBox placeholder='input with helper text' helperText="Helper text" />
      </div>
    );
  }
}