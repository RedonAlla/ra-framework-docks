import React from "react";

// highlight-start
import { Check, CheckList } from "@ra/inputs";
// highlight-end


type StateType = {
  nameValues: Array<string>,
  rgbValues: Array<string>,
  hexValues: Array<string>,
  rgbaValues: Array<string>,
}


export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nameValues: ['crimson'],
      rgbValues: ['rgb(237, 20, 61)'],
      hexValues: ['#ed143d'],
      rgbaValues: ['rgba(237, 20, 61, 0.5)'],
    }
    
    this.handleNameValueChange = this.handleNameValueChange.bind(this);
    this.handleRgbValueChange = this.handleRgbValueChange.bind(this);
    this.handleHexValueChange = this.handleHexValueChange.bind(this);
    this.handleRgbaValueChange = this.handleRgbaValueChange.bind(this);
  }

  public handleNameValueChange(value: Array<string>) {
    this.setState({nameValues: value as Array<string>});
  }

  public handleRgbValueChange(value: Array<string>) {
    this.setState({rgbValues: value as Array<string>});
  }

  public handleHexValueChange(value: Array<string>) {
    this.setState({hexValues: value as Array<string>});
  }

  public handleRgbaValueChange(value: Array<string>) {
    this.setState({rgbaValues: value as Array<string>});
  }

  public render() {
    return (
      <div className='example-div demo-column'>
        <div className='demo-row'>
          <CheckList borderColor="crimson" value={this.state.nameValues} onValueChange={this.handleNameValueChange}>
            <Check value='crimson' label='crimson' />
            <Check value='blue' label='blue' />
            <Check value='red' label='red' />
          </CheckList>

          <CheckList borderColor="rgb(237, 20, 61)" value={this.state.rgbValues} onValueChange={this.handleRgbValueChange}>
            <Check value='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
            <Check value='rgb(191, 112, 204)' label='rgb(191, 112, 204)' />
            <Check value='rgb(40, 61, 158)' label='rgb(40, 61, 158)' />
          </CheckList>
        </div>

        <div className='demo-row'>
          <CheckList borderColor="#ed143d" value={this.state.hexValues} onValueChange={this.handleHexValueChange}>
            <Check value='#ed143d' label='#ed143d' />
            <Check value='#ce04d1' label='#ce04d1' />
            <Check value='#343deb' label='#343deb' />
          </CheckList>

          <CheckList borderColor="rgba(237, 20, 61, 0.5)" value={this.state.rgbaValues} onValueChange={this.handleRgbaValueChange}>
            <Check value='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
            <Check value='rgba(191, 112, 204, 0.5)' label='rgba(191, 112, 204, 0.5)' />
            <Check value='rgba(40, 61, 158, 0.5)' label='rgba(40, 61, 158, 0.5)' />
          </CheckList>
        </div>
      </div>
    );
  }
}