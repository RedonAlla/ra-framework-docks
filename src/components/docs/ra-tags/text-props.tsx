import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import TextPropsExample from './examples/TextProps.Example';
import TextPropsExampleMdx from '!!raw-loader!./examples/TextProps.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <TextPropsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{TextPropsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}