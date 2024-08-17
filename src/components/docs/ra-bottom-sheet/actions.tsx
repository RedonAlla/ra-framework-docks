import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ActionsExample from './examples/Actions';
import ActionsExampleMdx from '!!raw-loader!./examples/Actions';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ActionsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ActionsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}