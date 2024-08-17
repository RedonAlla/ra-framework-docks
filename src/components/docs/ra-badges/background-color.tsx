import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BackgroundColorExample from './examples/BackgroundColor';
import BackgroundColorExampleMdx from '!!raw-loader!./examples/BackgroundColor';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <BackgroundColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{BackgroundColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}