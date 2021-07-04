(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[1886],{81886:(e,n,i)=>{"use strict";i.r(n),i.d(n,{conf:()=>t,language:()=>r});var t={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"],["begin","end"],["case","endcase"],["casex","endcase"],["casez","endcase"],["checker","endchecker"],["class","endclass"],["clocking","endclocking"],["config","endconfig"],["function","endfunction"],["generate","endgenerate"],["group","endgroup"],["interface","endinterface"],["module","endmodule"],["package","endpackage"],["primitive","endprimitive"],["program","endprogram"],["property","endproperty"],["specify","endspecify"],["sequence","endsequence"],["table","endtable"],["task","endtask"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:!1,markers:{start:new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b"),end:new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b")}}},r={defaultToken:"",tokenPostfix:".sv",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["accept_on","alias","always","always_comb","always_ff","always_latch","and","assert","assign","assume","automatic","before","begin","bind","bins","binsof","bit","break","buf","bufif0","bufif1","byte","case","casex","casez","cell","chandle","checker","class","clocking","cmos","config","const","constraint","context","continue","cover","covergroup","coverpoint","cross","deassign","default","defparam","design","disable","dist","do","edge","else","end","endcase","endchecker","endclass","endclocking","endconfig","endfunction","endgenerate","endgroup","endinterface","endmodule","endpackage","endprimitive","endprogram","endproperty","endspecify","endsequence","endtable","endtask","enum","event","eventually","expect","export","extends","extern","final","first_match","for","force","foreach","forever","fork","forkjoin","function","generate","genvar","global","highz0","highz1","if","iff","ifnone","ignore_bins","illegal_bins","implements","implies","import","incdir","include","initial","inout","input","inside","instance","int","integer","interconnect","interface","intersect","join","join_any","join_none","large","let","liblist","library","local","localparam","logic","longint","macromodule","matches","medium","modport","module","nand","negedge","nettype","new","nexttime","nmos","nor","noshowcancelled","not","notif0","notif1","null","or","output","package","packed","parameter","pmos","posedge","primitive","priority","program","property","protected","pull0","pull1","pulldown","pullup","pulsestyle_ondetect","pulsestyle_onevent","pure","rand","randc","randcase","randsequence","rcmos","real","realtime","ref","reg","reject_on","release","repeat","restrict","return","rnmos","rpmos","rtran","rtranif0","rtranif1","s_always","s_eventually","s_nexttime","s_until","s_until_with","scalared","sequence","shortint","shortreal","showcancelled","signed","small","soft","solve","specify","specparam","static","string","strong","strong0","strong1","struct","super","supply0","supply1","sync_accept_on","sync_reject_on","table","tagged","task","this","throughout","time","timeprecision","timeunit","tran","tranif0","tranif1","tri","tri0","tri1","triand","trior","trireg","type","typedef","union","unique","unique0","unsigned","until","until_with","untyped","use","uwire","var","vectored","virtual","void","wait","wait_order","wand","weak","weak0","weak1","while","wildcard","wire","with","within","wor","xnor","xor"],builtin_gates:["and","nand","nor","or","xor","xnor","buf","not","bufif0","bufif1","notif1","notif0","cmos","nmos","pmos","rcmos","rnmos","rpmos","tran","tranif1","tranif0","rtran","rtranif1","rtranif0"],operators:["=","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>+","<<<=",">>>=","?",":","+","-","!","~","&","~&","|","~|","^","~^","^~","+","-","*","/","%","==","!=","===","!==","==?","!=?","&&","||","**","<","<=",">",">=","&","|","^",">>","<<",">>>","<<<","++","--","->","<->","inside","dist","::","+:","-:","*>","&&&","|->","|=>","#=#"],symbols:/[=><!~?:&|+\-*\/\^%#]+/,escapes:/%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,identifier:/(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,systemcall:/[$][a-zA-Z0-9_]+/,timeunits:/s|ms|us|ns|ps|fs/,tokenizer:{root:[[/^(\s*)(@identifier)/,["",{cases:{"@builtin_gates":{token:"keyword.$2",next:"@module_instance"},"@keywords":{token:"keyword.$2"},"@default":{token:"identifier",next:"@module_instance"}}}]],[/^\s*`include/,{token:"keyword.directive.include",next:"@include"}],[/^\s*`\s*\w+/,"keyword"],{include:"@identifier_or_keyword"},{include:"@whitespace"},[/\(\*.*\*\)/,"annotation"],[/@systemcall/,"variable.predefined"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],{include:"@numbers"},[/[;,.]/,"delimiter"],{include:"@strings"}],identifier_or_keyword:[[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}]],numbers:[[/\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/,"number.float"],[/\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/,"number.float"],[/(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/,"number"],[/(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/,"number.binary"],[/(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/,"number.octal"],[/(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/,"number.hex"],[/1step/,"number"],[/[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/,"number"],[/'[01xXzZ]+/,"number"]],module_instance:[{include:"@whitespace"},[/(#?)(\()/,["",{token:"@brackets",next:"@port_connection"}]],[/@identifier\s*[;={}\[\],]/,{token:"@rematch",next:"@pop"}],[/@symbols|[;={}\[\],]/,{token:"@rematch",next:"@pop"}],[/@identifier/,"type"],[/;/,"delimiter","@pop"]],port_connection:[{include:"@identifier_or_keyword"},{include:"@whitespace"},[/@systemcall/,"variable.predefined"],{include:"@numbers"},{include:"@strings"},[/[,]/,"delimiter"],[/\(/,"@brackets","@port_connection"],[/\)/,"@brackets","@pop"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],strings:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],include:[[/(\s*)(")([\w*\/*]*)(.\w*)(")/,["","string.include.identifier","string.include.identifier","string.include.identifier",{token:"string.include.identifier",next:"@pop"}]],[/(\s*)(<)([\w*\/*]*)(.\w*)(>)/,["","string.include.identifier","string.include.identifier","string.include.identifier",{token:"string.include.identifier",next:"@pop"}]]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zeXN0ZW12ZXJpbG9nL3N5c3RlbXZlcmlsb2cuanMiXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwib2ZmU2lkZSIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsImJ1aWx0aW5fZ2F0ZXMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsImlkZW50aWZpZXIiLCJzeXN0ZW1jYWxsIiwidGltZXVuaXRzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwibmV4dCIsImluY2x1ZGUiLCJpZGVudGlmaWVyX29yX2tleXdvcmQiLCJudW1iZXJzIiwibW9kdWxlX2luc3RhbmNlIiwicG9ydF9jb25uZWN0aW9uIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJzdHJpbmdzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoidUlBSU8sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsS0FDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLFFBQVMsT0FDVixDQUFDLE9BQVEsV0FDVCxDQUFDLFFBQVMsV0FDVixDQUFDLFFBQVMsV0FDVixDQUFDLFVBQVcsY0FDWixDQUFDLFFBQVMsWUFDVixDQUFDLFdBQVksZUFDYixDQUFDLFNBQVUsYUFDWCxDQUFDLFdBQVksZUFDYixDQUFDLFdBQVksZUFDYixDQUFDLFFBQVMsWUFDVixDQUFDLFlBQWEsZ0JBQ2QsQ0FBQyxTQUFVLGFBQ1gsQ0FBQyxVQUFXLGNBQ1osQ0FBQyxZQUFhLGdCQUNkLENBQUMsVUFBVyxjQUNaLENBQUMsV0FBWSxlQUNiLENBQUMsVUFBVyxjQUNaLENBQUMsV0FBWSxlQUNiLENBQUMsUUFBUyxZQUNWLENBQUMsT0FBUSxZQUViQyxpQkFBa0IsQ0FDZCxDQUFFQyxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxZQUVyQ0MsaUJBQWtCLENBQ2QsQ0FBRUgsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkcsUUFBUyxDQUNMQyxTQUFTLEVBQ1RDLFFBQVMsQ0FDTEMsTUFBTyxJQUFJQyxPQUFPLCtMQUNsQkMsSUFBSyxJQUFJRCxPQUFPLHdPQUlqQkUsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLE1BQ2RkLFNBQVUsQ0FDTixDQUFFZSxNQUFPLGtCQUFtQmIsS0FBTSxJQUFLQyxNQUFPLEtBQzlDLENBQUVZLE1BQU8sd0JBQXlCYixLQUFNLElBQUtDLE1BQU8sS0FDcEQsQ0FBRVksTUFBTyxtQkFBb0JiLEtBQU0sSUFBS0MsTUFBTyxLQUMvQyxDQUFFWSxNQUFPLGtCQUFtQmIsS0FBTSxJQUFLQyxNQUFPLE1BRWxEYSxTQUFVLENBQ04sWUFDQSxRQUNBLFNBQ0EsY0FDQSxZQUNBLGVBQ0EsTUFDQSxTQUNBLFNBQ0EsU0FDQSxZQUNBLFNBQ0EsUUFDQSxPQUNBLE9BQ0EsU0FDQSxNQUNBLFFBQ0EsTUFDQSxTQUNBLFNBQ0EsT0FDQSxPQUNBLFFBQ0EsUUFDQSxPQUNBLFVBQ0EsVUFDQSxRQUNBLFdBQ0EsT0FDQSxTQUNBLFFBQ0EsYUFDQSxVQUNBLFdBQ0EsUUFDQSxhQUNBLGFBQ0EsUUFDQSxXQUNBLFVBQ0EsV0FDQSxTQUNBLFVBQ0EsT0FDQSxLQUNBLE9BQ0EsT0FDQSxNQUNBLFVBQ0EsYUFDQSxXQUNBLGNBQ0EsWUFDQSxjQUNBLGNBQ0EsV0FDQSxlQUNBLFlBQ0EsYUFDQSxlQUNBLGFBQ0EsY0FDQSxhQUNBLGNBQ0EsV0FDQSxVQUNBLE9BQ0EsUUFDQSxhQUNBLFNBQ0EsU0FDQSxVQUNBLFNBQ0EsUUFDQSxjQUNBLE1BQ0EsUUFDQSxVQUNBLFVBQ0EsT0FDQSxXQUNBLFdBQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxTQUNBLEtBQ0EsTUFDQSxTQUNBLGNBQ0EsZUFDQSxhQUNBLFVBQ0EsU0FDQSxTQUNBLFVBQ0EsVUFDQSxRQUNBLFFBQ0EsU0FDQSxXQUNBLE1BQ0EsVUFDQSxlQUNBLFlBQ0EsWUFDQSxPQUNBLFdBQ0EsWUFDQSxRQUNBLE1BQ0EsVUFDQSxVQUNBLFFBQ0EsYUFDQSxRQUNBLFVBQ0EsY0FDQSxVQUNBLFNBQ0EsVUFDQSxTQUNBLE9BQ0EsVUFDQSxVQUNBLE1BQ0EsV0FDQSxPQUNBLE1BQ0Esa0JBQ0EsTUFDQSxTQUNBLFNBQ0EsT0FDQSxLQUNBLFNBQ0EsVUFDQSxTQUNBLFlBQ0EsT0FDQSxVQUNBLFlBQ0EsV0FDQSxVQUNBLFdBQ0EsWUFDQSxRQUNBLFFBQ0EsV0FDQSxTQUNBLHNCQUNBLHFCQUNBLE9BQ0EsT0FDQSxRQUNBLFdBQ0EsZUFDQSxRQUNBLE9BQ0EsV0FDQSxNQUNBLE1BQ0EsWUFDQSxVQUNBLFNBQ0EsV0FDQSxTQUNBLFFBQ0EsUUFDQSxRQUNBLFdBQ0EsV0FDQSxXQUNBLGVBQ0EsYUFDQSxVQUNBLGVBQ0EsV0FDQSxXQUNBLFdBQ0EsWUFDQSxnQkFDQSxTQUNBLFFBQ0EsT0FDQSxRQUNBLFVBQ0EsWUFDQSxTQUNBLFNBQ0EsU0FDQSxVQUNBLFVBQ0EsU0FDQSxRQUNBLFVB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QyxPQUFRLFVBQVcsWUFDcEIsQ0FBQyxVQUFXLFlBRWhCQyxRQUFTLENBQ0wsQ0FBQyxVQUFXLFdBQ1osQ0FBQyxPQUFRLFVBQVcsUUFDcEIsQ0FBQyxRQUFTLFlBRWRDLFFBQVMsQ0FDTCxDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxJQUFLLFNBQVUsWUFFcEJDLE9BQVEsQ0FDSixDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsSUFBSyxTQUFVLFNBRXBCUixRQUFTLENBQ0wsQ0FDSSwrQkFDQSxDQUNJLEdBQ0EsNEJBQ0EsNEJBQ0EsNEJBQ0EsQ0FBRWIsTUFBTyw0QkFBNkJZLEtBQU0sVUFHcEQsQ0FDSSwrQkFDQSxDQUNJLEdBQ0EsNEJBQ0EsNEJBQ0EsNEJBQ0EsQ0FBRVosTUFBTyw0QkFBNkJZLEtBQU0iLCJmaWxlIjoianMvMTg4Ni5lNmVjYzIxZWUzMjg2NTRmZDAyMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ10sXHJcbiAgICAgICAgWydiZWdpbicsICdlbmQnXSxcclxuICAgICAgICBbJ2Nhc2UnLCAnZW5kY2FzZSddLFxyXG4gICAgICAgIFsnY2FzZXgnLCAnZW5kY2FzZSddLFxyXG4gICAgICAgIFsnY2FzZXonLCAnZW5kY2FzZSddLFxyXG4gICAgICAgIFsnY2hlY2tlcicsICdlbmRjaGVja2VyJ10sXHJcbiAgICAgICAgWydjbGFzcycsICdlbmRjbGFzcyddLFxyXG4gICAgICAgIFsnY2xvY2tpbmcnLCAnZW5kY2xvY2tpbmcnXSxcclxuICAgICAgICBbJ2NvbmZpZycsICdlbmRjb25maWcnXSxcclxuICAgICAgICBbJ2Z1bmN0aW9uJywgJ2VuZGZ1bmN0aW9uJ10sXHJcbiAgICAgICAgWydnZW5lcmF0ZScsICdlbmRnZW5lcmF0ZSddLFxyXG4gICAgICAgIFsnZ3JvdXAnLCAnZW5kZ3JvdXAnXSxcclxuICAgICAgICBbJ2ludGVyZmFjZScsICdlbmRpbnRlcmZhY2UnXSxcclxuICAgICAgICBbJ21vZHVsZScsICdlbmRtb2R1bGUnXSxcclxuICAgICAgICBbJ3BhY2thZ2UnLCAnZW5kcGFja2FnZSddLFxyXG4gICAgICAgIFsncHJpbWl0aXZlJywgJ2VuZHByaW1pdGl2ZSddLFxyXG4gICAgICAgIFsncHJvZ3JhbScsICdlbmRwcm9ncmFtJ10sXHJcbiAgICAgICAgWydwcm9wZXJ0eScsICdlbmRwcm9wZXJ0eSddLFxyXG4gICAgICAgIFsnc3BlY2lmeScsICdlbmRzcGVjaWZ5J10sXHJcbiAgICAgICAgWydzZXF1ZW5jZScsICdlbmRzZXF1ZW5jZSddLFxyXG4gICAgICAgIFsndGFibGUnLCAnZW5kdGFibGUnXSxcclxuICAgICAgICBbJ3Rhc2snLCAnZW5kdGFzayddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG9mZlNpZGU6IGZhbHNlLFxyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ14oPzpcXFxccyp8LiooPyFcXFxcL1tcXFxcL1xcXFwqXSlbXlxcXFx3XSkoPzpiZWdpbnxjYXNlKHh8eik/fGNsYXNzfGNsb2NraW5nfGNvbmZpZ3xjb3Zlcmdyb3VwfGZ1bmN0aW9ufGdlbmVyYXRlfGludGVyZmFjZXxtb2R1bGV8cGFja2FnZXxwcmltaXRpdmV8cHJvcGVydHl8cHJvZ3JhbXxzZXF1ZW5jZXxzcGVjaWZ5fHRhYmxlfHRhc2spXFxcXGInKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeKD86XFxcXHMqfC4qKD8hXFxcXC9bXFxcXC9cXFxcKl0pW15cXFxcd10pKD86ZW5kfGVuZGNhc2V8ZW5kY2xhc3N8ZW5kY2xvY2tpbmd8ZW5kY29uZmlnfGVuZGdyb3VwfGVuZGZ1bmN0aW9ufGVuZGdlbmVyYXRlfGVuZGludGVyZmFjZXxlbmRtb2R1bGV8ZW5kcGFja2FnZXxlbmRwcmltaXRpdmV8ZW5kcHJvcGVydHl8ZW5kcHJvZ3JhbXxlbmRzZXF1ZW5jZXxlbmRzcGVjaWZ5fGVuZHRhYmxlfGVuZHRhc2spXFxcXGInKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuc3YnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScsIG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnYWNjZXB0X29uJyxcclxuICAgICAgICAnYWxpYXMnLFxyXG4gICAgICAgICdhbHdheXMnLFxyXG4gICAgICAgICdhbHdheXNfY29tYicsXHJcbiAgICAgICAgJ2Fsd2F5c19mZicsXHJcbiAgICAgICAgJ2Fsd2F5c19sYXRjaCcsXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ2Fzc2VydCcsXHJcbiAgICAgICAgJ2Fzc2lnbicsXHJcbiAgICAgICAgJ2Fzc3VtZScsXHJcbiAgICAgICAgJ2F1dG9tYXRpYycsXHJcbiAgICAgICAgJ2JlZm9yZScsXHJcbiAgICAgICAgJ2JlZ2luJyxcclxuICAgICAgICAnYmluZCcsXHJcbiAgICAgICAgJ2JpbnMnLFxyXG4gICAgICAgICdiaW5zb2YnLFxyXG4gICAgICAgICdiaXQnLFxyXG4gICAgICAgICdicmVhaycsXHJcbiAgICAgICAgJ2J1ZicsXHJcbiAgICAgICAgJ2J1ZmlmMCcsXHJcbiAgICAgICAgJ2J1ZmlmMScsXHJcbiAgICAgICAgJ2J5dGUnLFxyXG4gICAgICAgICdjYXNlJyxcclxuICAgICAgICAnY2FzZXgnLFxyXG4gICAgICAgICdjYXNleicsXHJcbiAgICAgICAgJ2NlbGwnLFxyXG4gICAgICAgICdjaGFuZGxlJyxcclxuICAgICAgICAnY2hlY2tlcicsXHJcbiAgICAgICAgJ2NsYXNzJyxcclxuICAgICAgICAnY2xvY2tpbmcnLFxyXG4gICAgICAgICdjbW9zJyxcclxuICAgICAgICAnY29uZmlnJyxcclxuICAgICAgICAnY29uc3QnLFxyXG4gICAgICAgICdjb25zdHJhaW50JyxcclxuICAgICAgICAnY29udGV4dCcsXHJcbiAgICAgICAgJ2NvbnRpbnVlJyxcclxuICAgICAgICAnY292ZXInLFxyXG4gICAgICAgICdjb3Zlcmdyb3VwJyxcclxuICAgICAgICAnY292ZXJwb2ludCcsXHJcbiAgICAgICAgJ2Nyb3NzJyxcclxuICAgICAgICAnZGVhc3NpZ24nLFxyXG4gICAgICAgICdkZWZhdWx0JyxcclxuICAgICAgICAnZGVmcGFyYW0nLFxyXG4gICAgICAgICdkZXNpZ24nLFxyXG4gICAgICAgICdkaXNhYmxlJyxcclxuICAgICAgICAnZGlzdCcsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnZWRnZScsXHJcbiAgICAgICAgJ2Vsc2UnLFxyXG4gICAgICAgICdlbmQnLFxyXG4gICAgICAgICdlbmRjYXNlJyxcclxuICAgICAgICAnZW5kY2hlY2tlcicsXHJcbiAgICAgICAgJ2VuZGNsYXNzJyxcclxuICAgICAgICAnZW5kY2xvY2tpbmcnLFxyXG4gICAgICAgICdlbmRjb25maWcnLFxyXG4gICAgICAgICdlbmRmdW5jdGlvbicsXHJcbiAgICAgICAgJ2VuZGdlbmVyYXRlJyxcclxuICAgICAgICAnZW5kZ3JvdXAnLFxyXG4gICAgICAgICdlbmRpbnRlcmZhY2UnLFxyXG4gICAgICAgICdlbmRtb2R1bGUnLFxyXG4gICAgICAgICdlbmRwYWNrYWdlJyxcclxuICAgICAgICAnZW5kcHJpbWl0aXZlJyxcclxuICAgICAgICAnZW5kcHJvZ3JhbScsXHJcbiAgICAgICAgJ2VuZHByb3BlcnR5JyxcclxuICAgICAgICAnZW5kc3BlY2lmeScsXHJcbiAgICAgICAgJ2VuZHNlcXVlbmNlJyxcclxuICAgICAgICAnZW5kdGFibGUnLFxyXG4gICAgICAgICdlbmR0YXNrJyxcclxuICAgICAgICAnZW51bScsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnZXZlbnR1YWxseScsXHJcbiAgICAgICAgJ2V4cGVjdCcsXHJcbiAgICAgICAgJ2V4cG9ydCcsXHJcbiAgICAgICAgJ2V4dGVuZHMnLFxyXG4gICAgICAgICdleHRlcm4nLFxyXG4gICAgICAgICdmaW5hbCcsXHJcbiAgICAgICAgJ2ZpcnN0X21hdGNoJyxcclxuICAgICAgICAnZm9yJyxcclxuICAgICAgICAnZm9yY2UnLFxyXG4gICAgICAgICdmb3JlYWNoJyxcclxuICAgICAgICAnZm9yZXZlcicsXHJcbiAgICAgICAgJ2ZvcmsnLFxyXG4gICAgICAgICdmb3Jram9pbicsXHJcbiAgICAgICAgJ2Z1bmN0aW9uJyxcclxuICAgICAgICAnZ2VuZXJhdGUnLFxyXG4gICAgICAgICdnZW52YXInLFxyXG4gICAgICAgICdnbG9iYWwnLFxyXG4gICAgICAgICdoaWdoejAnLFxyXG4gICAgICAgICdoaWdoejEnLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2lmZicsXHJcbiAgICAgICAgJ2lmbm9uZScsXHJcbiAgICAgICAgJ2lnbm9yZV9iaW5zJyxcclxuICAgICAgICAnaWxsZWdhbF9iaW5zJyxcclxuICAgICAgICAnaW1wbGVtZW50cycsXHJcbiAgICAgICAgJ2ltcGxpZXMnLFxyXG4gICAgICAgICdpbXBvcnQnLFxyXG4gICAgICAgICdpbmNkaXInLFxyXG4gICAgICAgICdpbmNsdWRlJyxcclxuICAgICAgICAnaW5pdGlhbCcsXHJcbiAgICAgICAgJ2lub3V0JyxcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgICdpbnNpZGUnLFxyXG4gICAgICAgICdpbnN0YW5jZScsXHJcbiAgICAgICAgJ2ludCcsXHJcbiAgICAgICAgJ2ludGVnZXInLFxyXG4gICAgICAgICdpbnRlcmNvbm5lY3QnLFxyXG4gICAgICAgICdpbnRlcmZhY2UnLFxyXG4gICAgICAgICdpbnRlcnNlY3QnLFxyXG4gICAgICAgICdqb2luJyxcclxuICAgICAgICAnam9pbl9hbnknLFxyXG4gICAgICAgICdqb2luX25vbmUnLFxyXG4gICAgICAgICdsYXJnZScsXHJcbiAgICAgICAgJ2xldCcsXHJcbiAgICAgICAgJ2xpYmxpc3QnLFxyXG4gICAgICAgICdsaWJyYXJ5JyxcclxuICAgICAgICAnbG9jYWwnLFxyXG4gICAgICAgICdsb2NhbHBhcmFtJyxcclxuICAgICAgICAnbG9naWMnLFxyXG4gICAgICAgICdsb25naW50JyxcclxuICAgICAgICAnbWFjcm9tb2R1bGUnLFxyXG4gICAgICAgICdtYXRjaGVzJyxcclxuICAgICAgICAnbWVkaXVtJyxcclxuICAgICAgICAnbW9kcG9ydCcsXHJcbiAgICAgICAgJ21vZHVsZScsXHJcbiAgICAgICAgJ25hbmQnLFxyXG4gICAgICAgICduZWdlZGdlJyxcclxuICAgICAgICAnbmV0dHlwZScsXHJcbiAgICAgICAgJ25ldycsXHJcbiAgICAgICAgJ25leHR0aW1lJyxcclxuICAgICAgICAnbm1vcycsXHJcbiAgICAgICAgJ25vcicsXHJcbiAgICAgICAgJ25vc2hvd2NhbmNlbGxlZCcsXHJcbiAgICAgICAgJ25vdCcsXHJcbiAgICAgICAgJ25vdGlmMCcsXHJcbiAgICAgICAgJ25vdGlmMScsXHJcbiAgICAgICAgJ251bGwnLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ291dHB1dCcsXHJcbiAgICAgICAgJ3BhY2thZ2UnLFxyXG4gICAgICAgICdwYWNrZWQnLFxyXG4gICAgICAgICdwYXJhbWV0ZXInLFxyXG4gICAgICAgICdwbW9zJyxcclxuICAgICAgICAncG9zZWRnZScsXHJcbiAgICAgICAgJ3ByaW1pdGl2ZScsXHJcbiAgICAgICAgJ3ByaW9yaXR5JyxcclxuICAgICAgICAncHJvZ3JhbScsXHJcbiAgICAgICAgJ3Byb3BlcnR5JyxcclxuICAgICAgICAncHJvdGVjdGVkJyxcclxuICAgICAgICAncHVsbDAnLFxyXG4gICAgICAgICdwdWxsMScsXHJcbiAgICAgICAgJ3B1bGxkb3duJyxcclxuICAgICAgICAncHVsbHVwJyxcclxuICAgICAgICAncHVsc2VzdHlsZV9vbmRldGVjdCcsXHJcbiAgICAgICAgJ3B1bHNlc3R5bGVfb25ldmVudCcsXHJcbiAgICAgICAgJ3B1cmUnLFxyXG4gICAgICAgICdyYW5kJyxcclxuICAgICAgICAncmFuZGMnLFxyXG4gICAgICAgICdyYW5kY2FzZScsXHJcbiAgICAgICAgJ3JhbmRzZXF1ZW5jZScsXHJcbiAgICAgICAgJ3JjbW9zJyxcclxuICAgICAgICAncmVhbCcsXHJcbiAgICAgICAgJ3JlYWx0aW1lJyxcclxuICAgICAgICAncmVmJyxcclxuICAgICAgICAncmVnJyxcclxuICAgICAgICAncmVqZWN0X29uJyxcclxuICAgICAgICAncmVsZWFzZScsXHJcbiAgICAgICAgJ3JlcGVhdCcsXHJcbiAgICAgICAgJ3Jlc3RyaWN0JyxcclxuICAgICAgICAncmV0dXJuJyxcclxuICAgICAgICAncm5tb3MnLFxyXG4gICAgICAgICdycG1vcycsXHJcbiAgICAgICAgJ3J0cmFuJyxcclxuICAgICAgICAncnRyYW5pZjAnLFxyXG4gICAgICAgICdydHJhbmlmMScsXHJcbiAgICAgICAgJ3NfYWx3YXlzJyxcclxuICAgICAgICAnc19ldmVudHVhbGx5JyxcclxuICAgICAgICAnc19uZXh0dGltZScsXHJcbiAgICAgICAgJ3NfdW50aWwnLFxyXG4gICAgICAgICdzX3VudGlsX3dpdGgnLFxyXG4gICAgICAgICdzY2FsYXJlZCcsXHJcbiAgICAgICAgJ3NlcXVlbmNlJyxcclxuICAgICAgICAnc2hvcnRpbnQnLFxyXG4gICAgICAgICdzaG9ydHJlYWwnLFxyXG4gICAgICAgICdzaG93Y2FuY2VsbGVkJyxcclxuICAgICAgICAnc2lnbmVkJyxcclxuICAgICAgICAnc21hbGwnLFxyXG4gICAgICAgICdzb2Z0JyxcclxuICAgICAgICAnc29sdmUnLFxyXG4gICAgICAgICdzcGVjaWZ5JyxcclxuICAgICAgICAnc3BlY3BhcmFtJyxcclxuICAgICAgICAnc3RhdGljJyxcclxuICAgICAgICAnc3RyaW5nJyxcclxuICAgICAgICAnc3Ryb25nJyxcclxuICAgICAgICAnc3Ryb25nMCcsXHJcbiAgICAgICAgJ3N0cm9uZzEnLFxyXG4gICAgICAgICdzdHJ1Y3QnLFxyXG4gICAgICAgICdzdXBlcicsXHJcbiAgICAgICAgJ3N1cHBseTAnLFxyXG4gICAgICAgICdzdXBwbHkxJyxcclxuICAgICAgICAnc3luY19hY2NlcHRfb24nLFxyXG4gICAgICAgICdzeW5jX3JlamVjdF9vbicsXHJcbiAgICAgICAgJ3RhYmxlJyxcclxuICAgICAgICAndGFnZ2VkJyxcclxuICAgICAgICAndGFzaycsXHJcbiAgICAgICAgJ3RoaXMnLFxyXG4gICAgICAgICd0aHJvdWdob3V0JyxcclxuICAgICAgICAndGltZScsXHJcbiAgICAgICAgJ3RpbWVwcmVjaXNpb24nLFxyXG4gICAgICAgICd0aW1ldW5pdCcsXHJcbiAgICAgICAgJ3RyYW4nLFxyXG4gICAgICAgICd0cmFuaWYwJyxcclxuICAgICAgICAndHJhbmlmMScsXHJcbiAgICAgICAgJ3RyaScsXHJcbiAgICAgICAgJ3RyaTAnLFxyXG4gICAgICAgICd0cmkxJyxcclxuICAgICAgICAndHJpYW5kJyxcclxuICAgICAgICAndHJpb3InLFxyXG4gICAgICAgICd0cmlyZWcnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAndHlwZWRlZicsXHJcbiAgICAgICAgJ3VuaW9uJyxcclxuICAgICAgICAndW5pcXVlJyxcclxuICAgICAgICAndW5pcXVlMCcsXHJcbiAgICAgICAgJ3Vuc2lnbmVkJyxcclxuICAgICAgICAndW50aWwnLFxyXG4gICAgICAgICd1bnRpbF93aXRoJyxcclxuICAgICAgICAndW50eXBlZCcsXHJcbiAgICAgICAgJ3VzZScsXHJcbiAgICAgICAgJ3V3aXJlJyxcclxuICAgICAgICAndmFyJyxcclxuICAgICAgICAndmVjdG9yZWQnLFxyXG4gICAgICAgICd2aXJ0dWFsJyxcclxuICAgICAgICAndm9pZCcsXHJcbiAgICAgICAgJ3dhaXQnLFxyXG4gICAgICAgICd3YWl0X29yZGVyJyxcclxuICAgICAgICAnd2FuZCcsXHJcbiAgICAgICAgJ3dlYWsnLFxyXG4gICAgICAgICd3ZWFrMCcsXHJcbiAgICAgICAgJ3dlYWsxJyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgICAgICd3aWxkY2FyZCcsXHJcbiAgICAgICAgJ3dpcmUnLFxyXG4gICAgICAgICd3aXRoJyxcclxuICAgICAgICAnd2l0aGluJyxcclxuICAgICAgICAnd29yJyxcclxuICAgICAgICAneG5vcicsXHJcbiAgICAgICAgJ3hvcidcclxuICAgIF0sXHJcbiAgICBidWlsdGluX2dhdGVzOiBbXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ25hbmQnLFxyXG4gICAgICAgICdub3InLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ3hvcicsXHJcbiAgICAgICAgJ3hub3InLFxyXG4gICAgICAgICdidWYnLFxyXG4gICAgICAgICdub3QnLFxyXG4gICAgICAgICdidWZpZjAnLFxyXG4gICAgICAgICdidWZpZjEnLFxyXG4gICAgICAgICdub3RpZjEnLFxyXG4gICAgICAgICdub3RpZjAnLFxyXG4gICAgICAgICdjbW9zJyxcclxuICAgICAgICAnbm1vcycsXHJcbiAgICAgICAgJ3Btb3MnLFxyXG4gICAgICAgICdyY21vcycsXHJcbiAgICAgICAgJ3JubW9zJyxcclxuICAgICAgICAncnBtb3MnLFxyXG4gICAgICAgICd0cmFuJyxcclxuICAgICAgICAndHJhbmlmMScsXHJcbiAgICAgICAgJ3RyYW5pZjAnLFxyXG4gICAgICAgICdydHJhbicsXHJcbiAgICAgICAgJ3J0cmFuaWYxJyxcclxuICAgICAgICAncnRyYW5pZjAnXHJcbiAgICBdLFxyXG4gICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgLy8gYXNzaWdubWVudCBvcGVyYXRvcnNcclxuICAgICAgICAnPScsXHJcbiAgICAgICAgJys9JyxcclxuICAgICAgICAnLT0nLFxyXG4gICAgICAgICcqPScsXHJcbiAgICAgICAgJy89JyxcclxuICAgICAgICAnJT0nLFxyXG4gICAgICAgICcmPScsXHJcbiAgICAgICAgJ3w9JyxcclxuICAgICAgICAnXj0nLFxyXG4gICAgICAgICc8PD0nLFxyXG4gICAgICAgICc+PisnLFxyXG4gICAgICAgICc8PDw9JyxcclxuICAgICAgICAnPj4+PScsXHJcbiAgICAgICAgLy8gY29uZGl0aW9uYWwgZXhwcmVzc2lvblxyXG4gICAgICAgICc/JyxcclxuICAgICAgICAnOicsXHJcbiAgICAgICAgLy8gVW5hcnkgb3BlcmF0b3JzXHJcbiAgICAgICAgJysnLFxyXG4gICAgICAgICctJyxcclxuICAgICAgICAnIScsXHJcbiAgICAgICAgJ34nLFxyXG4gICAgICAgICcmJyxcclxuICAgICAgICAnfiYnLFxyXG4gICAgICAgICd8JyxcclxuICAgICAgICAnfnwnLFxyXG4gICAgICAgICdeJyxcclxuICAgICAgICAnfl4nLFxyXG4gICAgICAgICdeficsXHJcbiAgICAgICAgLy9iaW5hcnkgb3BlcmF0b3JzXHJcbiAgICAgICAgJysnLFxyXG4gICAgICAgICctJyxcclxuICAgICAgICAnKicsXHJcbiAgICAgICAgJy8nLFxyXG4gICAgICAgICclJyxcclxuICAgICAgICAnPT0nLFxyXG4gICAgICAgICchPScsXHJcbiAgICAgICAgJz09PScsXHJcbiAgICAgICAgJyE9PScsXHJcbiAgICAgICAgJz09PycsXHJcbiAgICAgICAgJyE9PycsXHJcbiAgICAgICAgJyYmJyxcclxuICAgICAgICAnfHwnLFxyXG4gICAgICAgICcqKicsXHJcbiAgICAgICAgJzwnLFxyXG4gICAgICAgICc8PScsXHJcbiAgICAgICAgJz4nLFxyXG4gICAgICAgICc+PScsXHJcbiAgICAgICAgJyYnLFxyXG4gICAgICAgICd8JyxcclxuICAgICAgICAnXicsXHJcbiAgICAgICAgJz4+JyxcclxuICAgICAgICAnPDwnLFxyXG4gICAgICAgICc+Pj4nLFxyXG4gICAgICAgICc8PDwnLFxyXG4gICAgICAgIC8vIGluY3JlbWVudCBvciBkZWNyZW1lbnQgb3BlcmF0b3JcclxuICAgICAgICAnKysnLFxyXG4gICAgICAgICctLScsXHJcbiAgICAgICAgLy9iaW5hcnkgbG9naWNhbCBvcGVyYXRvclxyXG4gICAgICAgICctPicsXHJcbiAgICAgICAgJzwtPicsXHJcbiAgICAgICAgLy8gYmluYXJ5IHNldCBtZW1iZXJzaGlwIG9wZXJhdG9yXHJcbiAgICAgICAgJ2luc2lkZScsXHJcbiAgICAgICAgLy8gYmluYXJ5IGRpc3RydWJ1dGlvbiBvcGVyYXRvclxyXG4gICAgICAgICdkaXN0JyxcclxuICAgICAgICAnOjonLFxyXG4gICAgICAgICcrOicsXHJcbiAgICAgICAgJy06JyxcclxuICAgICAgICAnKj4nLFxyXG4gICAgICAgICcmJiYnLFxyXG4gICAgICAgICd8LT4nLFxyXG4gICAgICAgICd8PT4nLFxyXG4gICAgICAgICcjPSMnXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiUjXSsvLFxyXG4gICAgZXNjYXBlczogLyUlfFxcXFwoPzpbYW50dmZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSwyfXxbMC03XXsxLDN9KS8sXHJcbiAgICBpZGVudGlmaWVyOiAvKD86W2EtekEtWl9dW2EtekEtWjAtOV8kXFwuXSp8XFxcXFxcUysgKS8sXHJcbiAgICBzeXN0ZW1jYWxsOiAvWyRdW2EtekEtWjAtOV9dKy8sXHJcbiAgICB0aW1ldW5pdHM6IC9zfG1zfHVzfG5zfHBzfGZzLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBtb2R1bGUgaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9eKFxccyopKEBpZGVudGlmaWVyKS8sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluX2dhdGVzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Btb2R1bGVfaW5zdGFuY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Btb2R1bGVfaW5zdGFuY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgc3RhdGVtZW50c1xyXG4gICAgICAgICAgICBbL15cXHMqYGluY2x1ZGUvLCB7IHRva2VuOiAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZScsIG5leHQ6ICdAaW5jbHVkZScgfV0sXHJcbiAgICAgICAgICAgIC8vIFByZXByb2Nlc3NvciBkaXJlY3RpdmVzXHJcbiAgICAgICAgICAgIFsvXlxccypgXFxzKlxcdysvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGlkZW50aWZpZXJfb3Jfa2V5d29yZCcgfSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gKCogYXR0cmlidXRlcyAqKS5cclxuICAgICAgICAgICAgWy9cXChcXCouKlxcKlxcKS8sICdhbm5vdGF0aW9uJ10sXHJcbiAgICAgICAgICAgIC8vIFN5c3RlbWNhbGxcclxuICAgICAgICAgICAgWy9Ac3lzdGVtY2FsbC8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlkZW50aWZpZXJfb3Jfa2V5d29yZDogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvQGlkZW50aWZpZXIvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvXFxkKz9bXFxkX10qKD86XFwuW1xcZF9dKyk/W2VFXVtcXC0rXT9cXGQrLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCs/W1xcZF9dKlxcLltcXGRfXSsoPzpcXHMqQHRpbWV1bml0cyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLyg/OlxcZCs/W1xcZF9dKlxccyopPydbc1NdP1tkRF1cXHMqWzAtOXhYelo/XSs/WzAtOXhYelo/X10qLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICBbLyg/OlxcZCs/W1xcZF9dKlxccyopPydbc1NdP1tiQl1cXHMqWzAtMXhYelo/XSs/WzAtMXhYelo/X10qLywgJ251bWJlci5iaW5hcnknXSxcclxuICAgICAgICAgICAgWy8oPzpcXGQrP1tcXGRfXSpcXHMqKT8nW3NTXT9bb09dXFxzKlswLTd4WHpaP10rP1swLTd4WHpaP19dKi8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy8oPzpcXGQrP1tcXGRfXSpcXHMqKT8nW3NTXT9baEhdXFxzKlswLTlhLWZBLUZ4WHpaP10rP1swLTlhLWZBLUZ4WHpaP19dKi8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMXN0ZXAvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvW1xcZHhYelpdKz9bXFxkeFh6Wl9dKig/OlxccypAdGltZXVuaXRzKT8vLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvJ1swMXhYelpdKy8sICdudW1iZXInXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbW9kdWxlX2luc3RhbmNlOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICBbLygjPykoXFwoKS8sIFsnJywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAcG9ydF9jb25uZWN0aW9uJyB9XV0sXHJcbiAgICAgICAgICAgIFsvQGlkZW50aWZpZXJcXHMqWzs9e31cXFtcXF0sXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9sc3xbOz17fVxcW1xcXSxdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL0BpZGVudGlmaWVyLywgJ3R5cGUnXSxcclxuICAgICAgICAgICAgWy87LywgJ2RlbGltaXRlcicsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBvcnRfY29ubmVjdGlvbjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaWRlbnRpZmllcl9vcl9rZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgWy9Ac3lzdGVtY2FsbC8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWy9bLF0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvXFwoLywgJ0BicmFja2V0cycsICdAcG9ydF9jb25uZWN0aW9uJ10sXHJcbiAgICAgICAgICAgIFsvXFwpLywgJ0BicmFja2V0cycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhcXHMqKShcIikoW1xcdypcXC8qXSopKC5cXHcqKShcIikvLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJywgbmV4dDogJ0Bwb3AnIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhcXHMqKSg8KShbXFx3KlxcLypdKikoLlxcdyopKD4pLyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=