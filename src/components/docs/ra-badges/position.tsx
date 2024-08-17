import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import PositionExample from './examples/Position.Example';
import PositionExampleMdx from '!!raw-loader!./examples/Position.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <PositionExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{PositionExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}