import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import LoadingExample from './examples/Loading.Example';
import LoadingExampleMdx from '!!raw-loader!./examples/Loading.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <LoadingExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{LoadingExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}