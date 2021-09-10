!function(){var a=Handlebars.template,s=DDH.stocks=DDH.stocks||{};s.content=a(function(a,s,t,e,n){function l(){return'\n        <span class="zcm__sep"></span>\n        <span>Markets are closed</span>\n    '}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),n=n||{};var c,h,p="",o="function",r=this.escapeExpression,i=this;return p+='<h1 class="stocks__header  zci__header">\n    <a href="',(h=t.url)?c=h.call(s,{hash:{},data:n}):(h=s&&s.url,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'" title="',(h=t.urlTitle)?c=h.call(s,{hash:{},data:n}):(h=s&&s.urlTitle,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'">\n        '+r((c=s&&s.Security,c=null==c||c===!1?c:c.Name,typeof c===o?c.apply(s):c))+'\n    </a>\n</h1>\n<div class="stocks__sub  zci__header__sub">\n    <span class="stocks__symbol">'+r((c=s&&s.Security,c=null==c||c===!1?c:c.Symbol,typeof c===o?c.apply(s):c))+"</span>\n    <span>as of ",(h=t.date)?c=h.call(s,{hash:{},data:n}):(h=s&&s.date,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+" ",(h=t.time)?c=h.call(s,{hash:{},data:n}):(h=s&&s.time,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'</span>\n    <span title="Eastern Time Zone"> ET</span>\n    ',c=t["if"].call(s,s&&s.marketClosed,{hash:{},inverse:i.noop,fn:i.program(1,l,n),data:n}),(c||0===c)&&(p+=c),p+='\n</div>\n<div class="stocks__quotes  stocks__quote-',(h=t.quoteChangeDir)?c=h.call(s,{hash:{},data:n}):(h=s&&s.quoteChangeDir,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'">\n    <span class="stocks__quote text--primary">',(h=t.quote)?c=h.call(s,{hash:{},data:n}):(h=s&&s.quote,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'</span>\n    <span class="stocks__change">',(h=t.change)?c=h.call(s,{hash:{},data:n}):(h=s&&s.change,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+'</span>\n    <span class="stocks__change-sep  sep"></span>\n    <span class="stocks__change-pct">',(h=t.change_percent)?c=h.call(s,{hash:{},data:n}):(h=s&&s.change_percent,c=typeof h===o?h.call(s,{hash:{},data:n}):h),p+=r(c)+"%</span>\n</div>\n"})}();(function(env){"use strict";env.ddg_spice_stocks=function(api_result){if(!api_result||api_result.Outcome!=="Success"){return Spice.failed("stocks")}var url="http://www.nasdaq.com/symbol/"+api_result.Security.Symbol+"/real-time";DDG.require("moment.js",function(){Spice.add({id:"stocks",name:"Stock",data:api_result,meta:{sourceName:"NASDAQ",sourceUrl:url},normalize:function(data){var change=data.ChangeFromPreviousClose,dateObj=new Date(data.Date),changeDir;moment().utcOffset(data.UTCOffset);if(change>0){changeDir="up"}else if(change<0){changeDir="down"}else{changeDir="same"}return{url:url,urlTitle:"View more "+data.Security.Name+" stock data at NASDAQ",quote:data.Last.toFixed(2),quoteChangeDir:changeDir,change:change.toFixed(2),change_percent:data.PercentChangeFromPreviousClose.toFixed(2),date:moment(dateObj).format("MMM DD"),time:moment(data.Time,"hh:mm:ss A").format("h:mm A"),marketClosed:data.Date===data.PreviousCloseDate||data.Time==="4:00:00 PM"}},templates:{group:"base",options:{content:Spice.stocks.content,moreAt:true,moreText:{href:"https://xignite.com",text:"Data by Xignite"}}}})})}})(this);