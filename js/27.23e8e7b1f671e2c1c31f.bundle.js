(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{919:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return s})),n.d(t,"language",(function(){return o}));var s={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},o={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^\s*\|/,"@rematch","@table_header"],[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white","keyword","keyword","keyword"]],[/^\s*(=+|\-+)\s*$/,"keyword"],[/^\s*((\*[ ]?)+)\s*$/,"meta.separator"],[/^\s*>+/,"comment"],[/^\s*([\*\-+:]|\d+\.)\s/,"keyword"],[/^(\t|[ ]{4})[^ ].*$/,"string"],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:"string",next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+).*$/,{token:"string",next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:"string",next:"@codeblock"}],{include:"@linecontent"}],table_header:[{include:"@table_common"},[/[^\|]+/,"keyword.table.header"]],table_body:[{include:"@table_common"},{include:"@linecontent"}],table_common:[[/\s*[\-:]+\s*/,{token:"keyword",switchTo:"table_body"}],[/^\s*\|/,"keyword.table.left"],[/^\s*[^\|]/,"@rematch","@pop"],[/^\s*$/,"@rematch","@pop"],[/\|/,{cases:{"@eos":"keyword.table.right","@default":"keyword.table.middle"}}]],codeblock:[[/^\s*~~~\s*$/,{token:"string",next:"@pop"}],[/^\s*```\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblockgh:[[/```\s*$/,{token:"variable.source",next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,"variable.source"]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{+[^}]+\}+/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,"tag"],[/<(\w+)/,{cases:{"@empty":{token:"tag",next:"@tag.$1"},"@default":{token:"tag",next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:"tag"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(type)(\s*=\s*)(')([^']+)(')/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name.html","delimiter.html","string.html"]],[/\w+/,"attribute.name.html"],[/\/>/,"tag","@pop"],[/>/,{cases:{"$S2==style":{token:"tag",switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:"tag",switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:"tag",switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:"tag",next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21hcmtkb3duL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImNvbnRyb2wiLCJub25jb250cm9sIiwiZXNjYXBlcyIsImpzZXNjYXBlcyIsImVtcHR5IiwidG9rZW5pemVyIiwicm9vdCIsInRva2VuIiwibmV4dCIsIm5leHRFbWJlZGRlZCIsImluY2x1ZGUiLCJ0YWJsZV9oZWFkZXIiLCJ0YWJsZV9ib2R5IiwidGFibGVfY29tbW9uIiwic3dpdGNoVG8iLCJjYXNlcyIsImNvZGVibG9jayIsImNvZGVibG9ja2doIiwibGluZWNvbnRlbnQiLCJodG1sIiwiY29tbWVudCIsInRhZyIsImVtYmVkZGVkU3R5bGUiLCJlbWJlZGRlZFNjcmlwdCJdLCJtYXBwaW5ncyI6IjJGQUFBLHFGQUtPLElBQUlBLEVBQU8sQ0FDZEMsU0FBVSxDQUNOQyxhQUFjLENBQUMsVUFBUSxXQUUzQkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFlBRXJDQyxpQkFBa0IsQ0FDZCxDQUFFSCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FB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ZSxDQUNYTSxNQUFPLENBQ0gsSUFBTyxDQUFFUixNQUFPLE1BQU9PLFNBQVUsaUJBQWtCTCxhQUFjLE9BQ2pFLFdBQVksQ0FBRUYsTUFBTyxNQUFPTyxTQUFVLGlCQUFrQkwsYUFBYyxxQkFHOUUsV0FBWSxDQUFFRixNQUFPLE1BQU9DLEtBQU0sWUFJbERjLGNBQWUsQ0FDWCxDQUFDLFFBQVMsSUFDVixDQUFDLGVBQWdCLENBQUVmLE1BQU8sV0FBWUMsS0FBTSxPQUFRQyxhQUFjLFNBQ2xFLENBQUMsSUFBSyxLQUVWYyxlQUFnQixDQUNaLENBQUMsUUFBUyxJQUNWLENBQUMsZ0JBQWlCLENBQUVoQixNQUFPLFdBQVlDLEtBQU0sT0FBUUMsYUFBYyxTQUNuRSxDQUFDLElBQUsiLCJmaWxlIjoianMvMjcuMjNlOGU3YjFmNjcxZTJjMWMzMWYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nLF1cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnXSB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojP3JlZ2lvblxcXFxiLiotLT5cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyo8IS0tXFxcXHMqIz9lbmRyZWdpb25cXFxcYi4qLS0+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5tZCcsXHJcbiAgICAvLyBlc2NhcGUgY29kZXNcclxuICAgIGNvbnRyb2w6IC9bXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcclxuICAgIG5vbmNvbnRyb2w6IC9bXlxcXFxgKl9cXFtcXF17fSgpIytcXC1cXC4hXS8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OkBjb250cm9sKS8sXHJcbiAgICAvLyBlc2NhcGUgY29kZXMgZm9yIGphdmFzY3JpcHQvQ1NTIHN0cmluZ3NcclxuICAgIGpzZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXxbMC03XVswLTddP3xbMC0zXVswLTddezJ9KS8sXHJcbiAgICAvLyBub24gbWF0Y2hlZCBlbGVtZW50c1xyXG4gICAgZW1wdHk6IFtcclxuICAgICAgICAnYXJlYScsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2JyJywgJ2NvbCcsICdmcmFtZScsXHJcbiAgICAgICAgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdpc2luZGV4JywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbSdcclxuICAgIF0sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIG1hcmtkb3duIHRhYmxlc1xyXG4gICAgICAgICAgICBbL15cXHMqXFx8LywgJ0ByZW1hdGNoJywgJ0B0YWJsZV9oZWFkZXInXSxcclxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAjKVxyXG4gICAgICAgICAgICBbL14oXFxzezAsM30pKCMrKSgoPzpbXlxcXFwjXXxAZXNjYXBlcykrKSgoPzojKyk/KS8sIFsnd2hpdGUnLCAna2V5d29yZCcsICdrZXl3b3JkJywgJ2tleXdvcmQnXV0sXHJcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggPSlcclxuICAgICAgICAgICAgWy9eXFxzKig9K3xcXC0rKVxccyokLywgJ2tleXdvcmQnXSxcclxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAqKiopXHJcbiAgICAgICAgICAgIFsvXlxccyooKFxcKlsgXT8pKylcXHMqJC8sICdtZXRhLnNlcGFyYXRvciddLFxyXG4gICAgICAgICAgICAvLyBxdW90ZVxyXG4gICAgICAgICAgICBbL15cXHMqPisvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyBsaXN0IChzdGFydGluZyB3aXRoICogb3IgbnVtYmVyKVxyXG4gICAgICAgICAgICBbL15cXHMqKFtcXCpcXC0rOl18XFxkK1xcLilcXHMvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBjb2RlIGJsb2NrICg0IHNwYWNlcyBpbmRlbnQpXHJcbiAgICAgICAgICAgIFsvXihcXHR8WyBdezR9KVteIF0uKiQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIC8vIGNvZGUgYmxvY2sgKDMgdGlsZGUpXHJcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqKCg/Olxcd3xbXFwvXFwtI10pKyk/XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxyXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGFuZCBsYW5ndWFnZSlcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyooKD86XFx3fFtcXC9cXC0jXSkrKS4qJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGNvZGVibG9ja2doJywgbmV4dEVtYmVkZGVkOiAnJDEnIH1dLFxyXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGJ1dCBubyBsYW5ndWFnZSlcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrJyB9XSxcclxuICAgICAgICAgICAgLy8gbWFya3VwIHdpdGhpbiBsaW5lc1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGluZWNvbnRlbnQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9oZWFkZXI6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSxcclxuICAgICAgICAgICAgWy9bXlxcfF0rLywgJ2tleXdvcmQudGFibGUuaGVhZGVyJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9ib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWJsZV9jb21tb24nIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaW5lY29udGVudCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhYmxlX2NvbW1vbjogW1xyXG4gICAgICAgICAgICBbL1xccypbXFwtOl0rXFxzKi8sIHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICd0YWJsZV9ib2R5JyB9XSxcclxuICAgICAgICAgICAgWy9eXFxzKlxcfC8sICdrZXl3b3JkLnRhYmxlLmxlZnQnXSxcclxuICAgICAgICAgICAgWy9eXFxzKlteXFx8XS8sICdAcmVtYXRjaCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXlxccyokLywgJ0ByZW1hdGNoJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cXHwvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAna2V5d29yZC50YWJsZS5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXl3b3JkLnRhYmxlLm1pZGRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2RlYmxvY2s6IFtcclxuICAgICAgICAgICAgWy9eXFxzKn5+flxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy8uKiQvLCAndmFyaWFibGUuc291cmNlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3NcclxuICAgICAgICBjb2RlYmxvY2tnaDogW1xyXG4gICAgICAgICAgICBbL2BgYFxccyokLywgeyB0b2tlbjogJ3ZhcmlhYmxlLnNvdXJjZScsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW15gXSsvLCAndmFyaWFibGUuc291cmNlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaW5lY29udGVudDogW1xyXG4gICAgICAgICAgICAvLyBlc2NhcGVzXHJcbiAgICAgICAgICAgIFsvJlxcdys7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcclxuICAgICAgICAgICAgLy8gdmFyaW91cyBtYXJrdXBcclxuICAgICAgICAgICAgWy9cXGJfXyhbXlxcXFxfXXxAZXNjYXBlc3xfKD8hXykpK19fXFxiLywgJ3N0cm9uZyddLFxyXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXHJcbiAgICAgICAgICAgIFsvXFxiX1teX10rX1xcYi8sICdlbXBoYXNpcyddLFxyXG4gICAgICAgICAgICBbL1xcKihbXlxcXFwqXXxAZXNjYXBlcykrXFwqLywgJ2VtcGhhc2lzJ10sXHJcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICAvLyBsaW5rc1xyXG4gICAgICAgICAgICBbL1xceytbXn1dK1xcfSsvLCAnc3RyaW5nLnRhcmdldCddLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF1cXChbXlxcKV0rXFwpKS8sIFsnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJ11dLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF0pLywgJ3N0cmluZy5saW5rJ10sXHJcbiAgICAgICAgICAgIC8vIG9yIGh0bWxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaHRtbCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE5vdGU6IGl0IGlzIHRlbXB0aW5nIHRvIHJhdGhlciBzd2l0Y2ggdG8gdGhlIHJlYWwgSFRNTCBtb2RlIGluc3RlYWQgb2YgYnVpbGRpbmcgb3VyIG93biBoZXJlXHJcbiAgICAgICAgLy8gYnV0IGN1cnJlbnRseSB0aGVyZSBpcyBhIGxpbWl0YXRpb24gaW4gTW9uYXJjaCB0aGF0IHByZXZlbnRzIHVzIGZyb20gZG9pbmcgaXQ6IFRoZSBvcGVuaW5nXHJcbiAgICAgICAgLy8gJzwnIHdvdWxkIHN0YXJ0IHRoZSBIVE1MIG1vZGUsIGhvd2V2ZXIgdGhlcmUgaXMgbm8gd2F5IHRvIGp1bXAgMSBjaGFyYWN0ZXIgYmFjayB0byBsZXQgdGhlXHJcbiAgICAgICAgLy8gSFRNTCBtb2RlIGFsc28gdG9rZW5pemUgdGhlIG9wZW5pbmcgYW5nbGUgYnJhY2tldC4gVGh1cywgZXZlbiB0aG91Z2ggd2UgY291bGQganVtcCB0byBIVE1MLFxyXG4gICAgICAgIC8vIHdlIGNhbm5vdCBjb3JyZWN0bHkgdG9rZW5pemUgaXQgaW4gdGhhdCBtb2RlIHlldC5cclxuICAgICAgICBodG1sOiBbXHJcbiAgICAgICAgICAgIC8vIGh0bWwgdGFnc1xyXG4gICAgICAgICAgICBbLzwoXFx3KylcXC8+LywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbLzwoXFx3KykvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BlbXB0eSc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnLiQxJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvPFxcLyhcXHcrKVxccyo+LywgeyB0b2tlbjogJ3RhZycgfV0sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50JywgJ0Bjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWxtb3N0IGZ1bGwgSFRNTCB0YWcgbWF0Y2hpbmcsIGNvbXBsZXRlIHdpdGggZW1iZWRkZWQgc2NyaXB0cyAmIHN0eWxlc1xyXG4gICAgICAgIHRhZzogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy8odHlwZSkoXFxzKj1cXHMqKShcIikoW15cIl0rKShcIikvLCBbJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnLCAnc3RyaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaHRtbCcsIHN3aXRjaFRvOiAnQHRhZy4kUzIuJDQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJ11dLFxyXG4gICAgICAgICAgICBbLyh0eXBlKShcXHMqPVxccyopKCcpKFteJ10rKSgnKS8sIFsnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCcsICdzdHJpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5odG1sJywgc3dpdGNoVG86ICdAdGFnLiRTMi4kNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmh0bWwnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcdyspKFxccyo9XFxzKikoXCJbXlwiXSpcInwnW14nXSonKS8sIFsnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCcsICdzdHJpbmcuaHRtbCddXSxcclxuICAgICAgICAgICAgWy9cXHcrLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9cXC8+LywgJ3RhZycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zdHlsZSc6IHsgdG9rZW46ICd0YWcnLCBzd2l0Y2hUbzogJ2VtYmVkZGVkU3R5bGUnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09c2NyaXB0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJFMzJzogeyB0b2tlbjogJ3RhZycsIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbWJlZGRlZFN0eWxlOiBbXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLzwvLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVtYmVkZGVkU2NyaXB0OiBbXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88LywgJyddXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==