import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import DefaultExample from './examples/Default.Example';
import DefaultExampleMdx from '!!raw-loader!./examples/Default.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <DefaultExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{DefaultExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}