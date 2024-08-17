import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BorderColorExample from './examples/BorderColor';
import BorderColorExampleMdx from '!!raw-loader!./examples/BorderColor';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
      <TabItem value="example" label="Example" default>
        <BorderColorExample />
      </TabItem>

      <TabItem value="source" label="View Source">
        <CodeBlock showLineNumbers={true} language="jsx">{BorderColorExampleMdx}</CodeBlock>
      </TabItem>
    </Tabs>
    );
  }
}