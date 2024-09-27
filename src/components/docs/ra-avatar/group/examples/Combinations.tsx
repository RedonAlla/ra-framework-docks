import React from 'react';
import { StyleSheet } from 'react-native';

// highlight-start
import Avatar, { AvatarGroup } from '@ra/avatar';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <AvatarGroup style={styles.combinations}>
          <Avatar text='RA' size='large' type='text' color='primary' />
          <Avatar icon='avatar' size='large' type='icon' color='success' />
          <Avatar source={imageExample} size='large' color='info' />
        </AvatarGroup>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  combinations: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 21,
    borderRadius: 99,
    backgroundColor: '#ed143d30'
  }
});