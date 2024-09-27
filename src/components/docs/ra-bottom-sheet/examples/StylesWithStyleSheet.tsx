import React from "react";
import { StyleSheet } from "react-native";

import Button from '@ra/buttons';

// highlight-start
import BottomSheet from "@ra/bottom-sheet";
// highlight-end

import MockContainer from "./MockContainer";
import { OPEN_TIME_OUT } from "./constants";


export default class extends React.PureComponent<{}, {}> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  private open() {
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private close() {
    this.refBottomSheet?.current?.close();
  };

  public render() {
    return (
      <div className='example-block'>
        <Button color='primary' text='Open' onPress={this.open}/>
          
        <BottomSheet
          ref={this.refBottomSheet}
          closeOnDragDown={true}
          wrapperStyle={styles.wrapperStyle}
          containerStyle={styles.containerStyle}
          draggableIconStyle={styles.draggableIconStyle}>
          <MockContainer close={this.close} />
        </BottomSheet>
      </div>
    );
  }
}


const styles = StyleSheet.create({
  wrapperStyle: {
    padding: 16,
    backgroundColor: '#4361EE',
  },
  containerStyle: {
    backgroundColor: '#3A0CA3',
    height: 250,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 35,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  draggableIconStyle: {
    backgroundColor: '#F72585',
    height: 15,
    width: '50%',
    borderRadius: 3,
    //@ts-ignore
    cursor: 'pointer'
  }
});