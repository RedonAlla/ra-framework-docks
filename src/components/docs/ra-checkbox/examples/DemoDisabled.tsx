import React from "react";
import ExampleContainer from "./example-container";

// highlight-start
import { Check } from '@ra/inputs';
// highlight-end


const items: Array<boolean> = [
  false,
  false,
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
        <Check value={true} type='outlined' label='outlined' disabled />
        <Check value={false} type='outlined' label='outlined' disabled />
        
        <Check value={true} type='solid' label='solid' disabled />
        <Check value={false} type='solid' label='solid' disabled />

        <Check value={true} type='inverse' label='inverse' disabled />
        <Check value={false} type='inverse' label='inverse' disabled />
      </div>
    );
  }
}