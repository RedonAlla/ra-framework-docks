import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ChildrenExample from './examples/Children';
import ChildrenExampleMdx from '!!raw-loader!./examples/Children';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ChildrenExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ChildrenExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}