import React from 'react';

// highlight-start
import Tag from 'ra-tags';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => console.log('TextProps: onPress...');

  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='TextProps' textProps={{onPress: this.openAlert, allowFontScaling: true}} />
      </div>
    );
  }
}