import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import AnimationIntervalExample from './examples/AnimationInterval.Example';
import AnimationIntervalExampleMdx from '!!raw-loader!./examples/AnimationInterval.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <AnimationIntervalExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{AnimationIntervalExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}