import React from "react";
import ExampleContainer from "./example-container";

// highlight-start
import { Check } from '@ra/inputs';
// highlight-end


const items: Array<boolean> = [
  false,
  false,
  false,
  false
];

export default class extends ExampleContainer {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: items
    }
  }

  public render() {
    return (
      <div className='example-block'>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' checkedBorderColor='crimson' label='crimson' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='outlined' checkedBorderColor='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='outlined' checkedBorderColor='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='outlined' checkedBorderColor='#ed143d' label='#ed143d' />
      </div>
    );
  }
}