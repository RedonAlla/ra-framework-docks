import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ColorExample from './examples/Color.Example';
import ColorExampleMdx from '!!raw-loader!./examples/Color.Example';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}