import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import TypesExample from './examples/Types.Example';
import TypesExampleMdx from '!!raw-loader!./examples/Types.Example';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Admonition type="warning">
          <p>To have nice effect for <code>'ghost'</code>, <code>'text'</code>, <code>'link'</code> type using custom colors use <code>hex</code> color.</p>
        </Admonition>
        <Tabs>
          <TabItem value="example" label="Example" default>
            <TypesExample />
          </TabItem>

          <TabItem value="source" label="View Source">
            <CodeBlock showLineNumbers={true} language="jsx">{TypesExampleMdx}</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    );
  }
}