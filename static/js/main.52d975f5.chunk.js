(this["webpackJsonpquiz-app-2"]=this["webpackJsonpquiz-app-2"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(7),a=n.n(c),l=(n(14),n(15),n(1)),i=n(8);n(16);function u(e){var t=0,n=(document.querySelector("h2"),[]),o=e.incorrectChoices.concat(e.correctChoice);function c(n){1!==t&&(n.target.textContent===e.correctChoice?(n.target.style.color="white",n.target.style.backgroundColor="green"):(n.target.style.color="white",n.target.style.backgroundColor="red"),t=1)}return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=[e[n],e[t]];e[t]=o[0],e[n]=o[1]}}(o),n=n.concat(o),r.a.createElement("div",null,n.map((function(e){return r.a.createElement("li",{onClick:c,key:n.indexOf(e)},e)})))}n(17),n(18);function s(){var e=document.querySelectorAll("li"),t=Object(i.a)(e),n=Object(o.useState)([]),c=Object(l.a)(n,2),a=c[0],s=c[1],h=[],f=Object(o.useState)(0),m=Object(l.a)(f,2),d=m[0],p=m[1],g=Object(o.useState)(),b=Object(l.a)(g,2),v=b[0],E=b[1];return Object(o.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10").then((function(e){return e.json()})).then((function(e){s(e.results),console.log(e.results)}))}),[]),a.length>0&&a.map((function(e){return h.push(e.question),h})),Object(o.useEffect)((function(){return E(h[d])}),[h,d]),a.length>0?r.a.createElement("div",null,r.a.createElement("h1",null,"Question ",d+1," /10:",v),r.a.createElement(u,{incorrectChoices:a[d].incorrect_answers,correctChoice:a[d].correct_answer}),r.a.createElement("button",{onClick:function(){return t.map((function(e){return e.style.backgroundColor="white",e.style.color="black",null})),void(d<9?(E(h[d+1]),p(d+1)):alert("That's it.Refresh to play again"))}},"Next")):r.a.createElement("div",null,r.a.createElement("h1",null,"Loading Data.."))}var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.52d975f5.chunk.js.map