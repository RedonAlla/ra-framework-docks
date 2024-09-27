import React from 'react';
import { StyleSheet, Text, Alert, Platform } from "react-native";

import Icon from '@ra/icons';
// highlight-start
import { NumericTextBox } from '@ra/inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='Input with text label' label="Label" />
        </div>

        <div className='demo-column'>
          <NumericTextBox material label='Label' placeholder='Input with custom element as label' label={<Label />} />
        </div>

      </div>
    );
  }
}

function Label() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as label')
      : Alert.alert('Alert Title', 'Custom Element as label', [
          {text: 'OK'},
        ]);
    
  return <Text style={styles.label}>
    <Icon name="avatar" onPress={openAlert} /> Custom Element Label
  </Text>;
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  },
  row: {
    columnGap: 16,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: 16,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});