import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import TextColorExample from './examples/TextColor';
import TextColorExampleMdx from '!!raw-loader!./examples/TextColor';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <TextColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{TextColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}