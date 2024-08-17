import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ItemPaddingExample from './examples/ItemPadding';
import ItemPaddingExampleMdx from '!!raw-loader!./examples/ItemPadding';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ItemPaddingExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ItemPaddingExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}