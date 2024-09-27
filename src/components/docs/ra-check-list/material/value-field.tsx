import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import DemoTextBox from './examples/DemoValueField';
import DemoTextBoxMdx from '!!raw-loader!./examples/DemoValueField';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="info">
          <p>
            When the selected item is an object, always specify valueField.
            If you do not set a value for the field, the list will compare the items by reference, which may complicate debugging.
            For example, the selected value will not be applied, if it does not reference the exact passed data object.
          </p>
        </Admonition>
        
        <Tabs>
          <TabItem value="example" label="Example" default>
            <DemoTextBox />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{DemoTextBoxMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}