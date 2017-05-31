if (self.CavalryLogger) { CavalryLogger.start_js(["FO4l+"]); }

__d("MessageThreadAssociatedObjectKey",[],(function a(b,c,d,e,f,g){f.exports={ACTION_LINK:"action_link",ID:"id",NAME:"name",PROFILE_PICTURE:"profile_picture",ROOM_TYPE:"room_type",PRIVACY_MODE:"privacy_mode"};}),null);
__d("PagesProfileTestID",[],(function a(b,c,d,e,f,g){f.exports={COVER_PHOTO_EDIT_MENU:"cover_photo_edit_menu",COVER_PHOTO_REMOVE_MENU_ITEM:"cover_photo_remove_menu_item",COVER_PHOTO_UPLOAD_MENU_ITEM:"cover_photo_upload_menu_item",COVER_PHOTO_SAVE_BUTTON:"cover_photo_save_button",COVER_PHOTO_REMOVE_CONFIRM_BUTTON:"cover_photo_remove_confirm_button",PROFILE_PICTURE_EDIT_MENU:"profile_picture_edit_menu",PROFILE_PICTURE_REMOVE_MENU_ITEM:"profile_picture_remove_menu_item",PROFILE_PICTURE_UPLOAD_MENU_ITEM:"profile_picture_upload_menu_item",UNLIKE_PAGE_ITEM:"page_unlike_item_test_id",UNFOLLOW_PAGE_ITEM:"page_unfollow_item_test_id",SEE_FIRST_ITEM:"page_see_first_item_test_id",DEFAULT_FOLLOW_ITEM:"page_default_follow_item_test_id",FOLLOW_BUTTON_ID:"_follow_button_test_id",FOLLOWED_BUTTON_ID:"_followed_button_test_id",LIKE_BUTTON_ID:"_like_button_test_id",LIKED_BUTTON_ID:"_liked_button_test_id"};}),null);
__d("TimeSpentRoomTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={GROUP:"GROUP",EVENT:"EVENT"};}),null);
__d('TimeSpentRoomTypeEnum$FbtEnum',[],(function a(b,c,d,e,f,g){'use strict';var h={GROUP:'Group'};f.exports=h;}),null);
__d('MessengerContextBanner.react',['cx','fbt','Badge.react','Image.react','ImageBlock.react','immutable','Link.react','MercuryParticipantsConstants','MercuryParticipantsImage.react','MercuryThreadImage.react','MessageThreadAssociatedObjectKey','React','MercuryShareAttachmentRenderLocations','TimeSpentRoomTypeEnum','TimeSpentRoomTypeEnum$FbtEnum','requireWeak'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=void 0;c('requireWeak')('messengerThreadImageReact',function(o){m=o.comp;});j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.$MessengerContextBanner3=function(){return c('React').createElement('div',{className:"_1n-e _36zg"},this.props.connectionContext);}.bind(this),p;}n.prototype.render=function(){var o=c('React').createElement(c('ImageBlock.react'),{className:"_llj"+(this.props.location===c('MercuryShareAttachmentRenderLocations').MESSENGER?' '+"_2eu-":'')+(this.props.location===c('MercuryShareAttachmentRenderLocations').CHAT?' '+"_2eu_":''),spacing:'large',style:this.props.style},this.$MessengerContextBanner1(),c('React').createElement('div',{className:"_lll"},this.$MessengerContextBanner2(),this.$MessengerContextBanner3(),this.$MessengerContextBanner4())),p=this.props.associatedObject;if(p&&p[c('MessageThreadAssociatedObjectKey').ACTION_LINK])o=c('React').createElement(c('Link.react'),{href:p[c('MessageThreadAssociatedObjectKey').ACTION_LINK],target:'_blank',style:{textDecoration:'none'}},o);return o;};n.prototype.$MessengerContextBanner1=function(){var o=this.props.location===c('MercuryShareAttachmentRenderLocations').MESSENGER,p=this.props.associatedObject,q=null;if(!this.props.contactName&&p&&o){q=c('React').createElement('div',{className:"_4ld-"},c('React').createElement(c('Image.react'),{src:p[c('MessageThreadAssociatedObjectKey').PROFILE_PICTURE]}));}else if(this.props.thread){var r=m&&o?m:c('MercuryThreadImage.react');q=c('React').createElement(r,{showBadge:false,participants:this.props.participants,size:o?60:null,thread:this.props.thread,viewer:this.props.viewer});}else if(this.props.participantIDs)q=c('React').createElement(c('MercuryParticipantsImage.react'),{participants:this.props.participantIDs,size:c('MercuryParticipantsConstants').BIG_IMAGE_SIZE});return c('React').createElement('div',{className:"_llk"},q);};n.prototype.$MessengerContextBanner2=function(){if(this.props.location!==c('MercuryShareAttachmentRenderLocations').MESSENGER)return null;var o=this.props.isVerified?c('React').createElement(c('Badge.react'),{size:'medium',type:'verified'}):null,p=this.props.contactName;if(!p){var q=this.props.associatedObject;p=q?q[c('MessageThreadAssociatedObjectKey').NAME]:null;}return c('React').createElement('div',{className:"_llq"},c('React').createElement('span',{className:"_3oh-"},p,o));};n.prototype.$MessengerContextBanner4=function(){if(!this.props.contextItems.length){var o=this.props.associatedObject;if(o){var p=c('TimeSpentRoomTypeEnum')[o[c('MessageThreadAssociatedObjectKey').ROOM_TYPE]];return c('React').createElement('div',{className:"_1n-e"},i._({"GROUP":"Go to Facebook Group"},[i['enum'](p,{GROUP:'Group'})]));}return null;}return c('React').createElement('div',null,this.props.contextItems.map(function(q,r){return c('React').createElement('div',{className:"_1n-e",key:'item:'+r},q);}));};n.propTypes={contactName:l.string,associatedObject:l.object,connectionContext:l.string,contextItems:l.arrayOf(l.string).isRequired,isVerified:l.bool,location:l.string.isRequired,participantIDs:l.arrayOf(l.string),participants:l.instanceOf(c('immutable').Map),thread:l.object,viewer:l.string.isRequired};f.exports=n;}),null);
__d("XMessengerContextBannerController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/messenger\/context_banner\/",{profile_id:{type:"Int",required:true},max_context_items:{type:"Int",defaultValue:3}});}),null);
__d('MessengerContextInformationStore',['AsyncRequest','EventEmitter','Map','XMessengerContextBannerController'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=new (c('Map'))(),k=new (c('Map'))();h=babelHelpers.inherits(l,c('EventEmitter'));i=h&&h.prototype;l.prototype.getOrFetch=function(m){var n=j.get(m);n||this.$MessengerContextInformationStore1(m);return n;};l.prototype.$MessengerContextInformationStore1=function(m){if(k.get(m))return;var n=c('XMessengerContextBannerController').getURIBuilder().setInt('profile_id',m).getURI(),o=new (c('AsyncRequest'))().setAllowCrossPageTransition(true).setURI(n).setHandler(this.$MessengerContextInformationStore2.bind(this,m));k.set(m,o);o.send();};l.prototype.$MessengerContextInformationStore2=function(m,n){j.set(m,{connectionContext:n.payload.connection_context||'',contextItems:n.payload.context_items||[]});k['delete'](m);this.emit('change');};function l(){h.apply(this,arguments);}f.exports=new l();}),null);
__d('PagesMessagingMercuryChatTabActionKeys',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({REQUEST_GREETING_CONFIG:null,NOTIFY_GREETING_CONFIG_RECEIVED:null,SAY_HELLO:null});f.exports=h;}),null);
__d('PagesMessagingMercuryChatTabDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('ExplicitRegistrationDispatcher'))({strict:false});}),null);
__d('PagesMessagingMercuryChatTabActions',['PagesMessagingMercuryChatTabActionKeys','PagesMessagingMercuryChatTabDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h={requestGreetingConfig:function i(j){c('PagesMessagingMercuryChatTabDispatcher').dispatch({actionType:c('PagesMessagingMercuryChatTabActionKeys').REQUEST_GREETING_CONFIG,threadID:j});},notifyGreetingConfigReceived:function i(j,k){c('PagesMessagingMercuryChatTabDispatcher').dispatch({actionType:c('PagesMessagingMercuryChatTabActionKeys').NOTIFY_GREETING_CONFIG_RECEIVED,threadID:j,payload:k});},sayHello:function i(j){c('PagesMessagingMercuryChatTabDispatcher').dispatch({actionType:c('PagesMessagingMercuryChatTabActionKeys').SAY_HELLO,threadID:j});}};f.exports=h;}),null);
__d('PagesMessagingMercuryChatTabState',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('immutable').Record({pagesGreetingShouldShow:false,pagesGreetingContent:null,sayHelloMessage:null,userPromptMessage:null,pagesMessengerNullStateGK:false,pageResponsiveness:null,coverData:null,connectionContext:null}));i=h&&h.prototype;function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d("XPagesSayHelloController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/messaging\/say_hello\/",{});}),null);
__d('PagesMessagingMercuryChatTabStore',['invariant','PagesMessagingMercuryChatTabActionKeys','PagesMessagingMercuryChatTabActions','AsyncRequest','PagesMessagingMercuryChatTabDispatcher','FluxStore','Map','MercuryIDs','PagesMessagingMercuryChatTabState','XMercuryChatTabPagesGreetingConfigController','XPagesSayHelloController'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('FluxStore'));j=i&&i.prototype;function k(){j.constructor.call(this,c('PagesMessagingMercuryChatTabDispatcher'));this.$PagesMessagingMercuryChatTabStore1=new (c('Map'))();}k.prototype.getStateByThread=function(l){if(!this.$PagesMessagingMercuryChatTabStore1.has(l))this.$PagesMessagingMercuryChatTabStore1.set(l,new (c('PagesMessagingMercuryChatTabState'))());var m=this.$PagesMessagingMercuryChatTabStore1.get(l);m||h(0);return m;};k.prototype.__onDispatch=function(l){var m=l.actionType,n=l.payload,o=l.threadID,p=this.getStateByThread(o);p||h(0);switch(m){case c('PagesMessagingMercuryChatTabActionKeys').REQUEST_GREETING_CONFIG:this.$PagesMessagingMercuryChatTabStore2(o);break;case c('PagesMessagingMercuryChatTabActionKeys').SAY_HELLO:this.$PagesMessagingMercuryChatTabStore3(o);break;case c('PagesMessagingMercuryChatTabActionKeys').NOTIFY_GREETING_CONFIG_RECEIVED:this.$PagesMessagingMercuryChatTabStore4(o,this.$PagesMessagingMercuryChatTabStore5(n,p));break;}};k.prototype.$PagesMessagingMercuryChatTabStore2=function(l){var m=c('XMercuryChatTabPagesGreetingConfigController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setMethod('POST').setData({page_id:c('MercuryIDs').getUserIDFromThreadID(l)}).setHandler(function(n){return c('PagesMessagingMercuryChatTabActions').notifyGreetingConfigReceived(l,n.payload);}).send();};k.prototype.$PagesMessagingMercuryChatTabStore3=function(l){var m=c('XPagesSayHelloController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setMethod('POST').setData({page_id:c('MercuryIDs').getUserIDFromThreadID(l)}).send();var n=this.getStateByThread(l);this.$PagesMessagingMercuryChatTabStore4(l,n.set('sayHelloMessage',null));};k.prototype.$PagesMessagingMercuryChatTabStore4=function(l,m){this.$PagesMessagingMercuryChatTabStore1.set(l,m);this.__emitChange();};k.prototype.$PagesMessagingMercuryChatTabStore5=function(l,m){return m.set('pagesGreetingShouldShow',l.pagesGreetingShouldShow).set('pagesGreetingContent',l.pagesGreetingContent).set('sayHelloMessage',l.sayHelloMessage).set('userPromptMessage',l.userPromptMessage).set('pagesMessengerNullStateGK',l.pagesMessengerNullStateGK).set('pageResponsiveness',l.pageResponsiveness).set('coverData',l.coverData).set('connectionContext',l.connectionContext);};f.exports=new k();}),null);
__d("SpotlightProfilePicCropOptions",[],(function a(b,c,d,e,f,g){var h=2.5,i=.8,j=320,k={getOptions:function l(m,n){var o={},p=Math.min(n.x,n.y),q,r,s=m.facebox;if(s){r=Math.max(s.size.x*n.x,s.size.y*n.y)*h;q=s.center;}else{r=i*p;if(m.focus)q=m.focus;}var t=n.x/m.original.width;o.height=o.width=Math.min(Math.max(r,j*t),p);if(q){o.center_x=Math.min(Math.max(q.x*n.x,o.width/2),n.x-o.width/2);o.center_y=Math.min(Math.max(q.y*n.y,o.height/2),n.y-o.height/2);}return o;},getOptionsAsRatio:function l(m,n){var o=k.getOptions(m,n),p=Math.min(n.x,n.y);return {center:{x:o.center_x?o.center_x/n.x:.5,y:o.center_y?o.center_y/n.y:.5},size:{x:o.width/p,y:o.height/p}};}};f.exports=k;}),null);
__d('PhotoZoomCropDimensions',['BasicVector','SpotlightProfilePicCropOptions','clamp'],(function a(b,c,d,e,f,g){var h=320,i=.5,j=.5,k=180,l=.05,m=3;function n(p,q){return Number(p.toFixed(q||m));}o.prototype.clone=function(){'use strict';return new o(this.$PhotoZoomCropDimensions2).setSize(this.$PhotoZoomCropDimensions3.x,this.$PhotoZoomCropDimensions3.y).setSmallestSize(this.$PhotoZoomCropDimensions4.x,this.$PhotoZoomCropDimensions4.y).setCenter(this.$PhotoZoomCropDimensions1.x,this.$PhotoZoomCropDimensions1.y).setZoom(this.$PhotoZoomCropDimensions5);};function o(p){'use strict';this.$PhotoZoomCropDimensions2=p;this.setSmallestSize(k,k).setCenter(i,i);this.setSize(h,h).setZoom(j);}o.prototype.getArea=function(){'use strict';var p=this.getPosition(),q=this.$PhotoZoomCropDimensions3.div(this.$PhotoZoomCropDimensions5);return {height:Math.round(q.y),width:Math.round(q.x),x:Math.round(Math.abs(p.left)/this.$PhotoZoomCropDimensions5),y:Math.round(Math.abs(p.top)/this.$PhotoZoomCropDimensions5)};};o.prototype.getPosition=function(){'use strict';var p=this.$PhotoZoomCropDimensions6();return {height:n(p.imageSize.y),left:n(this.$PhotoZoomCropDimensions3.x/2-p.center.x),top:n(this.$PhotoZoomCropDimensions3.y/2-p.center.y),width:n(p.imageSize.x)};};o.prototype.getRect=function(){'use strict';var p=this.$PhotoZoomCropDimensions6(),q=this.$PhotoZoomCropDimensions3.div(this.$PhotoZoomCropDimensions5);return {center:{x:p.center.x/p.imageSize.x,y:p.center.y/p.imageSize.y},size:{x:q.x,y:q.y}};};o.prototype.getSize=function(){'use strict';return this.$PhotoZoomCropDimensions3;};o.prototype.getZoom=function(){'use strict';return this.$PhotoZoomCropDimensions5;};o.prototype.getZoomRange=function(){'use strict';var p=Math.min(this.$PhotoZoomCropDimensions2.x,this.$PhotoZoomCropDimensions2.y);return {max:this.$PhotoZoomCropDimensions3.x/Math.min(this.$PhotoZoomCropDimensions4.x,p),min:Math.max(this.$PhotoZoomCropDimensions3.x/this.$PhotoZoomCropDimensions2.x,this.$PhotoZoomCropDimensions3.y/this.$PhotoZoomCropDimensions2.y)};};o.prototype.hasSpaceToDrag=function(){'use strict';var p=this.getZoomRange();return !(o.isSquare(this.$PhotoZoomCropDimensions2)&&p.min===p.max);};o.prototype.isCurrentlyDragable=function(){'use strict';var p=this.$PhotoZoomCropDimensions6().imageSize;return p.x!==this.$PhotoZoomCropDimensions3.x||p.y!==this.$PhotoZoomCropDimensions3.y;};o.prototype.moveByPixels=function(p,q){'use strict';var r=this.$PhotoZoomCropDimensions6();return this.moveBy(p/r.imageSize.x,q/r.imageSize.y);};o.prototype.moveBy=function(p,q){'use strict';this.setCenter(this.$PhotoZoomCropDimensions1.x+p,this.$PhotoZoomCropDimensions1.y+q);var r=this.$PhotoZoomCropDimensions6();this.$PhotoZoomCropDimensions1=r.center.div(r.imageSize.x,r.imageSize.y);return this;};o.prototype.setCenter=function(p,q){'use strict';this.$PhotoZoomCropDimensions1=new (c('BasicVector'))(c('clamp')(p,0,1),c('clamp')(q,0,1));return this;};o.prototype.setSize=function(p,q){'use strict';this.$PhotoZoomCropDimensions3=new (c('BasicVector'))(p,q);return this;};o.prototype.setRatio=function(p,q){'use strict';var r=this.$PhotoZoomCropDimensions3.x*this.$PhotoZoomCropDimensions3.y,s=Math.sqrt(r*p/q);return this.setSize(s,r/s);};o.prototype.setSmallestSize=function(p,q){'use strict';this.$PhotoZoomCropDimensions4=new (c('BasicVector'))(p,q);return this;};o.prototype.setZoom=function(p){'use strict';var q=this.getZoomRange();this.$PhotoZoomCropDimensions5=c('clamp')(p,q.min,q.max);return this;};o.prototype.cloneAndZoom=function(p){'use strict';var q=this.clone();q.setZoom(p);return q;};o.prototype.cloneAndMove=function(p,q){'use strict';var r=this.clone();r.moveByPixels(p,q);return r;};o.prototype.$PhotoZoomCropDimensions7=function(p,q){'use strict';var r=this.$PhotoZoomCropDimensions3.x/2,s=this.$PhotoZoomCropDimensions3.y/2;return new (c('BasicVector'))(c('clamp')(q.x,r,p.x-r),c('clamp')(q.y,s,p.y-s));};o.prototype.$PhotoZoomCropDimensions6=function(){'use strict';var p=this.$PhotoZoomCropDimensions2.mul(this.$PhotoZoomCropDimensions5);return {imageSize:p,center:this.$PhotoZoomCropDimensions7(p,this.$PhotoZoomCropDimensions1.mul(p.x,p.y))};};o.isSquare=function(p){'use strict';return Math.abs(p.x/p.y-1)<l;};o.fromProfilePhotoData=function(p,q){'use strict';var r=new (c('BasicVector'))(p.original.width,p.original.height),s=new o(r),t=void 0;if(q){t=q;}else if(p.previousprofilepic){t=p.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}};}else t=c('SpotlightProfilePicCropOptions').getOptionsAsRatio(p,r);if(t.center)s.setCenter(t.center.x,t.center.y);if(t.size&&t.size.x){var u=t.size.x*r.x;s.setZoom(s.getSize().x/u);}return s;};f.exports=o;}),null);
__d('PhotoZoomCropImagePreview.react',['cx','Image.react','PhotoZoomCropDimensions','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.dimensions,o=m.size,p=n.getSize().x/o.x;if(p!==1)n=n.clone().setSize(o.x,o.y).setZoom(n.getZoom()/p);var q=null;if(this.props.overlay)q=c('React').createElement('div',{className:"_1_fc"},this.props.overlay);return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_1k3v"),style:babelHelpers['extends']({},this.props.style||{},{height:o.y,width:o.x})}),c('React').createElement(c('Image.react'),{className:"_1k3w",src:this.props.src,style:n.getPosition()}),q);};function l(){'use strict';i.apply(this,arguments);}l.propTypes={dimensions:k.instanceOf(c('PhotoZoomCropDimensions')).isRequired,overlay:k.element,size:k.shape({x:k.number.isRequired,y:k.number.isRequired}).isRequired,src:k.oneOfType([k.string,k.object])};f.exports=l;}),null);
__d('PhotoZoomCropImage.react',['cx','fbt','ix','Event','Image.react','Keys','PhotoZoomCropImagePreview.react','React','UserAgent','Vector','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('React').PropTypes,n=5;k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.state={moved:false},this.$PhotoZoomCropImage5=function(u){this.$PhotoZoomCropImage2=null;var v=0,w=0;switch(c('Event').getKeyCode(u)){case c('Keys').DOWN:w=n;break;case c('Keys').LEFT:v=-n;break;case c('Keys').RIGHT:v=n;break;case c('Keys').UP:w=-n;break;}if(v||w){this.props.onMove(v,w);this.setState({moved:true});}}.bind(this),this.$PhotoZoomCropImage6=function(u){if(this.$PhotoZoomCropImage2)return;u.preventDefault();this.$PhotoZoomCropImage2=c('Vector').getEventPosition(u);}.bind(this),this.$PhotoZoomCropImage3=function(u){var v=this.$PhotoZoomCropImage2;if(!v||!this.props.enableDrag)return;var w=c('Vector').getEventPosition(u),x=v.sub(w);this.props.onMove(x.x,x.y);this.setState({moved:true});this.$PhotoZoomCropImage2=w;}.bind(this),this.$PhotoZoomCropImage4=function(){this.$PhotoZoomCropImage2=null;}.bind(this),q;}o.prototype.componentDidMount=function(){'use strict';var p=c('UserAgent').isBrowser('IE < 9')?document.documentElement:window;this.$PhotoZoomCropImage1=c('Event').listen(p,{mousemove:this.$PhotoZoomCropImage3,mouseup:this.$PhotoZoomCropImage4});};o.prototype.componentWillUnmount=function(){'use strict';if(this.$PhotoZoomCropImage1)for(var p in this.$PhotoZoomCropImage1){this.$PhotoZoomCropImage1[p]&&this.$PhotoZoomCropImage1[p].remove();this.$PhotoZoomCropImage1[p]=null;}};o.prototype.render=function(){'use strict';var p=this.props.dimensions,q=p.getSize(),r=null;if(this.props.overlay)r=c('React').createElement('div',{className:"_290-"},this.props.overlay);var s=null;if(this.props.customControls){s=c('React').createElement('div',{className:!this.props.enableDrag?"_3dfz":''},this.props.customControls);}else s=c('React').createElement('div',{className:"_3dfy"+(this.state.moved||!this.props.enableDrag?' '+"_3dfz":'')},c('React').createElement('span',{className:"_3df-"},c('React').createElement(c('Image.react'),{className:"_3-8_ _3df_",src:j("22701")}),i._("Drag to Reposition")));return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_4on5"),style:babelHelpers['extends']({},this.props.style||{},{height:q.y,width:q.x})}),c('React').createElement(c('PhotoZoomCropImagePreview.react'),{dimensions:p,onKeyDown:this.$PhotoZoomCropImage5,overlay:this.props.overlay,size:q,src:this.props.src,tabIndex:0}),s,c('React').createElement(c('Image.react'),{className:"_4on7"+(!this.props.enableDrag?' '+"_3mk2":''),onDragStart:c('Event').prevent,onMouseDown:this.$PhotoZoomCropImage6,src:this.props.src,style:p.getPosition()}),r);};o.propTypes={customControls:m.element,dimensions:m.object,enableDrag:m.bool,onMove:m.func,overlay:m.element,src:m.oneOfType([m.string,m.object])};o.defaultProps={enableDrag:true};f.exports=o;}),null);
__d('PhotoZoomCropMixin',['ix','cx','invariant','xuiglyph','React','Image.react'],(function a(b,c,d,e,f,g,h,i,j,k){var l={getDimensions:function m(){return this._dims;},resetDimensions:function m(){this.setState(this.getInitialState());},_handleMove:function m(n,o){this._dims.moveByPixels(n,o);this.setState(this._getDimensionsState());},_handleZoom:function m(n,o){this._dims.setZoom(n[0]);var p=this._getDimensionsState();p.position=o||n[0];this.setState(p);},_getDimensionsState:function m(){return {dimensions:this._dims.getPosition(),zoom:this._dims.getZoom()};},_getMessage:function m(){var n,o;this.__getZoom||j(0);if(this.__getZoom()>1&&this.props.warningText){n=h("89108");o=this.props.warningText;}else if(this.props.messageText){n=h("89336");o=this.props.messageText;}else return null;return this._getMessageMarkup(n,o);},_getMessageMarkup:function m(n,o){return c('React').createElement('div',{className:"_aym"},c('React').createElement(c('Image.react'),{className:"_a63",src:n}),o);}};f.exports=l;}),null);
__d('ProfileHeaderSpinner.react',['cx','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';if(!this.props.shown)return null;return c('React').createElement('div',{className:"_5mb0"},c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large'}));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('ProfileHeaderViewShapes',['React'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=h.shape({focus:h.shape({height:h.number,width:h.number}),original:h.shape({height:h.number,width:h.number}),permalinkURI:h.string,source:h.number,uri:h.string});f.exports={COVER_PHOTO_DATA:i};}),null);
__d('ProfileWizardStrings',['fbt'],(function a(b,c,d,e,f,g,h){var i={CANCEL:h._("Cancel"),CHOOSE_FROM_MY_PHOTOS:h._("Choose From My Photos"),COVER_PHOTO_CHANGE_NOTICE:h._("Change your cover photo any time from the camera icon."),COVER_PHOTO_LEAVE_WARNING:h._("The changes you made to your cover photo haven't been saved."),PROFILE_PICTURE_CHANGE_NOTICE:h._("Change your profile picture any time from the camera icon."),SAVE:h._("Save"),UPDATE_COVER_PHOTO:h._("Update Cover Photo"),UPLOAD_PHOTO:h._("Upload Photo"),UPDATE_PROFILE_PICTURE:h._("Update Profile Picture")};f.exports=i;}),null);
__d('ProfileHeaderCoverPhoto.react',['cx','BasicVector','PhotoZoomCropDimensions','PhotoZoomCropMixin','PagesProfileTestID','ProfileHeaderViewShapes','ProfileWizardStrings','React','ReactComponentWithPureRenderMixin','PhotoZoomCropImage.react','ProfileHeaderSpinner.react','XUIButton.react'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('React').createClass({displayName:'ProfileHeaderCoverPhoto',_dims:null,mixins:[c('PhotoZoomCropMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{coverPhotoData:c('ProfileHeaderViewShapes').COVER_PHOTO_DATA.isRequired,customControls:i.element,emptyCover:i.element,height:i.number.isRequired,isHidden:i.bool,isLoading:i.bool,previewCancelHandler:i.func,previewMode:i.bool,previewSaveHandler:i.func,width:i.number.isRequired},getDefaultProps:function k(){return {previewCancelHandler:function l(){},previewSaveHandler:function l(){}};},getInitialState:function k(){this._updateDimensions(this.props.coverPhotoData);return babelHelpers['extends']({},this._getUpdatedDimensionsState());},componentWillReceiveProps:function k(l){var m=this.props.coverPhotoData;if(m.id===l.coverPhotoData.id&&this.props.previewMode===l.previewMode){var n=m.focus;if(!n)return;if(n.width===l.coverPhotoData.focus.width&&n.height===l.coverPhotoData.focus.height)return;}this._updateDimensions(l.coverPhotoData,l.height);this.setState(babelHelpers['extends']({},this._getUpdatedDimensionsState()));},_updateDimensions:function k(l,m){var n=l.original;if(n==null)return;var o=new (c('BasicVector'))(n.width,n.height),p=new (c('PhotoZoomCropDimensions'))(o);p.setSize(this.props.width,m||this.props.height);var q=l.focus;if(q)p.setCenter(q.width,q.height);p.setZoom(p.getSize().x/n.width);this._dims=p;},_getUpdatedDimensionsState:function k(){return this._getDimensionsState();},render:function k(){var l=this.props.coverPhotoData,m=void 0;if(l.uri){var n=!!(this.props.previewMode&&this._dims&&this._dims.isCurrentlyDragable());m=c('React').createElement(c('PhotoZoomCropImage.react'),{className:"_2oru"+(this.props.isHidden||this.props.isLoading?' '+"_2orv":''),customControls:this.props.customControls,dimensions:this._dims,enableDrag:n,onMove:this._handleMove,src:l.uri});}else if(this.props.emptyCover){m=this.props.emptyCover;}else m=c('React').createElement('div',{className:"_2orw"});var o=null;if(this.props.previewMode&&!this.props.customControls)o=c('React').createElement('div',{className:"_1tg"},c('React').createElement('div',{className:"_1th"},c('React').createElement(c('XUIButton.react'),{'data-testid':c('PagesProfileTestID').COVER_PHOTO_SAVE_BUTTON,label:c('ProfileWizardStrings').SAVE,onClick:this.props.previewSaveHandler,size:'large',use:'confirm'}),c('React').createElement(c('XUIButton.react'),{label:c('ProfileWizardStrings').CANCEL,onClick:this.props.previewCancelHandler,size:'large'})));return c('React').createElement('div',{className:"_2orx",style:{height:this.props.height,width:this.props.width}},m,o,c('React').createElement(c('ProfileHeaderSpinner.react'),{shown:this.props.isLoading}));},getOffsets:function k(){var l=this.getDimensions().getPosition();return {x:l.left/l.width,y:l.top/l.height};},getCenter:function k(){var l=this.getDimensions().getRect();return l.center;},__getZoom:function k(){return this.state.zoom;}});f.exports=j;}),null);
__d('PagesMessengerContextBanner.react',['cx','MercuryThreadImage.react','ProfileHeaderCoverPhoto.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=83,l=260,m=60;i=babelHelpers.inherits(n,c('React').PureComponent);j=i&&i.prototype;n.prototype.render=function(){return c('React').createElement('div',{style:this.props.style},c('React').createElement(c('ProfileHeaderCoverPhoto.react'),{coverPhotoData:this.props.coverData.cover_photo.coverPhotoData,height:k,width:l}),c('React').createElement('div',{className:"_2-0o"},c('React').createElement(c('MercuryThreadImage.react'),{size:m,thread:this.props.thread,viewer:this.props.viewer})));};function n(){i.apply(this,arguments);}f.exports=n;}),null);
__d('MessengerContextBannerContainer.react',['DOMDimensions','immutable','MercuryIDs','MercuryParticipants','MercuryThreads','MessengerContextBanner.react','MessengerContextInformationStore','PagesMessagingMercuryChatTabStore','PagesMessengerContextBanner.react','ReactComponentWithPureRenderMixin','React','ReactDOM','MercuryShareAttachmentRenderLocations','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g){'use strict';var h=c('React').PropTypes,i=c('React').createClass({displayName:'MessengerContextBannerContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'),c('MercuryThreads'),c('MessengerContextInformationStore'),c('PagesMessagingMercuryChatTabStore'))],propTypes:{location:h.string.isRequired,onResize:h.func,otherUserFBIDs:h.arrayOf(h.string),threadID:h.string,viewer:h.string.isRequired},statics:{calculateState:function j(k){var l=null,m=null;if(k.threadID){l=c('MercuryThreads').getForFBID(k.viewer).getOrFetch(k.threadID);m=l&&l.participants;}else if(k.otherUserFBIDs&&k.otherUserFBIDs.length===1)m=k.otherUserFBIDs.map(function(t){return c('MercuryParticipants').getIDFromVanityOrFBID(t);});var n=c('immutable').Map();if(m)n=n.withMutations(function(t){m&&m.forEach(function(u){t.set(u,c('MercuryParticipants').getOrFetch(u));});});var o=null,p=null;if(l){o=n.get(c('MercuryIDs').getParticipantIDFromFromThreadID(l.thread_id));p=l.associated_object;}else o=m&&n.get(m[0]);var q=c('PagesMessagingMercuryChatTabStore').getStateByThread(k.threadID),r=q.pagesMessengerNullStateGK,s=q.coverData;return babelHelpers['extends']({associatedObject:p,contact:o,coverData:s,participantIDs:m,participants:n,showPagesNullState:r,thread:l},i.getContextInformation(o&&o.fbid&&o.fbid.toString()));},getContextInformation:function j(k){var l=void 0;if(k)l=c('MessengerContextInformationStore').getOrFetch(k.toString());return l||{connectionContext:'',contextItems:[]};}},componentDidUpdate:function j(){var k=c('ReactDOM').findDOMNode(this);if(!k)return;var l=c('DOMDimensions').getElementDimensions(k).height;if(this.props.onResize)this.props.onResize(l);},render:function j(){if(!this.state.contact){if(this.state.associatedObject&&this.props.location==c('MercuryShareAttachmentRenderLocations').MESSENGER)return c('React').createElement(c('MessengerContextBanner.react'),{associatedObject:this.state.associatedObject,contextItems:this.state.contextItems,location:this.props.location,participantIDs:this.state.participantIDs,participants:this.state.participants,style:this.props.style,thread:this.state.thread,viewer:this.props.viewer});return null;}if(this.state.contact.type==='page'){if(!this.state.connectionContext&&!this.state.contextItems.length)return null;if(this.state.showPagesNullState&&this.props.location===c('MercuryShareAttachmentRenderLocations').CHAT)return c('React').createElement(c('PagesMessengerContextBanner.react'),{coverData:this.state.coverData,style:this.props.style,thread:this.state.thread,viewer:this.props.viewer});}return c('React').createElement(c('MessengerContextBanner.react'),{contactName:this.state.contact.name,connectionContext:this.state.connectionContext,contextItems:this.state.contextItems,isVerified:this.state.contact.is_verified,location:this.props.location,participantIDs:this.state.participantIDs,participants:this.state.participants,style:this.props.style,thread:this.state.thread,viewer:this.props.viewer});}});f.exports=i;}),null);