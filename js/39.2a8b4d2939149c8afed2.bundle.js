(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{783:function(e,n,s){"use strict";s.r(n),s.d(n,"conf",(function(){return t})),s.d(n,"language",(function(){return o}));var t={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"#",blockComment:["<#","#>"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},o={defaultToken:"",ignoreCase:!0,tokenPostfix:".ps1",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"}],keywords:["begin","break","catch","class","continue","data","define","do","dynamicparam","else","elseif","end","exit","filter","finally","for","foreach","from","function","if","in","param","process","return","switch","throw","trap","try","until","using","var","while","workflow","parallel","sequence","inlinescript","configuration"],helpKeywords:/SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,symbols:/[=><!~?&%|+\-*\/\^;\.,]+/,escapes:/`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_][\w-]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":""}}],[/[ \t\r\n]+/,""],[/^:\w*/,"metatag"],[/\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,"variable"],[/<#/,"comment","@comment"],[/#.*$/,"comment"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+?/,"number"],[/[;,.]/,"delimiter"],[/\@"/,"string",'@herestring."'],[/\@'/,"string","@herestring.'"],[/"/,{cases:{"@eos":"string","@default":{token:"string",next:'@string."'}}}],[/'/,{cases:{"@eos":"string","@default":{token:"string",next:"@string.'"}}}]],string:[[/[^"'\$`]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,{cases:{"@eos":{token:"string.escape",next:"@popall"},"@default":"string.escape"}}],[/`./,{cases:{"@eos":{token:"string.escape.invalid",next:"@popall"},"@default":"string.escape.invalid"}}],[/\$[\w]+$/,{cases:{'$S2=="':{token:"variable",next:"@popall"},"@default":{token:"string",next:"@popall"}}}],[/\$[\w]+/,{cases:{'$S2=="':"variable","@default":"string"}}],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}}}]],herestring:[[/^\s*(["'])@/,{cases:{"$1==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/[^\$`]+/,"string"],[/@escapes/,"string.escape"],[/`./,"string.escape.invalid"],[/\$[\w]+/,{cases:{'$S2=="':"variable","@default":"string"}}]],comment:[[/[^#\.]+/,"comment"],[/#>/,"comment","@pop"],[/(\.)(@helpKeywords)(?!\w)/,{token:"comment.keyword.$2"}],[/[\.#]/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwvcG93ZXJzaGVsbC5qcyJdLCJuYW1lcyI6WyJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJoZWxwS2V5d29yZHMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsInRva2VuaXplciIsInJvb3QiLCJjYXNlcyIsIm5leHQiLCJzdHJpbmciLCJoZXJlc3RyaW5nIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FFZEMsWUFBYSxvRkFDYkMsU0FBVSxDQUNOQyxZQUFhLElBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsV0FDakMsQ0FBRUYsS0FBTSxJQUFNQyxNQUFPLElBQU1DLE1BQU8sQ0FBQyxTQUFVLGFBRWpEQyxpQkFBa0IsQ0FDZCxDQUFFSCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFB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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICAvLyB0aGUgZGVmYXVsdCBzZXBhcmF0b3JzIGV4Y2VwdCBgJC1gXHJcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCMlXFxeXFwmXFwqXFwoXFwpXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCMnLCAnIz4nXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyojcmVnaW9uXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIHRva2VuUG9zdGZpeDogJy5wczEnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdiZWdpbicsICdicmVhaycsICdjYXRjaCcsICdjbGFzcycsICdjb250aW51ZScsICdkYXRhJyxcclxuICAgICAgICAnZGVmaW5lJywgJ2RvJywgJ2R5bmFtaWNwYXJhbScsICdlbHNlJywgJ2Vsc2VpZicsICdlbmQnLFxyXG4gICAgICAgICdleGl0JywgJ2ZpbHRlcicsICdmaW5hbGx5JywgJ2ZvcicsICdmb3JlYWNoJywgJ2Zyb20nLFxyXG4gICAgICAgICdmdW5jdGlvbicsICdpZicsICdpbicsICdwYXJhbScsICdwcm9jZXNzJywgJ3JldHVybicsXHJcbiAgICAgICAgJ3N3aXRjaCcsICd0aHJvdycsICd0cmFwJywgJ3RyeScsICd1bnRpbCcsICd1c2luZycsXHJcbiAgICAgICAgJ3ZhcicsICd3aGlsZScsICd3b3JrZmxvdycsICdwYXJhbGxlbCcsICdzZXF1ZW5jZScsICdpbmxpbmVzY3JpcHQnLCAnY29uZmlndXJhdGlvbidcclxuICAgIF0sXHJcbiAgICBoZWxwS2V5d29yZHM6IC9TWU5PUFNJU3xERVNDUklQVElPTnxQQVJBTUVURVJ8RVhBTVBMRXxJTlBVVFN8T1VUUFVUU3xOT1RFU3xMSU5LfENPTVBPTkVOVHxST0xFfEZVTkNUSU9OQUxJVFl8Rk9SV0FSREhFTFBUQVJHRVROQU1FfEZPUldBUkRIRUxQQ0FURUdPUll8UkVNT1RFSEVMUFJVTlNQQUNFfEVYVEVSTkFMSEVMUC8sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyYlfCtcXC0qXFwvXFxeO1xcLixdKy8sXHJcbiAgICBlc2NhcGVzOiAvYCg/OlthYmZucnR2XFxcXFwiJyRdfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBjb21tYW5kcyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgWy9bYS16QS1aX11bXFx3LV0qLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIC8vIGxhYmVsc1xyXG4gICAgICAgICAgICBbL146XFx3Ki8sICdtZXRhdGFnJ10sXHJcbiAgICAgICAgICAgIC8vIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICBbL1xcJChcXHsoKGdsb2JhbHxsb2NhbHxwcml2YXRlfHNjcmlwdHx1c2luZyk6KT9bXFx3XStcXH18KChnbG9iYWx8bG9jYWx8cHJpdmF0ZXxzY3JpcHR8dXNpbmcpOik/W1xcd10rKS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICAvLyBDb21tZW50c1xyXG4gICAgICAgICAgICBbLzwjLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyc1xyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9cXGQrPy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzOlxyXG4gICAgICAgICAgICBbL1xcQFwiLywgJ3N0cmluZycsICdAaGVyZXN0cmluZy5cIiddLFxyXG4gICAgICAgICAgICBbL1xcQCcvLCAnc3RyaW5nJywgJ0BoZXJlc3RyaW5nLlxcJyddLFxyXG4gICAgICAgICAgICBbL1wiLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZy5cIicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLycvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlxcJycgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cIidcXCRgXSsvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmVzY2FwZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9gLi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlLmludmFsaWQnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXCRbXFx3XSskLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PVwiJzogeyB0b2tlbjogJ3ZhcmlhYmxlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xcJFtcXHddKy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6ICd2YXJpYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXN0cmluZzogW1xyXG4gICAgICAgICAgICBbL15cXHMqKFtcIiddKUAvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW15cXCRgXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL2AuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcJFtcXHddKy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6ICd2YXJpYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14jXFwuXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyM+LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLyhcXC4pKEBoZWxwS2V5d29yZHMpKD8hXFx3KS8sIHsgdG9rZW46ICdjb21tZW50LmtleXdvcmQuJDInIH1dLFxyXG4gICAgICAgICAgICBbL1tcXC4jXS8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==