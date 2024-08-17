import React from 'react';

import icons from './icons';

export default React.memo(() => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Unicode Value</td>
          <td>Icon</td>
        </tr>
      </thead>
      <tbody>
      {
        icons.map((key, index) =>
          <tr key={index}>
            <td>{key}</td>
            <td>{key}</td>
            <td><span className={`icon-font icon-${key}`} /></td>
          </tr>
        )
      }
      </tbody>
    </table>
  );
});