import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { syntaxHighlighting, defaultHighlightStyle, HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const defaultCode = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\` `

export default function Editor() {
  return (
    <div className="h-full">
      <CodeMirror
        value={defaultCode}
        height="100vh"
        className="h-full"
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
          syntaxHighlighting(defaultHighlightStyle),
          syntaxHighlighting(
            HighlightStyle.define([
              { tag: tags.heading1, fontSize: "150%" },
              { tag: tags.heading2, fontSize: "140%" },
              { tag: tags.heading3, fontSize: "130%" },
            ])
          ),
        ]}
      />
    </div>
  );
} 