import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import AnimationSpeedExample from './examples/AnimationSpeed.Example';
import AnimationSpeedExampleMdx from '!!raw-loader!./examples/AnimationSpeed.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <AnimationSpeedExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{AnimationSpeedExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}