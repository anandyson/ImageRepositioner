//Image repostitioner 
//Author - Anand
!function(i){i.fn.imgrepos=function(t){return this.filter(".irpcon").each(function(){if(1!=i(this).children().length)try{throw new Error("More than one child elem")}catch(i){console.log(i.stack)}else{var t=i(this).children(),e=i(this),s=i(this).children()[0],h=i(this)[0],c={ia:e.data("position"),ch:h.clientHeight,cw:h.clientWidth,ih:s.clientHeight,iw:s.clientWidth,isPortrait:s.clientHeight>s.clientWidth,smallWH:h.clientHeight<s.clientHeight&&h.clientWidth<s.clientWidth,smallW:h.clientWidth<s.clientWidth,smallH:h.clientHeight<s.clientHeight,widthdiff:h.clientWidth-s.clientWidth,heightdiff:h.clientHeight-s.clientHeight};if(c.smallWH)if(e.css({position:"relative",overflow:"hidden"}),c.isPortrait)switch(t.css({position:"absolute",width:"100%"}),c.heightdiff=h.clientHeight-s.clientHeight,c.ia){case"left":i(s).css({top:c.heightdiff/2}),i(s).css({left:0});break;case"right":i(s).css({top:c.heightdiff/2}),i(s).css({right:0});break;case"center":i(s).css({top:c.heightdiff/2})}else switch(t.css({position:"absolute",height:"100%"}),c.widthdiff=h.clientWidth-s.clientWidth,c.ia){case"left":i(s).css({left:0});break;case"right":i(s).css({right:0});break;case"center":i(s).css({left:c.widthdiff/2})}else if(c.smallW)if(e.css({position:"relative",overflow:"hidden"}),c.isPortrait);else switch(t.css({position:"absolute",height:"100%"}),c.widthdiff=h.clientWidth-s.clientWidth,c.ia){case"left":i(s).css({left:0});break;case"right":i(s).css({right:0});break;case"center":i(s).css({left:c.widthdiff/2})}else if(c.smallH)if(e.css({position:"relative",overflow:"hidden"}),c.isPortrait)switch(t.css({position:"absolute",width:"100%"}),c.heightdiff=h.clientHeight-s.clientHeight,c.ia){case"left":i(s).css({top:c.heightdiff/2}),i(s).css({left:0});break;case"right":i(s).css({top:c.heightdiff/2}),i(s).css({right:0});break;case"center":i(s).css({top:c.heightdiff/2})}else switch(t.css({position:"absolute",width:"100%"}),c.heightdiff=h.clientHeight-s.clientHeight,c.widthdiff=h.clientWidth-s.clientWidth,c.ia){case"left":i(s).css({top:c.heightdiff/2}),i(s).css({left:0});break;case"right":i(s).css({top:c.heightdiff/2}),i(s).css({right:0});break;case"center":i(s).css({top:c.heightdiff/2}),i(s).css({left:c.widthdiff/2})}else c.smallH&&c.smallW&&c.smallWH||(e.css({position:"relative"}),t.css({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}))}}),this}}(jQuery);
