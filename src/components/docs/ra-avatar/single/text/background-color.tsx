import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import BackgroundColorExample from './examples/BackgroundColor';
import BackgroundColorExampleMdx from '!!raw-loader!./examples/BackgroundColor';


/*
  FIX: error - ../node_modules/@react-native/assets/registry.js
  Edit file /node_modules/@react-native/assets/registry.js according to the fallowing link:
  https://github.com/expo/expo/issues/21623
*/

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabItem value="example" label="Example" default>
          <BackgroundColorExample />
        </TabItem>

        <TabItem value="source" label="View Source">
          <CodeBlock showLineNumbers={true} language="jsx">{BackgroundColorExampleMdx}</CodeBlock>
        </TabItem>
      </Tabs>
    );
  }
}