import React from 'react';

import { SKELETON_HEIGHT } from './constants';
// highlight-start
import SkeletonLoader, { Circle, Rect } from '@ra/skeleton-loading';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <SkeletonLoader width={'100%'} height={SKELETON_HEIGHT}>
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>
      </div>
    );
  }
}