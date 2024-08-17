import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BorderRadiusExample from './examples/BorderRadius.Example';
import BorderRadiusExampleMdx from '!!raw-loader!./examples/BorderRadius.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <BorderRadiusExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{BorderRadiusExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}