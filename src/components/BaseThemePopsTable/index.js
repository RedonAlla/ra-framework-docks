import React from 'react';
import { light, dark } from 'ra-theme-context';


export default React.memo(() => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(light).map((key, index) =>
            <tr key={index}>
              <td>{key}</td>
              <td><code><a href='https://reactnative.dev/docs/colors' target="_blank">ColorValue</a></code></td>
              <td><strong>true</strong></td>
              <td><ColorValue key={light[key]} lightValue={light[key]} darkValue={dark[key]}/></td>
              <td><strong>ColorValue</strong> from <code>react-native</code></td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
});

const ColorValue = React.memo(({lightValue, darkValue}) => {
  return (
    <>
      <p className='td-color-val'><span style={{backgroundColor: lightValue}}></span> {lightValue} <small>(light)</small></p>
      <p className='td-color-val'><span style={{backgroundColor: darkValue}}></span> {lightValue} <small>(dark)</small></p>
    </>
  );
});