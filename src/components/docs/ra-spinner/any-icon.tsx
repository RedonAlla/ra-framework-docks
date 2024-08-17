import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import AnyIconExample from './examples/AnyIcon';
import AnyIconExampleMdx from '!!raw-loader!./examples/AnyIcon';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <AnyIconExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{AnyIconExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}