(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[8719],{18719:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>s,language:()=>o});var s={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},o={defaultToken:"",tokenPostfix:".cs",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["extern","alias","using","bool","decimal","sbyte","byte","short","ushort","int","uint","long","ulong","char","float","double","object","dynamic","string","assembly","is","as","ref","out","this","base","new","typeof","void","checked","unchecked","default","delegate","var","const","if","else","switch","case","while","do","for","foreach","in","break","continue","goto","return","throw","try","catch","finally","lock","yield","from","let","where","join","on","equals","into","orderby","ascending","descending","select","group","by","namespace","partial","class","field","event","method","param","public","protected","internal","private","abstract","sealed","static","struct","readonly","volatile","virtual","override","params","get","set","add","remove","operator","true","false","implicit","explicit","interface","enum","null","async","await","fixed","sizeof","stackalloc","unsafe","nameof","when"],namespaceFollows:["namespace","using"],parenFollows:["if","for","while","switch","foreach","using","catch","when"],operators:["=","??","||","&&","|","^","&","==","!=","<=",">=","<<","+","-","*","/","%","!","~","++","--","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=",">>","=>"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/\@?[a-zA-Z_]\w*/,{cases:{"@namespaceFollows":{token:"keyword.$0",next:"@namespace"},"@keywords":{token:"keyword.$0",next:"@qualified"},"@default":{token:"identifier",next:"@qualified"}}}],{include:"@whitespace"},[/}/,{cases:{"$S2==interpolatedstring":{token:"string.quote",next:"@pop"},"$S2==litinterpstring":{token:"string.quote",next:"@pop"},"@default":"@brackets"}}],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/,"number.float"],[/0[xX][0-9a-fA-F_]+/,"number.hex"],[/0[bB][01_]+/,"number.hex"],[/[0-9_]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",next:"@string"}],[/\$\@"/,{token:"string.quote",next:"@litinterpstring"}],[/\@"/,{token:"string.quote",next:"@litstring"}],[/\$"/,{token:"string.quote",next:"@interpolatedstring"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],qualified:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],[/\./,"delimiter"],["","","@pop"]],namespace:[{include:"@whitespace"},[/[A-Z]\w*/,"namespace"],[/[\.=]/,"delimiter"],["","","@pop"]],comment:[[/[^\/*]+/,"comment"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",next:"@pop"}]],litstring:[[/[^"]+/,"string"],[/""/,"string.escape"],[/"/,{token:"string.quote",next:"@pop"}]],litinterpstring:[[/[^"{]+/,"string"],[/""/,"string.escape"],[/{{/,"string.escape"],[/}}/,"string.escape"],[/{/,{token:"string.quote",next:"root.litinterpstring"}],[/"/,{token:"string.quote",next:"@pop"}]],interpolatedstring:[[/[^\\"{]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/{{/,"string.escape"],[/}}/,"string.escape"],[/{/,{token:"string.quote",next:"root.interpolatedstring"}],[/"/,{token:"string.quote",next:"@pop"}]],whitespace:[[/^[ \t\v\f]*#((r)|(load))(?=\s)/,"directive.csx"],[/^[ \t\v\f]*#\w.*$/,"namespace.cpp"],[/[ \t\v\f\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9jc2hhcnAvY3NoYXJwLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJ3b3JkUGF0dGVybiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJ0b2tlbiIsImtleXdvcmRzIiwibmFtZXNwYWNlRm9sbG93cyIsInBhcmVuRm9sbG93cyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwibmV4dCIsImluY2x1ZGUiLCJxdWFsaWZpZWQiLCJuYW1lc3BhY2UiLCJjb21tZW50Iiwic3RyaW5nIiwibGl0c3RyaW5nIiwibGl0aW50ZXJwc3RyaW5nIiwiaW50ZXJwb2xhdGVkc3RyaW5nIiwid2hpdGVzcGFjZSJdLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsWUFBYSx1RkFDYkMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxD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RVYsTUFBTyxlQUFnQlUsS0FBTSxVQUV6Q1MsV0FBWSxDQUNSLENBQUMsaUNBQWtDLGlCQUNuQyxDQUFDLG9CQUFxQixpQkFDdEIsQ0FBQyxpQkFBa0IsSUFDbkIsQ0FBQyxPQUFRLFVBQVcsWUFDcEIsQ0FBQyxVQUFXIiwiZmlsZSI6ImpzLzg3MTkuMDg2ZmJiMTk4NmVkNGE5MGE4YTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojZW5kcmVnaW9uXFxcXGInKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuY3MnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnZXh0ZXJuJyxcclxuICAgICAgICAnYWxpYXMnLFxyXG4gICAgICAgICd1c2luZycsXHJcbiAgICAgICAgJ2Jvb2wnLFxyXG4gICAgICAgICdkZWNpbWFsJyxcclxuICAgICAgICAnc2J5dGUnLFxyXG4gICAgICAgICdieXRlJyxcclxuICAgICAgICAnc2hvcnQnLFxyXG4gICAgICAgICd1c2hvcnQnLFxyXG4gICAgICAgICdpbnQnLFxyXG4gICAgICAgICd1aW50JyxcclxuICAgICAgICAnbG9uZycsXHJcbiAgICAgICAgJ3Vsb25nJyxcclxuICAgICAgICAnY2hhcicsXHJcbiAgICAgICAgJ2Zsb2F0JyxcclxuICAgICAgICAnZG91YmxlJyxcclxuICAgICAgICAnb2JqZWN0JyxcclxuICAgICAgICAnZHluYW1pYycsXHJcbiAgICAgICAgJ3N0cmluZycsXHJcbiAgICAgICAgJ2Fzc2VtYmx5JyxcclxuICAgICAgICAnaXMnLFxyXG4gICAgICAgICdhcycsXHJcbiAgICAgICAgJ3JlZicsXHJcbiAgICAgICAgJ291dCcsXHJcbiAgICAgICAgJ3RoaXMnLFxyXG4gICAgICAgICdiYXNlJyxcclxuICAgICAgICAnbmV3JyxcclxuICAgICAgICAndHlwZW9mJyxcclxuICAgICAgICAndm9pZCcsXHJcbiAgICAgICAgJ2NoZWNrZWQnLFxyXG4gICAgICAgICd1bmNoZWNrZWQnLFxyXG4gICAgICAgICdkZWZhdWx0JyxcclxuICAgICAgICAnZGVsZWdhdGUnLFxyXG4gICAgICAgICd2YXInLFxyXG4gICAgICAgICdjb25zdCcsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ3N3aXRjaCcsXHJcbiAgICAgICAgJ2Nhc2UnLFxyXG4gICAgICAgICd3aGlsZScsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnZm9yJyxcclxuICAgICAgICAnZm9yZWFjaCcsXHJcbiAgICAgICAgJ2luJyxcclxuICAgICAgICAnYnJlYWsnLFxyXG4gICAgICAgICdjb250aW51ZScsXHJcbiAgICAgICAgJ2dvdG8nLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICd0aHJvdycsXHJcbiAgICAgICAgJ3RyeScsXHJcbiAgICAgICAgJ2NhdGNoJyxcclxuICAgICAgICAnZmluYWxseScsXHJcbiAgICAgICAgJ2xvY2snLFxyXG4gICAgICAgICd5aWVsZCcsXHJcbiAgICAgICAgJ2Zyb20nLFxyXG4gICAgICAgICdsZXQnLFxyXG4gICAgICAgICd3aGVyZScsXHJcbiAgICAgICAgJ2pvaW4nLFxyXG4gICAgICAgICdvbicsXHJcbiAgICAgICAgJ2VxdWFscycsXHJcbiAgICAgICAgJ2ludG8nLFxyXG4gICAgICAgICdvcmRlcmJ5JyxcclxuICAgICAgICAnYXNjZW5kaW5nJyxcclxuICAgICAgICAnZGVzY2VuZGluZycsXHJcbiAgICAgICAgJ3NlbGVjdCcsXHJcbiAgICAgICAgJ2dyb3VwJyxcclxuICAgICAgICAnYnknLFxyXG4gICAgICAgICduYW1lc3BhY2UnLFxyXG4gICAgICAgICdwYXJ0aWFsJyxcclxuICAgICAgICAnY2xhc3MnLFxyXG4gICAgICAgICdmaWVsZCcsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnbWV0aG9kJyxcclxuICAgICAgICAncGFyYW0nLFxyXG4gICAgICAgICdwdWJsaWMnLFxyXG4gICAgICAgICdwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdpbnRlcm5hbCcsXHJcbiAgICAgICAgJ3ByaXZhdGUnLFxyXG4gICAgICAgICdhYnN0cmFjdCcsXHJcbiAgICAgICAgJ3NlYWxlZCcsXHJcbiAgICAgICAgJ3N0YXRpYycsXHJcbiAgICAgICAgJ3N0cnVjdCcsXHJcbiAgICAgICAgJ3JlYWRvbmx5JyxcclxuICAgICAgICAndm9sYXRpbGUnLFxyXG4gICAgICAgICd2aXJ0dWFsJyxcclxuICAgICAgICAnb3ZlcnJpZGUnLFxyXG4gICAgICAgICdwYXJhbXMnLFxyXG4gICAgICAgICdnZXQnLFxyXG4gICAgICAgICdzZXQnLFxyXG4gICAgICAgICdhZGQnLFxyXG4gICAgICAgICdyZW1vdmUnLFxyXG4gICAgICAgICdvcGVyYXRvcicsXHJcbiAgICAgICAgJ3RydWUnLFxyXG4gICAgICAgICdmYWxzZScsXHJcbiAgICAgICAgJ2ltcGxpY2l0JyxcclxuICAgICAgICAnZXhwbGljaXQnLFxyXG4gICAgICAgICdpbnRlcmZhY2UnLFxyXG4gICAgICAgICdlbnVtJyxcclxuICAgICAgICAnbnVsbCcsXHJcbiAgICAgICAgJ2FzeW5jJyxcclxuICAgICAgICAnYXdhaXQnLFxyXG4gICAgICAgICdmaXhlZCcsXHJcbiAgICAgICAgJ3NpemVvZicsXHJcbiAgICAgICAgJ3N0YWNrYWxsb2MnLFxyXG4gICAgICAgICd1bnNhZmUnLFxyXG4gICAgICAgICduYW1lb2YnLFxyXG4gICAgICAgICd3aGVuJ1xyXG4gICAgXSxcclxuICAgIG5hbWVzcGFjZUZvbGxvd3M6IFsnbmFtZXNwYWNlJywgJ3VzaW5nJ10sXHJcbiAgICBwYXJlbkZvbGxvd3M6IFsnaWYnLCAnZm9yJywgJ3doaWxlJywgJ3N3aXRjaCcsICdmb3JlYWNoJywgJ3VzaW5nJywgJ2NhdGNoJywgJ3doZW4nXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JyxcclxuICAgICAgICAnPz8nLFxyXG4gICAgICAgICd8fCcsXHJcbiAgICAgICAgJyYmJyxcclxuICAgICAgICAnfCcsXHJcbiAgICAgICAgJ14nLFxyXG4gICAgICAgICcmJyxcclxuICAgICAgICAnPT0nLFxyXG4gICAgICAgICchPScsXHJcbiAgICAgICAgJzw9JyxcclxuICAgICAgICAnPj0nLFxyXG4gICAgICAgICc8PCcsXHJcbiAgICAgICAgJysnLFxyXG4gICAgICAgICctJyxcclxuICAgICAgICAnKicsXHJcbiAgICAgICAgJy8nLFxyXG4gICAgICAgICclJyxcclxuICAgICAgICAnIScsXHJcbiAgICAgICAgJ34nLFxyXG4gICAgICAgICcrKycsXHJcbiAgICAgICAgJy0tJyxcclxuICAgICAgICAnKz0nLFxyXG4gICAgICAgICctPScsXHJcbiAgICAgICAgJyo9JyxcclxuICAgICAgICAnLz0nLFxyXG4gICAgICAgICclPScsXHJcbiAgICAgICAgJyY9JyxcclxuICAgICAgICAnfD0nLFxyXG4gICAgICAgICdePScsXHJcbiAgICAgICAgJzw8PScsXHJcbiAgICAgICAgJz4+PScsXHJcbiAgICAgICAgJz4+JyxcclxuICAgICAgICAnPT4nXHJcbiAgICBdLFxyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICAvLyBlc2NhcGUgc2VxdWVuY2VzXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXFxAP1thLXpBLVpfXVxcdyovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbmFtZXNwYWNlRm9sbG93cyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQG5hbWVzcGFjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHF1YWxpZmllZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHF1YWxpZmllZCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC99LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1pbnRlcnBvbGF0ZWRzdHJpbmcnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09bGl0aW50ZXJwc3RyaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdAYnJhY2tldHMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvWzAtOV9dKlxcLlswLTlfXSsoW2VFXVtcXC0rXT9cXGQrKT9bZkZkRF0/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMFtiQl1bMDFfXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1swLTlfXSsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy9cXCRcXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdGludGVycHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1xcJFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcXVhbGlmaWVkOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bYS16QS1aX11bXFx3XSovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1xcLi8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmFtZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICBbL1tBLVpdXFx3Ki8sICduYW1lc3BhY2UnXSxcclxuICAgICAgICAgICAgWy9bXFwuPV0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgICAgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5vIG5lc3RlZCBjb21tZW50cyA6LShcclxuICAgICAgICAgICAgWydcXFxcKi8nLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaXRzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaXRpbnRlcnBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwie10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5saXRpbnRlcnBzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJ7XSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qIygocil8KGxvYWQpKSg/PVxccykvLCAnZGlyZWN0aXZlLmNzeCddLFxyXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qI1xcdy4qJC8sICduYW1lc3BhY2UuY3BwJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHZcXGZcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=