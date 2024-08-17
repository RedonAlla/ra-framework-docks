import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => console.log('onDelete...');

  render() {
    return (
      <div className='example-block inline-grid'>
        <Tag color='primary' size='small' text='small' onDelete={this.openAlert} />
        <Tag color='primary' size='default' text='default' onDelete={this.openAlert} />
        <Tag color='primary' size='medium' text='medium' onDelete={this.openAlert} />
        <Tag color='primary' size='large'text='large' onDelete={this.openAlert} />
      </div>
    );
  }
}