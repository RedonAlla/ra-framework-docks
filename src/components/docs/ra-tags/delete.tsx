import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import DeleteExample from './examples/Delete.Example';
import DeleteExampleMdx from '!!raw-loader!./examples/Delete.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <DeleteExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{DeleteExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}