import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import SizeExample from './examples/Size';
import SizeExampleMdx from '!!raw-loader!./examples/Size';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <SizeExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{SizeExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}