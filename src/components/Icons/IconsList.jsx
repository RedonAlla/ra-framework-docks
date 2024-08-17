import React from 'react';
import './Icons-list.styles.css';

import icons from './icons';

export default React.memo(() => {
  return (
    <div className='icons-list'>
      {
        icons.map((key) =>
          <IconItem key={key} name={key}/>
        )
      }
    </div>
  );
});

const IconItem = React.memo(({name}) => {
  return (
    <div className='icons-item'>
      <span className={`icon-${name}`} />
      <span>{name}</span>
    </div>
  );
});
