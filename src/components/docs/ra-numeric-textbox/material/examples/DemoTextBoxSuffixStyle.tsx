import React from 'react';
import { ColorValue, StyleProp, StyleSheet, TextStyle } from "react-native";

// highlight-start
import { StateCallbackType, NumericTextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='Style with StyleProp<TextStyle>' suffix="star" suffixStyle={styles.prefix} />
        </div>

        <div className='column'>
          <NumericTextBox material label='Label' placeholder='Style with function' suffix="star" suffixStyle={suffixStyle('rgb(35, 189, 224)', 'crimson')} />
        </div>

      </div>
    );
  }
}


const suffixStyle = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  prefix: {
    color: 'crimson'
  }
});