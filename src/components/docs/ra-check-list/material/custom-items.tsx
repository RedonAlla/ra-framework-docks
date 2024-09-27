import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import DemoTextBox from './examples/DemoCustomItems';
import DemoTextBoxMdx from '!!raw-loader!./examples/DemoCustomItems';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="tip">
          <p><b>Check</b> item inherits appearance from <b>CheckList</b> component but you can add different props in to different
          Check items to have different appearances.</p>
        </Admonition>
        
        <Tabs>
          <TabItem value="example" label="Example" default>
            <DemoTextBox />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{DemoTextBoxMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}