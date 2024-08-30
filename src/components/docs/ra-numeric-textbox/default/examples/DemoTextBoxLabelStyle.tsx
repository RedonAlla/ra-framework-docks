import React from 'react';
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

// highlight-start
import { StateCallbackType, NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox placeholder='Style with StyleProp<TextStyle>' label="Label" labelStyle={styles.label} />
        </div>

        <div className='column'>
          <NumericTextBox placeholder='Style with function' label="Label" labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
        </div>

      </div>
    );
  }
}

const labelStyles = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  }
});