import React from "react";
import { Text, StyleSheet, View } from "react-native";

// highlight-start
import Tag from 'ra-tags';
// highlight-end
import Icon from "ra-icons/dist/icon";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='Custom Loader'>
            <View style={styles.row}>
              <Icon name='star' size={22} />
              <Text style={styles.text}>Custom Children Render</Text>
            </View>
          </Tag>
      </div>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 12,
    fontFamily: 'Bold',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  }
});