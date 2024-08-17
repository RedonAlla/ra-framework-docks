import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import StylingWithStyleSheetExample from './examples/StylingWithStyleSheet.Example';
import StylingWithStyleSheetExampleMdx from '!!raw-loader!./examples/StylingWithStyleSheet.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <StylingWithStyleSheetExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{StylingWithStyleSheetExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}