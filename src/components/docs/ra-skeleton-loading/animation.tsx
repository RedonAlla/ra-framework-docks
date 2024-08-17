import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import AnimationExample from './examples/Animation.Example';
import AnimationExampleMdx from '!!raw-loader!./examples/Animation.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <AnimationExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{AnimationExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}