import React from "react";

// highlight-start
import { Check, CheckList } from "@ra/inputs";
// highlight-end


type ItemProps = { id: number, color: string; };

type StateType = {
  valueObject: Array<ItemProps>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: string | Array<ItemProps>) {
    this.setState({valueObject: selectedItems as Array<ItemProps>});
  }

  public render() {
    return (
      <div className='example-block demo-column'>
        <CheckList material label='Value Field' valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueChange}>
          <Check value={{id: 1, color: 'primary'}} label='primary' />
          <Check value={{id: 2, color: 'secondary'}} label='secondary' />
          <Check value={{id: 3, color: 'info'}} label='info' />
        </CheckList>
      </div>
    );
  }
}