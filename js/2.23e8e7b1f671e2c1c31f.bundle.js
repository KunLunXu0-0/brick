(window.webpackJsonp=window.webpackJsonp||[]).push([[2,60],{896:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return i})),t.d(n,"language",(function(){return r}));var o="undefined"==typeof monaco?self.monaco:monaco,i={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:o.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:o.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:o.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:o.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},r={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}},915:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return i})),t.d(n,"language",(function(){return r}));var o=t(896),i=("undefined"==typeof monaco?self.monaco:monaco,o.conf),r={defaultToken:"invalid",tokenPostfix:".js",keywords:["break","case","catch","class","continue","const","constructor","debugger","default","delete","do","else","export","extends","false","finally","for","from","function","get","if","import","in","instanceof","let","new","null","return","set","super","switch","symbol","this","throw","true","try","typeof","undefined","var","void","while","with","yield","async","await","of"],typeKeywords:[],operators:o.language.operators,symbols:o.language.symbols,escapes:o.language.escapes,digits:o.language.digits,octaldigits:o.language.octaldigits,binarydigits:o.language.binarydigits,hexdigits:o.language.hexdigits,regexpctl:o.language.regexpctl,regexpesc:o.language.regexpesc,tokenizer:o.language.tokenizer}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2phdmFzY3JpcHQvamF2YXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJfbW9uYWNvIiwibW9uYWNvIiwic2VsZiIsImNvbmYiLCJ3b3JkUGF0dGVybiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsIm9uRW50ZXJSdWxlcyIsImJlZm9yZVRleHQiLCJhZnRlclRleHQiLCJhY3Rpb24iLCJpbmRlbnRBY3Rpb24iLCJsYW5ndWFnZXMiLCJJbmRlbnRBY3Rpb24iLCJJbmRlbnRPdXRkZW50IiwiYXBwZW5kVGV4dCIsIk5vbmUiLCJyZW1vdmVUZXh0IiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4Iiwia2V5d29yZHMiLCJ0eXBlS2V5d29yZHMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsImRpZ2l0cyIsIm9jdGFsZGlnaXRzIiwiYmluYXJ5ZGlnaXRzIiwiaGV4ZGlnaXRzIiwicmVnZXhwY3RsIiwicmVnZXhwZXNjIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjb21tb24iLCJjYXNlcyIsInRva2VuIiwiYnJhY2tldCIsIm5leHQiLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCIsImpzZG9jIiwicmVnZXhwIiwicmVnZXhyYW5nZSIsInN0cmluZ19kb3VibGUiLCJzdHJpbmdfc2luZ2xlIiwic3RyaW5nX2JhY2t0aWNrIiwiYnJhY2tldENvdW50aW5n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QUN0QkMsVUFBVyxXQUFXQSxVQUN0QkMsVUFBVyxXQUFXQSIsImZpbGUiOiJqcy8yLjIzZThlN2IxZjY3MWUyYzFjMzFmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbi8vIEFsbG93IGZvciBydW5uaW5nIHVuZGVyIG5vZGVqcy9yZXF1aXJlanMgaW4gdGVzdHNcclxudmFyIF9tb25hY28gPSAodHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcgPyBzZWxmLm1vbmFjbyA6IG1vbmFjbyk7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIG9uRW50ZXJSdWxlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZS5nLiAvKiogfCAqL1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXlxccypcXC9cXCpcXCooPyFcXC8pKFteXFwqXXxcXCooPyFcXC8pKSokLyxcclxuICAgICAgICAgICAgYWZ0ZXJUZXh0OiAvXlxccypcXCpcXC8kLyxcclxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudE91dGRlbnQsIGFwcGVuZFRleHQ6ICcgKiAnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZS5nLiAvKiogLi4ufFxyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXlxccypcXC9cXCpcXCooPyFcXC8pKFteXFwqXXxcXCooPyFcXC8pKSokLyxcclxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLk5vbmUsIGFwcGVuZFRleHQ6ICcgKiAnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZS5nLiAgKiAuLi58XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IC9eKFxcdHwoXFwgXFwgKSkqXFwgXFwqKFxcIChbXlxcKl18XFwqKD8hXFwvKSkqKT8kLyxcclxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLk5vbmUsIGFwcGVuZFRleHQ6ICcqICcgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBlLmcuICAqL3xcclxuICAgICAgICAgICAgYmVmb3JlVGV4dDogL14oXFx0fChcXCBcXCApKSpcXCBcXCpcXC9cXHMqJC8sXHJcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IF9tb25hY28ubGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLCByZW1vdmVUZXh0OiAxIH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46IFwiLyoqXCIsIGNsb3NlOiBcIiAqL1wiLCBub3RJbjogW1wic3RyaW5nXCJdIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyovL1xcXFxzKiM/cmVnaW9uXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyovL1xcXFxzKiM/ZW5kcmVnaW9uXFxcXGJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcclxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnRzJyxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Fic3RyYWN0JywgJ2FzJywgJ2JyZWFrJywgJ2Nhc2UnLCAnY2F0Y2gnLCAnY2xhc3MnLCAnY29udGludWUnLCAnY29uc3QnLFxyXG4gICAgICAgICdjb25zdHJ1Y3RvcicsICdkZWJ1Z2dlcicsICdkZWNsYXJlJywgJ2RlZmF1bHQnLCAnZGVsZXRlJywgJ2RvJywgJ2Vsc2UnLFxyXG4gICAgICAgICdlbnVtJywgJ2V4cG9ydCcsICdleHRlbmRzJywgJ2ZhbHNlJywgJ2ZpbmFsbHknLCAnZm9yJywgJ2Zyb20nLCAnZnVuY3Rpb24nLFxyXG4gICAgICAgICdnZXQnLCAnaWYnLCAnaW1wbGVtZW50cycsICdpbXBvcnQnLCAnaW4nLCAnaW5mZXInLCAnaW5zdGFuY2VvZicsICdpbnRlcmZhY2UnLFxyXG4gICAgICAgICdpcycsICdrZXlvZicsICdsZXQnLCAnbW9kdWxlJywgJ25hbWVzcGFjZScsICduZXZlcicsICduZXcnLCAnbnVsbCcsICdwYWNrYWdlJyxcclxuICAgICAgICAncHJpdmF0ZScsICdwcm90ZWN0ZWQnLCAncHVibGljJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmUnLCAnZ2xvYmFsJywgJ3JldHVybicsXHJcbiAgICAgICAgJ3NldCcsICdzdGF0aWMnLCAnc3VwZXInLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0aGlzJywgJ3Rocm93JywgJ3RydWUnLCAndHJ5JyxcclxuICAgICAgICAndHlwZScsICd0eXBlb2YnLCAndW5pcXVlJywgJ3ZhcicsICd2b2lkJywgJ3doaWxlJywgJ3dpdGgnLCAneWllbGQnLCAnYXN5bmMnLFxyXG4gICAgICAgICdhd2FpdCcsICdvZidcclxuICAgIF0sXHJcbiAgICB0eXBlS2V5d29yZHM6IFtcclxuICAgICAgICAnYW55JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ29iamVjdCcsICdzdHJpbmcnLCAndW5kZWZpbmVkJ1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09JywgJz0+JywgJysnLCAnLScsICcqKicsXHJcbiAgICAgICAgJyonLCAnLycsICclJywgJysrJywgJy0tJywgJzw8JywgJzwvJywgJz4+JywgJz4+PicsICcmJyxcclxuICAgICAgICAnfCcsICdeJywgJyEnLCAnficsICcmJicsICd8fCcsICc/PycsICc/JywgJzonLCAnPScsICcrPScsICctPScsXHJcbiAgICAgICAgJyo9JywgJyoqPScsICcvPScsICclPScsICc8PD0nLCAnPj49JywgJz4+Pj0nLCAnJj0nLCAnfD0nLFxyXG4gICAgICAgICdePScsICdAJyxcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICBkaWdpdHM6IC9cXGQrKF8rXFxkKykqLyxcclxuICAgIG9jdGFsZGlnaXRzOiAvWzAtN10rKF8rWzAtN10rKSovLFxyXG4gICAgYmluYXJ5ZGlnaXRzOiAvWzAtMV0rKF8rWzAtMV0rKSovLFxyXG4gICAgaGV4ZGlnaXRzOiAvW1swLTlhLWZBLUZdKyhfK1swLTlhLWZBLUZdKykqLyxcclxuICAgIHJlZ2V4cGN0bDogL1soKXt9XFxbXFxdXFwkXFxefFxcLSorP1xcLl0vLFxyXG4gICAgcmVnZXhwZXNjOiAvXFxcXCg/OltiQmREZm5yc3R2d1duMFxcXFxcXC9dfEByZWdleHBjdGx8Y1tBLVpdfHhbMC05YS1mQS1GXXsyfXx1WzAtOWEtZkEtRl17NH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbL1t7fV0vLCAnZGVsaW1pdGVyLmJyYWNrZXQnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnY29tbW9uJyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tb246IFtcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2Etel8kXVtcXHckXSovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1tBLVpdW1xcd1xcJF0qLywgJ3R5cGUuaWRlbnRpZmllciddLFxyXG4gICAgICAgICAgICAvLyBbL1tBLVpdW1xcd1xcJF0qLywgJ2lkZW50aWZpZXInXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gcmVndWxhciBleHByZXNzaW9uOiBlbnN1cmUgaXQgaXMgdGVybWluYXRlZCBiZWZvcmUgYmVnaW5uaW5nIChvdGhlcndpc2UgaXQgaXMgYW4gb3BlYXRvcilcclxuICAgICAgICAgICAgWy9cXC8oPz0oW15cXFxcXFwvXXxcXFxcLikrXFwvKFtnaW1zdXldKikoXFxzKikoXFwufDt8LHxcXCl8XFxdfFxcfXwkKSkvLCB7IHRva2VuOiAncmVnZXhwJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0ByZWdleHAnIH1dLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9bKClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvISg/PShbXj1dfCQpKS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2VFXShbXFwtK10/KEBkaWdpdHMpKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpXFwuKEBkaWdpdHMpKFtlRV1bXFwtK10/KEBkaWdpdHMpKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF0oQGhleGRpZ2l0cyluPy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMFtvT10/KEBvY3RhbGRpZ2l0cyluPy8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy8wW2JCXShAYmluYXJ5ZGlnaXRzKW4/LywgJ251bWJlci5iaW5hcnknXSxcclxuICAgICAgICAgICAgWy8oQGRpZ2l0cyluPy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nX2RvdWJsZSddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdfc2luZ2xlJ10sXHJcbiAgICAgICAgICAgIFsvYC8sICdzdHJpbmcnLCAnQHN0cmluZ19iYWNrdGljayddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqXFwqKD8hXFwvKS8sICdjb21tZW50LmRvYycsICdAanNkb2MnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBqc2RvYzogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gV2UgbWF0Y2ggcmVndWxhciBleHByZXNzaW9uIHF1aXRlIHByZWNpc2VseVxyXG4gICAgICAgIHJlZ2V4cDogW1xyXG4gICAgICAgICAgICBbLyhcXHspKFxcZCsoPzosXFxkKik/KShcXH0pLywgWydyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcclxuICAgICAgICAgICAgWy8oXFxbKShcXF4/KSg/PSg/OlteXFxdXFxcXFxcL118XFxcXC4pKykvLCBbJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cmFuZ2UnIH1dXSxcclxuICAgICAgICAgICAgWy8oXFwoKShcXD86fFxcPz18XFw/ISkvLCBbJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXV0sXHJcbiAgICAgICAgICAgIFsvWygpXS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcclxuICAgICAgICAgICAgWy9AcmVnZXhwY3RsLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxyXG4gICAgICAgICAgICBbL1teXFxcXFxcL10vLCAncmVnZXhwJ10sXHJcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXFxcLi8sICdyZWdleHAuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLyhcXC8pKFtnaW1zdXldKikvLCBbeyB0b2tlbjogJ3JlZ2V4cCcsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfSwgJ2tleXdvcmQub3RoZXInXV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZWdleHJhbmdlOiBbXHJcbiAgICAgICAgICAgIFsvLS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcclxuICAgICAgICAgICAgWy9cXF4vLCAncmVnZXhwLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9AcmVnZXhwZXNjLywgJ3JlZ2V4cC5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9bXlxcXV0vLCAncmVnZXhwJ10sXHJcbiAgICAgICAgICAgIFsvXFxdLywgeyB0b2tlbjogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIG5leHQ6ICdAcG9wJywgYnJhY2tldDogJ0BjbG9zZScgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ19kb3VibGU6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdfc2luZ2xlOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ19iYWNrdGljazogW1xyXG4gICAgICAgICAgICBbL1xcJFxcey8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAYnJhY2tldENvdW50aW5nJyB9XSxcclxuICAgICAgICAgICAgWy9bXlxcXFxgJF0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9gLywgJ3N0cmluZycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGJyYWNrZXRDb3VudGluZzogW1xyXG4gICAgICAgICAgICBbL1xcey8sICdkZWxpbWl0ZXIuYnJhY2tldCcsICdAYnJhY2tldENvdW50aW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFx9LywgJ2RlbGltaXRlci5icmFja2V0JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnY29tbW9uJyB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGNvbmYgYXMgdHNDb25mLCBsYW5ndWFnZSBhcyB0c0xhbmd1YWdlIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC90eXBlc2NyaXB0LmpzJztcclxuLy8gQWxsb3cgZm9yIHJ1bm5pbmcgdW5kZXIgbm9kZWpzL3JlcXVpcmVqcyBpbiB0ZXN0c1xyXG52YXIgX21vbmFjbyA9ICh0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJyA/IHNlbGYubW9uYWNvIDogbW9uYWNvKTtcclxuZXhwb3J0IHZhciBjb25mID0gdHNDb25mO1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XHJcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5qcycsXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdicmVhaycsICdjYXNlJywgJ2NhdGNoJywgJ2NsYXNzJywgJ2NvbnRpbnVlJywgJ2NvbnN0JyxcclxuICAgICAgICAnY29uc3RydWN0b3InLCAnZGVidWdnZXInLCAnZGVmYXVsdCcsICdkZWxldGUnLCAnZG8nLCAnZWxzZScsXHJcbiAgICAgICAgJ2V4cG9ydCcsICdleHRlbmRzJywgJ2ZhbHNlJywgJ2ZpbmFsbHknLCAnZm9yJywgJ2Zyb20nLCAnZnVuY3Rpb24nLFxyXG4gICAgICAgICdnZXQnLCAnaWYnLCAnaW1wb3J0JywgJ2luJywgJ2luc3RhbmNlb2YnLCAnbGV0JywgJ25ldycsICdudWxsJyxcclxuICAgICAgICAncmV0dXJuJywgJ3NldCcsICdzdXBlcicsICdzd2l0Y2gnLCAnc3ltYm9sJywgJ3RoaXMnLCAndGhyb3cnLCAndHJ1ZScsXHJcbiAgICAgICAgJ3RyeScsICd0eXBlb2YnLCAndW5kZWZpbmVkJywgJ3ZhcicsICd2b2lkJywgJ3doaWxlJywgJ3dpdGgnLCAneWllbGQnLFxyXG4gICAgICAgICdhc3luYycsICdhd2FpdCcsICdvZidcclxuICAgIF0sXHJcbiAgICB0eXBlS2V5d29yZHM6IFtdLFxyXG4gICAgb3BlcmF0b3JzOiB0c0xhbmd1YWdlLm9wZXJhdG9ycyxcclxuICAgIHN5bWJvbHM6IHRzTGFuZ3VhZ2Uuc3ltYm9scyxcclxuICAgIGVzY2FwZXM6IHRzTGFuZ3VhZ2UuZXNjYXBlcyxcclxuICAgIGRpZ2l0czogdHNMYW5ndWFnZS5kaWdpdHMsXHJcbiAgICBvY3RhbGRpZ2l0czogdHNMYW5ndWFnZS5vY3RhbGRpZ2l0cyxcclxuICAgIGJpbmFyeWRpZ2l0czogdHNMYW5ndWFnZS5iaW5hcnlkaWdpdHMsXHJcbiAgICBoZXhkaWdpdHM6IHRzTGFuZ3VhZ2UuaGV4ZGlnaXRzLFxyXG4gICAgcmVnZXhwY3RsOiB0c0xhbmd1YWdlLnJlZ2V4cGN0bCxcclxuICAgIHJlZ2V4cGVzYzogdHNMYW5ndWFnZS5yZWdleHBlc2MsXHJcbiAgICB0b2tlbml6ZXI6IHRzTGFuZ3VhZ2UudG9rZW5pemVyLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9