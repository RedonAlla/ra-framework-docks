import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import CloseOnDragDownExample from './examples/CloseOnDragDown';
import CloseOnDragDownExampleMdx from '!!raw-loader!./examples/CloseOnDragDown';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <CloseOnDragDownExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{CloseOnDragDownExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}