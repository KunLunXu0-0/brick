(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{760:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return s})),t.d(n,"language",(function(){return o}));var s={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)"),end:new RegExp("^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)")}}},o={defaultToken:"",tokenPostfix:".fs",keywords:["abstract","and","atomic","as","assert","asr","base","begin","break","checked","component","const","constraint","constructor","continue","class","default","delegate","do","done","downcast","downto","elif","else","end","exception","eager","event","external","extern","false","finally","for","fun","function","fixed","functor","global","if","in","include","inherit","inline","interface","internal","land","lor","lsl","lsr","lxor","lazy","let","match","member","mod","module","mutable","namespace","method","mixin","new","not","null","of","open","or","object","override","private","parallel","process","protected","pure","public","rec","return","static","sealed","struct","sig","then","to","true","tailcall","trait","try","type","upcast","use","val","void","virtual","volatile","when","while","with","yield"],symbols:/[=><!~?:&|+\-*\^%;\.,\/]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/[uU]?[yslnLI]?/,floatsuffix:/[fFmM]?/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[<.*>\]/,"annotation"],[/^#(if|else|endif)/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0x[0-9a-fA-F]+LF/,"number.float"],[/0x[0-9a-fA-F]+(@integersuffix)/,"number.hex"],[/0b[0-1]+(@integersuffix)/,"number.bin"],[/\d+(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"""/,"string",'@string."""'],[/"/,"string",'@string."'],[/\@"/,{token:"string.quote",next:"@litstring"}],[/'[^\\']'B?/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\(\*(?!\))/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^*(]+/,"comment"],[/\*\)/,"comment","@pop"],[/\*/,"comment"],[/\(\*\)/,"comment"],[/\(/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/("""|"B?)/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]],litstring:[[/[^"]+/,"string"],[/""/,"string.escape"],[/"/,{token:"string.quote",next:"@pop"}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2ZzaGFycC9mc2hhcnAuanMiXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4Iiwia2V5d29yZHMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsImludGVnZXJzdWZmaXgiLCJmbG9hdHN1ZmZpeCIsInRva2VuaXplciIsInJvb3QiLCJjYXNlcyIsInRva2VuIiwiaW5jbHVkZSIsIm5leHQiLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCIsInN0cmluZyIsImxpdHN0cmluZyJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkMsaUJBQWtCLENBQ2QsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxNQUV6QkUsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTywwREFDbEJDLElBQUssSUFBSUQsT0FBTyxtRUFJakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxNQUNkQyxTQUFVLENBQ04sV0FBWSxNQUFPLFNBQVUsS0FDN0IsU0FBVSxNQUFPLE9BQVEsUUFDekIsUUFBUyxVQUFXLFlBQ3BCLFFBQVMsYUFBYyxjQUN2QixXQUFZLFFBQVMsVUFDckIsV0FBWSxLQUFNLE9BQVEsV0FDMUIsU0FBVSxPQUFRLE9BQVEsTUFDMUIsWUFBYSxRQUFTLFFBQVMsV0FDL0IsU0FBVSxRQUFTLFVBQVcsTUFDOUIsTUFBTyxXQUFZLFFBQVMsVUFDNUIsU0FBVSxLQUFNLEtBQU0sVUFBVyxVQUNqQyxTQUFVLFlBQWEsV0FBWSxPQUNuQyxNQUFPLE1BQU8sTUFBTyxPQUFRLE9BQVEsTUFDckMsUUFBUyxTQUFVLE1BQU8sU0FBVSxVQUNwQyxZQUFhLFNBQVUsUUFBUyxNQUFPLE1BQ3ZDLE9BQVEsS0FBTSxPQUFRLEtBQU0sU0FDNUIsV0FBWSxVQUFXLFdBQVksVUFDbkMsWUFBYSxPQUFRLFNBQVUsTUFBTyxTQUN0QyxTQUFVLFNBQVUsU0FBVSxNQUFPLE9BQ3JDLEtBQU0sT0FBUSxXQUFZLFFBQzFCLE1BQU8sT0FBUSxTQUFVLE1BQ3pCLE1BQU8sT0FBUSxVQUFXLFdBQzFCLE9BQVEsUUFBUyxPQUFRLFNBRzdCQyxRQUFTLDRCQUNUQyxRQUFTLHdFQUNUQyxjQUFlLGlCQUNmQyxZQUFhLFVBRWJDLFVBQVcsQ0FDUEMsS0FBTSxDQUVGLENBQUMsZUFBZ0IsQ0FDVEMsTUFBTyxDQUNILFlBQWEsQ0FBRUMsTUFBTyxjQUN0QixXQUFZLGdCQUl4QixDQUFFQyxRQUFTLGVBRVgsQ0FBQyxXQUFZLGNBRWIsQ0FBQyxvQkFBcUIsV0FFdEIsQ0FBQyxhQUFjLGFBQ2YsQ0FBQyxtQkFBb0IsYUFDckIsQ0FBQyxXQUFZLGFBRWIsQ0FBQyx1Q0FBd0MsZ0JBQ3pDLENBQUMseUNBQTBDLGdCQUMzQyxDQUFDLG1CQUFvQixnQkFDckIsQ0FBQyxpQ0FBa0MsY0FDbkMsQ0FBQywyQkFBNEIsY0FDN0IsQ0FBQyxzQkFBdUIsVUFFeEIsQ0FBQyxRQUFTLGFBRVYsQ0FBQyxrQkFBbUIsa0JBQ3BCLENBQUMsTUFBTyxTQUFVLGVBQ2xCLENBQUMsSUFBSyxTQUFVLGFBRWhCLENBQUMsTUFBTyxDQUFFRCxNQUFPLGVBQWdCRSxLQUFNLGVBRXZDLENBQUMsYUFBYyxVQUNmLENBQUMsbUJBQW9CLENBQUMsU0FBVSxnQkFBaUIsV0FDakQsQ0FBQyxJQUFLLG1CQUVWQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLElBQ2YsQ0FBQyxhQUFjLFVBQVcsWUFDMUIsQ0FBQyxVQUFXLFlBRWhCQyxRQUFTLENBQ0wsQ0FBQyxTQUFVLFdBQ1gsQ0FBQyxPQUFRLFVBQVcsUUFDcEIsQ0FBQyxLQUFNLFdBQ1AsQ0FBQyxTQUFVLFdBQ1gsQ0FBQyxLQUFNLFlBRVhDLE9BQVEsQ0FDSixDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsWUFBYSxDQUNOTixNQUFPLENBQ0gsVUFBVyxDQUFFQyxNQUFPLFNBQVVFLEtBQU0sUUFDcEMsV0FBWSxhQUk1QkksVUFBVyxDQUNQLENBQUMsUUFBUyxVQUNWLENBQUMsS0FBTSxpQkFDUCxDQUFDLElBQUssQ0FBRU4sTUFBTyxlQUFnQkUsS0FBTSIsImZpbGUiOiJqcy8xNy4yYThiNGQyOTM5MTQ5YzhhZmVkMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycoKicsICcqKSddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKi8vXFxcXHMqI3JlZ2lvblxcXFxifF5cXFxccypcXFxcKFxcXFwqXFxcXHMqI3JlZ2lvbiguKilcXFxcKlxcXFwpXCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqLy9cXFxccyojZW5kcmVnaW9uXFxcXGJ8XlxcXFxzKlxcXFwoXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXHMqXFxcXCpcXFxcKVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuZnMnLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnYWJzdHJhY3QnLCAnYW5kJywgJ2F0b21pYycsICdhcycsXHJcbiAgICAgICAgJ2Fzc2VydCcsICdhc3InLCAnYmFzZScsICdiZWdpbicsXHJcbiAgICAgICAgJ2JyZWFrJywgJ2NoZWNrZWQnLCAnY29tcG9uZW50JyxcclxuICAgICAgICAnY29uc3QnLCAnY29uc3RyYWludCcsICdjb25zdHJ1Y3RvcicsXHJcbiAgICAgICAgJ2NvbnRpbnVlJywgJ2NsYXNzJywgJ2RlZmF1bHQnLFxyXG4gICAgICAgICdkZWxlZ2F0ZScsICdkbycsICdkb25lJywgJ2Rvd25jYXN0JyxcclxuICAgICAgICAnZG93bnRvJywgJ2VsaWYnLCAnZWxzZScsICdlbmQnLFxyXG4gICAgICAgICdleGNlcHRpb24nLCAnZWFnZXInLCAnZXZlbnQnLCAnZXh0ZXJuYWwnLFxyXG4gICAgICAgICdleHRlcm4nLCAnZmFsc2UnLCAnZmluYWxseScsICdmb3InLFxyXG4gICAgICAgICdmdW4nLCAnZnVuY3Rpb24nLCAnZml4ZWQnLCAnZnVuY3RvcicsXHJcbiAgICAgICAgJ2dsb2JhbCcsICdpZicsICdpbicsICdpbmNsdWRlJywgJ2luaGVyaXQnLFxyXG4gICAgICAgICdpbmxpbmUnLCAnaW50ZXJmYWNlJywgJ2ludGVybmFsJywgJ2xhbmQnLFxyXG4gICAgICAgICdsb3InLCAnbHNsJywgJ2xzcicsICdseG9yJywgJ2xhenknLCAnbGV0JyxcclxuICAgICAgICAnbWF0Y2gnLCAnbWVtYmVyJywgJ21vZCcsICdtb2R1bGUnLCAnbXV0YWJsZScsXHJcbiAgICAgICAgJ25hbWVzcGFjZScsICdtZXRob2QnLCAnbWl4aW4nLCAnbmV3JywgJ25vdCcsXHJcbiAgICAgICAgJ251bGwnLCAnb2YnLCAnb3BlbicsICdvcicsICdvYmplY3QnLFxyXG4gICAgICAgICdvdmVycmlkZScsICdwcml2YXRlJywgJ3BhcmFsbGVsJywgJ3Byb2Nlc3MnLFxyXG4gICAgICAgICdwcm90ZWN0ZWQnLCAncHVyZScsICdwdWJsaWMnLCAncmVjJywgJ3JldHVybicsXHJcbiAgICAgICAgJ3N0YXRpYycsICdzZWFsZWQnLCAnc3RydWN0JywgJ3NpZycsICd0aGVuJyxcclxuICAgICAgICAndG8nLCAndHJ1ZScsICd0YWlsY2FsbCcsICd0cmFpdCcsXHJcbiAgICAgICAgJ3RyeScsICd0eXBlJywgJ3VwY2FzdCcsICd1c2UnLFxyXG4gICAgICAgICd2YWwnLCAndm9pZCcsICd2aXJ0dWFsJywgJ3ZvbGF0aWxlJyxcclxuICAgICAgICAnd2hlbicsICd3aGlsZScsICd3aXRoJywgJ3lpZWxkJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXF4lO1xcLixcXC9dKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgaW50ZWdlcnN1ZmZpeDogL1t1VV0/W3lzbG5MSV0/LyxcclxuICAgIGZsb2F0c3VmZml4OiAvW2ZGbU1dPy8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2EtekEtWl9dXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBbPCBhdHRyaWJ1dGVzID5dLlxyXG4gICAgICAgICAgICBbL1xcWzwuKj5cXF0vLCAnYW5ub3RhdGlvbiddLFxyXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXHJcbiAgICAgICAgICAgIFsvXiMoaWZ8ZWxzZXxlbmRpZikvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8weFswLTlhLWZBLUZdK0xGLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzB4WzAtOWEtZkEtRl0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMGJbMC0xXSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5iaW4nXSxcclxuICAgICAgICAgICAgWy9cXGQrKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiXCJcIiddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiJ10sXHJcbiAgICAgICAgICAgIC8vIGxpdGVyYWwgc3RyaW5nXHJcbiAgICAgICAgICAgIFsvXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJ0I/LywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKig/IVxcKSkvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14qKF0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXCkvLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXFwqLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXChcXCpcXCkvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKC8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLyhcIlwiXCJ8XCJCPykvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpdHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==