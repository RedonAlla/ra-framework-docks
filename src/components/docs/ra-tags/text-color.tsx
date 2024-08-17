import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import TextColorsExample from './examples/TextColor';
import TextColorsExampleMdx from '!!raw-loader!./examples/TextColor';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <TextColorsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{TextColorsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}