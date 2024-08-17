import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import IconsExample from './examples/Icons.Example';
import IconsExampleMdx from '!!raw-loader!./examples/Icons.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <IconsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{IconsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}