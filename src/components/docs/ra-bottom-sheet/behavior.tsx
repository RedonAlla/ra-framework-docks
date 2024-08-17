import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import BehaviorsExample from './examples/Behaviors';
import BehaviorsExampleMdx from '!!raw-loader!./examples/Behaviors';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="warning">
          <p><code>behavior</code> has effect only when <code>keyboardAvoidingViewEnabled</code> it is <strong>true</strong>.</p>
        </Admonition>

        <Tabs>
          <TabItem value="example" label="Example" default>
            <BehaviorsExample />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{BehaviorsExampleMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}