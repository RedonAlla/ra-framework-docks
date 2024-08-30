import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import DemoTextBox from './examples/DemoTextBoxAdornmentsSeparator';
import DemoTextBoxMdx from '!!raw-loader!./examples/DemoTextBoxAdornmentsSeparator';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <DemoTextBox />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{DemoTextBoxMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}