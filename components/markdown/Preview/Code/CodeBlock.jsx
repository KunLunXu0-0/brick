import React from 'react';
import hljs from 'highlight.js';
import { Icon } from '../../..';

export default React.memo(({ value, lang }) => {
  const codeRef = React.useRef(null);

  // 复制
  const handleCopy = React.useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
  }, [value]);


  // 监听 value 高亮
  React.useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [value, lang]);

  return (
    <div className="qyrc-markdown-preview-code">
      <div className="qyrc-markdown-preview-code-header">
        <div className="qyrc-markdown-preview-code-header-red" />
        <div className="qyrc-markdown-preview-code-header-yellow" />
        <div className="qyrc-markdown-preview-code-header-green" />
        <div className="qyrc-markdown-preview-code-header-lang">
          {lang}
        </div>
        <Icon
          title="复制代码"
          type="icon-copy"
          onClick={handleCopy}
          className="qyrc-markdown-preview-code-header-copy"
        />
      </div>
      <pre>
        <code ref={codeRef} className={`language-${lang} qyrc-markdown-preview-code-body`}>
          {value}
        </code>
      </pre>
    </div>
  );
});
