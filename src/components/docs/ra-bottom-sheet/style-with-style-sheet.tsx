import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import StylesWithStyleSheetExample from './examples/StylesWithStyleSheet';
import StylesWithStyleSheetExampleMdx from '!!raw-loader!./examples/StylesWithStyleSheet';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <StylesWithStyleSheetExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{StylesWithStyleSheetExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}