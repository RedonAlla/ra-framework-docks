import React from 'react';
import { ColorValue, StyleProp, StyleSheet, TextStyle } from "react-native";

// highlight-start
import { StateCallbackType, TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox placeholder='Style with StyleProp<TextStyle>' prefix="star" prefixStyle={styles.prefix} />
        </div>

        <div className='column'>
          <TextBox placeholder='Style with function' prefix="star" prefixStyle={prefixStyle('rgb(35, 189, 224)', 'crimson')} />
        </div>

      </div>
    );
  }
}


const prefixStyle = (defaultColor: ColorValue, activeColor: ColorValue) => {
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