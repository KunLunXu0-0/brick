(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[6587],{86587:(e,n,o)=>{"use strict";o.r(n),o.d(n,{conf:()=>t,language:()=>r});var t={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["var","end_var"],["var_input","end_var"],["var_output","end_var"],["var_in_out","end_var"],["var_temp","end_var"],["var_global","end_var"],["var_access","end_var"],["var_external","end_var"],["type","end_type"],["struct","end_struct"],["program","end_program"],["function","end_function"],["function_block","end_function_block"],["action","end_action"],["step","end_step"],["initial_step","end_step"],["transaction","end_transaction"],["configuration","end_configuration"],["tcp","end_tcp"],["recource","end_recource"],["channel","end_channel"],["library","end_library"],["folder","end_folder"],["binaries","end_binaries"],["includes","end_includes"],["sources","end_sources"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"/*",close:"*/"},{open:"'",close:"'",notIn:["string_sq"]},{open:'"',close:'"',notIn:["string_dq"]},{open:"var_input",close:"end_var"},{open:"var_output",close:"end_var"},{open:"var_in_out",close:"end_var"},{open:"var_temp",close:"end_var"},{open:"var_global",close:"end_var"},{open:"var_access",close:"end_var"},{open:"var_external",close:"end_var"},{open:"type",close:"end_type"},{open:"struct",close:"end_struct"},{open:"program",close:"end_program"},{open:"function",close:"end_function"},{open:"function_block",close:"end_function_block"},{open:"action",close:"end_action"},{open:"step",close:"end_step"},{open:"initial_step",close:"end_step"},{open:"transaction",close:"end_transaction"},{open:"configuration",close:"end_configuration"},{open:"tcp",close:"end_tcp"},{open:"recource",close:"end_recource"},{open:"channel",close:"end_channel"},{open:"library",close:"end_library"},{open:"folder",close:"end_folder"},{open:"binaries",close:"end_binaries"},{open:"includes",close:"end_includes"},{open:"sources",close:"end_sources"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"var",close:"end_var"},{open:"var_input",close:"end_var"},{open:"var_output",close:"end_var"},{open:"var_in_out",close:"end_var"},{open:"var_temp",close:"end_var"},{open:"var_global",close:"end_var"},{open:"var_access",close:"end_var"},{open:"var_external",close:"end_var"},{open:"type",close:"end_type"},{open:"struct",close:"end_struct"},{open:"program",close:"end_program"},{open:"function",close:"end_function"},{open:"function_block",close:"end_function_block"},{open:"action",close:"end_action"},{open:"step",close:"end_step"},{open:"initial_step",close:"end_step"},{open:"transaction",close:"end_transaction"},{open:"configuration",close:"end_configuration"},{open:"tcp",close:"end_tcp"},{open:"recource",close:"end_recource"},{open:"channel",close:"end_channel"},{open:"library",close:"end_library"},{open:"folder",close:"end_folder"},{open:"binaries",close:"end_binaries"},{open:"includes",close:"end_includes"},{open:"sources",close:"end_sources"}],folding:{markers:{start:new RegExp("^\\s*#pragma\\s+region\\b"),end:new RegExp("^\\s*#pragma\\s+endregion\\b")}}},r={defaultToken:"",tokenPostfix:".st",ignoreCase:!0,brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","end_if","elsif","else","case","of","to","__try","__catch","__finally","do","with","by","while","repeat","end_while","end_repeat","end_case","for","end_for","task","retain","non_retain","constant","with","at","exit","return","interval","priority","address","port","on_channel","then","iec","file","uses","version","packagetype","displayname","copyright","summary","vendor","common_source","from","extends"],constant:["false","true","null"],defineKeywords:["var","var_input","var_output","var_in_out","var_temp","var_global","var_access","var_external","end_var","type","end_type","struct","end_struct","program","end_program","function","end_function","function_block","end_function_block","interface","end_interface","method","end_method","property","end_property","namespace","end_namespace","configuration","end_configuration","tcp","end_tcp","resource","end_resource","channel","end_channel","library","end_library","folder","end_folder","binaries","end_binaries","includes","end_includes","sources","end_sources","action","end_action","step","initial_step","end_step","transaction","end_transaction"],typeKeywords:["int","sint","dint","lint","usint","uint","udint","ulint","real","lreal","time","date","time_of_day","date_and_time","string","bool","byte","word","dword","array","pointer","lword"],operators:["=",">","<",":",":=","<=",">=","<>","&","+","-","*","**","MOD","^","or","and","not","xor","abs","acos","asin","atan","cos","exp","expt","ln","log","sin","sqrt","tan","sel","max","min","limit","mux","shl","shr","rol","ror","indexof","sizeof","adr","adrinst","bitadr","is_valid","ref","ref_to"],builtinVariables:[],builtinFunctions:["sr","rs","tp","ton","tof","eq","ge","le","lt","ne","round","trunc","ctd","сtu","ctud","r_trig","f_trig","move","concat","delete","find","insert","left","len","replace","right","rtc"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/(\.\.)/,"delimiter"],[/\b(16#[0-9A-Fa-f\_]*)+\b/,"number.hex"],[/\b(2#[01\_]+)+\b/,"number.binary"],[/\b(8#[0-9\_]*)+\b/,"number.octal"],[/\b\d*\.\d+([eE][\-+]?\d+)?\b/,"number.float"],[/\b(L?REAL)#[0-9\_\.e]+\b/,"number.float"],[/\b(BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT)#[0-9\_]+\b/,"number"],[/\d+/,"number"],[/\b(T|DT|TOD)#[0-9:-_shmyd]+\b/,"tag"],[/\%(I|Q|M)(X|B|W|D|L)[0-9\.]+/,"tag"],[/\%(I|Q|M)[0-9\.]*/,"tag"],[/\b[A-Za-z]{1,6}#[0-9]+\b/,"tag"],[/\b(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]+\b/,"predefined"],[/\b[A_Za-z]+(_TO_)[A_Za-z]+\b/,"predefined"],[/[;]/,"delimiter"],[/[.]/,{token:"delimiter",next:"@params"}],[/[a-zA-Z_]\w*/,{cases:{"@operators":"operators","@keywords":"keyword","@typeKeywords":"type","@defineKeywords":"variable","@constant":"constant","@builtinVariables":"predefined","@builtinFunctions":"predefined","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string_dq"}],[/'/,{token:"string.quote",bracket:"@open",next:"@string_sq"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],params:[[/\b[A-Za-z0-9_]+\b(?=\()/,{token:"identifier",next:"@pop"}],[/\b[A-Za-z0-9_]+\b/,"variable.name","@pop"]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],comment2:[[/[^\(*]+/,"comment"],[/\(\*/,"comment","@push"],["\\*\\)","comment","@pop"],[/[\(*]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\/.*$/,"comment"],[/\/\*/,"comment","@comment"],[/\(\*/,"comment","@comment2"]],string_dq:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],string_sq:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zdC9zdC5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbiIsImtleXdvcmRzIiwiY29uc3RhbnQiLCJkZWZpbmVLZXl3b3JkcyIsInR5cGVLZXl3b3JkcyIsIm9wZXJhdG9ycyIsImJ1aWx0aW5WYXJpYWJsZXMiLCJidWlsdGluRnVuY3Rpb25zIiwic3ltYm9scyIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwibmV4dCIsImNhc2VzIiwiaW5jbHVkZSIsImJyYWNrZXQiLCJwYXJhbXMiLCJjb21tZW50IiwiY29tbWVudDIiLCJ3aGl0ZXNwYWNlIiwic3RyaW5nX2RxIiwic3RyaW5nX3NxIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsS0FDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLE1BQU8sV0FDUixDQUFDLFlBQWEsV0FDZCxDQUFDLGFBQWMsV0FDZixDQUFDLGFBQWMsV0FDZixDQUFDLFdBQVksV0FDYixDQUFDLGFBQWMsV0FDZixDQUFDLGFBQWMsV0FDZixDQUFDLGVBQWdCLFdBQ2pCLENBQUMsT0FBUSxZQUNULENBQUMsU0FBVSxjQUNYLENBQUMsVUFBVyxlQUNaLENBQUMsV0FBWSxnQkFDYixD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LFVBQVcsQ0FDUCxDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsSUFBSyxDQUFFckIsTUFBTyxlQUFnQmUsUUFBUyxTQUFVSCxLQUFNIiwiZmlsZSI6ImpzLzY1ODcuZTZlY2MyMWVlMzI4NjU0ZmQwMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsndmFyJywgJ2VuZF92YXInXSxcclxuICAgICAgICBbJ3Zhcl9pbnB1dCcsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd2YXJfb3V0cHV0JywgJ2VuZF92YXInXSxcclxuICAgICAgICBbJ3Zhcl9pbl9vdXQnLCAnZW5kX3ZhciddLFxyXG4gICAgICAgIFsndmFyX3RlbXAnLCAnZW5kX3ZhciddLFxyXG4gICAgICAgIFsndmFyX2dsb2JhbCcsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd2YXJfYWNjZXNzJywgJ2VuZF92YXInXSxcclxuICAgICAgICBbJ3Zhcl9leHRlcm5hbCcsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd0eXBlJywgJ2VuZF90eXBlJ10sXHJcbiAgICAgICAgWydzdHJ1Y3QnLCAnZW5kX3N0cnVjdCddLFxyXG4gICAgICAgIFsncHJvZ3JhbScsICdlbmRfcHJvZ3JhbSddLFxyXG4gICAgICAgIFsnZnVuY3Rpb24nLCAnZW5kX2Z1bmN0aW9uJ10sXHJcbiAgICAgICAgWydmdW5jdGlvbl9ibG9jaycsICdlbmRfZnVuY3Rpb25fYmxvY2snXSxcclxuICAgICAgICBbJ2FjdGlvbicsICdlbmRfYWN0aW9uJ10sXHJcbiAgICAgICAgWydzdGVwJywgJ2VuZF9zdGVwJ10sXHJcbiAgICAgICAgWydpbml0aWFsX3N0ZXAnLCAnZW5kX3N0ZXAnXSxcclxuICAgICAgICBbJ3RyYW5zYWN0aW9uJywgJ2VuZF90cmFuc2FjdGlvbiddLFxyXG4gICAgICAgIFsnY29uZmlndXJhdGlvbicsICdlbmRfY29uZmlndXJhdGlvbiddLFxyXG4gICAgICAgIFsndGNwJywgJ2VuZF90Y3AnXSxcclxuICAgICAgICBbJ3JlY291cmNlJywgJ2VuZF9yZWNvdXJjZSddLFxyXG4gICAgICAgIFsnY2hhbm5lbCcsICdlbmRfY2hhbm5lbCddLFxyXG4gICAgICAgIFsnbGlicmFyeScsICdlbmRfbGlicmFyeSddLFxyXG4gICAgICAgIFsnZm9sZGVyJywgJ2VuZF9mb2xkZXInXSxcclxuICAgICAgICBbJ2JpbmFyaWVzJywgJ2VuZF9iaW5hcmllcyddLFxyXG4gICAgICAgIFsnaW5jbHVkZXMnLCAnZW5kX2luY2x1ZGVzJ10sXHJcbiAgICAgICAgWydzb3VyY2VzJywgJ2VuZF9zb3VyY2VzJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnLyonLCBjbG9zZTogJyovJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nX3NxJ10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmdfZHEnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9pbnB1dCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfb3V0cHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9pbl9vdXQnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX3RlbXAnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX2dsb2JhbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfYWNjZXNzJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9leHRlcm5hbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd0eXBlJywgY2xvc2U6ICdlbmRfdHlwZScgfSxcclxuICAgICAgICB7IG9wZW46ICdzdHJ1Y3QnLCBjbG9zZTogJ2VuZF9zdHJ1Y3QnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAncHJvZ3JhbScsIGNsb3NlOiAnZW5kX3Byb2dyYW0nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZF9mdW5jdGlvbicgfSxcclxuICAgICAgICB7IG9wZW46ICdmdW5jdGlvbl9ibG9jaycsIGNsb3NlOiAnZW5kX2Z1bmN0aW9uX2Jsb2NrJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2FjdGlvbicsIGNsb3NlOiAnZW5kX2FjdGlvbicgfSxcclxuICAgICAgICB7IG9wZW46ICdzdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcclxuICAgICAgICB7IG9wZW46ICdpbml0aWFsX3N0ZXAnLCBjbG9zZTogJ2VuZF9zdGVwJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3RyYW5zYWN0aW9uJywgY2xvc2U6ICdlbmRfdHJhbnNhY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnY29uZmlndXJhdGlvbicsIGNsb3NlOiAnZW5kX2NvbmZpZ3VyYXRpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndGNwJywgY2xvc2U6ICdlbmRfdGNwJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3JlY291cmNlJywgY2xvc2U6ICdlbmRfcmVjb3VyY2UnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnY2hhbm5lbCcsIGNsb3NlOiAnZW5kX2NoYW5uZWwnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnbGlicmFyeScsIGNsb3NlOiAnZW5kX2xpYnJhcnknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZm9sZGVyJywgY2xvc2U6ICdlbmRfZm9sZGVyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2JpbmFyaWVzJywgY2xvc2U6ICdlbmRfYmluYXJpZXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnaW5jbHVkZXMnLCBjbG9zZTogJ2VuZF9pbmNsdWRlcycgfSxcclxuICAgICAgICB7IG9wZW46ICdzb3VyY2VzJywgY2xvc2U6ICdlbmRfc291cmNlcycgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9pbnB1dCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfb3V0cHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9pbl9vdXQnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX3RlbXAnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX2dsb2JhbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfYWNjZXNzJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9leHRlcm5hbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd0eXBlJywgY2xvc2U6ICdlbmRfdHlwZScgfSxcclxuICAgICAgICB7IG9wZW46ICdzdHJ1Y3QnLCBjbG9zZTogJ2VuZF9zdHJ1Y3QnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAncHJvZ3JhbScsIGNsb3NlOiAnZW5kX3Byb2dyYW0nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZF9mdW5jdGlvbicgfSxcclxuICAgICAgICB7IG9wZW46ICdmdW5jdGlvbl9ibG9jaycsIGNsb3NlOiAnZW5kX2Z1bmN0aW9uX2Jsb2NrJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2FjdGlvbicsIGNsb3NlOiAnZW5kX2FjdGlvbicgfSxcclxuICAgICAgICB7IG9wZW46ICdzdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcclxuICAgICAgICB7IG9wZW46ICdpbml0aWFsX3N0ZXAnLCBjbG9zZTogJ2VuZF9zdGVwJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3RyYW5zYWN0aW9uJywgY2xvc2U6ICdlbmRfdHJhbnNhY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnY29uZmlndXJhdGlvbicsIGNsb3NlOiAnZW5kX2NvbmZpZ3VyYXRpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndGNwJywgY2xvc2U6ICdlbmRfdGNwJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3JlY291cmNlJywgY2xvc2U6ICdlbmRfcmVjb3VyY2UnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnY2hhbm5lbCcsIGNsb3NlOiAnZW5kX2NoYW5uZWwnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnbGlicmFyeScsIGNsb3NlOiAnZW5kX2xpYnJhcnknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZm9sZGVyJywgY2xvc2U6ICdlbmRfZm9sZGVyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2JpbmFyaWVzJywgY2xvc2U6ICdlbmRfYmluYXJpZXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnaW5jbHVkZXMnLCBjbG9zZTogJ2VuZF9pbmNsdWRlcycgfSxcclxuICAgICAgICB7IG9wZW46ICdzb3VyY2VzJywgY2xvc2U6ICdlbmRfc291cmNlcycgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI3ByYWdtYVxcXFxzK3JlZ2lvblxcXFxiJyksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNwcmFnbWFcXFxccytlbmRyZWdpb25cXFxcYicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5zdCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2VuZF9pZicsXHJcbiAgICAgICAgJ2Vsc2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2Nhc2UnLFxyXG4gICAgICAgICdvZicsXHJcbiAgICAgICAgJ3RvJyxcclxuICAgICAgICAnX190cnknLFxyXG4gICAgICAgICdfX2NhdGNoJyxcclxuICAgICAgICAnX19maW5hbGx5JyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICd3aXRoJyxcclxuICAgICAgICAnYnknLFxyXG4gICAgICAgICd3aGlsZScsXHJcbiAgICAgICAgJ3JlcGVhdCcsXHJcbiAgICAgICAgJ2VuZF93aGlsZScsXHJcbiAgICAgICAgJ2VuZF9yZXBlYXQnLFxyXG4gICAgICAgICdlbmRfY2FzZScsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2VuZF9mb3InLFxyXG4gICAgICAgICd0YXNrJyxcclxuICAgICAgICAncmV0YWluJyxcclxuICAgICAgICAnbm9uX3JldGFpbicsXHJcbiAgICAgICAgJ2NvbnN0YW50JyxcclxuICAgICAgICAnd2l0aCcsXHJcbiAgICAgICAgJ2F0JyxcclxuICAgICAgICAnZXhpdCcsXHJcbiAgICAgICAgJ3JldHVybicsXHJcbiAgICAgICAgJ2ludGVydmFsJyxcclxuICAgICAgICAncHJpb3JpdHknLFxyXG4gICAgICAgICdhZGRyZXNzJyxcclxuICAgICAgICAncG9ydCcsXHJcbiAgICAgICAgJ29uX2NoYW5uZWwnLFxyXG4gICAgICAgICd0aGVuJyxcclxuICAgICAgICAnaWVjJyxcclxuICAgICAgICAnZmlsZScsXHJcbiAgICAgICAgJ3VzZXMnLFxyXG4gICAgICAgICd2ZXJzaW9uJyxcclxuICAgICAgICAncGFja2FnZXR5cGUnLFxyXG4gICAgICAgICdkaXNwbGF5bmFtZScsXHJcbiAgICAgICAgJ2NvcHlyaWdodCcsXHJcbiAgICAgICAgJ3N1bW1hcnknLFxyXG4gICAgICAgICd2ZW5kb3InLFxyXG4gICAgICAgICdjb21tb25fc291cmNlJyxcclxuICAgICAgICAnZnJvbScsXHJcbiAgICAgICAgJ2V4dGVuZHMnXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IFsnZmFsc2UnLCAndHJ1ZScsICdudWxsJ10sXHJcbiAgICBkZWZpbmVLZXl3b3JkczogW1xyXG4gICAgICAgICd2YXInLFxyXG4gICAgICAgICd2YXJfaW5wdXQnLFxyXG4gICAgICAgICd2YXJfb3V0cHV0JyxcclxuICAgICAgICAndmFyX2luX291dCcsXHJcbiAgICAgICAgJ3Zhcl90ZW1wJyxcclxuICAgICAgICAndmFyX2dsb2JhbCcsXHJcbiAgICAgICAgJ3Zhcl9hY2Nlc3MnLFxyXG4gICAgICAgICd2YXJfZXh0ZXJuYWwnLFxyXG4gICAgICAgICdlbmRfdmFyJyxcclxuICAgICAgICAndHlwZScsXHJcbiAgICAgICAgJ2VuZF90eXBlJyxcclxuICAgICAgICAnc3RydWN0JyxcclxuICAgICAgICAnZW5kX3N0cnVjdCcsXHJcbiAgICAgICAgJ3Byb2dyYW0nLFxyXG4gICAgICAgICdlbmRfcHJvZ3JhbScsXHJcbiAgICAgICAgJ2Z1bmN0aW9uJyxcclxuICAgICAgICAnZW5kX2Z1bmN0aW9uJyxcclxuICAgICAgICAnZnVuY3Rpb25fYmxvY2snLFxyXG4gICAgICAgICdlbmRfZnVuY3Rpb25fYmxvY2snLFxyXG4gICAgICAgICdpbnRlcmZhY2UnLFxyXG4gICAgICAgICdlbmRfaW50ZXJmYWNlJyxcclxuICAgICAgICAnbWV0aG9kJyxcclxuICAgICAgICAnZW5kX21ldGhvZCcsXHJcbiAgICAgICAgJ3Byb3BlcnR5JyxcclxuICAgICAgICAnZW5kX3Byb3BlcnR5JyxcclxuICAgICAgICAnbmFtZXNwYWNlJyxcclxuICAgICAgICAnZW5kX25hbWVzcGFjZScsXHJcbiAgICAgICAgJ2NvbmZpZ3VyYXRpb24nLFxyXG4gICAgICAgICdlbmRfY29uZmlndXJhdGlvbicsXHJcbiAgICAgICAgJ3RjcCcsXHJcbiAgICAgICAgJ2VuZF90Y3AnLFxyXG4gICAgICAgICdyZXNvdXJjZScsXHJcbiAgICAgICAgJ2VuZF9yZXNvdXJjZScsXHJcbiAgICAgICAgJ2NoYW5uZWwnLFxyXG4gICAgICAgICdlbmRfY2hhbm5lbCcsXHJcbiAgICAgICAgJ2xpYnJhcnknLFxyXG4gICAgICAgICdlbmRfbGlicmFyeScsXHJcbiAgICAgICAgJ2ZvbGRlcicsXHJcbiAgICAgICAgJ2VuZF9mb2xkZXInLFxyXG4gICAgICAgICdiaW5hcmllcycsXHJcbiAgICAgICAgJ2VuZF9iaW5hcmllcycsXHJcbiAgICAgICAgJ2luY2x1ZGVzJyxcclxuICAgICAgICAnZW5kX2luY2x1ZGVzJyxcclxuICAgICAgICAnc291cmNlcycsXHJcbiAgICAgICAgJ2VuZF9zb3VyY2VzJyxcclxuICAgICAgICAnYWN0aW9uJyxcclxuICAgICAgICAnZW5kX2FjdGlvbicsXHJcbiAgICAgICAgJ3N0ZXAnLFxyXG4gICAgICAgICdpbml0aWFsX3N0ZXAnLFxyXG4gICAgICAgICdlbmRfc3RlcCcsXHJcbiAgICAgICAgJ3RyYW5zYWN0aW9uJyxcclxuICAgICAgICAnZW5kX3RyYW5zYWN0aW9uJ1xyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogW1xyXG4gICAgICAgICdpbnQnLFxyXG4gICAgICAgICdzaW50JyxcclxuICAgICAgICAnZGludCcsXHJcbiAgICAgICAgJ2xpbnQnLFxyXG4gICAgICAgICd1c2ludCcsXHJcbiAgICAgICAgJ3VpbnQnLFxyXG4gICAgICAgICd1ZGludCcsXHJcbiAgICAgICAgJ3VsaW50JyxcclxuICAgICAgICAncmVhbCcsXHJcbiAgICAgICAgJ2xyZWFsJyxcclxuICAgICAgICAndGltZScsXHJcbiAgICAgICAgJ2RhdGUnLFxyXG4gICAgICAgICd0aW1lX29mX2RheScsXHJcbiAgICAgICAgJ2RhdGVfYW5kX3RpbWUnLFxyXG4gICAgICAgICdzdHJpbmcnLFxyXG4gICAgICAgICdib29sJyxcclxuICAgICAgICAnYnl0ZScsXHJcbiAgICAgICAgJ3dvcmQnLFxyXG4gICAgICAgICdkd29yZCcsXHJcbiAgICAgICAgJ2FycmF5JyxcclxuICAgICAgICAncG9pbnRlcicsXHJcbiAgICAgICAgJ2x3b3JkJ1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JyxcclxuICAgICAgICAnPicsXHJcbiAgICAgICAgJzwnLFxyXG4gICAgICAgICc6JyxcclxuICAgICAgICAnOj0nLFxyXG4gICAgICAgICc8PScsXHJcbiAgICAgICAgJz49JyxcclxuICAgICAgICAnPD4nLFxyXG4gICAgICAgICcmJyxcclxuICAgICAgICAnKycsXHJcbiAgICAgICAgJy0nLFxyXG4gICAgICAgICcqJyxcclxuICAgICAgICAnKionLFxyXG4gICAgICAgICdNT0QnLFxyXG4gICAgICAgICdeJyxcclxuICAgICAgICAnb3InLFxyXG4gICAgICAgICdhbmQnLFxyXG4gICAgICAgICdub3QnLFxyXG4gICAgICAgICd4b3InLFxyXG4gICAgICAgICdhYnMnLFxyXG4gICAgICAgICdhY29zJyxcclxuICAgICAgICAnYXNpbicsXHJcbiAgICAgICAgJ2F0YW4nLFxyXG4gICAgICAgICdjb3MnLFxyXG4gICAgICAgICdleHAnLFxyXG4gICAgICAgICdleHB0JyxcclxuICAgICAgICAnbG4nLFxyXG4gICAgICAgICdsb2cnLFxyXG4gICAgICAgICdzaW4nLFxyXG4gICAgICAgICdzcXJ0JyxcclxuICAgICAgICAndGFuJyxcclxuICAgICAgICAnc2VsJyxcclxuICAgICAgICAnbWF4JyxcclxuICAgICAgICAnbWluJyxcclxuICAgICAgICAnbGltaXQnLFxyXG4gICAgICAgICdtdXgnLFxyXG4gICAgICAgICdzaGwnLFxyXG4gICAgICAgICdzaHInLFxyXG4gICAgICAgICdyb2wnLFxyXG4gICAgICAgICdyb3InLFxyXG4gICAgICAgICdpbmRleG9mJyxcclxuICAgICAgICAnc2l6ZW9mJyxcclxuICAgICAgICAnYWRyJyxcclxuICAgICAgICAnYWRyaW5zdCcsXHJcbiAgICAgICAgJ2JpdGFkcicsXHJcbiAgICAgICAgJ2lzX3ZhbGlkJyxcclxuICAgICAgICAncmVmJyxcclxuICAgICAgICAncmVmX3RvJ1xyXG4gICAgXSxcclxuICAgIGJ1aWx0aW5WYXJpYWJsZXM6IFtdLFxyXG4gICAgYnVpbHRpbkZ1bmN0aW9uczogW1xyXG4gICAgICAgICdzcicsXHJcbiAgICAgICAgJ3JzJyxcclxuICAgICAgICAndHAnLFxyXG4gICAgICAgICd0b24nLFxyXG4gICAgICAgICd0b2YnLFxyXG4gICAgICAgICdlcScsXHJcbiAgICAgICAgJ2dlJyxcclxuICAgICAgICAnbGUnLFxyXG4gICAgICAgICdsdCcsXHJcbiAgICAgICAgJ25lJyxcclxuICAgICAgICAncm91bmQnLFxyXG4gICAgICAgICd0cnVuYycsXHJcbiAgICAgICAgJ2N0ZCcsXHJcbiAgICAgICAgJ9GBdHUnLFxyXG4gICAgICAgICdjdHVkJyxcclxuICAgICAgICAncl90cmlnJyxcclxuICAgICAgICAnZl90cmlnJyxcclxuICAgICAgICAnbW92ZScsXHJcbiAgICAgICAgJ2NvbmNhdCcsXHJcbiAgICAgICAgJ2RlbGV0ZScsXHJcbiAgICAgICAgJ2ZpbmQnLFxyXG4gICAgICAgICdpbnNlcnQnLFxyXG4gICAgICAgICdsZWZ0JyxcclxuICAgICAgICAnbGVuJyxcclxuICAgICAgICAncmVwbGFjZScsXHJcbiAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICAncnRjJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gQyMgc3R5bGUgc3RyaW5nc1xyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbLyhcXC5cXC4pLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1xcYigxNiNbMC05QS1GYS1mXFxfXSopK1xcYi8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxiKDIjWzAxXFxfXSspK1xcYi8sICdudW1iZXIuYmluYXJ5J10sXHJcbiAgICAgICAgICAgIFsvXFxiKDgjWzAtOVxcX10qKStcXGIvLCAnbnVtYmVyLm9jdGFsJ10sXHJcbiAgICAgICAgICAgIFsvXFxiXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT9cXGIvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxiKEw/UkVBTCkjWzAtOVxcX1xcLmVdK1xcYi8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXGIoQllURXwoPzpEfEwpP1dPUkR8VT8oPzpTfER8TCk/SU5UKSNbMC05XFxfXStcXGIvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy9cXGIoVHxEVHxUT0QpI1swLTk6LV9zaG15ZF0rXFxiLywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbL1xcJShJfFF8TSkoWHxCfFd8RHxMKVswLTlcXC5dKy8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9cXCUoSXxRfE0pWzAtOVxcLl0qLywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbL1xcYltBLVphLXpdezEsNn0jWzAtOV0rXFxiLywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbL1xcYihUT198Q1RVX3xDVERffENUVURffE1VWF98U0VMXylbQV9aYS16XStcXGIvLCAncHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbL1xcYltBX1phLXpdKyhfVE9fKVtBX1phLXpdK1xcYi8sICdwcmVkZWZpbmVkJ10sXHJcbiAgICAgICAgICAgIFsvWztdLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1suXS8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBhcmFtcycgfV0sXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3JzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmaW5lS2V5d29yZHMnOiAndmFyaWFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGNvbnN0YW50JzogJ2NvbnN0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluVmFyaWFibGVzJzogJ3ByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5GdW5jdGlvbnMnOiAncHJlZGVmaW5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nX2RxJyB9XSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nX3NxJyB9XSxcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICBbL1xcYltBLVphLXowLTlfXStcXGIoPz1cXCgpLywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvXFxiW0EtWmEtejAtOV9dK1xcYi8sICd2YXJpYWJsZS5uYW1lJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxyXG4gICAgICAgICAgICBbJ1xcXFwqLycsICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50MjogW1xyXG4gICAgICAgICAgICBbL1teXFwoKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxyXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXCknLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcKCpdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ19kcTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ19zcTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9