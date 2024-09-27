import React from "react";
  
type StateProps = {
  items: Array<boolean>;
}


export default class extends React.Component<{}, StateProps> {
  constructor(props: {}) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(index: number) {
    const items = this.state.items;
    items[index] = !items[index]
    this.setState({ items });
  }
}