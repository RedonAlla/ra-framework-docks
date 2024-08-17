import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import UsingTextComponentExample from './examples/UsingTextComponent';
import UsingTextComponentExampleMdx from '!!raw-loader!./examples/UsingTextComponent';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <UsingTextComponentExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{UsingTextComponentExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}