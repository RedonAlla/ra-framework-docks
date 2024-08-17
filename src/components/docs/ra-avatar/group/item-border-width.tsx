import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ItemBorderWidthExample from './examples/ItemBorderWidth';
import ItemBorderWidthExampleMdx from '!!raw-loader!./examples/ItemBorderWidth';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ItemBorderWidthExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ItemBorderWidthExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}