import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import SortIndexExample from './examples/SortIndex';
import SortIndexExampleMdx from '!!raw-loader!./examples/SortIndex';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <SortIndexExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{SortIndexExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}