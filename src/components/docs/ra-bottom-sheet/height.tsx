import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import HeightExample from './examples/Heights';
import HeightExampleMdx from '!!raw-loader!./examples/Heights';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <HeightExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{HeightExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}