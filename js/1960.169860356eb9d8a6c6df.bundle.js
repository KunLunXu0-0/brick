(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[1960],{71960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>i,language:()=>r});var i={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#pragma\\s+region\\b"),end:new RegExp("^\\s*#pragma\\s+endregion\\b")}}},r={defaultToken:"",tokenPostfix:".cpp",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["abstract","amp","array","auto","bool","break","case","catch","char","class","const","constexpr","const_cast","continue","cpu","decltype","default","delegate","delete","do","double","dynamic_cast","each","else","enum","event","explicit","export","extern","false","final","finally","float","for","friend","gcnew","generic","goto","if","in","initonly","inline","int","interface","interior_ptr","internal","literal","long","mutable","namespace","new","noexcept","nullptr","__nullptr","operator","override","partial","pascal","pin_ptr","private","property","protected","public","ref","register","reinterpret_cast","restrict","return","safe_cast","sealed","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","tile_static","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","where","while","_asm","_based","_cdecl","_declspec","_fastcall","_if_exists","_if_not_exists","_inline","_multiple_inheritance","_pascal","_single_inheritance","_stdcall","_virtual_inheritance","_w64","__abstract","__alignof","__asm","__assume","__based","__box","__builtin_alignof","__cdecl","__clrcall","__declspec","__delegate","__event","__except","__fastcall","__finally","__forceinline","__gc","__hook","__identifier","__if_exists","__if_not_exists","__inline","__int128","__int16","__int32","__int64","__int8","__interface","__leave","__m128","__m128d","__m128i","__m256","__m256d","__m256i","__m64","__multiple_inheritance","__newslot","__nogc","__noop","__nounwind","__novtordisp","__pascal","__pin","__pragma","__property","__ptr32","__ptr64","__raise","__restrict","__resume","__sealed","__single_inheritance","__stdcall","__super","__thiscall","__try","__try_cast","__typeof","__unaligned","__unhook","__uuidof","__value","__virtual_inheritance","__w64","__wchar_t"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,encoding:/u|u8|U|L/,tokenizer:{root:[[/@encoding?R\"(?:([^ ()\\\t]*))\(/,{token:"string.raw.begin",next:"@raw.$1"}],[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],[/^\s*#\s*include/,{token:"keyword.directive.include",next:"@include"}],[/^\s*#\s*\w+/,"keyword.directive"],{include:"@whitespace"},[/\[\s*\[/,{token:"annotation",next:"@annotation"}],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@doccomment"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],doccomment:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],raw:[[/(.*)(\))(?:([^ ()\\\t"]*))(\")/,{cases:{"$3==$S2":["string.raw","string.raw.end","string.raw.end",{token:"string.raw.end",next:"@pop"}],"@default":["string.raw","string.raw","string.raw","string.raw"]}}],[/.*/,"string.raw"]],annotation:[{include:"@whitespace"},[/using|alignas/,"keyword"],[/[a-zA-Z0-9_]+/,"annotation"],[/[,:]/,"delimiter"],[/[()]/,"@brackets"],[/\]\s*\]/,{token:"annotation",next:"@pop"}]],include:[[/(\s*)(<)([^<>]*)(>)/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]],[/(\s*)(")([^"]*)(")/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9jcHAvY3BwLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwiaW50ZWdlcnN1ZmZpeCIsImZsb2F0c3VmZml4IiwiZW5jb2RpbmciLCJ0b2tlbml6ZXIiLCJyb290IiwibmV4dCIsImNhc2VzIiwiaW5jbHVkZSIsIndoaXRlc3BhY2UiLCJjb21tZW50IiwiZG9jY29tbWVudCIsInN0cmluZyIsInJhdyIsImFubm90YXRpb24iXSwibWFwcGluZ3MiOiJ1SUFJTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsWUFBYSxLQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV6QkMsU0FBVSxDQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVWQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxZQUVyQ0MsaUJBQWtCLENBQ2QsQ0FBRUgsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkcsUUFBUyxDQUNMQyxRQUFTLENBQ0xDLE1BQU8sSUFBSUMsT0FBTyw2QkFDbEJDLElBQUssSUFBSUQsT0FBTyxtQ0FJakJFLEVBQVcsQ0FDbEJDLGFBQWMsR0FDZEMsYUFBYyxPQUNkYixTQUFVLENBQ04sQ0FBRWMsTUFBTyxrQkFBbUJaLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFVyxNQUFPLHdCQUF5QlosS0FBTSxJQUFLQyxNQUFPLEtBQ3BELENBQUVXLE1BQU8sbUJBQW9CWixLQUFNLElBQUtDLE1BQU8sS0FDL0MsQ0FBRVcsTUFBTyxrQkFBbUJaLEtBQU0sSUFBS0MsTUFBTyxNQUVsRFksU0FBVSxDQUNOLFdBQ0EsTUFDQSxRQUNBLE9BQ0EsT0FDQSxRQUNBLE9BQ0EsUUFDQSxPQUNBLFFBQ0EsUUFDQSxZQUNBLGFBQ0EsV0FDQSxNQUNBLFdBQ0EsVUFDQSxXQUNBLFNBQ0EsS0FDQSxTQUNBLGVBQ0EsT0FDQSxPQUNBLE9BQ0EsUUFDQSxXQUNBLFNBQ0EsU0FDQSxRQUNBLFFBQ0EsVUFDQSxRQUNBLE1BQ0EsU0FDQSxRQUNBLFVBQ0EsT0FDQSxLQUNBLEtBQ0EsV0FDQSxTQUNBLE1BQ0EsWUFDQSxlQUNBLFdBQ0EsVUFDQSxPQUNBLFVBQ0EsWUFDQSxNQUNBLFdBQ0EsVUFDQSxZQUNBLFdBQ0EsV0FDQSxVQUNBLFNBQ0EsVUFDQSxVQUNBLFdBQ0EsWUFDQSxTQUNBLE1BQ0EsV0FDQSxtQkFDQSxXQUNBLFNBQ0EsWUFDQSxTQUNBLFFBQ0EsU0FDQSxTQUNBLFNBQ0EsZ0JBQ0EsY0FDQSxTQUNBLFNBQ0EsV0FDQSxPQUNBLGVBQ0EsUUFDQSxjQUNBLE9BQ0EsTUFDQSxVQUNBLFNBQ0EsV0FDQSxRQUNBLFdBQ0EsUUFDQSxVQUNBLE9BQ0EsV0FDQSxVQUNBLFFBQ0EsUUFDQSxPQUNBLFNBQ0EsU0FDQSxZQUNBLFlBQ0EsYUFDQSxpQkFDQSxVQUNBLHdCQUNBLFVBQ0Esc0JBQ0EsV0FDQSx1QkFDQSxPQUNBLGFBQ0EsWUFDQSxRQUNBLFdBQ0EsVUFDQSxRQUNBLG9CQUNBLFVBQ0EsWUFDQSxhQUNBLGFBQ0EsVUFDQSxXQUNBLGFBQ0EsWUFDQSxnQkFDQSxPQUNBLFNBQ0EsZUFDQSxjQUNBLGtCQUNBLFdBQ0EsV0FDQSxVQUNBLFVBQ0EsVUFDQSxTQUNBLGNBQ0EsVUFDQSxTQUNBLFVBQ0EsVUFDQSxTQUNBLFVBQ0EsVUFDQSxRQUNBLHlCQUNBLFlBQ0EsU0FDQSxTQUNBLGFBQ0EsZUFDQSxXQUNBLFFBQ0EsV0FDQSxhQUNBLFVBQ0EsVUFDQSxVQUNBLGFBQ0EsV0FDQSxXQUNBLHVCQUNBLFlBQ0EsVUFDQSxhQUNBLFFBQ0EsYUFDQSxXQUNBLGNBQ0EsV0FDQSxXQUNBLFVBQ0Esd0JBQ0EsUUFDQSxhQUVKQyxVQUFXLENBQ1AsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLEtBQ0EsS0FDQSxNQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxNQUNBLE1BQ0EsUUFHSkMsUUFBUyx3QkFDVEMsUUFBUyx3RUFDVEMsY0FBZSxtQ0FDZkMsWUFBYSxVQUNiQyxTQUFVLFdBRVZDLFVBQVcsQ0FDUEMsS0FBTSxDQUVGLENBQUMsbUNBQW9DLENBQUVULE1BQU8sbUJBQW9CVSxLQUFNLFlBRXhFLENBQ0ksZUFDQSxDQUNJQyxNQUFPLENBQ0gsWUFBYSxDQUFFWCxNQUFPLGNBQ3RCLFdBQVksZ0JBT3hCLENBQUMsa0JBQW1CLENBQUVBLE1BQU8sNEJBQTZCVSxLQUFNLGFBRWhFLENBQUMsY0FBZSxxQkFFaEIsQ0FBRUUsUUFBUyxlQUVYLENBQUMsVUFBVyxDQUFFWixNQUFPLGFBQWNVLEtBQU0sZ0JBRXpDLENBQUMsYUFBYyxhQUNmLENBQUMsbUJBQW9CLGFBQ3JCLENBQ0ksV0FDQSxDQUNJQyxNQUFPLENBQ0gsYUFBYyxZQUNkLFdBQVksTUFLeEIsQ0FBQyx1Q0FBd0MsZ0JBQ3pDLENBQUMseUNBQTBDLGdCQUMzQyxDQUFDLGdEQUFpRCxjQUNsRCxDQUFDLGdDQUFpQyxnQkFDbEMsQ0FBQyxvQ0FBcUMsaUJBQ3RDLENBQUMsNkJBQThCLFVBQy9CLENBQUMscUJBQXNCLFVBRXZCLENBQUMsUUFBUyxhQUVWLENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLElBQUssU0FBVSxXQUVoQixDQUFDLFdBQVksVUFDYixDQUFDLG1CQUFvQixDQUFDLFNBQVUsZ0JBQWlCLFdBQ2pELENBQUMsSUFBSyxtQkFFVkUsV0FBWSxDQUNSLENBQUMsYUFBYyxJQUNmLENBQUMsZUFBZ0IsY0FBZSxlQUNoQyxDQUFDLE9BQVEsVUFBVyxZQUNwQixDQUFDLFVBQVcsWUFFaEJDLFFBQVMsQ0FDTCxDQUFDLFVBQVcsV0FDWixDQUFDLE9BQVEsVUFBVyxRQUNwQixDQUFDLFFBQVMsWUFHZEMsV0FBWSxDQUNSLENBQUMsVUFBVyxlQUNaLENBQUMsT0FBUSxjQUFlLFFBQ3hCLENBQUMsUUFBUyxnQkFFZEMsT0FBUSxDQUNKLENBQUMsVUFBVyxVQUNaLENBQUMsV0FBWSxpQkFDYixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxJQUFLLFNBQVUsU0FFcEJDLElBQUssQ0FDRCxDQUNJLGlDQUNBLENBQ0lOLE1BQU8sQ0FDSCxVQUFXLENBQ1AsYUFDQSxpQkFDQSxpQkFDQSxDQUFFWCxNQUFPLGlCQUFrQlUsS0FBTSxTQUVyQyxXQUFZLENBQUMsYUFBYyxhQUFjLGFBQWMsaUJBSW5FLENBQUMsS0FBTSxlQUVYUSxXQUFZLENBQ1IsQ0FBRU4sUUFBUyxlQUNYLENBQUMsZ0JBQWlCLFdBQ2xCLENBQUMsZ0JBQWlCLGNBQ2xCLENBQUMsT0FBUSxhQUNULENBQUMsT0FBUSxhQUNULENBQUMsVUFBVyxDQUFFWixNQUFPLGFBQWNVLEtBQU0sVUFFN0NFLFFBQVMsQ0FDTCxDQUNJLHNCQUNBLENBQ0ksR0FDQSxrQ0FDQSw0QkFDQSxDQUFFWixNQUFPLGdDQUFpQ1UsS0FBTSxVQUd4RCxDQUNJLHFCQUNBLENBQ0ksR0FDQSxrQ0FDQSw0QkFDQSxDQUFFVixNQUFPLGdDQUFpQ1UsS0FBTSIsImZpbGUiOiJqcy8xOTYwLjE2OTg2MDM1NmViOWQ4YTZjNmRmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI3ByYWdtYVxcXFxzK3JlZ2lvblxcXFxiJyksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNwcmFnbWFcXFxccytlbmRyZWdpb25cXFxcYicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5jcHAnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScsIG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnYWJzdHJhY3QnLFxyXG4gICAgICAgICdhbXAnLFxyXG4gICAgICAgICdhcnJheScsXHJcbiAgICAgICAgJ2F1dG8nLFxyXG4gICAgICAgICdib29sJyxcclxuICAgICAgICAnYnJlYWsnLFxyXG4gICAgICAgICdjYXNlJyxcclxuICAgICAgICAnY2F0Y2gnLFxyXG4gICAgICAgICdjaGFyJyxcclxuICAgICAgICAnY2xhc3MnLFxyXG4gICAgICAgICdjb25zdCcsXHJcbiAgICAgICAgJ2NvbnN0ZXhwcicsXHJcbiAgICAgICAgJ2NvbnN0X2Nhc3QnLFxyXG4gICAgICAgICdjb250aW51ZScsXHJcbiAgICAgICAgJ2NwdScsXHJcbiAgICAgICAgJ2RlY2x0eXBlJyxcclxuICAgICAgICAnZGVmYXVsdCcsXHJcbiAgICAgICAgJ2RlbGVnYXRlJyxcclxuICAgICAgICAnZGVsZXRlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdkb3VibGUnLFxyXG4gICAgICAgICdkeW5hbWljX2Nhc3QnLFxyXG4gICAgICAgICdlYWNoJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2VudW0nLFxyXG4gICAgICAgICdldmVudCcsXHJcbiAgICAgICAgJ2V4cGxpY2l0JyxcclxuICAgICAgICAnZXhwb3J0JyxcclxuICAgICAgICAnZXh0ZXJuJyxcclxuICAgICAgICAnZmFsc2UnLFxyXG4gICAgICAgICdmaW5hbCcsXHJcbiAgICAgICAgJ2ZpbmFsbHknLFxyXG4gICAgICAgICdmbG9hdCcsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2ZyaWVuZCcsXHJcbiAgICAgICAgJ2djbmV3JyxcclxuICAgICAgICAnZ2VuZXJpYycsXHJcbiAgICAgICAgJ2dvdG8nLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2luJyxcclxuICAgICAgICAnaW5pdG9ubHknLFxyXG4gICAgICAgICdpbmxpbmUnLFxyXG4gICAgICAgICdpbnQnLFxyXG4gICAgICAgICdpbnRlcmZhY2UnLFxyXG4gICAgICAgICdpbnRlcmlvcl9wdHInLFxyXG4gICAgICAgICdpbnRlcm5hbCcsXHJcbiAgICAgICAgJ2xpdGVyYWwnLFxyXG4gICAgICAgICdsb25nJyxcclxuICAgICAgICAnbXV0YWJsZScsXHJcbiAgICAgICAgJ25hbWVzcGFjZScsXHJcbiAgICAgICAgJ25ldycsXHJcbiAgICAgICAgJ25vZXhjZXB0JyxcclxuICAgICAgICAnbnVsbHB0cicsXHJcbiAgICAgICAgJ19fbnVsbHB0cicsXHJcbiAgICAgICAgJ29wZXJhdG9yJyxcclxuICAgICAgICAnb3ZlcnJpZGUnLFxyXG4gICAgICAgICdwYXJ0aWFsJyxcclxuICAgICAgICAncGFzY2FsJyxcclxuICAgICAgICAncGluX3B0cicsXHJcbiAgICAgICAgJ3ByaXZhdGUnLFxyXG4gICAgICAgICdwcm9wZXJ0eScsXHJcbiAgICAgICAgJ3Byb3RlY3RlZCcsXHJcbiAgICAgICAgJ3B1YmxpYycsXHJcbiAgICAgICAgJ3JlZicsXHJcbiAgICAgICAgJ3JlZ2lzdGVyJyxcclxuICAgICAgICAncmVpbnRlcnByZXRfY2FzdCcsXHJcbiAgICAgICAgJ3Jlc3RyaWN0JyxcclxuICAgICAgICAncmV0dXJuJyxcclxuICAgICAgICAnc2FmZV9jYXN0JyxcclxuICAgICAgICAnc2VhbGVkJyxcclxuICAgICAgICAnc2hvcnQnLFxyXG4gICAgICAgICdzaWduZWQnLFxyXG4gICAgICAgICdzaXplb2YnLFxyXG4gICAgICAgICdzdGF0aWMnLFxyXG4gICAgICAgICdzdGF0aWNfYXNzZXJ0JyxcclxuICAgICAgICAnc3RhdGljX2Nhc3QnLFxyXG4gICAgICAgICdzdHJ1Y3QnLFxyXG4gICAgICAgICdzd2l0Y2gnLFxyXG4gICAgICAgICd0ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3RoaXMnLFxyXG4gICAgICAgICd0aHJlYWRfbG9jYWwnLFxyXG4gICAgICAgICd0aHJvdycsXHJcbiAgICAgICAgJ3RpbGVfc3RhdGljJyxcclxuICAgICAgICAndHJ1ZScsXHJcbiAgICAgICAgJ3RyeScsXHJcbiAgICAgICAgJ3R5cGVkZWYnLFxyXG4gICAgICAgICd0eXBlaWQnLFxyXG4gICAgICAgICd0eXBlbmFtZScsXHJcbiAgICAgICAgJ3VuaW9uJyxcclxuICAgICAgICAndW5zaWduZWQnLFxyXG4gICAgICAgICd1c2luZycsXHJcbiAgICAgICAgJ3ZpcnR1YWwnLFxyXG4gICAgICAgICd2b2lkJyxcclxuICAgICAgICAndm9sYXRpbGUnLFxyXG4gICAgICAgICd3Y2hhcl90JyxcclxuICAgICAgICAnd2hlcmUnLFxyXG4gICAgICAgICd3aGlsZScsXHJcbiAgICAgICAgJ19hc20nLFxyXG4gICAgICAgICdfYmFzZWQnLFxyXG4gICAgICAgICdfY2RlY2wnLFxyXG4gICAgICAgICdfZGVjbHNwZWMnLFxyXG4gICAgICAgICdfZmFzdGNhbGwnLFxyXG4gICAgICAgICdfaWZfZXhpc3RzJyxcclxuICAgICAgICAnX2lmX25vdF9leGlzdHMnLFxyXG4gICAgICAgICdfaW5saW5lJyxcclxuICAgICAgICAnX211bHRpcGxlX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX3Bhc2NhbCcsXHJcbiAgICAgICAgJ19zaW5nbGVfaW5oZXJpdGFuY2UnLFxyXG4gICAgICAgICdfc3RkY2FsbCcsXHJcbiAgICAgICAgJ192aXJ0dWFsX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX3c2NCcsXHJcbiAgICAgICAgJ19fYWJzdHJhY3QnLFxyXG4gICAgICAgICdfX2FsaWdub2YnLFxyXG4gICAgICAgICdfX2FzbScsXHJcbiAgICAgICAgJ19fYXNzdW1lJyxcclxuICAgICAgICAnX19iYXNlZCcsXHJcbiAgICAgICAgJ19fYm94JyxcclxuICAgICAgICAnX19idWlsdGluX2FsaWdub2YnLFxyXG4gICAgICAgICdfX2NkZWNsJyxcclxuICAgICAgICAnX19jbHJjYWxsJyxcclxuICAgICAgICAnX19kZWNsc3BlYycsXHJcbiAgICAgICAgJ19fZGVsZWdhdGUnLFxyXG4gICAgICAgICdfX2V2ZW50JyxcclxuICAgICAgICAnX19leGNlcHQnLFxyXG4gICAgICAgICdfX2Zhc3RjYWxsJyxcclxuICAgICAgICAnX19maW5hbGx5JyxcclxuICAgICAgICAnX19mb3JjZWlubGluZScsXHJcbiAgICAgICAgJ19fZ2MnLFxyXG4gICAgICAgICdfX2hvb2snLFxyXG4gICAgICAgICdfX2lkZW50aWZpZXInLFxyXG4gICAgICAgICdfX2lmX2V4aXN0cycsXHJcbiAgICAgICAgJ19faWZfbm90X2V4aXN0cycsXHJcbiAgICAgICAgJ19faW5saW5lJyxcclxuICAgICAgICAnX19pbnQxMjgnLFxyXG4gICAgICAgICdfX2ludDE2JyxcclxuICAgICAgICAnX19pbnQzMicsXHJcbiAgICAgICAgJ19faW50NjQnLFxyXG4gICAgICAgICdfX2ludDgnLFxyXG4gICAgICAgICdfX2ludGVyZmFjZScsXHJcbiAgICAgICAgJ19fbGVhdmUnLFxyXG4gICAgICAgICdfX20xMjgnLFxyXG4gICAgICAgICdfX20xMjhkJyxcclxuICAgICAgICAnX19tMTI4aScsXHJcbiAgICAgICAgJ19fbTI1NicsXHJcbiAgICAgICAgJ19fbTI1NmQnLFxyXG4gICAgICAgICdfX20yNTZpJyxcclxuICAgICAgICAnX19tNjQnLFxyXG4gICAgICAgICdfX211bHRpcGxlX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX19uZXdzbG90JyxcclxuICAgICAgICAnX19ub2djJyxcclxuICAgICAgICAnX19ub29wJyxcclxuICAgICAgICAnX19ub3Vud2luZCcsXHJcbiAgICAgICAgJ19fbm92dG9yZGlzcCcsXHJcbiAgICAgICAgJ19fcGFzY2FsJyxcclxuICAgICAgICAnX19waW4nLFxyXG4gICAgICAgICdfX3ByYWdtYScsXHJcbiAgICAgICAgJ19fcHJvcGVydHknLFxyXG4gICAgICAgICdfX3B0cjMyJyxcclxuICAgICAgICAnX19wdHI2NCcsXHJcbiAgICAgICAgJ19fcmFpc2UnLFxyXG4gICAgICAgICdfX3Jlc3RyaWN0JyxcclxuICAgICAgICAnX19yZXN1bWUnLFxyXG4gICAgICAgICdfX3NlYWxlZCcsXHJcbiAgICAgICAgJ19fc2luZ2xlX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX19zdGRjYWxsJyxcclxuICAgICAgICAnX19zdXBlcicsXHJcbiAgICAgICAgJ19fdGhpc2NhbGwnLFxyXG4gICAgICAgICdfX3RyeScsXHJcbiAgICAgICAgJ19fdHJ5X2Nhc3QnLFxyXG4gICAgICAgICdfX3R5cGVvZicsXHJcbiAgICAgICAgJ19fdW5hbGlnbmVkJyxcclxuICAgICAgICAnX191bmhvb2snLFxyXG4gICAgICAgICdfX3V1aWRvZicsXHJcbiAgICAgICAgJ19fdmFsdWUnLFxyXG4gICAgICAgICdfX3ZpcnR1YWxfaW5oZXJpdGFuY2UnLFxyXG4gICAgICAgICdfX3c2NCcsXHJcbiAgICAgICAgJ19fd2NoYXJfdCdcclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAnPScsXHJcbiAgICAgICAgJz4nLFxyXG4gICAgICAgICc8JyxcclxuICAgICAgICAnIScsXHJcbiAgICAgICAgJ34nLFxyXG4gICAgICAgICc/JyxcclxuICAgICAgICAnOicsXHJcbiAgICAgICAgJz09JyxcclxuICAgICAgICAnPD0nLFxyXG4gICAgICAgICc+PScsXHJcbiAgICAgICAgJyE9JyxcclxuICAgICAgICAnJiYnLFxyXG4gICAgICAgICd8fCcsXHJcbiAgICAgICAgJysrJyxcclxuICAgICAgICAnLS0nLFxyXG4gICAgICAgICcrJyxcclxuICAgICAgICAnLScsXHJcbiAgICAgICAgJyonLFxyXG4gICAgICAgICcvJyxcclxuICAgICAgICAnJicsXHJcbiAgICAgICAgJ3wnLFxyXG4gICAgICAgICdeJyxcclxuICAgICAgICAnJScsXHJcbiAgICAgICAgJzw8JyxcclxuICAgICAgICAnPj4nLFxyXG4gICAgICAgICc+Pj4nLFxyXG4gICAgICAgICcrPScsXHJcbiAgICAgICAgJy09JyxcclxuICAgICAgICAnKj0nLFxyXG4gICAgICAgICcvPScsXHJcbiAgICAgICAgJyY9JyxcclxuICAgICAgICAnfD0nLFxyXG4gICAgICAgICdePScsXHJcbiAgICAgICAgJyU9JyxcclxuICAgICAgICAnPDw9JyxcclxuICAgICAgICAnPj49JyxcclxuICAgICAgICAnPj4+PSdcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICBpbnRlZ2Vyc3VmZml4OiAvKGxsfExMfHV8VXxsfEwpPyhsbHxMTHx1fFV8bHxMKT8vLFxyXG4gICAgZmxvYXRzdWZmaXg6IC9bZkZsTF0/LyxcclxuICAgIGVuY29kaW5nOiAvdXx1OHxVfEwvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIEMrKyAxMSBSYXcgU3RyaW5nXHJcbiAgICAgICAgICAgIFsvQGVuY29kaW5nP1JcXFwiKD86KFteICgpXFxcXFxcdF0qKSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLnJhdy5iZWdpbicsIG5leHQ6ICdAcmF3LiQxJyB9XSxcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gVGhlIHByZXByb2Nlc3NvciBjaGVja3MgbXVzdCBiZSBiZWZvcmUgd2hpdGVzcGFjZSBhcyB0aGV5IGNoZWNrIC9eXFxzKiMvIHdoaWNoXHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWlscyB0byBtYXRjaCBsYXRlciBhZnRlciBvdGhlciB3aGl0ZXNwYWNlIGhhcyBiZWVuIHJlbW92ZWQuXHJcbiAgICAgICAgICAgIC8vIEluY2x1c2lvblxyXG4gICAgICAgICAgICBbL15cXHMqI1xccyppbmNsdWRlLywgeyB0b2tlbjogJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUnLCBuZXh0OiAnQGluY2x1ZGUnIH1dLFxyXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXHJcbiAgICAgICAgICAgIFsvXlxccyojXFxzKlxcdysvLCAna2V5d29yZC5kaXJlY3RpdmUnXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gW1sgYXR0cmlidXRlcyBdXS5cclxuICAgICAgICAgICAgWy9cXFtcXHMqXFxbLywgeyB0b2tlbjogJ2Fubm90YXRpb24nLCBuZXh0OiAnQGFubm90YXRpb24nIH1dLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUYnXSpbMC05YS1mQS1GXShAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbLzBbMC03J10qWzAtN10oQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuYmluYXJ5J10sXHJcbiAgICAgICAgICAgIFsvXFxkW1xcZCddKlxcZChAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvXFxkKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqXFwqKD8hXFwvKS8sICdjb21tZW50LmRvYycsICdAZG9jY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXHJcbiAgICAgICAgZG9jY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF3OiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oLiopKFxcKSkoPzooW14gKClcXFxcXFx0XCJdKikpKFxcXCIpLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDM9PSRTMic6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdHJpbmcucmF3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdHJpbmcucmF3LmVuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLnJhdy5lbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5yYXcuZW5kJywgbmV4dDogJ0Bwb3AnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWydzdHJpbmcucmF3JywgJ3N0cmluZy5yYXcnLCAnc3RyaW5nLnJhdycsICdzdHJpbmcucmF3J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvLiovLCAnc3RyaW5nLnJhdyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhbm5vdGF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICBbL3VzaW5nfGFsaWduYXMvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICBbL1thLXpBLVowLTlfXSsvLCAnYW5ub3RhdGlvbiddLFxyXG4gICAgICAgICAgICBbL1ssOl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWygpXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9cXF1cXHMqXFxdLywgeyB0b2tlbjogJ2Fubm90YXRpb24nLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhcXHMqKSg8KShbXjw+XSopKD4pLyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5iZWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmVuZCcsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oXFxzKikoXCIpKFteXCJdKikoXCIpLyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5iZWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmVuZCcsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=