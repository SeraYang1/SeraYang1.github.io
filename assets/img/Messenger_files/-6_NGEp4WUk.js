if (self.CavalryLogger) { CavalryLogger.start_js(["1XYJn"]); }

__d('MessengerGamesCustomUpdateData',['GamesQuicksilverContextKey','URI'],(function a(b,c,d,e,f,g){'use strict';function h(i){this.$MessengerGamesCustomUpdateData1=null;this.$MessengerGamesCustomUpdateData2=i.image_id||null;this.$MessengerGamesCustomUpdateData3=i.custom_image_url||null;this.$MessengerGamesCustomUpdateData5=i.text||i.collapsed_text||i.expanded_text||'';this.$MessengerGamesCustomUpdateData6=i.cta_title;var j=new (c('URI'))(i.cta_url).getQueryData();this.$MessengerGamesCustomUpdateData4=j.payload||null;var k=j.context_id||null,l=j.context_type;if(l)this.$MessengerGamesCustomUpdateData1=new (c('GamesQuicksilverContextKey'))(null,k,l);}h.prototype.getContextKey=function(){return this.$MessengerGamesCustomUpdateData1;};h.prototype.getImageID=function(){return this.$MessengerGamesCustomUpdateData2;};h.prototype.getImageURL=function(){return this.$MessengerGamesCustomUpdateData3;};h.prototype.getPayload=function(){return this.$MessengerGamesCustomUpdateData4;};h.prototype.getTitle=function(){return this.$MessengerGamesCustomUpdateData6;};h.prototype.getText=function(){return this.$MessengerGamesCustomUpdateData5;};f.exports=h;}),null);