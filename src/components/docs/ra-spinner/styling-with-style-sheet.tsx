import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import StylingWithStyleSheet from './examples/StylingWithStyleSheet';
import StylingWithStyleSheetMdx from '!!raw-loader!./examples/StylingWithStyleSheet';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <StylingWithStyleSheet />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{StylingWithStyleSheetMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}