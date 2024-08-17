import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import MaskExample from './examples/Mask.Example';
import MaskExampleMdx from '!!raw-loader!./examples/Mask.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="warning">
          <p><code>maskMode</code> it is the same as <code><a href='https://docs.expo.dev/versions/latest/sdk/blur-view/#blurtint'>BlurTint</a></code> from <code>expo-blur</code>.</p>
        </Admonition>

        <Tabs>
          <TabItem value="example" label="Example" default>
            <MaskExample />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{MaskExampleMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}