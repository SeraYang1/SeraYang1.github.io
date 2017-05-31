if (self.CavalryLogger) { CavalryLogger.start_js(["KYVSO"]); }

__d('bs_char',['bs_caml_string','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){'use strict';function h(m){if(m<0||m>255){throw [c('bs_caml_builtin_exceptions').invalid_argument,"Char.chr"];}else return m;}function i(m){var n=0;if(m>=40){if(m!==92){n=m>=127?1:2;}else return "\\\\";}else if(m>=32){if(m>=39){return "\\'";}else n=2;}else if(m>=14){n=1;}else switch(m){case 8:return "\\b";case 9:return "\\t";case 10:return "\\n";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 11:case 12:n=1;break;case 13:return "\\r";}switch(n){case 1:var o=new Array(4);o[0]=92;o[1]=48+(m/100|0)|0;o[2]=48+(m/10|0)%10|0;o[3]=48+m%10|0;return c('bs_caml_string').bytes_to_string(o);case 2:var p=new Array(1);p[0]=m;return c('bs_caml_string').bytes_to_string(p);}}function j(m){if(m>=65&&m<=90||m>=192&&m<=214||m>=216&&m<=222){return m+32|0;}else return m;}function k(m){if(m>=97&&m<=122||m>=224&&m<=246||m>=248&&m<=254){return m-32|0;}else return m;}function l(m,n){return m-n|0;}g.chr=h;g.escaped=i;g.lowercase=j;g.uppercase=k;g.compare=l;}),null);
__d('bs_bytes',['bs_char','bs_list','bs_curry','bs_caml_obj','bs_caml_int32','bs_pervasives','bs_caml_string','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g){'use strict';function h(ta,ua){var va=c('bs_caml_string').caml_create_string(ta);c('bs_caml_string').caml_fill_string(va,0,ta,ua);return va;}function i(ta,ua){var va=c('bs_caml_string').caml_create_string(ta);for(var wa=0,xa=ta-1|0;wa<=xa;++wa)va[wa]=c('bs_curry')._1(ua,wa);return va;}var j=[];function k(ta){var ua=ta.length,va=c('bs_caml_string').caml_create_string(ua);c('bs_caml_string').caml_blit_bytes(ta,0,va,0,ua);return va;}function l(ta){return c('bs_caml_string').bytes_to_string(k(ta));}function m(ta){return k(c('bs_caml_string').bytes_of_string(ta));}function n(ta,ua,va){if(ua<0||va<0||ua>(ta.length-va|0)){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.sub / Bytes.sub"];}else{var wa=c('bs_caml_string').caml_create_string(va);c('bs_caml_string').caml_blit_bytes(ta,ua,wa,0,va);return wa;}}function o(ta,ua,va){return c('bs_caml_string').bytes_to_string(n(ta,ua,va));}function p(ta,ua,va){var wa=(ta.length+ua|0)+va|0,xa=c('bs_caml_string').caml_create_string(wa),ya=ua<0?[-ua|0,0]:[0,ua],za=ya[1],ab=ya[0],bb=c('bs_pervasives').min(ta.length-ab|0,wa-za|0);if(bb>0)c('bs_caml_string').caml_blit_bytes(ta,ab,xa,za,bb);return xa;}function q(ta,ua,va,wa){if(ua<0||va<0||ua>(ta.length-va|0)){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.fill / Bytes.fill"];}else return c('bs_caml_string').caml_fill_string(ta,ua,va,wa);}function r(ta,ua,va,wa,xa){if(xa<0||ua<0||ua>(ta.length-xa|0)||wa<0||wa>(va.length-xa|0)){throw [c('bs_caml_builtin_exceptions').invalid_argument,"Bytes.blit"];}else return c('bs_caml_string').caml_blit_bytes(ta,ua,va,wa,xa);}function s(ta,ua,va,wa,xa){if(xa<0||ua<0||ua>(ta.length-xa|0)||wa<0||wa>(va.length-xa|0)){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.blit / Bytes.blit_string"];}else return c('bs_caml_string').caml_blit_string(ta,ua,va,wa,xa);}function t(ta,ua){for(var va=0,wa=ua.length-1|0;va<=wa;++va)c('bs_curry')._1(ta,ua[va]);return 0;}function u(ta,ua){for(var va=0,wa=ua.length-1|0;va<=wa;++va)c('bs_curry')._2(ta,va,ua[va]);return 0;}function v(ta,ua){if(ua){var va=ua[0],wa=[0],xa=[0];c('bs_list').iter(function(ab){wa[0]=wa[0]+1|0;xa[0]=xa[0]+ab.length|0;return 0;},ua);var ya=c('bs_caml_string').caml_create_string(xa[0]+c('bs_caml_int32').imul(ta.length,wa[0]-1|0)|0);c('bs_caml_string').caml_blit_bytes(va,0,ya,0,va.length);var za=[va.length];c('bs_list').iter(function(ab){c('bs_caml_string').caml_blit_bytes(ta,0,ya,za[0],ta.length);za[0]=za[0]+ta.length|0;c('bs_caml_string').caml_blit_bytes(ab,0,ya,za[0],ab.length);za[0]=za[0]+ab.length|0;return 0;},ua[1]);return ya;}else return j;}function w(ta,ua){return ta.concat(ua);}function x(ta){var ua=ta-9|0;if(ua>4||ua<0){if(ua!==23){return 0;}else return 1;}else if(ua!==2){return 1;}else return 0;}function y(ta){var ua=ta.length,va=0;while(va<ua&&x(ta[va]))va=va+1|0;var wa=ua-1|0;while(wa>=va&&x(ta[wa]))wa=wa-1|0;if(wa>=va){return n(ta,va,(wa-va|0)+1|0);}else return j;}function z(ta){var ua=0;for(var va=0,wa=ta.length-1|0;va<=wa;++va){var xa=ta[va],ya;if(xa>=32){var za=xa-34|0;ya=za>58||za<0?za>=93?4:1:za>57||za<1?2:1;}else ya=xa>=11?xa!==13?4:2:xa>=8?2:4;ua=ua+ya|0;}if(ua===ta.length){return k(ta);}else{var ab=c('bs_caml_string').caml_create_string(ua);ua=0;for(var bb=0,cb=ta.length-1|0;bb<=cb;++bb){var db=ta[bb],eb=0;if(db>=35){if(db!==92){if(db>=127){eb=1;}else ab[ua]=db;}else eb=2;}else if(db>=32){if(db>=34){eb=2;}else ab[ua]=db;}else if(db>=14){eb=1;}else switch(db){case 8:ab[ua]=92;ua=ua+1|0;ab[ua]=98;break;case 9:ab[ua]=92;ua=ua+1|0;ab[ua]=116;break;case 10:ab[ua]=92;ua=ua+1|0;ab[ua]=110;break;case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 11:case 12:eb=1;break;case 13:ab[ua]=92;ua=ua+1|0;ab[ua]=114;break;}switch(eb){case 1:ab[ua]=92;ua=ua+1|0;ab[ua]=48+(db/100|0)|0;ua=ua+1|0;ab[ua]=48+(db/10|0)%10|0;ua=ua+1|0;ab[ua]=48+db%10|0;break;case 2:ab[ua]=92;ua=ua+1|0;ab[ua]=db;break;}ua=ua+1|0;}return ab;}}function aa(ta,ua){var va=ua.length;if(va){var wa=c('bs_caml_string').caml_create_string(va);for(var xa=0,ya=va-1|0;xa<=ya;++xa)wa[xa]=c('bs_curry')._1(ta,ua[xa]);return wa;}else return ua;}function ba(ta,ua){var va=ua.length;if(va){var wa=c('bs_caml_string').caml_create_string(va);for(var xa=0,ya=va-1|0;xa<=ya;++xa)wa[xa]=c('bs_curry')._2(ta,xa,ua[xa]);return wa;}else return ua;}function ca(ta){return aa(c('bs_char').uppercase,ta);}function da(ta){return aa(c('bs_char').lowercase,ta);}function ea(ta,ua){if(ua.length){var va=k(ua);va[0]=c('bs_curry')._1(ta,ua[0]);return va;}else return ua;}function fa(ta){return ea(c('bs_char').uppercase,ta);}function ga(ta){return ea(c('bs_char').lowercase,ta);}function ha(ta,ua,va,wa){while(true){var xa=va;if(xa>=ua){throw c('bs_caml_builtin_exceptions').not_found;}else if(ta[xa]===wa){return xa;}else{va=xa+1|0;continue;}}}function ia(ta,ua){return ha(ta,ta.length,0,ua);}function ja(ta,ua,va){var wa=ta.length;if(ua<0||ua>wa){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.index_from / Bytes.index_from"];}else return ha(ta,wa,ua,va);}function ka(ta,ua,va){while(true){var wa=ua;if(wa<0){throw c('bs_caml_builtin_exceptions').not_found;}else if(ta[wa]===va){return wa;}else{ua=wa-1|0;continue;}}}function la(ta,ua){return ka(ta,ta.length-1|0,ua);}function ma(ta,ua,va){if(ua<-1||ua>=ta.length){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.rindex_from / Bytes.rindex_from"];}else return ka(ta,ua,va);}function na(ta,ua,va){var wa=ta.length;if(ua<0||ua>wa){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.contains_from / Bytes.contains_from"];}else try{ha(ta,wa,ua,va);return 1;}catch(xa){if(xa===c('bs_caml_builtin_exceptions').not_found){return 0;}else throw xa;}}function oa(ta,ua){return na(ta,0,ua);}function pa(ta,ua,va){if(ua<0||ua>=ta.length){throw [c('bs_caml_builtin_exceptions').invalid_argument,"String.rcontains_from / Bytes.rcontains_from"];}else try{ka(ta,ua,va);return 1;}catch(wa){if(wa===c('bs_caml_builtin_exceptions').not_found){return 0;}else throw wa;}}var qa=c('bs_caml_obj').caml_compare,ra=c('bs_caml_string').bytes_to_string,sa=c('bs_caml_string').bytes_of_string;g.make=h;g.init=i;g.empty=j;g.copy=k;g.of_string=m;g.to_string=l;g.sub=n;g.sub_string=o;g.extend=p;g.fill=q;g.blit=r;g.blit_string=s;g.concat=v;g.cat=w;g.iter=t;g.iteri=u;g.map=aa;g.mapi=ba;g.trim=y;g.escaped=z;g.index=ia;g.rindex=la;g.index_from=ja;g.rindex_from=ma;g.contains=oa;g.contains_from=na;g.rcontains_from=pa;g.uppercase=ca;g.lowercase=da;g.capitalize=fa;g.uncapitalize=ga;g.compare=qa;g.unsafe_to_string=ra;g.unsafe_of_string=sa;}),null);
__d('bs_js_undefined',[],(function a(b,c,d,e,f,g){'use strict';function h(k,l){if(k!==undefined){return l(k);}else return undefined;}function i(k,l){if(k!==undefined){return l(k);}else return 0;}function j(k){if(k){return k[0];}else return undefined;}g.bind=h;g.iter=i;g.from_opt=j;}),null);
__d('bs_string',['bs_list','bs_bytes','bs_caml_int32','bs_caml_string'],(function a(b,c,d,e,f,g){'use strict';function h(ha,ia){return c('bs_caml_string').bytes_to_string(c('bs_bytes').make(ha,ia));}function i(ha,ia){return c('bs_caml_string').bytes_to_string(c('bs_bytes').init(ha,ia));}function j(ha){return c('bs_caml_string').bytes_to_string(c('bs_bytes').copy(c('bs_caml_string').bytes_of_string(ha)));}function k(ha,ia,ja){return c('bs_caml_string').bytes_to_string(c('bs_bytes').sub(c('bs_caml_string').bytes_of_string(ha),ia,ja));}function l(ha,ia){if(ia){var ja=ia[0],ka=[0],la=[0];c('bs_list').iter(function(oa){ka[0]=ka[0]+1|0;la[0]=la[0]+oa.length|0;return 0;},ia);var ma=c('bs_caml_string').caml_create_string(la[0]+c('bs_caml_int32').imul(ha.length,ka[0]-1|0)|0);c('bs_caml_string').caml_blit_string(ja,0,ma,0,ja.length);var na=[ja.length];c('bs_list').iter(function(oa){c('bs_caml_string').caml_blit_string(ha,0,ma,na[0],ha.length);na[0]=na[0]+ha.length|0;c('bs_caml_string').caml_blit_string(oa,0,ma,na[0],oa.length);na[0]=na[0]+oa.length|0;return 0;},ia[1]);return c('bs_caml_string').bytes_to_string(ma);}else return "";}function m(ha,ia){return c('bs_bytes').iter(ha,c('bs_caml_string').bytes_of_string(ia));}function n(ha,ia){return c('bs_bytes').iteri(ha,c('bs_caml_string').bytes_of_string(ia));}function o(ha,ia){return c('bs_caml_string').bytes_to_string(c('bs_bytes').map(ha,c('bs_caml_string').bytes_of_string(ia)));}function p(ha,ia){return c('bs_caml_string').bytes_to_string(c('bs_bytes').mapi(ha,c('bs_caml_string').bytes_of_string(ia)));}function q(ha){var ia=ha-9|0;if(ia>4||ia<0){if(ia!==23){return 0;}else return 1;}else if(ia!==2){return 1;}else return 0;}function r(ha){if(ha===""||!(q(ha.charCodeAt(0))||q(ha.charCodeAt(ha.length-1|0)))){return ha;}else return c('bs_caml_string').bytes_to_string(c('bs_bytes').trim(c('bs_caml_string').bytes_of_string(ha)));}function s(ha){var ia=function ja(ka){while(true){var la=ka;if(la>=ha.length){return 0;}else{var ma=ha.charCodeAt(la);if(ma>=32){var na=ma-34|0;if(na>58||na<0){if(na>=93){return 1;}else{ka=la+1|0;continue;}}else if(na>57||na<1){return 1;}else{ka=la+1|0;continue;}}else return 1;}}};if(ia(0)){return c('bs_caml_string').bytes_to_string(c('bs_bytes').escaped(c('bs_caml_string').bytes_of_string(ha)));}else return ha;}function t(ha,ia){return c('bs_bytes').index(c('bs_caml_string').bytes_of_string(ha),ia);}function u(ha,ia){return c('bs_bytes').rindex(c('bs_caml_string').bytes_of_string(ha),ia);}function v(ha,ia,ja){return c('bs_bytes').index_from(c('bs_caml_string').bytes_of_string(ha),ia,ja);}function w(ha,ia,ja){return c('bs_bytes').rindex_from(c('bs_caml_string').bytes_of_string(ha),ia,ja);}function x(ha,ia){return c('bs_bytes').contains(c('bs_caml_string').bytes_of_string(ha),ia);}function y(ha,ia,ja){return c('bs_bytes').contains_from(c('bs_caml_string').bytes_of_string(ha),ia,ja);}function z(ha,ia,ja){return c('bs_bytes').rcontains_from(c('bs_caml_string').bytes_of_string(ha),ia,ja);}function aa(ha){return c('bs_caml_string').bytes_to_string(c('bs_bytes').uppercase(c('bs_caml_string').bytes_of_string(ha)));}function ba(ha){return c('bs_caml_string').bytes_to_string(c('bs_bytes').lowercase(c('bs_caml_string').bytes_of_string(ha)));}function ca(ha){return c('bs_caml_string').bytes_to_string(c('bs_bytes').capitalize(c('bs_caml_string').bytes_of_string(ha)));}function da(ha){return c('bs_caml_string').bytes_to_string(c('bs_bytes').uncapitalize(c('bs_caml_string').bytes_of_string(ha)));}var ea=c('bs_caml_string').caml_string_compare,fa=c('bs_bytes').fill,ga=c('bs_bytes').blit_string;g.make=h;g.init=i;g.copy=j;g.sub=k;g.fill=fa;g.blit=ga;g.concat=l;g.iter=m;g.iteri=n;g.map=o;g.mapi=p;g.trim=r;g.escaped=s;g.index=t;g.rindex=u;g.index_from=v;g.rindex_from=w;g.contains=x;g.contains_from=y;g.rcontains_from=z;g.uppercase=aa;g.lowercase=ba;g.capitalize=ca;g.uncapitalize=da;g.compare=ea;}),null);
__d('messengerStoryAttachmentTransformerRe',['fbt','bs_array','bs_curry','bs_js_boolean','CurrentUser','bs_js_primitive','bs_js_undefined','P2PTransferStatus','bs_caml_builtin_exceptions'],(function a(b,c,d,e,f,g,h){'use strict';function i(v){var w=v.receiver_profile,x=c('bs_js_primitive').is_nil_undef(w)?null:{id:w.id,name:w.short_name},y=v.sender,z=c('bs_js_primitive').is_nil_undef(y)?{}:y;return {sender:z,amountWithSymbol:v.transaction_amount.formatted_amount,status:c('bs_js_undefined').from_opt(c('bs_js_primitive').undefined_to_opt(c('P2PTransferStatus')[v.transfer_status])),receiver:x};}function j(v){var w=v.requester,x=c('bs_js_primitive').is_nil_undef(w)?undefined:{id:w.id,name:w.short_name},y=v.requestee,z=c('bs_js_primitive').is_nil_undef(y)?undefined:{id:y.id,name:y.short_name},aa=c('bs_js_undefined').from_opt(c('bs_js_primitive').undefined_to_opt(c('P2PTransferStatus')[v.request_status]));return {amountWithSymbol:v.amount.formatted,requestee:z,requester:x,currentStatus:aa};}function k(v,w){var x=w.invite_recipient,y=c('bs_js_primitive').is_nil_undef(x)?null:x.id,z=w.invite_sender,aa=c('bs_js_primitive').is_nil_undef(z)?null:z.id;return {quick_invite_id:w.id,recipient_id:y,sender_id:aa,is_viewer_recipient:c('bs_js_boolean').to_js_boolean(+(v===y))};}function l(v){return {payment_snippet:v.payment_snippet};}function m(v){return {snippet:v.snippet};}function n(v){return {snippet:v.snippet};}function o(v){return {message:v.message};}function p(v){return {message:v.message};}function q(v){return {live_location_id:v.live_location_id,is_expired:c('bs_js_boolean').to_js_boolean(v.is_expired)};}var r=function v(w){var x={},y=[];for(var z=w.field_data_list,aa=Array.isArray(z),ba=0,z=aa?z:z[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ca;if(aa){if(ba>=z.length)break;ca=z[ba++];}else{ba=z.next();if(ba.done)break;ca=ba.value;}var da=ca,ea=da.field_type,fa=da.label,ga=da.values;if(ea===LeadGenInfoFieldTypes.CUSTOM){y.push({label:fa,values:ga});}else x[ea]={label:fa,values:ga};}x.questions=y;return x;};function s(v){var w=v.native_component_flow_request,x;if(c('bs_js_primitive').is_nil_undef(w)){x=null;}else{var y=w.page,z=w.page,aa=w.page,ba;if(c('bs_js_primitive').is_nil_undef(aa)){ba=undefined;}else{var ca=aa.profile_picture;ba=c('bs_js_primitive').is_nil_undef(ca)?undefined:ca.uri;}var da=w.suggested_time_range,ea=w.product_item,fa=w.product_item,ga=w.product_item,ha;if(c('bs_js_primitive').is_nil_undef(ga)){ha=undefined;}else{var ia=ga.profile_picture;ha=c('bs_js_primitive').is_nil_undef(ia)?undefined:ia.uri;}var ja=w.user,ka=w.user,la=w.user,ma;if(c('bs_js_primitive').is_nil_undef(la)){ma=undefined;}else{var na=la.profile_picture;ma=c('bs_js_primitive').is_nil_undef(na)?undefined:na.uri;}x={availability:w.availability,generalInfo:w.service_general_info,id:w.id,pageID:c('bs_js_primitive').is_nil_undef(y)?undefined:y.id,pageName:c('bs_js_primitive').is_nil_undef(z)?undefined:z.name,pageProfilePic:ba,preferredTimeRange:c('bs_js_primitive').is_nil_undef(da)?null:{end:da.end,start:da.start},price:c('bs_js_primitive').is_nil_undef(ea)?null:ea.experimental_freeform_price,requestedTime:w.requested_time,serviceName:c('bs_js_primitive').is_nil_undef(fa)?null:fa.name,serviceProfilePic:ha,specialRequest:w.special_request,status:w.booking_status_value,statusLabel:w.status,userID:c('bs_js_primitive').is_nil_undef(ja)?undefined:ja.id,username:c('bs_js_primitive').is_nil_undef(ka)?undefined:ka.short_name,userProfilePic:ma};}var oa=v.status,pa;switch(oa){case "CANCELLED":pa=["Cancelled",h._("Cancelled")];break;case "DECLINED":pa=["Declined",h._("Declined")];break;case "REQUESTED":pa=["Requested",h._("Requested")];break;case "SCHEDULEED":pa=["Scheduled",h._("Scheduled")];break;default:throw [c('bs_caml_builtin_exceptions').invalid_argument,"Rrroneous target status"];}var qa=v.page;return {id:v.id,pageID:c('bs_js_primitive').is_nil_undef(qa)?undefined:qa.id,userID:v.user.id,status:pa[0],statusLabel:pa[1],viewerID:c('CurrentUser').getAccountID(),requestMetadata:x};}function t(v){return c('bs_array').map(function(w){return {title:w.title,url:w.url};},v);}function u(v,w){var x=w.media,y=c('bs_js_primitive').is_nil_undef(x)?null:x.animated_image,z=c('bs_js_primitive').is_nil_undef(x)?null:x.image,aa={};c('bs_array').iter(function(ia){var ja=ia.value;aa[ia.key]=c('bs_js_primitive').is_nil_undef(ja)?null:ja.text;return 0;},w.properties);var ba=w.target,ca;if(c('bs_js_primitive').is_nil_undef(ba)){ca=null;}else switch(ba.tag|0){case 0:ca=i(ba[0]);break;case 1:ca=j(ba[0]);break;case 2:ca=l(ba[0]);break;case 3:ca=m(ba[0]);break;case 4:ca=n(ba[0]);break;case 5:ca=o(ba[0]);break;case 6:ca=p(ba[0]);break;case 7:ca={video_id:ba[0].video_id};break;case 8:ca=c('bs_curry')._1(r,ba[0]);break;case 9:ca=q(ba[0]);break;case 10:ca=k(v,ba[0]);break;case 11:ca=s(ba[0]);break;}var da=w.target,ea=!c('bs_js_primitive').is_nil_undef(da)&&da.tag===5?0:null,fa=w.description,ga=w.source,ha=w.title_with_entities;return {description:c('bs_js_primitive').is_nil_undef(fa)?null:fa.text,media:{animated_image:c('bs_js_primitive').is_nil_undef(y)?null:y.uri,animated_image_size:c('bs_js_primitive').is_nil_undef(y)?{height:null,width:null}:{height:y.height,width:y.width},image:c('bs_js_primitive').is_nil_undef(z)?null:z.uri,image_size:c('bs_js_primitive').is_nil_undef(z)?{height:null,width:null}:{height:z.height,width:z.width},duration:c('bs_js_primitive').is_nil_undef(x)?null:x.playable_duration,playable:c('bs_js_primitive').is_nil_undef(x)?null:x.is_playable,source:c('bs_js_primitive').is_nil_undef(x)?null:x.playable_url},source:c('bs_js_primitive').is_nil_undef(ga)?null:ga.text,style_list:w.style_list,title:c('bs_js_primitive').is_nil_undef(ha)?null:ha.text,action_links:t(w.action_links),properties:aa,uri:w.url,deduplication_key:w.deduplication_key,target:ca,label:ea};}g.getPayload=u;}),null);
__d('messengerAttachmentTransformerRe',['fbt','bs_array','bs_js_boolean','bs_pervasives','bs_js_primitive','MercuryAttachmentType','MercuryAttachmentContentType','messengerStoryAttachmentTransformerRe'],(function a(b,c,d,e,f,g,h){'use strict';function i(q,r){var s=r.story_attachment,t;if(c('bs_js_primitive').is_nil_undef(s)){t=null;}else{var u={share_id:r.legacy_attachment_id,subattachments:c('bs_array').map(function(w){return c('messengerStoryAttachmentTransformerRe').getPayload(q,w);},s.subattachments)},v={description:s.description,media:s.media,source:s.source,style_list:s.style_list,title_with_entities:s.title_with_entities,properties:s.properties,url:s.url,deduplication_key:s.deduplication_key,action_links:s.action_links,target:s.target};t=Object.assign(u,c('messengerStoryAttachmentTransformerRe').getPayload(q,v));}return {app_attribution:null,attach_type:c('MercuryAttachmentType').SHARE,name:null,url:null,rel:null,preview_url:null,preview_width:null,preview_height:null,large_preview_url:null,large_preview_width:null,large_preview_height:null,icon_type:null,metadata:null,share:t,thumbnail_url:null};}function j(q){var r=q.pack,s=q.sprite_image,t=q.sprite_image_2x,u=q.padded_sprite_image,v=q.padded_sprite_image_2x;return {app_attribution:null,attach_type:c('MercuryAttachmentType').STICKER,name:null,url:q.url,rel:null,preview_url:null,preview_width:null,preview_height:null,large_preview_url:null,large_preview_width:null,large_preview_height:null,icon_type:c('MercuryAttachmentContentType').UNKNOWN,metadata:{stickerID:q.id,packID:c('bs_js_primitive').is_nil_undef(r)?null:r.id,frameCount:q.frame_count,frameRate:q.frame_rate,framesPerRow:q.frame_count>1?q.frames_per_row:1,framesPerCol:q.frame_count>1?q.frames_per_column:1,height:q.height,width:q.width,spriteURI:c('bs_js_primitive').is_nil_undef(s)?null:s.uri,spriteURI2x:c('bs_js_primitive').is_nil_undef(t)?null:t.uri,paddedSpriteURI:c('bs_js_primitive').is_nil_undef(u)?null:u.uri,paddedSpriteURI2x:c('bs_js_primitive').is_nil_undef(v)?null:v.uri,thumbnail_url:null,share:null}};}function k(q){var r=q.preview,s=c('bs_js_primitive').is_nil_undef(r)?[null,null,null]:[r.uri,r.width,r.height],t=q.large_preview,u=c('bs_js_primitive').is_nil_undef(t)?[null,null,null]:[t.uri,t.width,t.height],v=q.attribution_app,w;if(c('bs_js_primitive').is_nil_undef(v)){w=null;}else{var x=v.square_logo;w={id:v.id,icon_url:c('bs_js_primitive').is_nil_undef(x)?null:x.uri,name:v.name};}var y=q.thumbnail;return {app_attribution:w,attach_type:c('MercuryAttachmentType').PHOTO,name:q.filename,url:null,rel:"async",preview_url:s[0],preview_width:s[1],preview_height:s[2],large_preview_url:u[0],large_preview_width:u[1],large_preview_height:u[2],icon_type:c('MercuryAttachmentContentType').PHOTO,metadata:{fbid:q.legacy_attachment_id,dimensions:c('bs_pervasives').string_of_int(q.original_dimensions.x)+(","+c('bs_pervasives').string_of_int(q.original_dimensions.y))},thumbnail_url:c('bs_js_primitive').is_nil_undef(y)?null:y.uri,share:null};}function l(q){var r=q.preview_image,s=c('bs_js_primitive').is_nil_undef(r)?[null,null,null]:[r.uri,r.width,r.height],t=q.animated_image,u=c('bs_js_primitive').is_nil_undef(t)?null:t.uri,v=q.attribution_app,w;if(c('bs_js_primitive').is_nil_undef(v)){w=null;}else{var x=v.square_logo;w={id:v.id,icon_url:c('bs_js_primitive').is_nil_undef(x)?null:x.uri,name:v.name};}return {app_attribution:w,attach_type:c('MercuryAttachmentType').ANIMATED_IMAGE,name:q.filename,url:u,rel:"async",preview_url:s[0],preview_width:s[1],preview_height:s[2],large_preview_url:null,large_preview_width:null,large_preview_height:null,icon_type:c('MercuryAttachmentContentType').PHOTO,metadata:{fbid:q.legacy_attachment_id,image:u,dimensions:c('bs_pervasives').string_of_int(q.original_dimensions.x)+(","+c('bs_pervasives').string_of_int(q.original_dimensions.y))},thumbnail_url:u,share:null};}function m(q){var r=q.attribution_app,s;if(c('bs_js_primitive').is_nil_undef(r)){s=null;}else{var t=r.square_logo;s={id:r.id,icon_url:c('bs_js_primitive').is_nil_undef(t)?null:t.uri,name:r.name};}return {app_attribution:s,attach_type:c('MercuryAttachmentType').FILE,name:q.filename,url:q.playable_url,rel:"ignore",preview_url:null,preview_width:null,preview_height:null,large_preview_url:null,large_preview_width:null,large_preview_height:null,icon_type:c('MercuryAttachmentContentType').MUSIC,metadata:{duration:q.playable_duration_in_ms,isVoicemail:q.is_voicemail?"1":"0",type:q.audio_type},thumbnail_url:null,share:null};}function n(q){var r=q.chat_image,s=c('bs_js_primitive').is_nil_undef(r)?[null,null,null]:[r.uri,r.width,r.height],t=s[0],u=q.chat_image,v=c('bs_js_primitive').is_nil_undef(u)?null:c('bs_pervasives').string_of_int(u.width)+(","+c('bs_pervasives').string_of_int(u.height)),w=q.large_image,x=c('bs_js_primitive').is_nil_undef(w)?[null,null]:[w.uri,c('bs_pervasives').string_of_int(w.width)+(","+c('bs_pervasives').string_of_int(w.height))],y=q.inbox_image,z=c('bs_js_primitive').is_nil_undef(y)?[null,null]:[y.uri,c('bs_pervasives').string_of_int(y.width)+(","+c('bs_pervasives').string_of_int(y.height))],aa=q.attribution_app,ba;if(c('bs_js_primitive').is_nil_undef(aa)){ba=null;}else{var ca=aa.square_logo;ba={id:aa.id,icon_url:c('bs_js_primitive').is_nil_undef(ca)?null:ca.uri,name:aa.name};}return {app_attribution:ba,attach_type:c('MercuryAttachmentType').VIDEO,name:q.filename,url:q.playable_url,rel:"async",preview_url:t,preview_width:s[1],preview_height:s[2],large_preview_url:null,large_preview_width:null,large_preview_height:null,icon_type:c('MercuryAttachmentContentType').VIDEO,metadata:{fbid:q.legacy_attachment_id,render_as_sticker:c('bs_js_boolean').to_js_boolean(+(q.video_type==="SPEAKING_STICKER")),dimensions:c('bs_pervasives').string_of_int(q.original_dimensions.x)+(","+c('bs_pervasives').string_of_int(q.original_dimensions.y)),duration:q.playable_duration_in_ms,large_size:x[1],large_preview:x[0],chat_size:v,chat_preview:t,inbox_size:z[1],inbox_preview:z[0]},thumbnail_url:t,share:null};}function o(q){if(q.is_malicious){return {app_attribution:null,icon_type:c('MercuryAttachmentContentType').UNKNOWN,metadata:null,name:null,preview_height:null,preview_url:null,preview_width:null,rel:null,share:null,thumbnail_url:null,url:null,attach_type:c('MercuryAttachmentType').ERROR,error_msg:h._("This attachment has been marked as malicious.")};}else{var r=q.attribution_app,s;if(c('bs_js_primitive').is_nil_undef(r)){s=null;}else{var t=r.square_logo;s={id:r.id,icon_url:c('bs_js_primitive').is_nil_undef(t)?null:t.uri,name:r.name};}var u=q.url;return {app_attribution:s,icon_type:q.content_type,metadata:null,name:q.filename,preview_height:null,preview_url:null,preview_width:null,rel:"ignore",share:null,thumbnail_url:null,url:c('bs_js_primitive').is_nil_undef(u)?null:u,attach_type:c('MercuryAttachmentType').FILE,error_msg:undefined};}}function p(q,r){var s=[],t=r.extensible_attachment;if(!c('bs_js_primitive').is_nil_undef(t))s.push(i(q,t));var u=r.sticker;if(!c('bs_js_primitive').is_nil_undef(u))s.push(j(u));var v=r.blob_attachments;if(!c('bs_js_primitive').is_nil_undef(v))c('bs_array').iter(function(w){switch(w.tag|0){case 0:s.push(k(w[0]));return 0;case 1:s.push(l(w[0]));return 0;case 2:s.push(m(w[0]));return 0;case 3:s.push(n(w[0]));return 0;case 4:s.push(o(w[0]));return 0;}},v);return s;}g.transform=p;}),null);
__d("MessengerThreadsWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){'use strict';f.exports=c("WebGraphQLQueryHelper").getExports({docID:"1468188056589171",queryID:"365165017213493"});}),null);
__d('messengerThreadTransformerRe',['bs_array','bs_string','bs_caml_array','bs_js_boolean','MercuryIDs','bs_caml_format','bs_js_primitive','bs_js_null_undefined','MessagingThreadType','messengerAttachmentTransformerRe','MessengerThreadCannotReplyReason'],(function a(b,c,d,e,f,g){'use strict';function h(n){var o=n.thread_key.other_user_id;if(c('bs_js_primitive').is_nil_undef(o)){return 0;}else{var p=n.all_participants.nodes;return c('bs_array').fold_left(function(q,r){var s=r.messaging_actor;if(s.id===o){return +(s.__typename==="User");}else return q;},0,p);}}function i(n){if(n.length){var o={};c('bs_array').iter(function(p){var q=p.nickname;if(c('bs_js_primitive').is_nil_undef(q)){return 0;}else{o[p.participant_id]=q;return 0;}},n);return o;}else return null;}function j(n){var o=n.related_page_thread;if(c('bs_js_primitive').is_nil_undef(o)){return null;}else{var p=o.page,q=c('bs_js_primitive').is_nil_undef(p)?[]:c('bs_array').map(function(r){return r.name;},p.custom_tags.nodes);return {flagged:o.is_flagged,customTagNames:q};}}function k(n){if(!c('bs_js_primitive').is_nil_undef(n)&&n!==""){return "#"+c('bs_string').sub(n,2,n.length-2|0);}else return null;}function l(n){var o=n.associated_object;if(c('bs_js_primitive').is_nil_undef(o)){return null;}else{var p=o.profile_picture;return {id:o.id,name:o.name,action_link:o.action_link,profile_picture:c('bs_js_primitive').is_nil_undef(p)?null:p.uri,privacy_mode:n.privacy_mode};}}function m(n,o){var p=o.customization_info,q;if(c('bs_js_primitive').is_nil_undef(p)){q=[null,null,null];}else{var r=p.emoji;q=[k(p.outgoing_bubble_color),c('bs_js_primitive').is_nil_undef(r)?null:{emoji:r},i(p.participant_customizations)];}var s=o.last_message.nodes.length?[c('bs_caml_array').caml_array_get(o.last_message.nodes,0)]:0,t=o.last_read_receipt.nodes.length?[c('bs_caml_array').caml_array_get(o.last_read_receipt.nodes,0)]:0,u;if(s){var v=s[0];u=c('messengerAttachmentTransformerRe').transform(n,{extensible_attachment:v.extensible_attachment,blob_attachments:v.blob_attachments,sticker:v.sticker});}else u=[];var w=o.cannot_reply_reason,x=o.thread_queue_metadata,y=o.thread_type,z=o.montage_thread,aa=o.image,ba=o.thread_key.other_user_id,ca=o.thread_queue_metadata,da=o.name,ea=o.thread_key.other_user_id,fa;if(c('bs_js_primitive').is_nil_undef(ea)){var ga=o.thread_key.thread_fbid;fa=c('bs_js_primitive').is_nil_undef(ga)?o.thread_key.legacy_thread_id:ga;}else fa=ea;var ha=o.thread_key.legacy_thread_id,ia=o.rtc_call_data,ja;if(c('bs_js_primitive').is_nil_undef(ia)){ja=null;}else{var ka=ia.initiator;ja={call_state:ia.call_state,server_info_data:ia.server_info_data,initiator_fbid:c('bs_js_primitive').is_nil_undef(ka)?0:c('bs_caml_format').caml_float_of_string(ka.id)};}return {admin_ids:c('bs_array').map(function(la){return la.id;},o.thread_admins),approval_mode:o.approval_mode,approval_queue_ids:c('bs_js_primitive').is_nil_undef(x)?[]:c('bs_array').map(function(la){return la.id;},x.approval_requests.nodes),can_reply:c('bs_js_primitive').is_nil_undef(w)?true:false,cannot_reply_reason:o.cannot_reply_reason,custom_color:q[0],custom_like_icon:q[1],custom_nickname:q[2],customization_enabled:o.customization_enabled,thread_type:c('bs_js_primitive').is_nil_undef(y)?null:c('bs_js_null_undefined').from_opt(c('bs_js_primitive').undefined_to_opt(c('MessagingThreadType')[y])),ephemeral_ttl_mode:o.ephemeral_ttl_mode,folder:c('bs_string').lowercase(o.folder),has_email_participant:c('bs_js_primitive').is_nil_undef(w)?false:c('bs_js_boolean').to_js_boolean(+(w===c('MessengerThreadCannotReplyReason').HAS_EMAIL_PARTICIPANT)),has_montage:c('bs_js_primitive').is_nil_undef(z)?false:true,image_src:c('bs_js_primitive').is_nil_undef(aa)?null:aa.uri,is_archived:c('bs_js_boolean').to_js_boolean(o.has_viewer_archived),is_canonical_user:c('bs_js_boolean').to_js_boolean(h(o)),is_canonical:c('bs_js_primitive').is_nil_undef(ba)?false:true,is_pin_protected:c('bs_js_boolean').to_js_boolean(o.is_pin_protected),is_subscribed:c('bs_js_boolean').to_js_boolean(o.is_viewer_subscribed),is_thread_queue_enabled:c('bs_js_primitive').is_nil_undef(ca)?false:true,joinable_mode:{mode:c('bs_caml_format').caml_int_of_string(o.joinable_mode.mode),link:o.joinable_mode.link},last_message_timestamp:s?c('bs_caml_format').caml_float_of_string(s[0].timestamp_precise):0,last_message_type:s?s[0].commerce_message_type:null,last_read_timestamp:t?c('bs_caml_format').caml_float_of_string(t[0].timestamp_precise):0,lightweight_event:null,message_count:o.message_count,mute_until:o.mute_until,name:c('bs_js_primitive').is_nil_undef(da)?"":da,other_user_fbid:o.thread_key.other_user_id,page_thread_info:j(o),participants:c('bs_array').map(function(la){return c('MercuryIDs').getParticipantIDFromUserID(la.messaging_actor.id);},o.all_participants.nodes),read_only:c('bs_js_primitive').is_nil_undef(w)?false:c('bs_js_boolean').to_js_boolean(+(w===c('MessengerThreadCannotReplyReason').READ_ONLY)),recipients_loadable:c('bs_js_primitive').is_nil_undef(w)?true:c('bs_js_boolean').to_js_boolean(+(w!==c('MessengerThreadCannotReplyReason').RECIPIENTS_NOT_LOADABLE)),server_timestamp:c('bs_caml_format').caml_float_of_string(o.updated_time_precise),snippet_attachments:u,snippet_sender:s?c('MercuryIDs').getParticipantIDFromUserID(s[0].message_sender.messaging_actor.id):null,snippet:s?s[0].snippet:null,thread_fbid:fa,thread_id:c('bs_js_primitive').is_nil_undef(ha)?"":ha,timestamp:c('bs_caml_format').caml_float_of_string(o.updated_time_precise),unread_count:o.unread_count,rtc_call_data:ja,associated_object:l(o),reactions_mute_mode:o.reactions_mute_mode==="REACTIONS_NOT_MUTED"?0:1,mentions_mute_mode:o.mentions_mute_mode==="MENTIONS_NOT_MUTED"?0:1};}g.transform=m;}),null);
__d('messengerGraphQLThreadFetcherRe',['bs_array','bs_block','ActorURI','getByPath','AsyncRequest','bs_js_primitive','messengerThreadTransformerRe','MessengerThreadsWebGraphQLQuery','messengerReadReceiptsTransformerRe'],(function a(b,c,d,e,f,g){'use strict';function h(o){var p=o.blob_attachments,q=[];if(!c('bs_js_primitive').is_nil_undef(p))c('bs_array').iter(function(r){if(r.__typename==="MessageImage"){q.push(c('bs_block').__(0,[{attribution_app:r.attribution_app,filename:r.filename,preview:r.preview,large_preview:r.large_preview,thumbnail:r.thumbnail,legacy_attachment_id:r.legacy_attachment_id,original_dimensions:r.original_dimensions}]));return 0;}else if(r.__typename==="MessageAnimatedImage"){q.push(c('bs_block').__(1,[{attribution_app:r.attribution_app,filename:r.filename,animated_image:r.animated_image,legacy_attachment_id:r.legacy_attachment_id,preview_image:r.preview_image,original_dimensions:r.original_dimensions}]));return 0;}else if(r.__typename==="MessageAudio"){q.push(c('bs_block').__(2,[{attribution_app:r.attribution_app,filename:r.filename,playable_url:r.playable_url,playable_duration_in_ms:r.playable_duration_in_ms,is_voicemail:r.is_voicemail,audio_type:r.audio_type}]));return 0;}else if(r.__typename==="MessageVideo"){q.push(c('bs_block').__(3,[{attribution_app:r.attribution_app,filename:r.filename,playable_url:r.playable_url,playable_duration_in_ms:r.playable_duration_in_ms,legacy_attachment_id:r.legacy_attachment_id,chat_image:r.chat_image,video_type:r.video_type,original_dimensions:r.original_dimensions,large_image:r.large_image,inbox_image:r.inbox_image}]));return 0;}else if(r.__typename==="MessageFile"){q.push(c('bs_block').__(4,[{attribution_app:r.attribution_app,filename:r.filename,url:r.url,content_type:r.content_type,is_malicious:r.is_malicious}]));return 0;}else return 0;},p);return q;}function i(o){var p=o.target,q=c('bs_js_primitive').is_nil_undef(p)?null:p.__typename==="PeerToPeerTransfer"?c('bs_block').__(0,[{sender:p.sender,receiver_profile:p.receiver_profile,transaction_amount:p.transaction_amount,transfer_status:p.transfer_status}]):p.__typename==="PeerToPeerPaymentRequest"?c('bs_block').__(1,[{amount:p.amount,requester:p.requester,requestee:p.requestee,request_status:p.request_status}]):p.__typename==="PaymentPlatformAttachment"?c('bs_block').__(2,[{payment_snippet:p.payment_snippet}]):p.__typename==="MomentsAppMessengerInvitation"?c('bs_block').__(3,[{snippet:p.snippet}]):p.__typename==="MomentsAppMessengerPhotoRequest"?c('bs_block').__(4,[{snippet:p.snippet}]):p.__typename==="MessengerRetailPromotion"?c('bs_block').__(5,[{message:p.message}]):p.__typename==="MessengerBusinessMessage"?c('bs_block').__(6,[{message:p.message}]):p.__typename==="Video"?c('bs_block').__(7,[{video_id:p.video_id}]):p.__typename==="PagesPlatformLeadGenInfo"?c('bs_block').__(8,[{field_data_list:p.field_data_list}]):p.__typename==="MessageLiveLocation"?c('bs_block').__(9,[{live_location_id:p.live_location_id,is_expired:p.is_expired}]):p.__typename==="QuickInvite"?c('bs_block').__(10,[{id:p.id,invite_sender:p.invite_sender,invite_recipient:p.invite_recipient}]):p.__typename==="PagesPlatformBookingMessage"?c('bs_block').__(11,[{id:p.id,page:p.page,status:p.status,user:p.user,native_component_flow_request:p.native_component_flow_request}]):null;return {description:o.description,media:o.media,source:o.source,style_list:o.style_list,title_with_entities:o.title_with_entities,properties:o.properties,url:o.url,deduplication_key:o.deduplication_key,action_links:o.action_links,subattachments:o.subattachments,target:q};}function j(o,p,q,r){return new (c('AsyncRequest'))(o).setAllowCrossPageTransition(true).exec().then(function(s){var t=s.getPayload().data.message_thread;if(c('bs_js_primitive').is_nil_undef(t)){if(r!==0){return {thread:undefined,end_of_history:{type:"user",fbid:p},roger:null};}else return {thread:undefined,end_of_history:undefined,roger:null};}else{var u=c('bs_array').map(function(aa){var ba=h(aa),ca=aa.extensible_attachment,da;if(c('bs_js_primitive').is_nil_undef(ca)){da=null;}else{var ea=ca.story_attachment;da={legacy_attachment_id:ca.legacy_attachment_id,story_attachment:c('bs_js_primitive').is_nil_undef(ea)?null:i(ea)};}return {snippet:aa.snippet,message_sender:aa.message_sender,timestamp_precise:aa.timestamp_precise,commerce_message_type:aa.commerce_message_type,extensible_attachment:da,blob_attachments:ba,sticker:aa.sticker};},t.last_message.nodes),v=c('messengerThreadTransformerRe').transform(q,{thread_key:t.thread_key,name:t.name,all_participants:t.all_participants,last_message:{nodes:u},unread_count:t.unread_count,message_count:t.messages_count,image:t.image,updated_time_precise:t.updated_time_precise,mute_until:t.mute_until,is_pin_protected:t.is_pin_protected,is_viewer_subscribed:t.is_viewer_subscribed,thread_queue_enabled:t.thread_queue_enabled,folder:t.folder,has_viewer_archived:t.has_viewer_archived,cannot_reply_reason:t.cannot_reply_reason,ephemeral_ttl_mode:t.ephemeral_ttl_mode,customization_info:t.customization_info,thread_admins:t.thread_admins,approval_mode:t.approval_mode,joinable_mode:t.joinable_mode,thread_queue_metadata:t.thread_queue_metadata,event_reminders:t.event_reminders,montage_thread:t.montage_thread,last_read_receipt:t.last_read_receipt,related_page_thread:t.related_page_thread,rtc_call_data:t.rtc_call_data,associated_object:t.associated_object,reactions_mute_mode:t.reactions_mute_mode,mentions_mute_mode:t.mentions_mute_mode,privacy_mode:t.privacy_mode,customization_enabled:t.customization_enabled,thread_type:t.thread_type}),w=t.read_receipts,x;if(c('bs_js_primitive').is_nil_undef(w)){x=null;}else{var y={};y[p]=c('messengerReadReceiptsTransformerRe').transform(q,w);x=y;}var z=c('getByPath')(v,["messages","page_info"]);if(c('bs_js_primitive').is_nil_undef(z)){return {thread:v,end_of_history:undefined,roger:x};}else if(z.has_previous_page){return {thread:v,end_of_history:undefined,roger:x};}else return {thread:v,end_of_history:{type:"thread",fbid:p},roger:x};}});}function k(o,p){return j(c('MessengerThreadsWebGraphQLQuery').getURI({id:p,message_limit:1,load_messages:false,load_read_receipts:false}),p,o,1);}function l(o,p){return j(c('MessengerThreadsWebGraphQLQuery').getURI({id:p,message_limit:1,load_messages:false,load_read_receipts:false}),p,o,0);}function m(o,p){var q=c('ActorURI').create(c('MessengerThreadsWebGraphQLQuery').getURI({id:p,message_limit:1,load_messages:false,load_read_receipts:false}),o);return j(q,p,o,1);}function n(o,p){var q=c('ActorURI').create(c('MessengerThreadsWebGraphQLQuery').getURI({id:p,message_limit:1,load_messages:false,load_read_receipts:false}),o);return j(q,p,o,0);}g.unsafeCastBlobAttachments=h;g.unsafeCastExtensibleAttachment=i;g._fetchThread=j;g.forIDCanonical=k;g.forIDNonCanonical=l;g.forIDCanonicalWithPageAsActor=m;g.forIDNonCanonicalWithPageAsActor=n;}),null);