if (self.CavalryLogger) { CavalryLogger.start_js(["CIZHT"]); }

__d("messengerInfoPanelNicknamesReact",["cx","fbt","bs_curry","React","keysRe","reactRe","utilsRe","messengerDialogsRe","messengerCustomColorUtilsRe","messengerEditNicknamesDialogReact","messengerEditNicknamesIconSVGReact"],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c("reactRe").Component[10],k=j[0],l=j[1],m=j[2],n=j[3],o=j[4],p=j[5],q=j[6],r="MessengerInfoPanelNicknamesReact";function s(){return [0];}function t(fa,ga){var ha=fa[4][0];if(ha)ha[0].focus();return 0;}function u(fa){var ga=fa[2],ha=fa[1];return c("messengerDialogsRe").showDialog(function(){return c("bs_curry")._4(c("messengerEditNicknamesDialogReact").createElement(ha[0],ha[1],ha[3],c("bs_curry")._1(ga,t),ha[2]),0,0,0,0);});}function v(fa,ga){ga.preventDefault();u(fa);return 0;}function w(fa,ga){if(ga.keyCode===c("keysRe").$$return){ga.preventDefault();u(fa);}return 0;}function x(fa,ga){fa[4][0]=[ga];return 0;}function y(fa){var ga=fa[2],ha=fa[1];if(c("utilsRe").isTruthy(ha[1].customization_enabled)){var ia=c("messengerCustomColorUtilsRe").customColorOrBlue(ha[1]);return c("React").createElement("div",{ref:c("bs_curry")._1(fa[3],x),className:"_3szn _3szo",role:"button",tabIndex:0,onKeyDown:c("bs_curry")._1(ga,w),onClick:c("bs_curry")._1(ga,v)},c("React").createElement("div",{className:"_3szp"},c("bs_curry")._4(c("messengerEditNicknamesIconSVGReact").createElement("_5odt",ia),0,0,0,0)),c("React").createElement("div",{className:"_3szq"},i._("Edit Nicknames")));}else return null;}var z=j[7],aa=[k,l,m,n,o,p,q,z,r,s,t,u,v,w,x,y],ba=c("reactRe").CreateComponent([r,s,p,k,n,l,m,o,q,y]),ca=ba[1];function da(fa,ga,ha,ia){return c("bs_curry")._1(ca,[fa,ga,ha,ia]);}var ea=ba[0];g.MessengerInfoPanelNicknames=aa;g.comp=ea;g.wrapProps=ca;g.createElement=da;}),null);