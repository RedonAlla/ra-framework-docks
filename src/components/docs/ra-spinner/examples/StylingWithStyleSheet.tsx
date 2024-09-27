import React from 'react';
import { StyleSheet } from 'react-native';

// highlight-start
import { Spinner } from '@ra/icons';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='star' style={styles.icon1} />
        <Spinner name='star' style={styles.icon2} />
        <Spinner name='star' style={styles.icon3} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    width: 64,
    height: 64,
    fontSize: 64,
  },
  icon2: {
    width: 64,
    height: 64,
    fontSize: 64,
    color: 'rgb(0, 146, 255)'
  },
  icon3: {
    fontSize: 32,
    color: 'crimson',
    backgroundColor: '#FFC436',
    textAlignVertical: 'center',
    width: 68,
    height: 68,
    padding: 15,
    textAlign: 'center',
    borderRadius: 34,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  }
});