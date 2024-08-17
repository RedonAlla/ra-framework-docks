import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import TextExample from './examples/Text.Example';
import TextExampleMdx from '!!raw-loader!./examples/Text.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <TextExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{TextExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}