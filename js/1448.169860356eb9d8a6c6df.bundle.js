(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[1448],{11448:(e,o,t)=>{"use strict";t.r(o),t.d(o,{conf:()=>n,language:()=>s});var n={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'},{open:"(*",close:"*)"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'},{open:"(*",close:"*)"}]},s={defaultToken:"",tokenPostfix:".cameligo",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["abs","assert","block","Bytes","case","Crypto","Current","else","failwith","false","for","fun","if","in","let","let%entry","let%init","List","list","Map","map","match","match%nat","mod","not","operation","Operation","of","record","Set","set","sender","skip","source","String","then","to","true","type","with"],typeKeywords:["int","unit","string","tz","nat","bool"],operators:["=",">","<","<=",">=","<>",":",":=","and","mod","or","+","-","*","/","@","&","^","%","->","<-","&&","||"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\(\*]+/,"comment"],[/\*\)/,"comment","@pop"],[/\(\*/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9jYW1lbGlnby9jYW1lbGlnby5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbiIsImtleXdvcmRzIiwidHlwZUtleXdvcmRzIiwib3BlcmF0b3JzIiwic3ltYm9scyIsInRva2VuaXplciIsInJvb3QiLCJjYXNlcyIsImluY2x1ZGUiLCJjb21tZW50Iiwic3RyaW5nIiwiYnJhY2tldCIsIm5leHQiLCJ3aGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsS0FDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQU1DLE1BQU8sS0FDckIsQ0FBRUQsS0FBTSxLQUFNQyxNQUFPLE9BRXpCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxLQUNyQixDQUFFRCxLQUFNLEtBQU1DLE1BQU8sUUFHbEJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxZQUNkQyxZQUFZLEVBQ1pSLFNBQVUsQ0FDTixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxtQkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8sb0JBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLHlCQUNoQyxDQUFFUCxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxvQkFFcENDLFNBQVUsQ0FDTixNQUNBLFNBQ0EsUUFDQSxRQUNBLE9BQ0EsU0FDQSxVQUNBLE9BQ0EsV0FDQSxRQUNBLE1BQ0EsTUFDQSxLQUNBLEtBQ0EsTUFDQSxZQUNBLFdBQ0EsT0FDQSxPQUNBLE1BQ0EsTUFDQSxRQUNBLFlBQ0EsTUFDQSxNQUNBLFlBQ0EsWUFDQSxLQUNBLFNBQ0EsTUFDQSxNQUNBLFNBQ0EsT0FDQSxTQUNBLFNBQ0EsT0FDQSxLQUNBLE9BQ0EsT0FDQSxRQUVKQyxhQUFjLENBQUMsTUFBTyxPQUFRLFNBQVUsS0FBTSxNQUFPLFFBQ3JEQyxVQUFXLENBQ1AsSUFDQSxJQUNBLElBQ0EsS0FDQSxLQUNBLEtBQ0EsSUFDQSxLQUNBLE1BQ0EsTUFDQSxLQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxLQUNBLEtBQ0EsS0FDQSxNQUdKQyxRQUFTLHdCQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUNJLGlCQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLENBQUVQLE1BQU8sY0FDdEIsV0FBWSxnQkFLeEIsQ0FBRVEsUUFBUyxlQUVYLENBQUMsYUFBYyxhQUNmLENBQUMsbUJBQW9CLGFBQ3JCLENBQ0ksV0FDQSxDQUNJRCxNQUFPLENBQ0gsYUFBYyxZQUNkLFdBQVksTUFLeEIsQ0FBQywyQkFBNEIsZ0JBQzdCLENBQUMsc0JBQXVCLGNBQ3hCLENBQUMsTUFBTyxVQUVSLENBQUMsUUFBUyxhQUVWLENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLElBQUssU0FBVSxXQUVoQixDQUFDLFdBQVksVUFDYixDQUFDLElBQUssa0JBQ04sQ0FBQyxRQUFTLFdBR2RFLFFBQVMsQ0FDTCxDQUFDLFdBQVksV0FFYixDQUFDLE9BQVEsVUFBVyxRQUNwQixDQUFDLE9BQVEsWUFFYkMsT0FBUSxDQUNKLENBQUMsVUFBVyxVQUNaLENBQUMsTUFBTyx5QkFDUixDQUFDLElBQUssQ0FBRVYsTUFBTyxlQUFnQlcsUUFBUyxTQUFVQyxLQUFNLFVBRTVEQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLFNBQ2YsQ0FBQyxPQUFRLFVBQVcsWUFDcEIsQ0FBQyxVQUFXIiwiZmlsZSI6ImpzLzE0NDguMTY5ODYwMzU2ZWI5ZDhhNmM2ZGYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsnPCcsICc+J11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcclxuICAgICAgICB7IG9wZW46IFwiXFxcIlwiLCBjbG9zZTogXCJcXFwiXCIgfSxcclxuICAgICAgICB7IG9wZW46IFwiKCpcIiwgY2xvc2U6IFwiKilcIiB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogXCJcXFwiXCIsIGNsb3NlOiBcIlxcXCJcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogXCIoKlwiLCBjbG9zZTogXCIqKVwiIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNhbWVsaWdvJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdhYnMnLFxyXG4gICAgICAgICdhc3NlcnQnLFxyXG4gICAgICAgICdibG9jaycsXHJcbiAgICAgICAgJ0J5dGVzJyxcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ0NyeXB0bycsXHJcbiAgICAgICAgJ0N1cnJlbnQnLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnZmFpbHdpdGgnLFxyXG4gICAgICAgICdmYWxzZScsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2Z1bicsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnaW4nLFxyXG4gICAgICAgICdsZXQnLFxyXG4gICAgICAgICdsZXQlZW50cnknLFxyXG4gICAgICAgICdsZXQlaW5pdCcsXHJcbiAgICAgICAgJ0xpc3QnLFxyXG4gICAgICAgICdsaXN0JyxcclxuICAgICAgICAnTWFwJyxcclxuICAgICAgICAnbWFwJyxcclxuICAgICAgICAnbWF0Y2gnLFxyXG4gICAgICAgICdtYXRjaCVuYXQnLFxyXG4gICAgICAgICdtb2QnLFxyXG4gICAgICAgICdub3QnLFxyXG4gICAgICAgICdvcGVyYXRpb24nLFxyXG4gICAgICAgICdPcGVyYXRpb24nLFxyXG4gICAgICAgICdvZicsXHJcbiAgICAgICAgJ3JlY29yZCcsXHJcbiAgICAgICAgJ1NldCcsXHJcbiAgICAgICAgJ3NldCcsXHJcbiAgICAgICAgJ3NlbmRlcicsXHJcbiAgICAgICAgJ3NraXAnLFxyXG4gICAgICAgICdzb3VyY2UnLFxyXG4gICAgICAgICdTdHJpbmcnLFxyXG4gICAgICAgICd0aGVuJyxcclxuICAgICAgICAndG8nLFxyXG4gICAgICAgICd0cnVlJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ3dpdGgnLFxyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogWydpbnQnLCAndW5pdCcsICdzdHJpbmcnLCAndHonLCAnbmF0JywgJ2Jvb2wnXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JyxcclxuICAgICAgICAnPicsXHJcbiAgICAgICAgJzwnLFxyXG4gICAgICAgICc8PScsXHJcbiAgICAgICAgJz49JyxcclxuICAgICAgICAnPD4nLFxyXG4gICAgICAgICc6JyxcclxuICAgICAgICAnOj0nLFxyXG4gICAgICAgICdhbmQnLFxyXG4gICAgICAgICdtb2QnLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJysnLFxyXG4gICAgICAgICctJyxcclxuICAgICAgICAnKicsXHJcbiAgICAgICAgJy8nLFxyXG4gICAgICAgICdAJyxcclxuICAgICAgICAnJicsXHJcbiAgICAgICAgJ14nLFxyXG4gICAgICAgICclJyxcclxuICAgICAgICAnLT4nLFxyXG4gICAgICAgICc8LScsXHJcbiAgICAgICAgJyYmJyxcclxuICAgICAgICAnfHwnLFxyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48OkBcXF4mfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVtcXHddKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFwkWzAtOWEtZkEtRl17MSwxNn0vLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cXCNcXGQrLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvKiAqL1xyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcKFxcKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy9bL1xcKFxcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCAgbm90IGFsbG93ZWQgOi0oXHJcbiAgICAgICAgICAgIFsvXFwqXFwpLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9