import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ColorsExample from './examples/DemoTextBoxDisabled';
import ColorsExampleMdx from '!!raw-loader!./examples/DemoTextBoxDisabled';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ColorsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ColorsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}