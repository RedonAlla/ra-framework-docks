import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import RenderLoadingExample from './examples/RenderLoading.Example';
import RenderLoadingExampleMdx from '!!raw-loader!./examples/RenderLoading.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <RenderLoadingExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{RenderLoadingExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}