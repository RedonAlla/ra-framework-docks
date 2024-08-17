import React from 'react';
import './style.css';
import { light, dark } from 'ra-theme-context';


export default React.memo(() => {
  return (
    <div className='base-theme-colors-demo'>
      <ColorPalette name="light" palette={light} />
      <ColorPalette name="dark"  palette={dark}/>
    </div>
  );
});

const ColorPalette = React.memo(({name, palette}) => {
  return (
    <div>
      <div>
        <h4 id={`light-${name}`}>{name}</h4>
        {
          Object.keys(palette).map((key, index) => 
          <div className='base-theme-color-item' key={index}>
            <div className='base-theme-color-item-box' style={{backgroundColor: palette[key]}} />
            <div className='base-theme-color-item-values'>
              <h5>{key}</h5>
              <span>{palette[key]}</span>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
});