import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import RadiusExample from './examples/Radius.Example';
import RadiusExampleMdx from '!!raw-loader!./examples/Radius.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <RadiusExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{RadiusExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}