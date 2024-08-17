import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import FillModeExample from './examples/FillMode';
import FillModeExampleMdx from '!!raw-loader!./examples/FillMode';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <FillModeExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{FillModeExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}