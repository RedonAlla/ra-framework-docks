import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import DisabledExample from './examples/Disabled.Example';
import DisabledExampleMdx from '!!raw-loader!./examples/Disabled.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <DisabledExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{DisabledExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}