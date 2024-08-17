import React from 'react';

// highlight-start
import Badge from 'ra-badges';
// highlight-end
import Button from 'ra-buttons';


export default class extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => console.log('TextProps: onPress...');

  render() {
    return (
      <div className='example-block'>
        <Badge text='10' type='default' color='primary' onPress={this.openAlert} allowFontScaling={true}>
          <Button text="default"/>
        </Badge>
      </div>
    );
  }
}