(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[6241],{96241:(e,n,t)=>{"use strict";t.r(n),t.d(n,{conf:()=>s,language:()=>o});var s={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)"),end:new RegExp("^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)")}}},o={defaultToken:"",tokenPostfix:".fs",keywords:["abstract","and","atomic","as","assert","asr","base","begin","break","checked","component","const","constraint","constructor","continue","class","default","delegate","do","done","downcast","downto","elif","else","end","exception","eager","event","external","extern","false","finally","for","fun","function","fixed","functor","global","if","in","include","inherit","inline","interface","internal","land","lor","lsl","lsr","lxor","lazy","let","match","member","mod","module","mutable","namespace","method","mixin","new","not","null","of","open","or","object","override","private","parallel","process","protected","pure","public","rec","return","static","sealed","struct","sig","then","to","true","tailcall","trait","try","type","upcast","use","val","void","virtual","volatile","when","while","with","yield"],symbols:/[=><!~?:&|+\-*\^%;\.,\/]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/[uU]?[yslnLI]?/,floatsuffix:/[fFmM]?/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[<.*>\]/,"annotation"],[/^#(if|else|endif)/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0x[0-9a-fA-F]+LF/,"number.float"],[/0x[0-9a-fA-F]+(@integersuffix)/,"number.hex"],[/0b[0-1]+(@integersuffix)/,"number.bin"],[/\d+(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"""/,"string",'@string."""'],[/"/,"string",'@string."'],[/\@"/,{token:"string.quote",next:"@litstring"}],[/'[^\\']'B?/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\(\*(?!\))/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^*(]+/,"comment"],[/\*\)/,"comment","@pop"],[/\*/,"comment"],[/\(\*\)/,"comment"],[/\(/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/("""|"B?)/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]],litstring:[[/[^"]+/,"string"],[/""/,"string.escape"],[/"/,{token:"string.quote",next:"@pop"}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9mc2hhcnAvZnNoYXJwLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImtleXdvcmRzIiwic3ltYm9scyIsImVzY2FwZXMiLCJpbnRlZ2Vyc3VmZml4IiwiZmxvYXRzdWZmaXgiLCJ0b2tlbml6ZXIiLCJyb290IiwiY2FzZXMiLCJ0b2tlbiIsImluY2x1ZGUiLCJuZXh0Iiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJzdHJpbmciLCJsaXRzdHJpbmciXSwibWFwcGluZ3MiOiJ1SUFJTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsWUFBYSxLQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV6QkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJFLFFBQVMsQ0FDTEMsUUFBUyxDQUNMQyxNQUFPLElBQUlDLE9BQU8sMERBQ2xCQyxJQUFLLElBQUlELE9BQU8sbUVBSWpCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsTUFDZEMsU0FBVSxDQUNOLFdBQ0EsTUFDQSxTQUNBLEtBQ0EsU0FDQSxNQUNBLE9BQ0EsUUFDQSxRQUNBLFVBQ0EsWUFDQSxRQUNBLGFBQ0EsY0FDQSxXQUNBLFFBQ0EsVUFDQSxXQUNBLEtBQ0EsT0FDQSxXQUNBLFNBQ0EsT0FDQSxPQUNBLE1BQ0EsWUFDQSxRQUNBLFFBQ0EsV0FDQSxTQUNBLFFBQ0EsVUFDQSxNQUNBLE1BQ0EsV0FDQSxRQUNBLFVBQ0EsU0FDQSxLQUNBLEtBQ0EsVUFDQSxVQUNBLFNBQ0EsWUFDQSxXQUNBLE9BQ0EsTUFDQSxNQUNBLE1BQ0EsT0FDQSxPQUNBLE1BQ0EsUUFDQSxTQUNBLE1BQ0EsU0FDQSxVQUNBLFlBQ0EsU0FDQSxRQUNBLE1BQ0EsTUFDQSxPQUNBLEtBQ0EsT0FDQSxLQUNBLFNBQ0EsV0FDQSxVQUNBLFdBQ0EsVUFDQSxZQUNBLE9BQ0EsU0FDQSxNQUNBLFNBQ0EsU0FDQSxTQUNBLFNBQ0EsTUFDQSxPQUNBLEtBQ0EsT0FDQSxXQUNBLFFBQ0EsTUFDQSxPQUNBLFNBQ0EsTUFDQSxNQUNBLE9BQ0EsVUFDQSxXQUNBLE9BQ0EsUUFDQSxPQUNBLFNBR0pDLFFBQVMsNEJBQ1RDLFFBQVMsd0VBQ1RDLGNBQWUsaUJBQ2ZDLFlBQWEsVUFFYkMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FDSSxlQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLENBQUVDLE1BQU8sY0FDdEIsV0FBWSxnQkFLeEIsQ0FBRUMsUUFBUyxlQUVYLENBQUMsV0FBWSxjQUViLENBQUMsb0JBQXFCLFdBRXRCLENBQUMsYUFBYyxhQUNmLENBQUMsbUJBQW9CLGFBQ3JCLENBQUMsV0FBWSxhQUViLENBQUMsdUNBQXdDLGdCQUN6QyxDQUFDLHlDQUEwQyxnQkFDM0MsQ0FBQyxtQkFBb0IsZ0JBQ3JCLENBQUMsaUNBQWtDLGNBQ25DLENBQUMsMkJBQTRCLGNBQzdCLENBQUMsc0JBQXVCLFVBRXhCLENBQUMsUUFBUyxhQUVWLENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLE1BQU8sU0FBVSxlQUNsQixDQUFDLElBQUssU0FBVSxhQUVoQixDQUFDLE1BQU8sQ0FBRUQsTUFBTyxlQUFnQkUsS0FBTSxlQUV2QyxDQUFDLGFBQWMsVUFDZixDQUFDLG1CQUFvQixDQUFDLFNBQVUsZ0JBQWlCLFdBQ2pELENBQUMsSUFBSyxtQkFFVkMsV0FBWSxDQUNSLENBQUMsYUFBYyxJQUNmLENBQUMsYUFBYyxVQUFXLFlBQzFCLENBQUMsVUFBVyxZQUVoQkMsUUFBUyxDQUNMLENBQUMsU0FBVSxXQUNYLENBQUMsT0FBUSxVQUFXLFFBQ3BCLENBQUMsS0FBTSxXQUNQLENBQUMsU0FBVSxXQUNYLENBQUMsS0FBTSxZQUVYQyxPQUFRLENBQ0osQ0FBQyxVQUFXLFVBQ1osQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUNJLFlBQ0EsQ0FDSU4sTUFBTyxDQUNILFVBQVcsQ0FBRUMsTUFBTyxTQUFVRSxLQUFNLFFBQ3BDLFdBQVksYUFLNUJJLFVBQVcsQ0FDUCxDQUFDLFFBQVMsVUFDVixDQUFDLEtBQU0saUJBQ1AsQ0FBQyxJQUFLLENBQUVOLE1BQU8sZUFBZ0JFLEtBQU0iLCJmaWxlIjoianMvNjI0MS4wODZmYmIxOTg2ZWQ0YTkwYThhMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnKConLCAnKiknXVxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyojcmVnaW9uXFxcXGJ8XlxcXFxzKlxcXFwoXFxcXCpcXFxccyojcmVnaW9uKC4qKVxcXFwqXFxcXCknKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyojZW5kcmVnaW9uXFxcXGJ8XlxcXFxzKlxcXFwoXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXHMqXFxcXCpcXFxcKScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5mcycsXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdhYnN0cmFjdCcsXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ2F0b21pYycsXHJcbiAgICAgICAgJ2FzJyxcclxuICAgICAgICAnYXNzZXJ0JyxcclxuICAgICAgICAnYXNyJyxcclxuICAgICAgICAnYmFzZScsXHJcbiAgICAgICAgJ2JlZ2luJyxcclxuICAgICAgICAnYnJlYWsnLFxyXG4gICAgICAgICdjaGVja2VkJyxcclxuICAgICAgICAnY29tcG9uZW50JyxcclxuICAgICAgICAnY29uc3QnLFxyXG4gICAgICAgICdjb25zdHJhaW50JyxcclxuICAgICAgICAnY29uc3RydWN0b3InLFxyXG4gICAgICAgICdjb250aW51ZScsXHJcbiAgICAgICAgJ2NsYXNzJyxcclxuICAgICAgICAnZGVmYXVsdCcsXHJcbiAgICAgICAgJ2RlbGVnYXRlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdkb25lJyxcclxuICAgICAgICAnZG93bmNhc3QnLFxyXG4gICAgICAgICdkb3dudG8nLFxyXG4gICAgICAgICdlbGlmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgJ2V4Y2VwdGlvbicsXHJcbiAgICAgICAgJ2VhZ2VyJyxcclxuICAgICAgICAnZXZlbnQnLFxyXG4gICAgICAgICdleHRlcm5hbCcsXHJcbiAgICAgICAgJ2V4dGVybicsXHJcbiAgICAgICAgJ2ZhbHNlJyxcclxuICAgICAgICAnZmluYWxseScsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2Z1bicsXHJcbiAgICAgICAgJ2Z1bmN0aW9uJyxcclxuICAgICAgICAnZml4ZWQnLFxyXG4gICAgICAgICdmdW5jdG9yJyxcclxuICAgICAgICAnZ2xvYmFsJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2luY2x1ZGUnLFxyXG4gICAgICAgICdpbmhlcml0JyxcclxuICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAnaW50ZXJmYWNlJyxcclxuICAgICAgICAnaW50ZXJuYWwnLFxyXG4gICAgICAgICdsYW5kJyxcclxuICAgICAgICAnbG9yJyxcclxuICAgICAgICAnbHNsJyxcclxuICAgICAgICAnbHNyJyxcclxuICAgICAgICAnbHhvcicsXHJcbiAgICAgICAgJ2xhenknLFxyXG4gICAgICAgICdsZXQnLFxyXG4gICAgICAgICdtYXRjaCcsXHJcbiAgICAgICAgJ21lbWJlcicsXHJcbiAgICAgICAgJ21vZCcsXHJcbiAgICAgICAgJ21vZHVsZScsXHJcbiAgICAgICAgJ211dGFibGUnLFxyXG4gICAgICAgICduYW1lc3BhY2UnLFxyXG4gICAgICAgICdtZXRob2QnLFxyXG4gICAgICAgICdtaXhpbicsXHJcbiAgICAgICAgJ25ldycsXHJcbiAgICAgICAgJ25vdCcsXHJcbiAgICAgICAgJ251bGwnLFxyXG4gICAgICAgICdvZicsXHJcbiAgICAgICAgJ29wZW4nLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ29iamVjdCcsXHJcbiAgICAgICAgJ292ZXJyaWRlJyxcclxuICAgICAgICAncHJpdmF0ZScsXHJcbiAgICAgICAgJ3BhcmFsbGVsJyxcclxuICAgICAgICAncHJvY2VzcycsXHJcbiAgICAgICAgJ3Byb3RlY3RlZCcsXHJcbiAgICAgICAgJ3B1cmUnLFxyXG4gICAgICAgICdwdWJsaWMnLFxyXG4gICAgICAgICdyZWMnLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICdzdGF0aWMnLFxyXG4gICAgICAgICdzZWFsZWQnLFxyXG4gICAgICAgICdzdHJ1Y3QnLFxyXG4gICAgICAgICdzaWcnLFxyXG4gICAgICAgICd0aGVuJyxcclxuICAgICAgICAndG8nLFxyXG4gICAgICAgICd0cnVlJyxcclxuICAgICAgICAndGFpbGNhbGwnLFxyXG4gICAgICAgICd0cmFpdCcsXHJcbiAgICAgICAgJ3RyeScsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd1cGNhc3QnLFxyXG4gICAgICAgICd1c2UnLFxyXG4gICAgICAgICd2YWwnLFxyXG4gICAgICAgICd2b2lkJyxcclxuICAgICAgICAndmlydHVhbCcsXHJcbiAgICAgICAgJ3ZvbGF0aWxlJyxcclxuICAgICAgICAnd2hlbicsXHJcbiAgICAgICAgJ3doaWxlJyxcclxuICAgICAgICAnd2l0aCcsXHJcbiAgICAgICAgJ3lpZWxkJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXF4lO1xcLixcXC9dKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgaW50ZWdlcnN1ZmZpeDogL1t1VV0/W3lzbG5MSV0/LyxcclxuICAgIGZsb2F0c3VmZml4OiAvW2ZGbU1dPy8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gWzwgYXR0cmlidXRlcyA+XS5cclxuICAgICAgICAgICAgWy9cXFs8Lio+XFxdLywgJ2Fubm90YXRpb24nXSxcclxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxyXG4gICAgICAgICAgICBbL14jKGlmfGVsc2V8ZW5kaWYpLywgJ2tleXdvcmQnXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFxkK1tlRV0oW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMHhbMC05YS1mQS1GXStMRi8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8weFswLTlhLWZBLUZdKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbLzBiWzAtMV0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuYmluJ10sXHJcbiAgICAgICAgICAgIFsvXFxkKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIlwiXCInXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIiddLFxyXG4gICAgICAgICAgICAvLyBsaXRlcmFsIHN0cmluZ1xyXG4gICAgICAgICAgICBbL1xcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0c3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXSdCPy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXChcXCooPyFcXCkpLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14qKF0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXCkvLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXFwqLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXChcXCpcXCkvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKC8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKFwiXCJcInxcIkI/KS8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaXRzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9