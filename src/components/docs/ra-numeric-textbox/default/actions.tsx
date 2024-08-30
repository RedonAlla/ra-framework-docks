import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import DemoTextBox from './examples/DemoTextBoxActions';
import DemoTextBoxMdx from '!!raw-loader!./examples/DemoTextBoxActions';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="warning">
          <p>As NumberTextBox without actions you can use also the TextBox with property `keyboardType='numeric'`</p>
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