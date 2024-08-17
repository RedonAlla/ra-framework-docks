import React from 'react';
import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  type: 'note' | 'tip' | 'info' | 'warning' | 'danger'
}


export default class extends React.PureComponent<Props> {
  render() {
    return (
      <p  className={clsx('span-highlight', this.props.type)}>
        {this.props.children}
      </p>
    );
  }
}