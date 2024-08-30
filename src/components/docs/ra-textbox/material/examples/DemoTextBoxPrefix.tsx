import React from 'react';
import { Alert, Platform } from "react-native";

import Icon from 'ra-icons';
// highlight-start
import { TextBox } from 'ra-inputs';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        <div className='column'>
          <TextBox material label='Label' placeholder='Input with icon prefix' prefix="star" />
        </div>

        <div className='column'>
          <TextBox material label='Label' placeholder='Input with custom element as prefix' prefix={<Prefix />} />
        </div>

      </div>
    );
  }
}

function Prefix() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as prefix')
      : Alert.alert('Alert Title', 'Custom Element as prefix', [
          {text: 'OK'},
        ]);
    
  return <Icon name="avatar" size={36} onPress={openAlert} />;
}