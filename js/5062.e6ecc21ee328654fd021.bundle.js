(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[5062],{95062:(e,o,n)=>{"use strict";n.r(o),n.d(o,{conf:()=>t,language:()=>r});var t={comments:{lineComment:"'"},brackets:[["(",")"],["[","]"],["If","EndIf"],["While","EndWhile"],["For","EndFor"],["Sub","EndSub"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".sb",ignoreCase:!0,brackets:[{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"keyword.tag-if",open:"If",close:"EndIf"},{token:"keyword.tag-while",open:"While",close:"EndWhile"},{token:"keyword.tag-for",open:"For",close:"EndFor"},{token:"keyword.tag-sub",open:"Sub",close:"EndSub"}],keywords:["Else","ElseIf","EndFor","EndIf","EndSub","EndWhile","For","Goto","If","Step","Sub","Then","To","While"],tagwords:["If","Sub","While","For"],operators:[">","<","<>","<=",">=","And","Or","+","-","*","/","="],identifier:/[a-zA-Z_][\w]*/,symbols:/[=><:+\-*\/%\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/(@identifier)(?=[.])/,"type"],[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@operators":"operator","@default":"variable.name"}}],[/([.])(@identifier)/,{cases:{$2:["delimiter","type.member"],"@default":""}}],[/\d*\.\d+/,"number.float"],[/\d+/,"number"],[/[()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/(\').*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"C?/,"string","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zYi9zYi5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwidG9rZW4iLCJrZXl3b3JkcyIsInRhZ3dvcmRzIiwib3BlcmF0b3JzIiwiaWRlbnRpZmllciIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsIiQyIiwid2hpdGVzcGFjZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxLQUFNLFNBQ1AsQ0FBQyxRQUFTLFlBQ1YsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxNQUFPLFdBRVpDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLGNBR3hDQyxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsTUFDZEMsWUFBWSxFQUNaUixTQUFVLENBQ04sQ0FBRVMsTUFBTyxrQkFBbUJQLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFTSxNQUFPLHdCQUF5QlAsS0FBTSxJQUFLQyxNQUFPLEtBRXBELENBQUVNLE1BQU8saUJBQWtCUCxLQUFNLEtBQU1DLE1BQU8sU0FDOUMsQ0FBRU0sTUFBTyxvQkFBcUJQLEtBQU0sUUFBU0MsTUFBTyxZQUNwRCxDQUFFTSxNQUFPLGtCQUFtQlAsS0FBTSxNQUFPQyxNQUFPLFVBQ2hELENBQUVNLE1BQU8sa0JBQW1CUCxLQUFNLE1BQU9DLE1BQU8sV0FFcERPLFNBQVUsQ0FDTixPQUNBLFNBQ0EsU0FDQSxRQUNBLFNBQ0EsV0FDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLE1BQ0EsT0FDQSxLQUNBLFNBRUpDLFNBQVUsQ0FBQyxLQUFNLE1BQU8sUUFBUyxPQUNqQ0MsVUFBVyxDQUFDLElBQUssSUFBSyxLQUFNLEtBQU0sS0FBTSxNQUFPLEtBQU0sSUFBSyxJQUFLLElBQUssSUFBSyxLQUV6RUMsV0FBWSxpQkFDWkMsUUFBUyxvQkFDVEMsUUFBUyx3RUFFVEMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FBRUMsUUFBUyxlQUVYLENBQUMsdUJBQXdCLFFBRXpCLENBQ0ksY0FDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxDQUFFVixNQUFPLGNBQ3RCLGFBQWMsV0FDZCxXQUFZLG1CQUt4QixDQUNJLHFCQUNBLENBQ0lVLE1BQU8sQ0FDSEMsR0FBSSxDQUFDLFlBQWEsZUFDbEIsV0FBWSxNQUt4QixDQUFDLFdBQVksZ0JBQ2IsQ0FBQyxNQUFPLFVBRVIsQ0FBQyxXQUFZLGFBQ2IsQ0FDSSxXQUNBLENBQ0lELE1BQU8sQ0FDSCxhQUFjLFdBQ2QsV0FBWSxlQUt4QixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxJQUFLLFNBQVUsWUFFcEJFLFdBQVksQ0FDUixDQUFDLGFBQWMsSUFDZixDQUFDLFVBQVcsWUFFaEJDLE9BQVEsQ0FDSixDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsTUFBTyxTQUFVIiwiZmlsZSI6ImpzLzUwNjIuZTZlY2MyMWVlMzI4NjU0ZmQwMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6IFwiJ1wiXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWydJZicsICdFbmRJZiddLFxyXG4gICAgICAgIFsnV2hpbGUnLCAnRW5kV2hpbGUnXSxcclxuICAgICAgICBbJ0ZvcicsICdFbmRGb3InXSxcclxuICAgICAgICBbJ1N1YicsICdFbmRTdWInXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNiJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYXJyYXknLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgLy8gU3BlY2lhbCBicmFja2V0IHN0YXRlbWVudCBwYWlyc1xyXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1pZicsIG9wZW46ICdJZicsIGNsb3NlOiAnRW5kSWYnIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXdoaWxlJywgb3BlbjogJ1doaWxlJywgY2xvc2U6ICdFbmRXaGlsZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJywgb3BlbjogJ0ZvcicsIGNsb3NlOiAnRW5kRm9yJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zdWInLCBvcGVuOiAnU3ViJywgY2xvc2U6ICdFbmRTdWInIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdFbHNlJyxcclxuICAgICAgICAnRWxzZUlmJyxcclxuICAgICAgICAnRW5kRm9yJyxcclxuICAgICAgICAnRW5kSWYnLFxyXG4gICAgICAgICdFbmRTdWInLFxyXG4gICAgICAgICdFbmRXaGlsZScsXHJcbiAgICAgICAgJ0ZvcicsXHJcbiAgICAgICAgJ0dvdG8nLFxyXG4gICAgICAgICdJZicsXHJcbiAgICAgICAgJ1N0ZXAnLFxyXG4gICAgICAgICdTdWInLFxyXG4gICAgICAgICdUaGVuJyxcclxuICAgICAgICAnVG8nLFxyXG4gICAgICAgICdXaGlsZSdcclxuICAgIF0sXHJcbiAgICB0YWd3b3JkczogWydJZicsICdTdWInLCAnV2hpbGUnLCAnRm9yJ10sXHJcbiAgICBvcGVyYXRvcnM6IFsnPicsICc8JywgJzw+JywgJzw9JywgJz49JywgJ0FuZCcsICdPcicsICcrJywgJy0nLCAnKicsICcvJywgJz0nXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIGlkZW50aWZpZXI6IC9bYS16QS1aX11bXFx3XSovLFxyXG4gICAgc3ltYm9sczogL1s9Pjw6K1xcLSpcXC8lXFwuLF0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gY2xhc3Nlc1xyXG4gICAgICAgICAgICBbLyhAaWRlbnRpZmllcikoPz1bLl0pLywgJ3R5cGUnXSxcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMsIHRhZ3dvcmRzLCBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL0BpZGVudGlmaWVyLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3ZhcmlhYmxlLm5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBtZXRob2RzLCBwcm9wZXJ0aWVzLCBhbmQgZXZlbnRzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oWy5dKShAaWRlbnRpZmllcikvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQyOiBbJ2RlbGltaXRlcicsICd0eXBlLm1lbWJlciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL1soKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZGVsaW1pdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbLyhcXCcpLiokLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCJDPy8sICdzdHJpbmcnLCAnQHBvcCddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9