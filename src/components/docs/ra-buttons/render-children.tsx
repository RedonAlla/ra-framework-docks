import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import RenderChildrenExample from './examples/RenderChildren.Example';
import RenderChildrenExampleMdx from '!!raw-loader!./examples/RenderChildren.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <RenderChildrenExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{RenderChildrenExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}