import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BorderColors from './examples/DemoTextBoxBorderActiveColor';
import BorderColorsMdx from '!!raw-loader!./examples/DemoTextBoxBorderActiveColor';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <BorderColors />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{BorderColorsMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}