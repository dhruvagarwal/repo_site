(function(a){a.fn.extend({BlackAndWhite:function(f){var g=this,n={hoverEffect:true,webworkerPath:false,responsive:true,invertHoverEffect:false,speed:500,onImageReady:null};f=a.extend(n,f);var l=f.hoverEffect,p=f.webworkerPath,A=f.invertHoverEffect,z=f.responsive,w=a.isPlainObject(f.speed)?f.speed.fadeIn:f.speed,e=a.isPlainObject(f.speed)?f.speed.fadeOut:f.speed;var s=(document.all&&!window.opera&&window.XMLHttpRequest)?true:false;var u=" -webkit- -moz- -o- -ms- ".split(" ");var b={};var k=function(E){if(b[E]||b[E]===""){return b[E]+E}var B=document.createElement("div");var C=["","Moz","Webkit","O","ms","Khtml"];for(var D in C){if(typeof B.style[C[D]+E]!=="undefined"){b[E]=C[D];return C[D]+E}}return E.toLowerCase()};var h=function(){var B=document.createElement("div");B.style.cssText=u.join("filter:blur(2px); ");return !!B.style.length&&((document.documentMode===undefined||document.documentMode>9))}();var r=!!document.createElement("canvas").getContext,t=a(window),i=(function(){return(typeof(Worker)!=="undefined")?true:false}()),y=k("Filter"),q=[],m=i&&p?new Worker(p+"BnWWorker.js"):false;var j=function(B){a(B.currentTarget).find(".BWfade").stop(true,true)[!A?"fadeIn":"fadeOut"](w)};var d=function(B){a(B.currentTarget).find(".BWfade").stop(true,true)[A?"fadeIn":"fadeOut"](w)};var x=function(B){if(typeof f.onImageReady==="function"){f.onImageReady(B)}};var v=function(){if(!q.length){return}m.postMessage(q[0].imageData);m.onmessage=function(B){q[0].ctx.putImageData(B.data,0,0);x(q[0].img);q.splice(0,1);v()}};var o=function(J,D,F,E){var I=D.getContext("2d"),G=J,K=0,L;I.drawImage(J,0,0,F,E);var H=I.getImageData(0,0,F,E),B=H.data,C=B.length;if(m){q.push({imageData:H,ctx:I,img:J})}else{for(;K<C;K+=4){L=B[K]*0.3+B[K+1]*0.59+B[K+2]*0.11;B[K]=B[K+1]=B[K+2]=L}I.putImageData(H,0,0);x(J)}};var c=function(E,F){var G=E[0],C=G.src,K=E.width(),D=E.height(),H={position:"absolute",top:0,left:0,display:A?"none":"block",width:K,height:D};if(r&&!h){var B=G.width,J=G.height;a('<canvas class="BWfade" width="'+B+'" height="'+J+'"></canvas>').prependTo(F);var I=F.find("canvas");I.css(H);o(G,I[0],B,J)}else{H[k("Filter")]="grayscale(100%)";a("<img src="+C+' width="'+K+'" height="'+D+'" class="BWFilter BWfade" /> ').prependTo(F);a(".BWFilter").css(a.extend(H,{filter:"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)"}));x(G)}};this.init=function(B){g.each(function(D,C){var E=a(C),F=E.find("img");if(!F.width()){F.on("load",function(){c(F,E)})}else{c(F,E)}});if(m){v()}if(l){g.on("mouseleave",j);g.on("mouseenter",d)}if(z){t.on("resize orientationchange",g.resizeImages)}};this.resizeImages=function(){g.each(function(C,D){var E=a(D).find("img:not(.BWFilter)");var B,F;if(s){B=a(E).prop("width");F=a(E).prop("height")}else{B=a(E).width();F=a(E).height()}a(this).find(".BWFilter, canvas").css({width:B,height:F})})};return this.init(f)}})}(jQuery));