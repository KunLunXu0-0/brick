(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{776:function(e,t,o){"use strict";o.r(t),o.d(t,"conf",(function(){return n})),o.d(t,"language",(function(){return r}));var n={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["{","}"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),end:new RegExp("^\\s*\\{\\$ENDREGION\\}")}}},r={defaultToken:"",tokenPostfix:".pascal",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["absolute","abstract","all","and_then","array","as","asm","attribute","begin","bindable","case","class","const","contains","default","div","else","end","except","exports","external","far","file","finalization","finally","forward","generic","goto","if","implements","import","in","index","inherited","initialization","interrupt","is","label","library","mod","module","name","near","not","object","of","on","only","operator","or_else","otherwise","override","package","packed","pow","private","program","protected","public","published","interface","implementation","qualified","read","record","resident","requires","resourcestring","restricted","segment","set","shl","shr","specialize","stored","then","threadvar","to","try","type","unit","uses","var","view","virtual","dynamic","overload","reintroduce","with","write","xor","true","false","procedure","function","constructor","destructor","property","break","continue","exit","abort","while","do","for","raise","repeat","until"],typeKeywords:["boolean","double","byte","integer","shortint","char","longint","float","string"],operators:["=",">","<","<=",">=","<>",":",":=","and","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\*\}]+/,"comment"],[/\}/,"comment","@pop"],[/[\{]/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\{/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bhc2NhbC9wYXNjYWwuanMiXSwibmFtZXMiOlsiY29uZiIsIndvcmRQYXR0ZXJuIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwidG9rZW4iLCJrZXl3b3JkcyIsInR5cGVLZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJ0b2tlbml6ZXIiLCJyb290IiwiY2FzZXMiLCJpbmNsdWRlIiwiY29tbWVudCIsInN0cmluZyIsImJyYWNrZXQiLCJuZXh0Iiwid2hpdGVzcGFjZSJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FFZEMsWUFBYSxxRkFDYkMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxJQUFLLE1BRXhCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQU1DLE1BQU8sTUFFekJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQU1DLE1BQU8sTUFFekJFLFFBQVMsQ0FDTEMsUUFBUyxDQUNMQyxNQUFPLElBQUlDLE9BQU8sc0NBQ2xCQyxJQUFLLElBQUlELE9BQU8sOEJBSWpCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsVUFDZEMsWUFBWSxFQUNaYixTQUFVLENBQ04sQ0FBRUUsS0FBTSxJQUFLQyxNQUFPLElBQUtXLE1BQU8sbUJBQ2hDLENBQUVaLEtBQU0sSUFBS0MsTUFBTyxJQUFLVyxNQUFPLG9CQUNoQyxDQUFFWixLQUFNLElBQUtDLE1BQU8sSUFBS1csTUFBTyx5QkFDaEMsQ0FBRVosS0FBTSxJQUFLQyxNQUFPLElBQUtXLE1BQU8sb0JBRXBDQyxTQUFVLENBQ04sV0FBWSxXQUFZLE1BQU8sV0FBWSxRQUFTLEtBQU0sTUFDMUQsWUFBYSxRQUFTLFdBQVksT0FBUSxRQUFTLFFBQ25ELFdBQVksVUFBVyxNQUFPLE9BQVEsTUFBTyxTQUM3QyxVQUFXLFdBQVksTUFBTyxPQUFRLGVBQWdCLFVBQ3RELFVBQVcsVUFBVyxPQUFRLEtBQU0sYUFBYyxTQUFVLEtBQzVELFFBQVMsWUFBYSxpQkFBa0IsWUFBYSxLQUFNLFFBQzNELFVBQVcsTUFBTyxTQUFVLE9BQVEsT0FBUSxNQUFPLFNBQVUsS0FDN0QsS0FBTSxPQUFRLFdBQVksVUFBVyxZQUFhLFdBQ2xELFVBQVcsU0FBVSxNQUFPLFVBQVcsVUFBVyxZQUNsRCxTQUFVLFlBQWEsWUFBYSxpQkFBa0IsWUFDdEQsT0FBUSxTQUFVLFdBQVksV0FBWSxpQkFDMUMsYUFBYyxVQUFXLE1BQU8sTUFBTyxNQUFPLGFBQWMsU0FDNUQsT0FBUSxZQUFhLEtBQU0sTUFBTyxPQUFRLE9BQVEsT0FBUSxNQUMxRCxPQUFRLFVBQVcsVUFBVyxXQUFZLGNBQWUsT0FDekQsUUFBUyxNQUFPLE9BQVEsUUFBUyxZQUFhLFdBQzlDLGNBQWUsYUFBYyxXQUFZLFFBQVMsV0FBWSxPQUM5RCxRQUFTLFFBQVMsS0FBTSxNQUFPLFFBQVMsU0FBVSxTQUV0REMsYUFBYyxDQUNWLFVBQVcsU0FBVSxPQUFRLFVBQVcsV0FBWSxPQUNwRCxVQUFXLFFBQVMsVUFFeEJDLFVBQVcsQ0FDUCxJQUFLLElBQUssSUFBSyxLQUFNLEtBQU0sS0FBTSxJQUFLLEtBQU0sTUFBTyxLQUNuRCxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBR3ZDQyxRQUFTLHdCQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUFDLGlCQUFrQixDQUNYQyxNQUFPLENBQ0gsWUFBYSxDQUFFUCxNQUFPLGNBQ3RCLFdBQVksZ0JBSXhCLENBQUVRLFFBQVMsZUFFWCxDQUFDLGFBQWMsYUFDZixDQUFDLG1CQUFvQixhQUNyQixDQUFDLFdBQVksQ0FDTEQsTUFBTyxDQUNILGFBQWMsWUFDZCxXQUFZLE1BSXhCLENBQUMsMkJBQTRCLGdCQUM3QixDQUFDLHNCQUF1QixjQUN4QixDQUFDLE1BQU8sVUFFUixDQUFDLFFBQVMsYUFFVixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxJQUFLLFNBQVUsV0FFaEIsQ0FBQyxXQUFZLFVBQ2IsQ0FBQyxJQUFLLGtCQUNOLENBQUMsUUFBUyxXQUVkRSxRQUFTLENBQ0wsQ0FBQyxXQUFZLFdBRWIsQ0FBQyxLQUFNLFVBQVcsUUFDbEIsQ0FBQyxPQUFRLFlBRWJDLE9BQVEsQ0FDSixDQUFDLFVBQVcsVUFDWixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxJQUFLLENBQUVWLE1BQU8sZUFBZ0JXLFFBQVMsU0FBVUMsS0FBTSxVQUU1REMsV0FBWSxDQUNSLENBQUMsYUFBYyxTQUNmLENBQUMsS0FBTSxVQUFXLFlBQ2xCLENBQUMsVUFBVyIsImZpbGUiOiJqcy8zMi4yYThiNGQyOTM5MTQ5YzhhZmVkMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICAvLyB0aGUgZGVmYXVsdCBzZXBhcmF0b3JzIGV4Y2VwdCBgQCRgXHJcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsneycsICd9J10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFx7XFxcXCRSRUdJT04oXFxcXHNcXFxcJy4qXFxcXCcpP1xcXFx9XCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXHtcXFxcJEVORFJFR0lPTlxcXFx9XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5wYXNjYWwnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Fic29sdXRlJywgJ2Fic3RyYWN0JywgJ2FsbCcsICdhbmRfdGhlbicsICdhcnJheScsICdhcycsICdhc20nLFxyXG4gICAgICAgICdhdHRyaWJ1dGUnLCAnYmVnaW4nLCAnYmluZGFibGUnLCAnY2FzZScsICdjbGFzcycsICdjb25zdCcsXHJcbiAgICAgICAgJ2NvbnRhaW5zJywgJ2RlZmF1bHQnLCAnZGl2JywgJ2Vsc2UnLCAnZW5kJywgJ2V4Y2VwdCcsXHJcbiAgICAgICAgJ2V4cG9ydHMnLCAnZXh0ZXJuYWwnLCAnZmFyJywgJ2ZpbGUnLCAnZmluYWxpemF0aW9uJywgJ2ZpbmFsbHknLFxyXG4gICAgICAgICdmb3J3YXJkJywgJ2dlbmVyaWMnLCAnZ290bycsICdpZicsICdpbXBsZW1lbnRzJywgJ2ltcG9ydCcsICdpbicsXHJcbiAgICAgICAgJ2luZGV4JywgJ2luaGVyaXRlZCcsICdpbml0aWFsaXphdGlvbicsICdpbnRlcnJ1cHQnLCAnaXMnLCAnbGFiZWwnLFxyXG4gICAgICAgICdsaWJyYXJ5JywgJ21vZCcsICdtb2R1bGUnLCAnbmFtZScsICduZWFyJywgJ25vdCcsICdvYmplY3QnLCAnb2YnLFxyXG4gICAgICAgICdvbicsICdvbmx5JywgJ29wZXJhdG9yJywgJ29yX2Vsc2UnLCAnb3RoZXJ3aXNlJywgJ292ZXJyaWRlJyxcclxuICAgICAgICAncGFja2FnZScsICdwYWNrZWQnLCAncG93JywgJ3ByaXZhdGUnLCAncHJvZ3JhbScsICdwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdwdWJsaWMnLCAncHVibGlzaGVkJywgJ2ludGVyZmFjZScsICdpbXBsZW1lbnRhdGlvbicsICdxdWFsaWZpZWQnLFxyXG4gICAgICAgICdyZWFkJywgJ3JlY29yZCcsICdyZXNpZGVudCcsICdyZXF1aXJlcycsICdyZXNvdXJjZXN0cmluZycsXHJcbiAgICAgICAgJ3Jlc3RyaWN0ZWQnLCAnc2VnbWVudCcsICdzZXQnLCAnc2hsJywgJ3NocicsICdzcGVjaWFsaXplJywgJ3N0b3JlZCcsXHJcbiAgICAgICAgJ3RoZW4nLCAndGhyZWFkdmFyJywgJ3RvJywgJ3RyeScsICd0eXBlJywgJ3VuaXQnLCAndXNlcycsICd2YXInLFxyXG4gICAgICAgICd2aWV3JywgJ3ZpcnR1YWwnLCAnZHluYW1pYycsICdvdmVybG9hZCcsICdyZWludHJvZHVjZScsICd3aXRoJyxcclxuICAgICAgICAnd3JpdGUnLCAneG9yJywgJ3RydWUnLCAnZmFsc2UnLCAncHJvY2VkdXJlJywgJ2Z1bmN0aW9uJyxcclxuICAgICAgICAnY29uc3RydWN0b3InLCAnZGVzdHJ1Y3RvcicsICdwcm9wZXJ0eScsICdicmVhaycsICdjb250aW51ZScsICdleGl0JyxcclxuICAgICAgICAnYWJvcnQnLCAnd2hpbGUnLCAnZG8nLCAnZm9yJywgJ3JhaXNlJywgJ3JlcGVhdCcsICd1bnRpbCdcclxuICAgIF0sXHJcbiAgICB0eXBlS2V5d29yZHM6IFtcclxuICAgICAgICAnYm9vbGVhbicsICdkb3VibGUnLCAnYnl0ZScsICdpbnRlZ2VyJywgJ3Nob3J0aW50JywgJ2NoYXInLFxyXG4gICAgICAgICdsb25naW50JywgJ2Zsb2F0JywgJ3N0cmluZydcclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAnPScsICc+JywgJzwnLCAnPD0nLCAnPj0nLCAnPD4nLCAnOicsICc6PScsICdhbmQnLCAnb3InLFxyXG4gICAgICAgICcrJywgJy0nLCAnKicsICcvJywgJ0AnLCAnJicsICdeJywgJyUnXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjw6QFxcXiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfXVtcXHddKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFwkWzAtOWEtZkEtRl17MSwxNn0vLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cXCNcXGQrLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW15cXCpcXH1dKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vWy9cXChcXCovLCAgICAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbmVzdGVkIGNvbW1lbnQgIG5vdCBhbGxvd2VkIDotKFxyXG4gICAgICAgICAgICBbL1xcfS8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFx7XS8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvXFx7LywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9