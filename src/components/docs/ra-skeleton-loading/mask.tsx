import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import MaskExample from './examples/Mask.Example';
import MaskExampleMdx from '!!raw-loader!./examples/Mask.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <MaskExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{MaskExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}