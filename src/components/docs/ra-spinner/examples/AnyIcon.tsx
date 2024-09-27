import React from 'react';

// highlight-start
import { Spinner } from '@ra/icons';
// highlight-end

import { ICON_SIZE } from '../constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='sun' size={ICON_SIZE} />
        <Spinner name='star' size={ICON_SIZE} />
        <Spinner name='moon' size={ICON_SIZE} />
        <Spinner name='trash' size={ICON_SIZE} />
        <Spinner name='grid' size={ICON_SIZE} />
        <Spinner name='excel-file' size={ICON_SIZE} />
      </div>
    );
  }
}