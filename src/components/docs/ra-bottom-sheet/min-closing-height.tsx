import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import MinClosingHeightsExample from './examples/MinClosingHeights';
import MinClosingHeightsExampleMdx from '!!raw-loader!./examples/MinClosingHeights';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="warning">
          <p><code>minClosingHeight</code> has effect only when <code>closeOnDragDown</code> it is <strong>true</strong>.</p>
        </Admonition>
        <Tabs>
          <TabItem value="example" label="Example" default>
            <MinClosingHeightsExample />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{MinClosingHeightsExampleMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}