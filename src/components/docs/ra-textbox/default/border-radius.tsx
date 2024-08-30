import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import DemoTextBox from './examples/DemoTextBoxBorderRadius';
import DemoTextBoxMdx from '!!raw-loader!./examples/DemoTextBoxBorderRadius';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <DemoTextBox />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{DemoTextBoxMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}