import React from "react";
import styles from './styles.module.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export default class extends React.PureComponent<ModalProps, {}> {
  render() {
    if(!this.props.open)
      return null;

    return (
      <div className={styles.modal}>
        <div className={styles.modalMain}>
          {this.props.children}
        </div>
      </div>
    );
  }
}