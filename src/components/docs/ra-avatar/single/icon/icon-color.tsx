import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import IconColorExample from './examples/IconColor';
import IconColorExampleMdx from '!!raw-loader!./examples/IconColor';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <IconColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{IconColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}