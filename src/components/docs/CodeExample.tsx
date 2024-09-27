import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


type Props = {
  example: React.ReactElement;
  code: string;
}

export default class extends React.PureComponent<Props> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          { this.props.example }
          <p>sd</p>
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{this.props.code}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}