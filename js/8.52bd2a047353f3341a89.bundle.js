(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{899:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return o})),n.d(t,"language",(function(){return s}));var o={comments:{lineComment:"#"}},s={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2F6Y2xpL2F6Y2xpLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJpZ25vcmVDYXNlIiwidG9rZW5Qb3N0Zml4Iiwic3RyIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsInRva2VuIiwibmV4dCIsInR5cGUiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiMEZBQUEscUZBS08sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsTUFHVkMsRUFBVyxDQUNsQkMsYUFBYyxVQUNkQyxZQUFZLEVBQ1pDLGFBQWMsU0FDZEMsSUFBSyxTQUNMQyxVQUFXLENBQ1BDLEtBQU0sQ0FDRixDQUFFQyxRQUFTLFlBQ1gsQ0FBQyxlQUFnQixDQUNUQyxNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLENBQUVELE1BQU8saUJBQWtCQyxLQUFNLFlBR3pELENBQUMsY0FBZSxDQUNSRixNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLENBQUVELE1BQU8saUJBQWtCQyxLQUFNLGFBSTdEQyxLQUFNLENBQ0YsQ0FBRUosUUFBUyxZQUNYLENBQUMsYUFBYyxDQUNQQyxNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLG9CQUd4QixDQUFDLFdBQVksQ0FDTEYsTUFBTyxDQUNILE9BQVEsQ0FBRUMsTUFBTyxTQUFVQyxLQUFNLFdBQ2pDLFdBQVksYUFJNUJFLFFBQVMsQ0FDTCxDQUFDLE9BQVEsQ0FDREosTUFBTyxDQUNILE9BQVEsQ0FBRUMsTUFBTyxVQUFXQyxLQUFNIiwiZmlsZSI6ImpzLzguNTJiZDJhMDQ3MzUzZjMzNDFhODkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJyMnLFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAna2V5d29yZCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmF6Y2xpJyxcclxuICAgIHN0cjogL1teI1xcc10vLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcclxuICAgICAgICAgICAgWy9cXHMtK0BzdHIqXFxzKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdrZXkuaWRlbnRpZmllcicsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAna2V5LmlkZW50aWZpZXInLCBuZXh0OiAnQHR5cGUnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9eLStAc3RyKlxccyovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAna2V5LmlkZW50aWZpZXInLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2tleS5pZGVudGlmaWVyJywgbmV4dDogJ0B0eXBlJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHR5cGU6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIFsvLStAc3RyKlxccyovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAna2V5LmlkZW50aWZpZXInLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2tleS5pZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL0BzdHIrXFxzKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbLyMuKiQvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wYWxsJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=