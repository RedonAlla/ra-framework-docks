import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BorderWidthExample from './examples/BorderWidth.Example';
import BorderWidthExampleMdx from '!!raw-loader!./examples/BorderWidth.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <BorderWidthExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{BorderWidthExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}