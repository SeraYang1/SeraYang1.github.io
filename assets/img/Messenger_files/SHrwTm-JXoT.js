if (self.CavalryLogger) { CavalryLogger.start_js(["iayjj"]); }

__d("P2PPaymentRequestStatus",[],(function a(b,c,d,e,f,g){f.exports={INITED:1,DECLINED:2,TRANSFER_INITED:3,TRANSFER_COMPLETED:4,TRANSFER_FAILED:5,CANCELED:6,EXPIRED:7};}),null);
__d("P2PTransferStatus",[],(function a(b,c,d,e,f,g){f.exports={PENDING_SENDER_MANUAL_REVIEW:1,PENDING_SENDER_VERIFICATION:2,CANCELED_SENDER_RISK:3,PENDING_RECIPIENT_NUX:4,CANCELED_DECLINED:5,PENDING_RECIPIENT_VERIFICATION:6,PENDING_RECIPIENT_MANUAL_REVIEW:7,PENDING_RECIPIENT_PROCESSING:8,PENDING_PUSH_FAIL:9,CANCELED_RECIPIENT_RISK:10,CANCELED_SYSTEM_FAIL:11,CANCELED_EXPIRED:12,COMPLETED:13,INTERMEDIATE_PROCESSING:14,PENDING_SENDER_INITED:15,CANCELED_SAME_CARD:16,PENDING_SENDER_VERIFICATION_PROCESSING:17,PENDING_RECIPIENT_VERIFICATION_PROCESSING:18};}),null);
__d("StickerConstants",[],(function a(b,c,d,e,f,g){f.exports={MOBILE_LIKE_STICKER_PACK_ID:"227877430692340",GRAVEYARD_PACK_ID:"604597256247273",LIKE_STICKER_ID:"227878347358915",HOT_LIKE_SMALL_STICKER_ID:"369239263222822",HOT_LIKE_MEDIUM_STICKER_ID:"369239343222814",HOT_LIKE_LARGE_STICKER_ID:"369239383222810",MRU_STICKER_PACK:"599061016853145",SEARCH_PACK_ID:"680229632032514",OZ_PACK_ID:"1456625217993235",SPRITE_PADDING:"24",PayloadSource:{VIEW_ACTION:"view-action"},EMOTICON_PACK_ID:"1471127876485636",DEFAULT_FRAME_RATE:83,TRAY_SIZE:64,THREAD_SIZE:120};}),null);
__d('MercuryTriodeSourceUtil',['MessengerEnvironment','MercurySourceType'],(function a(b,c,d,e,f,g){'use strict';var h={getMercuryTriodeSource:function i(){return c('MessengerEnvironment').messengerdotcom?c('MercurySourceType').MESSENGER_WEB:c('MercurySourceType').TITAN_WEB;}};f.exports=h;}),null);
__d('StickerContextualDialog.react',['cx','ContextualLayerAutoFlipHorizontal','MercuryConfig','ReactAbstractContextualDialog','ReactLayer'],(function a(b,c,d,e,f,g,h){'use strict';var i=7,j=c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({addedBehaviors:[c('ContextualLayerAutoFlipHorizontal')],displayName:'StickerXUIContextualDialog',theme:{wrapperClassName:"_53ii",arrowDimensions:{offset:i,length:16}}}));j.WIDTH={NORMAL:312,WIDE:400};f.exports=j;}),null);
__d('StickersDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('ExplicitRegistrationDispatcher'))({strict:false});}),null);
__d('StickersActions',['StickersDispatcher','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({ADD_RECENT_STICKER:null,HIDE_FLYOUT:null,LOAD_RECENT_STICKERS:null,SELECT_STORE_PACK:null,SELECT_TRAY_PACK:null,SHOW_FLYOUT:null,TRAY_LOADED:null}),i={Types:h,addRecentSticker:function j(k){c('StickersDispatcher').dispatch({type:h.ADD_RECENT_STICKER,sticker:k});},hideStickerFlyout:function j(){c('StickersDispatcher').dispatch({type:h.HIDE_FLYOUT});},loadRecentStickers:function j(k){c('StickersDispatcher').dispatch({type:h.LOAD_RECENT_STICKERS,stickers:k});},selectStorePack:function j(k){c('StickersDispatcher').dispatch({type:h.SELECT_STORE_PACK,packID:k});},selectTrayPack:function j(k){c('StickersDispatcher').dispatch({type:h.SELECT_TRAY_PACK,packID:k});},showStickerFlyout:function j(k){c('StickersDispatcher').dispatch({type:h.SHOW_FLYOUT,threadID:k});},trayLoaded:function j(){c('StickersDispatcher').dispatch({type:h.TRAY_LOADED});}};f.exports=i;}),null);
__d('FluxStore',['invariant','EventEmitter'],(function a(b,c,d,e,f,g,h){'use strict';function i(k){this.__className=this.constructor.name;this.__changed=false;this.__changeEvent='change';this.__dispatcher=k;this.__emitter=new (c('EventEmitter'))();this.$FluxStore1=k.register(function(l){this.__invokeOnDispatch(l);}.bind(this),this.__getIDForDispatcher());}i.prototype.addListener=function(k){return this.__emitter.addListener(this.__changeEvent,k);};i.prototype.getDispatcher=function(){return this.__dispatcher;};i.prototype.getDispatchToken=function(){return this.$FluxStore1;};i.prototype.hasChanged=function(){this.__dispatcher.isDispatching()||h(0);return this.__changed;};i.prototype.__emitChange=function(){this.__dispatcher.isDispatching()||h(0);this.__changed=true;};i.prototype.__invokeOnDispatch=function(k){this.__changed=false;this.__onDispatch(k);if(this.__changed)this.__emitter.emit(this.__changeEvent);};i.prototype.__onDispatch=function(k){h(0);};i.prototype.__getIDForDispatcher=function(){return this.__className;};var j=i;f.exports=i;}),18);
__d('TypedFluxStore',['FluxStore'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('FluxStore');}),18);
__d('abstractMethod',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';function i(j,k){h(0);}f.exports=i;}),null);
__d('FluxReduceStore',['invariant','TypedFluxStore','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k,l;i=babelHelpers.inherits(m,c('TypedFluxStore'));j=i&&i.prototype;function m(p){j.constructor.call(this,p);this.$FluxReduceStore1=this.getInitialState();}m.prototype.getState=function(){return this.$FluxReduceStore1;};m.prototype.getInitialState=function(){return c('abstractMethod')('FluxReduceStore','getInitialState');};m.prototype.reduce=function(p,q){return c('abstractMethod')('FluxReduceStore','reduce');};m.prototype.areEqual=function(p,q){return p===q;};m.prototype.__invokeOnDispatch=function(p){this.__changed=false;var q=this.$FluxReduceStore1,r=this.reduce(q,p);r!==undefined||h(0);if(!this.areEqual(q,r)){this.$FluxReduceStore1=r;this.__emitChange();}if(this.__changed)this.__emitter.emit(this.__changeEvent);};var n=m;k=babelHelpers.inherits(o,m);l=k&&k.prototype;function o(){k.apply(this,arguments);}f.exports=n;}),18);
__d('StickersStateStore',['FluxReduceStore','immutable','StickersActions','StickersConfig','StickersDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return new (c('immutable').Map)({recentStickers:[],recentStickersLoaded:false,showFlyout:false,storePackID:null,threadID:null,trayLoaded:false,trayPackID:null});};j.prototype.reduce=function(k,l){var m=l,n=c('StickersActions').Types;switch(m.type){case n.ADD_RECENT_STICKER:var o=[m.sticker];k.get('recentStickers').forEach(function(p){if(p.id===m.sticker.id)return;o.push(p);});return k.set('recentStickers',o.splice(0,c('StickersConfig').max_mru_stickers));case n.HIDE_FLYOUT:return k.set('showFlyout',false);case n.LOAD_RECENT_STICKERS:return k.set('recentStickersLoaded',true).set('recentStickers',m.stickers);case n.SELECT_STORE_PACK:return k.set('storePackID',m.packID);case n.SELECT_TRAY_PACK:return k.set('trayPackID',m.packID).set('trayLoaded',true);case n.SHOW_FLYOUT:return k.set('showFlyout',true).set('threadID',m.threadID);case n.TRAY_LOADED:return k.set('trayLoaded',true);default:return k;}};function j(){h.apply(this,arguments);}f.exports=new j(c('StickersDispatcher'));}),null);
__d('ChatStickerButton.react',['cx','fbt','BootloadedComponent.react','JSResource','Link.react','React','StickerContextualDialog.react','StickersActions','StickersStateStore','TimeSliceInteraction','XUISpinner.react','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=278;j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.$ChatStickerButton1=false;this.renderLayers=function(){if(!this.state.shown)return null;var p=this.props.ContextualDialogClass;return c('React').createElement(p,{alignment:this.props.flyoutAlignment,className:"_5e-r",contextRef:function(){return this.refs.link;}.bind(this),onBeforeHide:this.$ChatStickerButton5,onBlur:this.$ChatStickerButton3,position:'above',shown:this.state.shown,width:this.props.flyoutWidth,key:'contextualDialog'},c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('div',{style:{padding:'30px',textAlign:'center'}},c('React').createElement(c('XUISpinner.react'),{size:'large'})),bootloadLoader:c('JSResource')('StickersFlyout.react').__setRef('ChatStickerButton.react'),className:this.props.flyoutClassName,onShown:function(q){if(this.props.onFlyoutShown)this.props.onFlyoutShown(q);}.bind(this),onHidden:function(){if(this.props.onFlyoutHidden)this.props.onFlyoutHidden();}.bind(this),onEscKeyDown:this.$ChatStickerButton3,onStickerSelect:this.$ChatStickerButton6,onEmoticonSelect:this.$ChatStickerButton7,shown:this.state.shown}));}.bind(this);this.$ChatStickerButton4=function(){this.$ChatStickerButton1=this.state.shown;}.bind(this);this.showFlyout=function(p){p&&p.stopPropagation();if(this.$ChatStickerButton1||this.props.disabled){this.$ChatStickerButton1=false;return;}c('TimeSliceInteraction').createAutoclosed('chat_sticker_flyout_show');c('StickersActions').showStickerFlyout(this.props.threadID);}.bind(this);this.$ChatStickerButton5=function(){if(this.state.shown)this.$ChatStickerButton3();}.bind(this);this.$ChatStickerButton3=function(){c('StickersActions').hideStickerFlyout();};this.$ChatStickerButton6=function(p){this.props.onStickerSelect(p);}.bind(this);this.$ChatStickerButton7=function(p){this.$ChatStickerButton3();this.props.onEmoticonSelect(p);}.bind(this);this.state={shown:!!o.clicked};}n.prototype.componentDidMount=function(){this.props.onLoad&&this.props.onLoad(this);this.$ChatStickerButton2=c('StickersStateStore').addListener(function(){var o=c('StickersStateStore').getState();if(o.get('showFlyout')&&o.get('threadID')===this.props.threadID){if(this.$ChatStickerButton1||this.props.disabled){this.$ChatStickerButton1=false;return;}this.setState({shown:true});}else{var p=this.props.getInput&&this.props.getInput();p&&p.focus&&p.focus();this.setState({shown:false});}}.bind(this));};n.prototype.componentWillUnmount=function(){if(this.state.shown)this.$ChatStickerButton3();this.$ChatStickerButton2&&this.$ChatStickerButton2.remove();};n.prototype.render=function(){return c('React').createElement('span',null,c('React').createElement(c('Link.react'),{className:c('joinClasses')(this.props.className,this.state.shown?"open":''),href:'#',onClick:this.showFlyout,onMouseDown:this.$ChatStickerButton4,role:'button',title:i._("Choose a sticker"),ref:'link'}),this.renderLayers());};n.propTypes={className:l.string,clicked:l.bool,ContextualDialogClass:l.func.isRequired,disabled:l.bool,flyoutClassName:l.string,flyoutWidth:l.number,getInput:l.func,onLoad:l.func,onStickerSelect:l.func.isRequired,onEmoticonSelect:l.func.isRequired,onFlyoutShown:l.func,onFlyoutHidden:l.func,threadID:l.string};n.defaultProps={clicked:false,ContextualDialogClass:c('StickerContextualDialog.react'),disabled:false,flyoutWidth:m,onStickerSelect:c('emptyFunction'),onEmoticonSelect:c('emptyFunction')};f.exports=n;}),null);
__d('SoundPlayer',['URI','createArrayFromMixed','Map'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('Map'))();function i(l){var m=new (c('URI'))(l);return m.getDomain()?l:new (c('URI'))(window.location.href).setPath(m.getPath()).toString();}function j(l){var m=new (c('URI'))(l).getPath();if(/\.mp3$/.test(m))return 'audio/mpeg';if(/\.og[ga]$/.test(m))return 'audio/ogg';return '';}var k={preload:function l(m){for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q;if(h.has(r))return;var s=document.createElement('audio');if(!s||!s.canPlayType||!s.canPlayType(j(r)))continue;s.preload='auto';s.src=i(r);document.body&&document.body.appendChild(s);h.set(r,s);return;}},play:function l(m){var n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];for(var o=c('createArrayFromMixed')(m),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;if(!h.has(s))k.preload(s);var t=h.get(s);if(!t)continue;if(n.loop)t.setAttribute('loop','');if(n.volume)t.volume=n.volume;t.play();return;}},pause:function l(m){for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,s=h.get(r);if(s){s.pause();return;}}},stop:function l(m){for(var n=c('createArrayFromMixed')(m),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,s=h.get(r);if(s){s.pause();s.removeAttribute('src');s.src=i(r);return;}}}};f.exports=k;}),null);
__d('Grid.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m=c('React').PropTypes;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.prototype.render=function(){'use strict';var p=this.props,q=p.alignh,r=p.alignv,s=p.children,t=p.cols,u=p.fixed,v=p.spacing,w=c('React').Children.count(s),x=[],y=[],z=0;c('React').Children.forEach(s,function(aa,ba){if(aa===null||aa===undefined)return;var ca=aa.type===o;z+=ca?Math.max(aa.props.colSpan||0,1):1;var da=z===t?"_51mw":'';if(!ca){aa=c('React').createElement(o,{alignh:q,alignv:r,className:c('joinClasses')(v,da),key:aa.key||ba},aa);}else aa=c('React').cloneElement(aa,{key:aa.key||ba,alignh:aa.props.alignh||q,alignv:aa.props.alignv||r,className:c('joinClasses')(aa.props.className,v,da)});y.push(aa);if(z%t===0||ba+1===w){if(u&&z<t){for(var ea=z;ea<t;ea++)y.push(c('React').createElement(o,{key:ba+ea}));z=t;}x.push(c('React').createElement('tr',{className:"_51mx",key:ba},y));y=[];z=0;}});return c('React').createElement('table',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"uiGrid"+(' '+"_51mz")+(u?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),c('React').createElement('tbody',null,x));};function n(){'use strict';i.apply(this,arguments);}n.propTypes={cols:m.number.isRequired,fixed:m.bool,alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right']),spacing:m.string};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;o.prototype.render=function(){'use strict';var p=c('joinClasses')(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return c('React').createElement('td',babelHelpers['extends']({},this.props,{className:p}));};function o(){'use strict';k.apply(this,arguments);}o.propTypes={alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right'])};n.GridItem=o;f.exports=n;}),null);
__d('StoreBasedStateMixinHelper',['invariant','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){'use strict';function i(j){this.$StoreBasedStateMixinHelper1=j;this.$StoreBasedStateMixinHelper2=new (c('SubscriptionsHandler'))();}i.prototype.subscribeCallback=function(j){var k=this.$StoreBasedStateMixinHelper1.map(function(l){if(l.hasChanged&&l.getDispatchToken&&l.addListener){return l.addListener(j);}else if(l.subscribe){return l.subscribe('change',j);}else if(l.addListener){return l.addListener('change',j);}else h(0);});if(this.$StoreBasedStateMixinHelper1.length>0)this.$StoreBasedStateMixinHelper2.addSubscriptions.apply(this.$StoreBasedStateMixinHelper2,k);};i.prototype.release=function(){this.$StoreBasedStateMixinHelper2.release();};f.exports=i;}),null);
__d('StoreAndPropBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function m(){return this.constructor.calculateState(this.props);},componentWillMount:function m(){this.constructor.calculateState||h(0);this._recalculateStateID=null;var n=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(n);}.bind(this));},componentWillReceiveProps:function m(n){this.setState(this.constructor.calculateState(n));},componentWillUnmount:function m(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;}),null);