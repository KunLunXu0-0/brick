(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{759:function(e,n,o){"use strict";o.r(n),o.d(n,"conf",(function(){return s})),o.d(n,"language",(function(){return t}));var s={brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},t={defaultToken:"",tokenPostfix:".dockerfile",variable:/\${?[\w]+}?/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/(ONBUILD)(\s+)/,["keyword",""]],[/(ENV)(\s+)([\w]+)/,["keyword","",{token:"variable",next:"@arguments"}]],[/(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,{token:"keyword",next:"@arguments"}]],arguments:[{include:"@whitespace"},{include:"@strings"},[/(@variable)/,{cases:{"@eos":{token:"variable",next:"@popall"},"@default":"variable"}}],[/\\/,{cases:{"@eos":"","@default":""}}],[/./,{cases:{"@eos":{token:"",next:"@popall"},"@default":""}}]],whitespace:[[/\s+/,{cases:{"@eos":{token:"",next:"@popall"},"@default":""}}]],comment:[[/(^#.*$)/,"comment","@popall"]],strings:[[/'$/,"string","@popall"],[/'/,"string","@stringBody"],[/"$/,"string","@popall"],[/"/,"string","@dblStringBody"]],stringBody:[[/[^\\\$']/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/\\./,"string.escape"],[/'$/,"string","@popall"],[/'/,"string","@pop"],[/(@variable)/,"variable"],[/\\$/,"string"],[/$/,"string","@popall"]],dblStringBody:[[/[^\\\$"]/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/\\./,"string.escape"],[/"$/,"string","@popall"],[/"/,"string","@pop"],[/(@variable)/,"variable"],[/\\$/,"string"],[/$/,"string","@popall"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2RvY2tlcmZpbGUvZG9ja2VyZmlsZS5qcyJdLCJuYW1lcyI6WyJjb25mIiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwidmFyaWFibGUiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsInRva2VuIiwibmV4dCIsImFyZ3VtZW50cyIsImNhc2VzIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJzdHJpbmdzIiwic3RyaW5nQm9keSIsImRibFN0cmluZ0JvZHkiXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxNQUV6QkMsaUJBQWtCLENBQ2QsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxPQUdsQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLGNBQ2RDLFNBQVUsY0FDVkMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBRUMsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUFDLGlCQUFrQixDQUFDLFVBQVcsS0FDL0IsQ0FBQyxvQkFBcUIsQ0FBQyxVQUFXLEdBQUksQ0FBRUMsTUFBTyxXQUFZQyxLQUFNLGdCQUNqRSxDQUFDLHNIQUF1SCxDQUFFRCxNQUFPLFVBQVdDLEtBQU0sZ0JBRXRKQyxVQUFXLENBQ1AsQ0FBRUgsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUFDLGNBQWUsQ0FDUkksTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxXQUFZQyxLQUFNLFdBQ25DLFdBQVksY0FHeEIsQ0FBQyxLQUFNLENBQ0NFLE1BQU8sQ0FDSCxPQUFRLEdBQ1IsV0FBWSxNQUd4QixDQUFDLElBQUssQ0FDRUEsTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxHQUFJQyxLQUFNLFdBQzNCLFdBQVksT0FLNUJHLFdBQVksQ0FDUixDQUFDLE1BQU8sQ0FDQUQsTUFBTyxDQUNILE9BQVEsQ0FBRUgsTUFBTyxHQUFJQyxLQUFNLFdBQzNCLFdBQVksT0FJNUJJLFFBQVMsQ0FDTCxDQUFDLFVBQVcsVUFBVyxZQUczQkMsUUFBUyxDQUNMLENBQUMsS0FBTSxTQUFVLFdBQ2pCLENBQUMsSUFBSyxTQUFVLGVBQ2hCLENBQUMsS0FBTSxTQUFVLFdBQ2pCLENBQUMsSUFBSyxTQUFVLG1CQUVwQkMsV0FBWSxDQUNSLENBQUMsV0FBWSxDQUNMSixNQUFPLENBQ0gsT0FBUSxDQUFFSCxNQUFPLFNBQVVDLEtBQU0sV0FDakMsV0FBWSxZQUd4QixDQUFDLE1BQU8saUJBQ1IsQ0FBQyxLQUFNLFNBQVUsV0FDakIsQ0FBQyxJQUFLLFNBQVUsUUFDaEIsQ0FBQyxjQUFlLFlBQ2hCLENBQUMsTUFBTyxVQUNSLENBQUMsSUFBSyxTQUFVLFlBRXBCTyxjQUFlLENBQ1gsQ0FBQyxXQUFZLENBQ0xMLE1BQU8sQ0FDSCxPQUFRLENBQUVILE1BQU8sU0FBVUMsS0FBTSxXQUNqQyxXQUFZLFlBR3hCLENBQUMsTUFBTyxpQkFDUixDQUFDLEtBQU0sU0FBVSxXQUNqQixDQUFDLElBQUssU0FBVSxRQUNoQixDQUFDLGNBQWUsWUFDaEIsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxJQUFLLFNBQVUiLCJmaWxlIjoianMvMTYuMmE4YjRkMjkzOTE0OWM4YWZlZDIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuZG9ja2VyZmlsZScsXHJcbiAgICB2YXJpYWJsZTogL1xcJHs/W1xcd10rfT8vLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIFsvKE9OQlVJTEQpKFxccyspLywgWydrZXl3b3JkJywgJyddXSxcclxuICAgICAgICAgICAgWy8oRU5WKShcXHMrKShbXFx3XSspLywgWydrZXl3b3JkJywgJycsIHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAYXJndW1lbnRzJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKEZST018TUFJTlRBSU5FUnxSVU58RVhQT1NFfEVOVnxBRER8QVJHfFZPTFVNRXxMQUJFTHxVU0VSfFdPUktESVJ8Q09QWXxDTUR8U1RPUFNJR05BTHxTSEVMTHxIRUFMVEhDSEVDS3xFTlRSWVBPSU5UKS8sIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0Bhcmd1bWVudHMnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcmd1bWVudHM6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3ZhcmlhYmxlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXFxcLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvLi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIERlYWwgd2l0aCB3aGl0ZSBzcGFjZSwgaW5jbHVkaW5nIGNvbW1lbnRzXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1xccysvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvKF4jLiokKS8sICdjb21tZW50JywgJ0Bwb3BhbGwnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzIHdpdGggXFwgKGJ1dCBub3Qgd2l0aG91dClcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsvJyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddLFxyXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAZGJsU3RyaW5nQm9keSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdCb2R5OiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXFwkJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXFwkXCJdLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9