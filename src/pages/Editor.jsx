import React from 'react';
import {HtmlEditor,Image, Inject, Link,QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor';
import {EditorData} from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:opacity-50" >
    <Header category="App" title="Editor"/>

    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor,Toolbar, Image, Link, QuickToolbar]}/>
    </RichTextEditorComponent>
    </div>
  )
}

export default Editor