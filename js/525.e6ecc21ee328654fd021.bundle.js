(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[525],{90525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>o,language:()=>i});var o={wordPattern:/(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},i={defaultToken:"",tokenPostfix:".scss",ws:"[ \t\n\r\f]*",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@selector"}],selector:[{include:"@comments"},{include:"@import"},{include:"@variabledeclaration"},{include:"@warndebug"},["[@](include)",{token:"keyword",next:"@includedeclaration"}],["[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",{token:"keyword",next:"@keyframedeclaration"}],["[@](page|content|font-face|-moz-document)",{token:"keyword"}],["[@](charset|namespace)",{token:"keyword",next:"@declarationbody"}],["[@](function)",{token:"keyword",next:"@functiondeclaration"}],["[@](mixin)",{token:"keyword",next:"@mixindeclaration"}],["url(\\-prefix)?\\(",{token:"meta",next:"@urldeclaration"}],{include:"@controlstatement"},{include:"@selectorname"},["[&\\*]","tag"],["[>\\+,]","delimiter"],["\\[",{token:"delimiter.bracket",next:"@selectorattribute"}],["{",{token:"delimiter.curly",next:"@selectorbody"}]],selectorbody:[["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))","attribute.name","@rulevalue"],{include:"@selector"},["[@](extend)",{token:"keyword",next:"@extendbody"}],["[@](return)",{token:"keyword",next:"@declarationbody"}],["}",{token:"delimiter.curly",next:"@pop"}]],selectorname:[["#{",{token:"meta",next:"@variableinterpolation"}],["(\\.|#(?=[^{])|%|(@identifier)|:)+","tag"]],selectorattribute:[{include:"@term"},["]",{token:"delimiter.bracket",next:"@pop"}]],term:[{include:"@comments"},["url(\\-prefix)?\\(",{token:"meta",next:"@urldeclaration"}],{include:"@functioninvocation"},{include:"@numbers"},{include:"@strings"},{include:"@variablereference"},["(and\\b|or\\b|not\\b)","operator"],{include:"@name"},["([<>=\\+\\-\\*\\/\\^\\|\\~,])","operator"],[",","delimiter"],["!default","literal"],["\\(",{token:"delimiter.parenthesis",next:"@parenthizedterm"}]],rulevalue:[{include:"@term"},["!important","literal"],[";","delimiter","@pop"],["{",{token:"delimiter.curly",switchTo:"@nestedproperty"}],["(?=})",{token:"",next:"@pop"}]],nestedproperty:[["[*_]?@identifier@ws:","attribute.name","@rulevalue"],{include:"@comments"},["}",{token:"delimiter.curly",next:"@pop"}]],warndebug:[["[@](warn|debug)",{token:"keyword",next:"@declarationbody"}]],import:[["[@](import)",{token:"keyword",next:"@declarationbody"}]],variabledeclaration:[["\\$@identifier@ws:","variable.decl","@declarationbody"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"meta",next:"@pop"}]],parenthizedterm:[{include:"@term"},["\\)",{token:"delimiter.parenthesis",next:"@pop"}]],declarationbody:[{include:"@term"},[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],extendbody:[{include:"@selectorname"},["!optional","literal"],[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],variablereference:[["\\$@identifier","variable.ref"],["\\.\\.\\.","operator"],["#{",{token:"meta",next:"@variableinterpolation"}]],variableinterpolation:[{include:"@variablereference"},["}",{token:"meta",next:"@pop"}]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],name:[["@identifier","attribute.value"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","number.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","number","@pop"]],functiondeclaration:[["@identifier@ws\\(",{token:"meta",next:"@parameterdeclaration"}],["{",{token:"delimiter.curly",switchTo:"@functionbody"}]],mixindeclaration:[["@identifier@ws\\(",{token:"meta",next:"@parameterdeclaration"}],["@identifier","meta"],["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],parameterdeclaration:[["\\$@identifier@ws:","variable.decl"],["\\.\\.\\.","operator"],[",","delimiter"],{include:"@term"},["\\)",{token:"meta",next:"@pop"}]],includedeclaration:[{include:"@functioninvocation"},["@identifier","meta"],[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}],["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],keyframedeclaration:[["@identifier","meta"],["{",{token:"delimiter.curly",switchTo:"@keyframebody"}]],keyframebody:[{include:"@term"},["{",{token:"delimiter.curly",next:"@selectorbody"}],["}",{token:"delimiter.curly",next:"@pop"}]],controlstatement:[["[@](if|else|for|while|each|media)",{token:"keyword.flow",next:"@controlstatementdeclaration"}]],controlstatementdeclaration:[["(in|from|through|if|to)\\b",{token:"keyword.flow"}],{include:"@term"},["{",{token:"delimiter.curly",switchTo:"@selectorbody"}]],functionbody:[["[@](return)",{token:"keyword"}],{include:"@variabledeclaration"},{include:"@term"},{include:"@controlstatement"},[";","delimiter"],["}",{token:"delimiter.curly",next:"@pop"}]],functioninvocation:[["@identifier\\(",{token:"meta",next:"@functionarguments"}]],functionarguments:[["\\$@identifier@ws:","attribute.name"],["[,]","delimiter"],{include:"@term"},["\\)",{token:"meta",next:"@pop"}]],strings:[['~?"',{token:"string.delimiter",next:"@stringenddoublequote"}],["~?'",{token:"string.delimiter",next:"@stringendquote"}]],stringenddoublequote:[["\\\\.","string"],['"',{token:"string.delimiter",next:"@pop"}],[".","string"]],stringendquote:[["\\\\.","string"],["'",{token:"string.delimiter",next:"@pop"}],[".","string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zY3NzL3Njc3MuanMiXSwibmFtZXMiOlsiY29uZiIsIndvcmRQYXR0ZXJuIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJsaW5lQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsIndzIiwiaWRlbnRpZmllciIsInRva2VuIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJzZWxlY3RvciIsIm5leHQiLCJzZWxlY3RvcmJvZHkiLCJzZWxlY3Rvcm5hbWUiLCJzZWxlY3RvcmF0dHJpYnV0ZSIsInRlcm0iLCJydWxldmFsdWUiLCJzd2l0Y2hUbyIsIm5lc3RlZHByb3BlcnR5Iiwid2FybmRlYnVnIiwiaW1wb3J0IiwidmFyaWFibGVkZWNsYXJhdGlvbiIsInVybGRlY2xhcmF0aW9uIiwicGFyZW50aGl6ZWR0ZXJtIiwiZGVjbGFyYXRpb25ib2R5IiwiZXh0ZW5kYm9keSIsInZhcmlhYmxlcmVmZXJlbmNlIiwidmFyaWFibGVpbnRlcnBvbGF0aW9uIiwiY29tbWVudCIsIm5hbWUiLCJudW1iZXJzIiwidW5pdHMiLCJmdW5jdGlvbmRlY2xhcmF0aW9uIiwibWl4aW5kZWNsYXJhdGlvbiIsInBhcmFtZXRlcmRlY2xhcmF0aW9uIiwiaW5jbHVkZWRlY2xhcmF0aW9uIiwia2V5ZnJhbWVkZWNsYXJhdGlvbiIsImtleWZyYW1lYm9keSIsImNvbnRyb2xzdGF0ZW1lbnQiLCJjb250cm9sc3RhdGVtZW50ZGVjbGFyYXRpb24iLCJmdW5jdGlvbmJvZHkiLCJmdW5jdGlvbmludm9jYXRpb24iLCJmdW5jdGlvbmFyZ3VtZW50cyIsInN0cmluZ3MiLCJzdHJpbmdlbmRkb3VibGVxdW90ZSIsInN0cmluZ2VuZHF1b3RlIl0sIm1hcHBpbmdzIjoic0lBSU8sSUFBSUEsRUFBTyxDQUNkQyxZQUFhLGtEQUNiQyxTQUFVLENBQ05DLGFBQWMsQ0FBQyxLQUFNLE1BQ3JCQyxZQUFhLE1BRWpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsYUFFL0NDLGlCQUFrQixDQUNkLENBQUVILEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJHLFFBQVMsQ0FDTEMsUUFBUyxDQUNMQyxNQUFPLElBQUlDLE9BQU8sZ0RBQ2xCQyxJQUFLLElBQUlELE9BQU8sMkNBSWpCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsUUFDZEMsR0FBSSxlQUNKQyxXQUFZLHNIQUNaZixTQUFVLENBQ04sQ0FBRUUsS0FBTSxJQUFLQyxNQUFPLElBQUthLE1BQU8sbUJBQ2hDLENBQUVkLEtBQU0sSUFBS0MsTUFBTyxJQUFLYSxNQUFPLHFCQUNoQyxDQUFFZCxLQUFNLElBQUtDLE1BQU8sSUFBS2EsTUFBTyx5QkFDaEMsQ0FBRWQsS0FBTSxJQUFL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QUFDLElBQUsiLCJmaWxlIjoianMvNTI1LmU2ZWNjMjFlZTMyODY1NGZkMDIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KFtAJCMhLjpdP1tcXHctP10rJT8pfFtAIyEuXS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJ1xyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcLycpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNjc3MnLFxyXG4gICAgd3M6ICdbIFxcdFxcblxcclxcZl0qJyxcclxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW3sgaW5jbHVkZTogJ0BzZWxlY3RvcicgfV0sXHJcbiAgICAgICAgc2VsZWN0b3I6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW1wb3J0JyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdhcm5kZWJ1ZycgfSxcclxuICAgICAgICAgICAgWydbQF0oaW5jbHVkZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAaW5jbHVkZWRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ1tAXShrZXlmcmFtZXN8LXdlYmtpdC1rZXlmcmFtZXN8LW1vei1rZXlmcmFtZXN8LW8ta2V5ZnJhbWVzKScsXHJcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbJ1tAXShwYWdlfGNvbnRlbnR8Zm9udC1mYWNlfC1tb3otZG9jdW1lbnQpJywgeyB0b2tlbjogJ2tleXdvcmQnIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShjaGFyc2V0fG5hbWVzcGFjZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcclxuICAgICAgICAgICAgWydbQF0oZnVuY3Rpb24pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGZ1bmN0aW9uZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShtaXhpbiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbWl4aW5kZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb250cm9sc3RhdGVtZW50JyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxyXG4gICAgICAgICAgICBbJ1smXFxcXCpdJywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbJ1s+XFxcXCssXScsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWydcXFxcWycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAc2VsZWN0b3JhdHRyaWJ1dGUnIH1dLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RvcmJvZHk6IFtcclxuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOig/PShcXFxcc3xcXFxcZHxbXns7fV0qWzt9XSkpJywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxyXG4gICAgICAgICAgICBbJ1tAXShleHRlbmQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGV4dGVuZGJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdG9ybmFtZTogW1xyXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnKFxcXFwufCMoPz1bXntdKXwlfChAaWRlbnRpZmllcil8OikrJywgJ3RhZyddIC8vIHNlbGVjdG9yICguZm9vLCBkaXYsIC4uLilcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdG9yYXR0cmlidXRlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ10nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlcm06IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcclxuICAgICAgICAgICAgWycoYW5kXFxcXGJ8b3JcXFxcYnxub3RcXFxcYiknLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5hbWUnIH0sXHJcbiAgICAgICAgICAgIFsnKFs8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfixdKScsICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnIWRlZmF1bHQnLCAnbGl0ZXJhbCddLFxyXG4gICAgICAgICAgICBbJ1xcXFwoJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcGFyZW50aGl6ZWR0ZXJtJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcnVsZXZhbHVlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJyFpbXBvcnRhbnQnLCAnbGl0ZXJhbCddLFxyXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQG5lc3RlZHByb3BlcnR5JyB9XSxcclxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cclxuICAgICAgICBdLFxyXG4gICAgICAgIG5lc3RlZHByb3BlcnR5OiBbXHJcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdhcm5kZWJ1ZzogW1snW0BdKHdhcm58ZGVidWcpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV1dLFxyXG4gICAgICAgIGltcG9ydDogW1snW0BdKGltcG9ydCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XV0sXHJcbiAgICAgICAgdmFyaWFibGVkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICAvLyBzYXNzIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ3ZhcmlhYmxlLmRlY2wnLCAnQGRlY2xhcmF0aW9uYm9keSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZWNsYXJhdGlvbmJvZHk6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZXh0ZW5kYm9keTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxyXG4gICAgICAgICAgICBbJyFvcHRpb25hbCcsICdsaXRlcmFsJ10sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFyaWFibGVyZWZlcmVuY2U6IFtcclxuICAgICAgICAgICAgLy8gc2FzcyB2YXJpYWJsZSByZWZlcmVuY2VcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyJywgJ3ZhcmlhYmxlLnJlZiddLFxyXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0gLy8gc2FzcyB2YXIgcmVzb2x2ZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFyaWFibGVpbnRlcnBvbGF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lOiBbWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXV0sXHJcbiAgICAgICAgbnVtYmVyczogW1xyXG4gICAgICAgICAgICBbJyhcXFxcZCpcXFxcLik/XFxcXGQrKFtlRV1bXFxcXC0rXT9cXFxcZCspPycsIHsgdG9rZW46ICdudW1iZXInLCBuZXh0OiAnQHVuaXRzJyB9XSxcclxuICAgICAgICAgICAgWycjWzAtOWEtZkEtRl9dKyg/IVxcXFx3KScsICdudW1iZXIuaGV4J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVuaXRzOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICcoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLFxyXG4gICAgICAgICAgICAgICAgJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAnQHBvcCdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZnVuY3Rpb25kZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAZnVuY3Rpb25ib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbWl4aW5kZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICAvLyBtaXhpbiB3aXRoIHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aG91dCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFyYW1ldGVyZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsnLCcsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5jbHVkZWRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxyXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBrZXlmcmFtZWRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAa2V5ZnJhbWVib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5ZnJhbWVib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb250cm9sc3RhdGVtZW50OiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdbQF0oaWZ8ZWxzZXxmb3J8d2hpbGV8ZWFjaHxtZWRpYSknLFxyXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycsIG5leHQ6ICdAY29udHJvbHN0YXRlbWVudGRlY2xhcmF0aW9uJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJyhpbnxmcm9tfHRocm91Z2h8aWZ8dG8pXFxcXGInLCB7IHRva2VuOiAna2V5d29yZC5mbG93JyB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmdW5jdGlvbmJvZHk6IFtcclxuICAgICAgICAgICAgWydbQF0ocmV0dXJuKScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlZGVjbGFyYXRpb24nIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmdW5jdGlvbmludm9jYXRpb246IFtbJ0BpZGVudGlmaWVyXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAZnVuY3Rpb25hcmd1bWVudHMnIH1dXSxcclxuICAgICAgICBmdW5jdGlvbmFyZ3VtZW50czogW1xyXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsnWyxdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRkb3VibGVxdW90ZScgfV0sXHJcbiAgICAgICAgICAgIFtcIn4/J1wiLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nZW5kcXVvdGUnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdlbmRkb3VibGVxdW90ZTogW1xyXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ2VuZHF1b3RlOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbXCInXCIsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=