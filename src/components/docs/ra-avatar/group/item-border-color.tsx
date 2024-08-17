import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ItemBorderColorExample from './examples/ItemBorderColor';
import ItemBorderColorExampleMdx from '!!raw-loader!./examples/ItemBorderColor';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ItemBorderColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ItemBorderColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}