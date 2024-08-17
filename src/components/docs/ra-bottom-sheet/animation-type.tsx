import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import AnimationTypeExample from './examples/AnimationType';
import AnimationTypeExampleMdx from '!!raw-loader!./examples/AnimationType';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <AnimationTypeExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{AnimationTypeExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}