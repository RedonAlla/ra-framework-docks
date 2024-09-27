import React from "react";
import { StyleSheet, Text } from "react-native";
import ExampleContainer from "./example-container";

// highlight-start
import { Check } from '@ra/inputs';
// highlight-end


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
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
        <Check value={this.state.items![0]}
              onValueChange={() => this.handleChange(0)}
              label='Custom Check Element'
              checkElement={<CheckElement />}
              unCheckElement={<UncheckElement />}
        />
      </div>
    );
  }
}

function CheckElement() {
  return <Text style={styles.label}>😍</Text>;
}
function UncheckElement() {
  return <Text style={styles.label}>🤔</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 32
  },
});