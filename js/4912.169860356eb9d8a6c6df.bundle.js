(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[4912],{64912:(e,t,i)=>{"use strict";i.r(t),i.d(t,{conf:()=>o,language:()=>n});var o={comments:{lineComment:"COMMENT"},brackets:[["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:":",close:"."}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`"},{open:'"',close:'"'},{open:"'",close:"'"},{open:":",close:"."}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),end:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")}}},n={tokenPostfix:".lexon",ignoreCase:!0,keywords:["lexon","lex","clause","terms","contracts","may","pay","pays","appoints","into","to"],typeKeywords:["amount","person","key","time","date","asset","text"],operators:["less","greater","equal","le","gt","or","and","add","added","subtract","subtracted","multiply","multiplied","times","divide","divided","is","be","certified"],symbols:/[=><!~?:&|+\-*\/\^%]+/,tokenizer:{root:[[/^(\s*)(comment:?(?:\s.*|))$/,["","comment"]],[/"/,{token:"identifier.quote",bracket:"@open",next:"@quoted_identifier"}],["LEX$",{token:"keyword",bracket:"@open",next:"@identifier_until_period"}],["LEXON",{token:"keyword",bracket:"@open",next:"@semver"}],[":",{token:"delimiter",bracket:"@open",next:"@identifier_until_period"}],[/[a-z_$][\w$]*/,{cases:{"@operators":"operator","@typeKeywords":"keyword.type","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d*\.\d*/,"number.semver"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"]],quoted_identifier:[[/[^\\"]+/,"identifier"],[/"/,{token:"identifier.quote",bracket:"@close",next:"@pop"}]],space_identifier_until_period:[[":","delimiter"],[" ",{token:"white",next:"@identifier_rest"}]],identifier_until_period:[{include:"@whitespace"},[":",{token:"delimiter",next:"@identifier_rest"}],[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],identifier_rest:[[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],semver:[{include:"@whitespace"},[":","delimiter"],[/\d*\.\d*\.\d*/,{token:"number.semver",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9sZXhvbi9sZXhvbi5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwibGFuZ3VhZ2UiLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwia2V5d29yZHMiLCJ0eXBlS2V5d29yZHMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwidG9rZW5pemVyIiwicm9vdCIsInRva2VuIiwiYnJhY2tldCIsIm5leHQiLCJjYXNlcyIsImluY2x1ZGUiLCJxdW90ZWRfaWRlbnRpZmllciIsInNwYWNlX2lkZW50aWZpZXJfdW50aWxfcGVyaW9kIiwiaWRlbnRpZmllcl91bnRpbF9wZXJpb2QiLCJpZGVudGlmaWVyX3Jlc3QiLCJzZW12ZXIiLCJ3aGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsV0FHakJDLFNBQVUsQ0FBQyxDQUFDLElBQUssTUFDakJDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkUsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTyxvQ0FDbEJDLElBQUssSUFBSUQsT0FBTywwQ0FJakJFLEVBQVcsQ0FHbEJDLGFBQWMsU0FDZEMsWUFBWSxFQUNaQyxTQUFVLENBQ04sUUFDQSxNQUNBLFNBQ0EsUUFDQSxZQUNBLE1BQ0EsTUFDQSxPQUNBLFdBQ0EsT0FDQSxNQUVKQyxhQUFjLENBQUMsU0FBVSxTQUFVLE1BQU8sT0FBUSxPQUFRLFFBQVMsUUFDbkVDLFVBQVcsQ0FDUCxPQUNBLFVBQ0EsUUFDQSxLQUNBLEtBQ0EsS0FDQSxNQUNBLE1BQ0EsUUFDQSxXQUNBLGFBQ0EsV0FDQSxhQUNBLFFBQ0EsU0FDQSxVQUNBLEtBQ0EsS0FDQSxhQUdKQyxRQUFTLHdCQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUFDLDhCQUErQixDQUFDLEdBQUksWUFFckMsQ0FDSSxJQUNBLENBQ0lDLE1BQU8sbUJBQ1BDLFFBQVMsUUFDVEMsS0FBTSx1QkFHZCxDQUNJLE9BQ0EsQ0FDSUYsTUFBTyxVQUNQQyxRQUFTLFFBQ1RDLEtBQU0sNkJBR2QsQ0FBQyxRQUFTLENBQUVGLE1BQU8sVUFBV0MsUUFBUyxRQUFTQyxLQUFNLFlBQ3RELENBQ0ksSUFDQSxDQUNJRixNQUFPLFlBQ1BDLFFBQVMsUUFDVEMsS0FBTSw2QkFJZCxDQUNJLGdCQUNBLENBQ0lDLE1BQU8sQ0FDSCxhQUFjLFdBQ2QsZ0JBQWlCLGVBQ2pCLFlBQWEsVUFDYixXQUFZLGdCQUt4QixDQUFFQyxRQUFTLGVBRVgsQ0FBQyxhQUFjLGFBQ2YsQ0FBQyxtQkFBb0IsYUFDckIsQ0FBQyxXQUFZLGFBRWIsQ0FBQyxnQkFBaUIsaUJBQ2xCLENBQUMsMkJBQTRCLGdCQUM3QixDQUFDLG9CQUFxQixjQUN0QixDQUFDLE1BQU8sVUFFUixDQUFDLFFBQVMsY0FFZEMsa0JBQW1CLENBQ2YsQ0FBQyxVQUFXLGNBQ1osQ0FBQyxJQUFLLENBQUVMLE1BQU8sbUJBQW9CQyxRQUFTLFNBQVVDLEtBQU0sVUFFaEVJLDhCQUErQixDQUMzQixDQUFDLElBQUssYUFDTixDQUFDLElBQUssQ0FBRU4sTUFBTyxRQUFTRSxLQUFNLHNCQUVsQ0ssd0JBQXlCLENBQ3JCLENBQUVILFFBQVMsZUFDWCxDQUFDLElBQUssQ0FBRUosTUFBTyxZQUFhRSxLQUFNLHFCQUNsQyxDQUFDLFVBQVcsY0FDWixDQUFDLEtBQU0sQ0FBRUYsTUFBTyxZQUFhQyxRQUFTLFNBQVVDLEtBQU0sVUFFMURNLGdCQUFpQixDQUNiLENBQUMsVUFBVyxjQUNaLENBQUMsS0FBTSxDQUFFUixNQUFPLFlBQWFDLFFBQVMsU0FBVUMsS0FBTSxVQUUxRE8sT0FBUSxDQUNKLENBQUVMLFFBQVMsZUFDWCxDQUFDLElBQUssYUFDTixDQUFDLGdCQUFpQixDQUFFSixNQUFPLGdCQUFpQkMsUUFBUyxTQUFVQyxLQUFNLFVBRXpFUSxXQUFZLENBQUMsQ0FBQyxhQUFjIiwiZmlsZSI6ImpzLzQ5MTIuMTY5ODYwMzU2ZWI5ZDhhNmM2ZGYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICdDT01NRU5UJ1xyXG4gICAgICAgIC8vIGJsb2NrQ29tbWVudDogWydDT01NRU5UJywgJy4nXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1snKCcsICcpJ11dLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICc6JywgY2xvc2U6ICcuJyB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogJzonLCBjbG9zZTogJy4nIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKig6OlxcXFxzKnxDT01NRU5UXFxcXHMrKSNyZWdpb24nKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqKDo6XFxcXHMqfENPTU1FTlRcXFxccyspI2VuZHJlZ2lvbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XHJcbiAgICAvLyBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5sZXhvbicsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnbGV4b24nLFxyXG4gICAgICAgICdsZXgnLFxyXG4gICAgICAgICdjbGF1c2UnLFxyXG4gICAgICAgICd0ZXJtcycsXHJcbiAgICAgICAgJ2NvbnRyYWN0cycsXHJcbiAgICAgICAgJ21heScsXHJcbiAgICAgICAgJ3BheScsXHJcbiAgICAgICAgJ3BheXMnLFxyXG4gICAgICAgICdhcHBvaW50cycsXHJcbiAgICAgICAgJ2ludG8nLFxyXG4gICAgICAgICd0bydcclxuICAgIF0sXHJcbiAgICB0eXBlS2V5d29yZHM6IFsnYW1vdW50JywgJ3BlcnNvbicsICdrZXknLCAndGltZScsICdkYXRlJywgJ2Fzc2V0JywgJ3RleHQnXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICdsZXNzJyxcclxuICAgICAgICAnZ3JlYXRlcicsXHJcbiAgICAgICAgJ2VxdWFsJyxcclxuICAgICAgICAnbGUnLFxyXG4gICAgICAgICdndCcsXHJcbiAgICAgICAgJ29yJyxcclxuICAgICAgICAnYW5kJyxcclxuICAgICAgICAnYWRkJyxcclxuICAgICAgICAnYWRkZWQnLFxyXG4gICAgICAgICdzdWJ0cmFjdCcsXHJcbiAgICAgICAgJ3N1YnRyYWN0ZWQnLFxyXG4gICAgICAgICdtdWx0aXBseScsXHJcbiAgICAgICAgJ211bHRpcGxpZWQnLFxyXG4gICAgICAgICd0aW1lcycsXHJcbiAgICAgICAgJ2RpdmlkZScsXHJcbiAgICAgICAgJ2RpdmlkZWQnLFxyXG4gICAgICAgICdpcycsXHJcbiAgICAgICAgJ2JlJyxcclxuICAgICAgICAnY2VydGlmaWVkJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGNvbW1lbnRcclxuICAgICAgICAgICAgWy9eKFxccyopKGNvbW1lbnQ6Pyg/Olxccy4qfCkpJC8sIFsnJywgJ2NvbW1lbnQnXV0sXHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaWRlbnRpZmllciBjYXNlc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXCIvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BvcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHF1b3RlZF9pZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnTEVYJCcsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQG9wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAaWRlbnRpZmllcl91bnRpbF9wZXJpb2QnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsnTEVYT04nLCB7IHRva2VuOiAna2V5d29yZCcsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc2VtdmVyJyB9XSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJzonLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQG9wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAaWRlbnRpZmllcl91bnRpbF9wZXJpb2QnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2Etel8kXVtcXHckXSovLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZC50eXBlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQqXFwuXFxkKi8sICdudW1iZXIuc2VtdmVyJ10sXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcXVvdGVkX2lkZW50aWZpZXI6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ2lkZW50aWZpZXInXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdpZGVudGlmaWVyLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3BhY2VfaWRlbnRpZmllcl91bnRpbF9wZXJpb2Q6IFtcclxuICAgICAgICAgICAgWyc6JywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJyAnLCB7IHRva2VuOiAnd2hpdGUnLCBuZXh0OiAnQGlkZW50aWZpZXJfcmVzdCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlkZW50aWZpZXJfdW50aWxfcGVyaW9kOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICBbJzonLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BpZGVudGlmaWVyX3Jlc3QnIH1dLFxyXG4gICAgICAgICAgICBbL1teXFxcXC5dKy8sICdpZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgeyB0b2tlbjogJ2RlbGltaXRlcicsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlkZW50aWZpZXJfcmVzdDogW1xyXG4gICAgICAgICAgICBbL1teXFxcXC5dKy8sICdpZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgeyB0b2tlbjogJ2RlbGltaXRlcicsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbXZlcjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgWyc6JywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQqXFwuXFxkKi8sIHsgdG9rZW46ICdudW1iZXIuc2VtdmVyJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1svWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9