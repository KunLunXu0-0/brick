(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{786:function(e,o,r){"use strict";r.r(o),r.d(o,"conf",(function(){return t})),r.d(o,"language",(function(){return n}));var t={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},n={defaultToken:"",tokenPostfix:".r",roxygen:["@param","@return","@name","@rdname","@examples","@include","@docType","@S3method","@TODO","@aliases","@alias","@assignee","@author","@callGraphDepth","@callGraph","@callGraphPrimitives","@concept","@exportClass","@exportMethod","@exportPattern","@export","@formals","@format","@importClassesFrom","@importFrom","@importMethodsFrom","@import","@keywords","@method","@nord","@note","@references","@seealso","@setClass","@slot","@source","@title","@usage"],constants:["NULL","FALSE","TRUE","NA","Inf","NaN ","NA_integer_","NA_real_","NA_complex_","NA_character_ ","T","F","LETTERS","letters","month.abb","month.name","pi","R.version.string"],keywords:["break","next","return","if","else","for","in","repeat","while","array","category","character","complex","double","function","integer","list","logical","matrix","numeric","vector","data.frame","factor","library","require","attach","detach","source"],special:["\\n","\\r","\\t","\\b","\\a","\\f","\\v","\\'",'\\"',"\\\\"],brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],tokenizer:{root:[{include:"@numbers"},{include:"@strings"},[/[{}\[\]()]/,"@brackets"],{include:"@operators"},[/#'/,"comment.doc","@roxygen"],[/(^#.*$)/,"comment"],[/\s+/,"white"],[/[,:;]/,"delimiter"],[/@[a-zA-Z]\w*/,"tag"],[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@constants":"constant","@default":"identifier"}}]],roxygen:[[/@\w+/,{cases:{"@roxygen":"tag","@eos":{token:"comment.doc",next:"@pop"},"@default":"comment.doc"}}],[/\s+/,{cases:{"@eos":{token:"comment.doc",next:"@pop"},"@default":"comment.doc"}}],[/.*/,{token:"comment.doc",next:"@pop"}]],numbers:[[/0[xX][0-9a-fA-F]+/,"number.hex"],[/-?(\d*\.)?\d+([eE][+\-]?\d+)?/,"number"]],operators:[[/<{1,2}-/,"operator"],[/->{1,2}/,"operator"],[/%[^%\s]+%/,"operator"],[/\*\*/,"operator"],[/%%/,"operator"],[/&&/,"operator"],[/\|\|/,"operator"],[/<</,"operator"],[/>>/,"operator"],[/[-+=&|!<>^~*/:$]/,"operator"]],strings:[[/'/,"string.escape","@stringBody"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/\\./,{cases:{"@special":"string","@default":"error-token"}}],[/'/,"string.escape","@popall"],[/./,"string"]],dblStringBody:[[/\\./,{cases:{"@special":"string","@default":"error-token"}}],[/"/,"string.escape","@popall"],[/./,"string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Ivci5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsInJveHlnZW4iLCJjb25zdGFudHMiLCJrZXl3b3JkcyIsInNwZWNpYWwiLCJ0b2tlbiIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwiY2FzZXMiLCJuZXh0IiwibnVtYmVycyIsIm9wZXJhdG9ycyIsInN0cmluZ3MiLCJzdHJpbmdCb2R5IiwiZGJsU3RyaW5nQm9keSJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxZQUFhLEtBRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkMsaUJBQWtCLENBQ2QsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE9BR2pCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsS0FDZEMsUUFBUyxDQUNMLFNBQ0EsVUFDQSxRQUNBLFVBQ0EsWUFDQSxXQUNBLFdBQ0EsWUFDQSxRQUNBLFdBQ0EsU0FDQSxZQUNBLFVBQ0Esa0JBQ0EsYUFDQSx1QkFDQSxXQUNBLGVBQ0EsZ0JBQ0EsaUJBQ0EsVUFDQSxXQUNBLFVBQ0EscUJBQ0EsY0FDQSxxQkFDQSxVQUNBLFlBQ0EsVUFDQSxRQUNBLFFBQ0EsY0FDQSxXQUNBLFlBQ0EsUUFDQSxVQUNBLFNBQ0EsVUFFSkMsVUFBVyxDQUNQLE9BQ0EsUUFDQSxPQUNBLEtBQ0EsTUFDQSxPQUNBLGNBQ0EsV0FDQSxjQUNBLGlCQUNBLElBQ0EsSUFDQSxVQUNBLFVBQ0EsWUFDQSxhQUNBLEtBQ0Esb0JBRUpDLFNBQVUsQ0FDTixRQUNBLE9BQ0EsU0FDQSxLQUNBLE9BQ0EsTUFDQSxLQUNBLFNBQ0EsUUFDQSxRQUNBLFdBQ0EsWUFDQSxVQUNBLFNBQ0EsV0FDQSxVQUNBLE9BQ0EsVUFDQSxTQUNBLFVBQ0EsU0FDQSxhQUNBLFNBQ0EsVUFDQSxVQUNBLFNBQ0EsU0FDQSxVQUVKQyxRQUFTLENBQ0wsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsUUFFSlgsU0FBVSxDQUNOLENBQUVFLEtBQU0sSUFBS0MsTUFBTyxJQUFLUyxNQUFPLG1CQUNoQyxDQUFFVixLQUFNLElBQUtDLE1BQU8sSUFBS1MsTUFBTyxxQkFDaEMsQ0FBRVYsS0FBTSxJQUFLQyxNQUFPLElBQUtTLE1BQU8sMEJBRXBDQyxVQUFXLENBQ1BDLEtBQU0sQ0FDRixDQUFFQyxRQUFTLFlBQ1gsQ0FBRUEsUUFBUyxZQUNYLENBQUMsYUFBYyxhQUNmLENBQUVBLFFBQVMsY0FDWCxDQUFDLEtBQU0sY0FBZSxZQUN0QixDQUFDLFVBQVcsV0FDWixDQUFDLE1BQU8sU0FDUixDQUFDLFFBQVMsYUFDVixDQUFDLGVBQWdCLE9BQ2pCLENBQUMsY0FBZSxDQUNSQyxNQUFPLENBQ0gsWUFBYSxVQUNiLGFBQWMsV0FDZCxXQUFZLGlCQUs1QlIsUUFBUyxDQUNMLENBQUMsT0FBUSxDQUNEUSxNQUFPLENBQ0gsV0FBWSxNQUNaLE9BQVEsQ0FBRUosTUFBTyxjQUFlSyxLQUFNLFFBQ3RDLFdBQVksaUJBR3hCLENBQUMsTUFBTyxDQUNBRCxNQUFPLENBQ0gsT0FBUSxDQUFFSixNQUFPLGNBQWVLLEtBQU0sUUFDdEMsV0FBWSxpQkFHeEIsQ0FBQyxLQUFNLENBQUVMLE1BQU8sY0FBZUssS0FBTSxVQUd6Q0MsUUFBUyxDQUNMLENBQUMsb0JBQXFCLGNBQ3RCLENBQUMsZ0NBQWlDLFdBR3RDQyxVQUFXLENBQ1AsQ0FBQyxVQUFXLFlBQ1osQ0FBQyxVQUFXLFlBQ1osQ0FBQyxZQUFhLFlBQ2QsQ0FBQyxPQUFRLFlBQ1QsQ0FBQyxLQUFNLFlBQ1AsQ0FBQyxLQUFNLFlBQ1AsQ0FBQyxPQUFRLFlBQ1QsQ0FBQyxLQUFNLFlBQ1AsQ0FBQyxLQUFNLFlBQ1AsQ0FBQyxtQkFBb0IsYUFHekJDLFFBQVMsQ0FDTCxDQUFDLElBQUssZ0JBQWlCLGVBQ3ZCLENBQUMsSUFBSyxnQkFBaUIsbUJBRTNCQyxXQUFZLENBQ1IsQ0FBQyxNQUFPLENBQ0FMLE1BQU8sQ0FDSCxXQUFZLFNBQ1osV0FBWSxpQkFHeEIsQ0FBQyxJQUFLLGdCQUFpQixXQUN2QixDQUFDLElBQUssV0FFVk0sY0FBZSxDQUNYLENBQUMsTUFBTyxDQUNBTixNQUFPLENBQ0gsV0FBWSxTQUNaLFdBQVksaUJBR3hCLENBQUMsSUFBSyxnQkFBaUIsV0FDdkIsQ0FBQyxJQUFLIiwiZmlsZSI6ImpzLzQyLjJhOGI0ZDI5MzkxNDljOGFmZWQyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnInLFxyXG4gICAgcm94eWdlbjogW1xyXG4gICAgICAgICdAcGFyYW0nLFxyXG4gICAgICAgICdAcmV0dXJuJyxcclxuICAgICAgICAnQG5hbWUnLFxyXG4gICAgICAgICdAcmRuYW1lJyxcclxuICAgICAgICAnQGV4YW1wbGVzJyxcclxuICAgICAgICAnQGluY2x1ZGUnLFxyXG4gICAgICAgICdAZG9jVHlwZScsXHJcbiAgICAgICAgJ0BTM21ldGhvZCcsXHJcbiAgICAgICAgJ0BUT0RPJyxcclxuICAgICAgICAnQGFsaWFzZXMnLFxyXG4gICAgICAgICdAYWxpYXMnLFxyXG4gICAgICAgICdAYXNzaWduZWUnLFxyXG4gICAgICAgICdAYXV0aG9yJyxcclxuICAgICAgICAnQGNhbGxHcmFwaERlcHRoJyxcclxuICAgICAgICAnQGNhbGxHcmFwaCcsXHJcbiAgICAgICAgJ0BjYWxsR3JhcGhQcmltaXRpdmVzJyxcclxuICAgICAgICAnQGNvbmNlcHQnLFxyXG4gICAgICAgICdAZXhwb3J0Q2xhc3MnLFxyXG4gICAgICAgICdAZXhwb3J0TWV0aG9kJyxcclxuICAgICAgICAnQGV4cG9ydFBhdHRlcm4nLFxyXG4gICAgICAgICdAZXhwb3J0JyxcclxuICAgICAgICAnQGZvcm1hbHMnLFxyXG4gICAgICAgICdAZm9ybWF0JyxcclxuICAgICAgICAnQGltcG9ydENsYXNzZXNGcm9tJyxcclxuICAgICAgICAnQGltcG9ydEZyb20nLFxyXG4gICAgICAgICdAaW1wb3J0TWV0aG9kc0Zyb20nLFxyXG4gICAgICAgICdAaW1wb3J0JyxcclxuICAgICAgICAnQGtleXdvcmRzJyxcclxuICAgICAgICAnQG1ldGhvZCcsXHJcbiAgICAgICAgJ0Bub3JkJyxcclxuICAgICAgICAnQG5vdGUnLFxyXG4gICAgICAgICdAcmVmZXJlbmNlcycsXHJcbiAgICAgICAgJ0BzZWVhbHNvJyxcclxuICAgICAgICAnQHNldENsYXNzJyxcclxuICAgICAgICAnQHNsb3QnLFxyXG4gICAgICAgICdAc291cmNlJyxcclxuICAgICAgICAnQHRpdGxlJyxcclxuICAgICAgICAnQHVzYWdlJ1xyXG4gICAgXSxcclxuICAgIGNvbnN0YW50czogW1xyXG4gICAgICAgICdOVUxMJyxcclxuICAgICAgICAnRkFMU0UnLFxyXG4gICAgICAgICdUUlVFJyxcclxuICAgICAgICAnTkEnLFxyXG4gICAgICAgICdJbmYnLFxyXG4gICAgICAgICdOYU4gJyxcclxuICAgICAgICAnTkFfaW50ZWdlcl8nLFxyXG4gICAgICAgICdOQV9yZWFsXycsXHJcbiAgICAgICAgJ05BX2NvbXBsZXhfJyxcclxuICAgICAgICAnTkFfY2hhcmFjdGVyXyAnLFxyXG4gICAgICAgICdUJyxcclxuICAgICAgICAnRicsXHJcbiAgICAgICAgJ0xFVFRFUlMnLFxyXG4gICAgICAgICdsZXR0ZXJzJyxcclxuICAgICAgICAnbW9udGguYWJiJyxcclxuICAgICAgICAnbW9udGgubmFtZScsXHJcbiAgICAgICAgJ3BpJyxcclxuICAgICAgICAnUi52ZXJzaW9uLnN0cmluZydcclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdicmVhaycsXHJcbiAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2Vsc2UnLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ3JlcGVhdCcsXHJcbiAgICAgICAgJ3doaWxlJyxcclxuICAgICAgICAnYXJyYXknLFxyXG4gICAgICAgICdjYXRlZ29yeScsXHJcbiAgICAgICAgJ2NoYXJhY3RlcicsXHJcbiAgICAgICAgJ2NvbXBsZXgnLFxyXG4gICAgICAgICdkb3VibGUnLFxyXG4gICAgICAgICdmdW5jdGlvbicsXHJcbiAgICAgICAgJ2ludGVnZXInLFxyXG4gICAgICAgICdsaXN0JyxcclxuICAgICAgICAnbG9naWNhbCcsXHJcbiAgICAgICAgJ21hdHJpeCcsXHJcbiAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICd2ZWN0b3InLFxyXG4gICAgICAgICdkYXRhLmZyYW1lJyxcclxuICAgICAgICAnZmFjdG9yJyxcclxuICAgICAgICAnbGlicmFyeScsXHJcbiAgICAgICAgJ3JlcXVpcmUnLFxyXG4gICAgICAgICdhdHRhY2gnLFxyXG4gICAgICAgICdkZXRhY2gnLFxyXG4gICAgICAgICdzb3VyY2UnXHJcbiAgICBdLFxyXG4gICAgc3BlY2lhbDogW1xyXG4gICAgICAgICdcXFxcbicsXHJcbiAgICAgICAgJ1xcXFxyJyxcclxuICAgICAgICAnXFxcXHQnLFxyXG4gICAgICAgICdcXFxcYicsXHJcbiAgICAgICAgJ1xcXFxhJyxcclxuICAgICAgICAnXFxcXGYnLFxyXG4gICAgICAgICdcXFxcdicsXHJcbiAgICAgICAgJ1xcXFxcXCcnLFxyXG4gICAgICAgICdcXFxcXCInLFxyXG4gICAgICAgICdcXFxcXFxcXCdcclxuICAgIF0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH1cclxuICAgIF0sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXHJcbiAgICAgICAgICAgIFsvIycvLCAnY29tbWVudC5kb2MnLCAnQHJveHlnZW4nXSxcclxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvWyw6O10vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvQFthLXpBLVpdXFx3Ki8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9bYS16QS1aXVxcdyovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAnY29uc3RhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIFJveHlnZW4gY29tbWVudHNcclxuICAgICAgICByb3h5Z2VuOiBbXHJcbiAgICAgICAgICAgIFsvQFxcdysvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Byb3h5Z2VuJzogJ3RhZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2NvbW1lbnQuZG9jJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdjb21tZW50LmRvYydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXHMrLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2NvbW1lbnQuZG9jJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdjb21tZW50LmRvYydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy8uKi8sIHsgdG9rZW46ICdjb21tZW50LmRvYycsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIHBvc2l0aXZlcywgbmVnYXRpdmVzLCBkZWNpbWFscywgaW1hZ2luYXJpZXMsIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uXHJcbiAgICAgICAgbnVtYmVyczogW1xyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy8tPyhcXGQqXFwuKT9cXGQrKFtlRV1bK1xcLV0/XFxkKyk/LywgJ251bWJlciddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBSZWNvZ25pemUgb3BlcmF0b3JzXHJcbiAgICAgICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgICAgIFsvPHsxLDJ9LS8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbLy0+ezEsMn0vLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy8lW14lXFxzXSslLywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwqLywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvJSUvLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy8mJi8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbL1xcfFxcfC8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbLzw8LywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvPj4vLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy9bLSs9JnwhPD5efiovOiRdLywgJ29wZXJhdG9yJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lc1xyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5lc2NhcGUnLCAnQHN0cmluZ0JvZHknXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0BkYmxTdHJpbmdCb2R5J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9cXFxcLi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHNwZWNpYWwnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2Vycm9yLXRva2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9cXFxcLi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHNwZWNpYWwnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2Vycm9yLXRva2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9