import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ActiveBorderColorExample from './examples/ActiveBorderColor.Example';
import ActiveBorderColorExampleMdx from '!!raw-loader!./examples/ActiveBorderColor.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ActiveBorderColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ActiveBorderColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}