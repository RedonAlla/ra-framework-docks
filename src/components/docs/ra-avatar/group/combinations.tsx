import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import CombinationsExample from './examples/Combinations';
import CombinationsExampleMdx from '!!raw-loader!./examples/Combinations';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <CombinationsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{CombinationsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}