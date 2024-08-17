import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import ActiveColorsExample from './examples/ActiveColors.Example';
import ActiveColorsExampleMdx from '!!raw-loader!./examples/ActiveColors.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <ActiveColorsExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{ActiveColorsExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}