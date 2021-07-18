(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[8670],{88670:(e,r,o)=>{"use strict";o.r(r),o.d(r,{conf:()=>i,language:()=>t});var i={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},t={defaultToken:"",ignoreCase:!0,tokenPostfix:".shell",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],builtins:["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"],symbols:/[=><!~?&|+\-*\/\^;\.,]+/,tokenizer:{root:[{include:"@whitespace"},[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@builtins":"type.identifier","@default":""}}],{include:"@strings"},{include:"@parameters"},{include:"@heredoc"},[/[{}\[\]()]/,"@brackets"],[/-+\w+/,"attribute.name"],[/@symbols/,"delimiter"],{include:"@numbers"},[/[,;]/,"delimiter"]],whitespace:[[/\s+/,"white"],[/(^#!.*$)/,"metatag"],[/(^#.*$)/,"comment"]],numbers:[[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"]],strings:[[/'/,"string","@stringBody"],[/"/,"string","@dblStringBody"]],stringBody:[[/'/,"string","@popall"],[/./,"string"]],dblStringBody:[[/"/,"string","@popall"],[/./,"string"]],heredoc:[[/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,["constants","white","string.heredoc.delimiter","string.heredoc","string.heredoc.delimiter"]]],parameters:[[/\$\d+/,"variable.predefined"],[/\$\w+/,"variable"],[/\$[*@#?\-$!0_]/,"variable"],[/\$'/,"variable","@parameterBodyQuote"],[/\$"/,"variable","@parameterBodyDoubleQuote"],[/\$\(/,"variable","@parameterBodyParen"],[/\$\{/,"variable","@parameterBodyCurlyBrace"]],parameterBodyQuote:[[/[^#:%*@\-!_']+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[']/,"variable","@pop"]],parameterBodyDoubleQuote:[[/[^#:%*@\-!_"]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/["]/,"variable","@pop"]],parameterBodyParen:[[/[^#:%*@\-!_)]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[)]/,"variable","@pop"]],parameterBodyCurlyBrace:[[/[^#:%*@\-!_}]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[}]/,"variable","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zaGVsbC9zaGVsbC5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsImlnbm9yZUNhc2UiLCJ0b2tlblBvc3RmaXgiLCJ0b2tlbiIsImtleXdvcmRzIiwiYnVpbHRpbnMiLCJzeW1ib2xzIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsIndoaXRlc3BhY2UiLCJudW1iZXJzIiwic3RyaW5ncyIsInN0cmluZ0JvZHkiLCJkYmxTdHJpbmdCb2R5IiwiaGVyZWRvYyIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJCb2R5UXVvdGUiLCJwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGUiLCJwYXJhbWV0ZXJCb2R5UGFyZW4iLCJwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZSJdLCJtYXBwaW5ncyI6InVJQUlPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxPQUdqQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxZQUFZLEVBQ1pDLGFBQWMsU0FDZFIsU0FBVSxDQUNOLENBQUVTLE1BQU8sb0JBQXFCUCxLQUFNLElBQUtDLE1BQU8sS0FDaEQsQ0FBRU0sTUFBTyx3QkFBeUJQLEtBQU0sSUFBS0MsTUFBTyxLQUNwRCxDQUFFTSxNQUFPLG1CQUFvQlAsS0FBTSxJQUFLQyxNQUFPLE1BRW5ETyxTQUFVLENBQ04sS0FDQSxPQUNBLEtBQ0EsT0FDQSxPQUNBLFFBQ0EsUUFDQSxNQUNBLEtBQ0EsT0FDQSxLQUNBLE1BQ0EsTUFDQSxPQUNBLE9BQ0EsTUFDQSxRQUNBLFNBQ0EsWUFFSkMsU0FBVSxDQUNOLEtBQ0EsTUFDQSxPQUNBLE9BQ0EsTUFDQSxLQUNBLEtBQ0EsUUFDQSxRQUNBLFNBQ0EsUUFDQSxLQUNBLE9BQ0EsTUFDQSxPQUNBLE9BQ0EsT0FDQSxPQUNBLE1BQ0EsTUFDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLFVBQ0EsS0FDQSxLQUNBLE9BQ0EsUUFDQSxVQUNBLEtBQ0EsS0FDQSxPQUNBLE1BQ0EsT0FDQSxLQUNBLFVBQ0EsS0FDQSxRQUNBLE1BQ0EsVUFDQSxLQUNBLFFBQ0EsUUFDQSxTQUNBLE9BQ0EsUUFDQSxNQUNBLFFBQ0EsT0FDQSxLQUNBLE9BQ0EsTUFDQSxNQUNBLFNBQ0EsTUFDQSxRQUNBLEtBQ0EsTUFDQSxPQUNBLEtBQ0EsT0FDQSxNQUNBLFFBQ0EsTUFDQSxPQUdKQyxRQUFTLDBCQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FDRixDQUFFQyxRQUFTLGVBQ1gsQ0FDSSxjQUNBLENBQ0lDLE1BQU8sQ0FDSCxZQUFhLFVBQ2IsWUFBYSxrQkFDYixXQUFZLE1BSXhCLENBQUVELFFBQVMsWUFDWCxDQUFFQSxRQUFTLGVBQ1gsQ0FBRUEsUUFBUyxZQUNYLENBQUMsYUFBYyxhQUNmLENBQUMsUUFBUyxrQkFDVixDQUFDLFdBQVksYUFDYixDQUFFQSxRQUFTLFlBQ1gsQ0FBQyxPQUFRLGNBRWJFLFdBQVksQ0FDUixDQUFDLE1BQU8sU0FDUixDQUFDLFdBQVksV0FDYixDQUFDLFVBQVcsWUFFaEJDLFFBQVMsQ0FDTCxDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxnQ0FBaUMsY0FDbEMsQ0FBQyxNQUFPLFdBR1pDLFFBQVMsQ0FDTCxDQUFDLElBQUssU0FBVSxlQUNoQixDQUFDLElBQUssU0FBVSxtQkFFcEJDLFdBQVksQ0FDUixDQUFDLElBQUssU0FBVSxXQUNoQixDQUFDLElBQUssV0FFVkMsY0FBZSxDQUNYLENBQUMsSUFBSyxTQUFVLFdBQ2hCLENBQUMsSUFBSyxXQUVWQyxRQUFTLENBQ0wsQ0FDSSwwQ0FDQSxDQUNJLFlBQ0EsUUFDQSwyQkFDQSxpQkFDQSw4QkFJWkMsV0FBWSxDQUNSLENBQUMsUUFBUyx1QkFDVixDQUFDLFFBQVMsWUFDVixDQUFDLGlCQUFrQixZQUNuQixDQUFDLE1BQU8sV0FBWSx1QkFDcEIsQ0FBQyxNQUFPLFdBQVksNkJBQ3BCLENBQUMsT0FBUSxXQUFZLHVCQUNyQixDQUFDLE9BQVEsV0FBWSw2QkFFekJDLG1CQUFvQixDQUNoQixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFeEJDLHlCQUEwQixDQUN0QixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFeEJDLG1CQUFvQixDQUNoQixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFeEJDLHdCQUF5QixDQUNyQixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVkiLCJmaWxlIjoianMvODY3MC4wODZmYmIxOTg2ZWQ0YTkwYThhMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJyMnXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxyXG4gICAgXVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuc2hlbGwnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAndGhlbicsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2VsaWYnLFxyXG4gICAgICAgICd3aGlsZScsXHJcbiAgICAgICAgJ3VudGlsJyxcclxuICAgICAgICAnZm9yJyxcclxuICAgICAgICAnaW4nLFxyXG4gICAgICAgICdlc2FjJyxcclxuICAgICAgICAnZmknLFxyXG4gICAgICAgICdmaW4nLFxyXG4gICAgICAgICdmaWwnLFxyXG4gICAgICAgICdkb25lJyxcclxuICAgICAgICAnZXhpdCcsXHJcbiAgICAgICAgJ3NldCcsXHJcbiAgICAgICAgJ3Vuc2V0JyxcclxuICAgICAgICAnZXhwb3J0JyxcclxuICAgICAgICAnZnVuY3Rpb24nXHJcbiAgICBdLFxyXG4gICAgYnVpbHRpbnM6IFtcclxuICAgICAgICAnYWInLFxyXG4gICAgICAgICdhd2snLFxyXG4gICAgICAgICdiYXNoJyxcclxuICAgICAgICAnYmVlcCcsXHJcbiAgICAgICAgJ2NhdCcsXHJcbiAgICAgICAgJ2NjJyxcclxuICAgICAgICAnY2QnLFxyXG4gICAgICAgICdjaG93bicsXHJcbiAgICAgICAgJ2NobW9kJyxcclxuICAgICAgICAnY2hyb290JyxcclxuICAgICAgICAnY2xlYXInLFxyXG4gICAgICAgICdjcCcsXHJcbiAgICAgICAgJ2N1cmwnLFxyXG4gICAgICAgICdjdXQnLFxyXG4gICAgICAgICdkaWZmJyxcclxuICAgICAgICAnZWNobycsXHJcbiAgICAgICAgJ2ZpbmQnLFxyXG4gICAgICAgICdnYXdrJyxcclxuICAgICAgICAnZ2NjJyxcclxuICAgICAgICAnZ2V0JyxcclxuICAgICAgICAnZ2l0JyxcclxuICAgICAgICAnZ3JlcCcsXHJcbiAgICAgICAgJ2hnJyxcclxuICAgICAgICAna2lsbCcsXHJcbiAgICAgICAgJ2tpbGxhbGwnLFxyXG4gICAgICAgICdsbicsXHJcbiAgICAgICAgJ2xzJyxcclxuICAgICAgICAnbWFrZScsXHJcbiAgICAgICAgJ21rZGlyJyxcclxuICAgICAgICAnb3BlbnNzbCcsXHJcbiAgICAgICAgJ212JyxcclxuICAgICAgICAnbmMnLFxyXG4gICAgICAgICdub2RlJyxcclxuICAgICAgICAnbnBtJyxcclxuICAgICAgICAncGluZycsXHJcbiAgICAgICAgJ3BzJyxcclxuICAgICAgICAncmVzdGFydCcsXHJcbiAgICAgICAgJ3JtJyxcclxuICAgICAgICAncm1kaXInLFxyXG4gICAgICAgICdzZWQnLFxyXG4gICAgICAgICdzZXJ2aWNlJyxcclxuICAgICAgICAnc2gnLFxyXG4gICAgICAgICdzaG9wdCcsXHJcbiAgICAgICAgJ3NocmVkJyxcclxuICAgICAgICAnc291cmNlJyxcclxuICAgICAgICAnc29ydCcsXHJcbiAgICAgICAgJ3NsZWVwJyxcclxuICAgICAgICAnc3NoJyxcclxuICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICdzdG9wJyxcclxuICAgICAgICAnc3UnLFxyXG4gICAgICAgICdzdWRvJyxcclxuICAgICAgICAnc3ZuJyxcclxuICAgICAgICAndGVlJyxcclxuICAgICAgICAndGVsbmV0JyxcclxuICAgICAgICAndG9wJyxcclxuICAgICAgICAndG91Y2gnLFxyXG4gICAgICAgICd2aScsXHJcbiAgICAgICAgJ3ZpbScsXHJcbiAgICAgICAgJ3dhbGwnLFxyXG4gICAgICAgICd3YycsXHJcbiAgICAgICAgJ3dnZXQnLFxyXG4gICAgICAgICd3aG8nLFxyXG4gICAgICAgICd3cml0ZScsXHJcbiAgICAgICAgJ3llcycsXHJcbiAgICAgICAgJ3pzaCdcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyZ8K1xcLSpcXC9cXF47XFwuLF0rLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpBLVpdXFx3Ki8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGlucyc6ICd0eXBlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BwYXJhbWV0ZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaGVyZWRvYycgfSxcclxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvLStcXHcrLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICBbL1ssO10vLCAnZGVsaW1pdGVyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvKF4jIS4qJCkvLCAnbWV0YXRhZyddLFxyXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10qWzAtOWEtZkEtRl0vLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lc1xyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAZGJsU3RyaW5nQm9keSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdCb2R5OiBbXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGhlcmVkb2M6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyg8PFstPF0/KShcXHMqKShbJ1wiYF0/KShbXFx3XFwtXSspKFsnXCJgXT8pLyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnY29uc3RhbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcidcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyYW1ldGVyczogW1xyXG4gICAgICAgICAgICBbL1xcJFxcZCsvLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbL1xcJFxcdysvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9cXCRbKkAjP1xcLSQhMF9dLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvXFwkJy8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keVF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvXFwkXCIvLCAndmFyaWFibGUnLCAnQHBhcmFtZXRlckJvZHlEb3VibGVRdW90ZSddLFxyXG4gICAgICAgICAgICBbL1xcJFxcKC8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keVBhcmVuJ10sXHJcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJhbWV0ZXJCb2R5UXVvdGU6IFtcclxuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV8nXSsvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyddLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlOiBbXHJcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFfXCJdKy8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbL1sjOiUqQFxcLSFfXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bXCJdLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyYW1ldGVyQm9keVBhcmVuOiBbXHJcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFfKV0rLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1spXS8sICd2YXJpYWJsZScsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhcmFtZXRlckJvZHlDdXJseUJyYWNlOiBbXHJcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFffV0rLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1t9XS8sICd2YXJpYWJsZScsICdAcG9wJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=