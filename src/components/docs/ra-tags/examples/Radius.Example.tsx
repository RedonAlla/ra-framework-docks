import React from "react";

// highlight-start
import Tag from '@ra/tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='none' radius='none' />
        <Tag color='primary' text='small' radius='small' />
        <Tag color='primary' text='medium (default)' radius='medium' />
        <Tag color='primary' text='large' radius='large' />
        <Tag color='primary' text='full' radius='full' />
        <Tag color='primary' text='5' radius={5} />
      </div>
    );
  }
}