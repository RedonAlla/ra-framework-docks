import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import SizesExample from './examples/Sizes';
import SizesExampleMdx from '!!raw-loader!./examples/Sizes';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <SizesExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{SizesExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}