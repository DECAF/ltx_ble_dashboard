let blx=(()=>{let te="V1.23 / 28.11.2024",ae="(C)JoEmbedded.de",a="";async function _(t=1){return new Promise(e=>setTimeout(e,t))}let c=3988292384;function ie(t){let a=4294967295;for(let e=0;e<t.length;e++){a=(a^t[e])>>>0;for(let e=0;e<8;e++)1&a?a=a>>>1^c:a>>>=1}return a>>>0}let F={},g=!1,B,ne="5c170001-b5a3-f393-e0a9-a37f42997c22",d="5c170002-b5a3-f393-e0a9-a37f42997c22",f="5c170003-b5a3-f393-e0a9-a37f42997c22",M,R,u,L=!1,re=!1,P="",U=!1,m,K=!1,w=!1,V=0,S,o="?",G={total:0,incnew:0,max:-1,mode:0},E=!1,O=0,v=3,b=16,C=17,I=32,x=33,A=34,D=35,T=1e4,N="unknown.dat",p,oe,se,le,ce,de,h,y,k,fe,ue,z,ve=20,Re=40,be,ge,me=!1,we=!1,W="3",H="15",X;function pe(){R=void 0,u=void 0,L=!1,g=!1,re=!1,U=!1,m=void 0,!(K=!1)===w&&"R"!==o?(Q("Disconnected while Busy('"+o+"')"),V="ERROR: Disconnected ('"+o+"')"):Q("Disconnected"),w=!1,B&&(void 0!==M?B("CON",1,"Reconnectable"):B("CON",0,"Disconnected"))}function he(e){var e=new Uint8Array(e.target.value.buffer),r=e.length;if(r<2)Q("ERROR(Data): NUS RX blocklen: "+r),console.log(e);else{var o=e[0];if(o+2!==r)Q("ERROR(Data): NUS RX blocklen/dlen(0): "+r+"/"+o),console.log(e);else{var s,r=e[1],l=e.subarray(2);let a,i,n,t;switch(r){case D:if(Ge(),"~"===(a=(new TextDecoder).decode(l)).charAt(0)&&1<a.length)switch(a.charAt(1)){case"G":i=parseInt(a.substring(3)),(n=parseInt(a.substring(a.indexOf(" "))))?Q("Get "+i+" Bytes from Position "+n):Q("Get "+i+" Bytes"),h=i,k=0,y=new Uint8Array(i),fe=Date.now(),ue=fe-1e3;break;case"A":m=a.substring(3);break;case"D":i=parseInt(a.substring(a.indexOf("DS:")+3)),n=parseInt(a.substring(a.indexOf("DA:")+3)),t=new Date(1e3*parseInt(a.substring(a.indexOf("DF:")+3))),Q("Disksize: "+(i/1024).toFixed(0)+" kB / Available: "+(n/1024).toFixed(0)+" kB Formated: ["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"]"),F.disk={},F.disk.diskSize=i,F.disk.available=n,F.disk.formated=t,F.disk.files=[],g=!0;break;case'"':{i=a.lastIndexOf('"');var c=a.substring(2,i),d=a.substring(i),f=(i=parseInt(d.substring(d.indexOf("L:")+2)),n=parseInt(d.substring(d.indexOf("CR:")+3),16),t=new Date(1e3*parseInt(d.substring(d.indexOf("T:")+2))),d.indexOf("UC ")),d=d.indexOf("ES ");let e=0<f?" (Unclosed)":"";isNaN(n)||(e+=" CRC: "+n.toString(16).toUpperCase()),0<d&&(e+=" ExtSync"),Q(' - "'+c+'" Len: '+i+" Bytes"+e+" ["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"]");var u=[];u.fname=c,u.len=i,u.crc32=n,u.date=t,u.ucl_flag=Boolean(0<f),u.esync_flag=Boolean(0<d),F.disk.files.push(u),g=!0}break;case"X":we?(Q("Keep Connection Ping..."),q("")):(Q("WARNING: Connection Auto-Disconnect soon"),B&&B("WARN",1,"Connection Auto-Disconnect soon"));break;case"e":i=parseInt(a.substring(3));var c=a.substring(a.indexOf(" ")+1);n=parseInt(c),0<i&&0<n?0<c.indexOf(" ")?(t=parseInt(c.substring(c.indexOf(" ")+1)),Q("Measure ("+i+" Channels in "+n+" msec) Modemstate: "+t)):Q("Measure ("+i+" Channels in "+n+" msec)"):Q("Measure..."),B&&(B("MEAS_CH",i,"Channels"),B("MEAS_T",n,"msec"));break;case"H":case"#":{f=parseInt(a.substring(2));let e=a.substring(a.indexOf(" ")+1).trim();isNaN(f)?(Q("Warning: "+e),B&&B("MEAS_V","Warning",e)):(Q("("+(d=90<=f?"H"+f:f)+")"+e),B&&B("MEAS_V",d,e))}break;case"h":Q("Alarmbits: "+(i=parseInt(a.substring(3))));break;case"@":i=parseInt(a.substring(2)),Q("Wait max. "+((O=i)/1e3).toFixed(0)+" secs");break;case"!":Q("Info: "+(i=a.substring(2))),B&&B("INFO",0,i);break;case"M":i=parseInt(a.substring(2));u=a.substring(a.indexOf(" ")+1);n=parseInt(u),Q("Motion("+i+" Cnt), Measure in "+n+" secs"),ee(100,.3,.2),ee(99,.3,.2);break;case"Z":switch(i=parseInt(a.substring(2)),t=a.indexOf(" "),(n=0)<t&&(c=a.substring(t+1),n=parseInt(c)),i){case 1:2<n?Q("Info: Measure (max. "+n+" sec)"):Q("Info: Measure");break;case 9:Q("Info: Internet in "+n+" sec");break;case 10:Q("Info: Internet Transfer...");break;case 11:n?Q("Info: Internet Transfer Error:"+n):Q("Info: Internet Transfer OK")}B&&B("BZY",i,n);break;default:Q("ERROR: '"+a+"' ???")}else{let e=a.trim();B&&B("MSG",0,e),w?Q("Reply: '"+e+"'"):K?Q("Modem: '"+e+"'"):Q("Info: '"+e+"'")}break;case x:if(Ge(),"~"===(a=(new TextDecoder).decode(l)).charAt(0)&&1<a.length)switch(a.charAt(1)){case"B":g=!0,F.deviceMAC="(UNKNOWN)",0<(t=a.indexOf(" "))?16===(n=a.substring(t+1)).length?(Q("Device MAC:"+n),F.deviceMAC=n):V="ERROR: Invalid MAC":V="ERROR: No MAC",(i=parseInt(a.substring(3)))>=ve&&i<250?(Q("BLE Blocksize: "+(be=i)+" Bytes"),i<Re&&(Q("WARNING: Small BLE Blocksize!"),B)&&B("WARN",2,"Small BLE Blocksize!")):V="ERROR: BLE Blocksize: "+i;break;case"C":i=parseInt(a.substring(3)),X=i,0<(t=a.indexOf(" "))?1<(n=parseInt(a.substring(t+1)))?V="ERROR: Connection Speed: ("+i+"): "+n:Q("Connection Speed: "+(50<i?"Standard (":"Fast (")+i+")"):V="ERROR: Connection Speed";break;case"T":{i=parseInt(a.substring(3));var v=new Date(1e3*i);let e=(Date.now()/1e3-i).toFixed(0),t;var R=a.substring(a.indexOf(" ")+1);n=parseInt(R),t=864e3<e||e<-864e3?" (Warning: DeviceTime Lost!)":" (Delta to App: "+(e=e<=1&&-1<=e?0:e)+" sec)",n&&(t+="(Run: "+(n/86400).toFixed(1)+" d)"),F.deltaToApp=e,Q("Time: ["+v.toLocaleDateString()+" "+v.toLocaleTimeString()+"] "+t)}break;case"V":R=a.split(" ");i=parseInt(a.substring(3)),n=parseInt(R[1]),t=new Date(1e3*parseInt(R[2])),F.deviceType=i,F.firmwareVersion=(n/10).toFixed(1),F.firmwareBuilt=t.toUTCString(),F.cpu=-1,3<R.length&&(F.cpu=parseInt(R[3])),F.deviceHasInternet=0,4<R.length&&(F.deviceHasInternet=parseInt(R[4])),Q("DeviceType: "+i+" V"+F.firmwareVersion+" (Built: "+F.firmwareBuilt+") CPU:"+F.cpu),F.deviceHasInternet&&Q("Device has Internet"),U=!0;break;case"E":U=!1,V="PIN ERROR",Q("ERROR: PIN ERROR"),ze();break;case"N":i=parseInt(a.substring(3)),n=new Date(1e3*parseInt(a.substring(a.indexOf(" ")+1))),Q("Filesize: "+i+" Bytes"),p=i,oe=n;break;case"L":Q((i=parseInt(a.substring(3)))+" Bytes transferred");break;case"P":Q("File Ready"),E=!0;break;case"I":Q("Memory Ready"),E=!0;break;case"K":break;default:Q("ERROR: '"+a+"' ???"),V=a}else Q("End: '"+a+"' (Runtime: "+(Date.now()-S).toFixed(0)+" msec)"),a.startsWith("ERR")&&(V=a);w=!1,K=!1;break;case I:switch((a=(new TextDecoder).decode(l)).charAt(0)){case"R":(i=parseInt(a.substring(2)))<-199&&0<=i?(ge="[NoSignal]",i=-200):ge=i,me&&Q("Signal (dBm):"+ge),Ke&&(199<(s=-i)?ee(30,.2,.3):(s<30&&(s=30),ee(100*Math.pow(2,(100-s)/12),.5,.15))),B&&B("RSSI",i," dBm");break;case"V":i=a.substring(3),B&&B("VSENS",i,a.charAt(1));break;default:Q("Info: '"+a+"'")}break;case A:if(i=h-k,l.length>i)V="ERROR: Too many data";else{y.set(l,k),k+=o;var b=Date.now();if(1e3<b-ue&&(i=(k/h*100).toFixed(0),B&&B("PROG",i,"%"),Q("Get: "+i+"% / "+k+" Bytes"),ue=b),0===(i=h-k)){let e=Date.now()-fe;e||e++;b=(k/e*1e3).toFixed(0);Q("Get OK ("+e/1e3+" sec, "+b+" Bytes/sec)"),B&&B("GET_OK",b,"Bytes/sec")}}break;default:Q("ERROR(Data): '"+a+"'")}}}}async function ye(e,a,i=v){if(void 0===M)V="ERROR(Connect): Undefined Device";else if(null===M.name)V="ERROR(Connect): Unknown Device Name";else{e&&((F={}).advertisingName=M.name,g=!0);let t=0;for(;;){try{var n=e?"Connect":"Reconnect";Q(n+=` to '${M.name}'...`),B&&B("CON",2,n),t++;var r=await(await M.gatt.connect()).getPrimaryService(ne);R=await r.getCharacteristic(d),await(u=await r.getCharacteristic(f)).startNotifications(),u.addEventListener("characteristicvaluechanged",he),Q("Connected"),L=!0,B&&B("CON",3,"Connected, Identify..."),t=i,V=0}catch(e){Q("RETRY(Connect("+t+"), Reason: '"+e.message.substring(0,40)+"...')"),V="ERROR(Connect("+t+")): '"+e.message+"'"}if(t>=i)break;var o="Failed, Retry to connect ("+(i-t+1)+" left)...";B&&B("WARN",5,o),Q(o)}L&&(a&&await xe(!1),await Y(),!0===U)&&We(500)}}async function ke(){if(g){g=!1;var e=F.deviceMAC+"_#BlxIDs";try{await blStore.set(e,F)}catch(e){V="ERROR(CheckIDs): "+e}}}async function q(e,t=T){if(!0===w)console.warn("*** BLX BUSY (Since "+(Date.now()-S).toFixed(0)+" msec) ***");else{if(!0!==L){if(void 0===M)return void(V="ERROR(DeviceCmd): Not Connected!");if(await ye(0,1),V)return}!1===(K=e.startsWith("#")?!0:K)&&(w=!0),o=e,S=Date.now();var[e,a=b]=[e],i=e.length,n=new Uint8Array(i+2),r=n.subarray(2),i=(n[0]=i,n[1]=a,(new TextEncoder).encodeInto(e,r));if(void 0!==i)try{R.writeValue(n.buffer)}catch(e){let t;t=!1===L?"Connection lost":e,V="ERROR(DeviceSend): "+t}if(await 0,!1===K){a=t;for(O=a;!0===w;)if(await _(10),(O-=10)<0){V="ERROR(DeviceCmd): Timeout ('"+o+"')";break}await 0,w=!1}}}function s(t){let a=-1;for(let e=0;e<F.disk.files.length;e++)if(F.disk.files[e].fname===t){a=e;break}return a<0?(V="ERROR(Cmd): File not in Directory",-1):a}async function Se(a,i=!0){var n=a[1];if(void 0===n||n.length<1||21<n.length)V="ERROR(Cmd): Filename";else if(void 0===F.disk||void 0===F.disk.files)V="ERROR(Cmd): No Disk Info";else{var r=s(n);if(!(r<0||(p=-1,N=n,z=void 0,await q("N:"+n),V)))if(p<0)V="ERROR(SysCmd): No File";else if(Q('Get File "'+n+'": Total Len: '+p+" Bytes"),p!==F.disk.files[r].len)V="ERROR(SysCmd): File Size changed";else if(F.disk.files[r].date.getTime()!==oe.getTime())V="ERROR(SysCmd): File Date changed";else{se=F.disk.files[r].crc32,le=F.disk.files[r].ucl_flag,ce=F.disk.files[r].esync_flag;let e=p,t=0;a[2]&&(t=parseInt(a[2]),e=a[3]?parseInt(a[3]):p-t),t<0||e<1||t+e>p?V="ERROR(SysCmd): Out of range of File":(de=t,B&&B("GET",e,n),await Ae(t,e,i),V||(async()=>{if(void 0!==k&&k)if(void 0===y||y.length!==h)V="ERROR(Store): Inconsistent Data";else{var e=F.deviceMAC+"_"+N,t=[];t.total_len=p,t.pos0=de,t.akt_len=h,t.ctime=oe,t.crc32=se,t.ucl_flag=le,t.esync_flag=ce,t.bytebuf=y,t.tssync=void 0;try{await blStore.set(e,t)}catch(e){return V="ERROR(Store): "+e}Q("Save to Store '"+e+"'"),y=void 0,z=e}else V="ERROR(Store): No Data to store"})())}}}async function Ee(e,t){var a,i,n=s(e);if(0<=n){if(await blStore.get(F.deviceMAC+"_"+e),void 0===(a=blStore.result())||!0===t)await Se([0,e],!1),V;else if(0<(t=F.disk.files[n].len-a.v.akt_len)&&(B&&B("GET",t,e),Q('Get File (Missing Part) "'+e+'": Len: '+t+" Bytes"),n=e,e=a.v.akt_len,i=t,p=-1,N=void 0,z=void 0,await q("N:"+n),await(!V&&!(p<0?V="ERROR(SysCmd): No File '"+n+"'":(se=0,le=!0,ce=!1,await Ae(de=e,p=i,!1)))),!V))if(y.length!==t)V="ERROR(upload): Read Len";else{(n=new Uint8Array(a.v.bytebuf.length+t)).set(a.v.bytebuf),n.set(y,a.v.bytebuf.length),a.v.bytebuf=n,a.v.total_len+=t,a.v.akt_len+=t,a.v.tssync=void 0;try{await blStore.set(a.k,a.v)}catch(e){V="ERROR(upload): "+e}}}else V=""}async function Y(){for(let e=0;e<3&&(await _(1e3),X=-1,void 0===R?V="Disconnected":await q("CS",32e3),!V)&&!(0<X);e++);}async function j(){for(let e=0;e<4&&(await _(1e3),X=-1,await q("C"+W,32e3),!V)&&!(X<=50);e++){var t=parseInt(W);if(isNaN(t))break;0<e&&(W=(++t).toString())}}async function Oe(e,t=!0){var a=s(e),i=(await blStore.get(F.deviceMAC+"_"+e),blStore.result());a<0?(void 0!==i&&await blStore.remove(i.k),V="ERROR(identify): No File '"+e+"' on Device",B&&B("WARN",3,"No File '"+e+"' on Device")):F.disk.files[a].len<=0||!0===F.disk.files[a].ucl_flag?(V="ERROR(identify): File corrupt '"+e+"' on Device",B&&B("WARN",4,"File corrupt '"+e+"' on Device")):void 0!==i&&F.disk.files[a].len===i.v.akt_len&&F.disk.files[a].crc32===i.v.crc32&&F.disk.files[a].date.getTime()===i.v.ctime.getTime()||(await Se([0,e],t),V)||(await blStore.get(F.deviceMAC+"_"+e),void 0!==(i=blStore.result())&&F.disk.files[a].len===i.v.akt_len&&F.disk.files[a].crc32===i.v.crc32&&F.disk.files[a].date.getTime()===i.v.ctime.getTime()&&await blStore.set(F.deviceMAC+"_#BAK_"+e,i.v))}async function Ce(e=!1){G={total:0,incnew:0,max:-1,mode:-1};var t=s("data.edt");let a=s("data.edt.old"),i=(await blStore.get(F.deviceMAC+"_data.edt.old"),blStore.result()),n=(await blStore.get(F.deviceMAC+"_data.edt"),blStore.result());if(void 0!==F.iparam&&(G.mode=parseInt(F.iparam[12]),2&G.mode?null!=F.sys_param&&(G.max=2*parseInt(F.sys_param[17])):G.max=F.disk.diskSize-102400),0<=a&&null!=n&&F.disk.files[a].date.getTime()===n.v.ctime.getTime()&&((i=n).k=F.deviceMAC+"_data.edt.old",i.v.tssync=void 0,n=void 0,console.log("Shift 'data.edt'->'data.edt.old'"),!0===e))try{await blStore.remove(F.deviceMAC+"_data.edt"),await blStore.set(i.k,i.v)}catch(e){return void(V="ERROR(Store): "+e)}if(null!=i&&(a<0||F.disk.files[a].date.getTime()!==i.v.ctime.getTime())&&(a=-1,!(i=void 0)===e))try{await blStore.remove(F.deviceMAC+"_data.edt.old")}catch(e){return void(V="ERROR(Store): "+e)}if(null!=n&&(t<0||F.disk.files[t].date.getTime()!==n.v.ctime.getTime())&&!(n=void 0)===e)try{await blStore.remove(F.deviceMAC+"_data.edt")}catch(e){return void(V="ERROR(Store): "+e)}0<=t&&(G.total+=F.disk.files[t].len),0<=a&&(G.total+=F.disk.files[a].len),G.incnew=G.total,null!=n&&(G.incnew-=n.v.akt_len),null!=i&&(G.incnew-=i.v.akt_len),V=0}async function Ie(e){var i=e.split(" ");let t,a;var n,r,o,s=i[0].toLowerCase();if(!0===K)V='ERROR(Modem): Exit Modem Terminal ("~")!';else switch(s){case"?":Q(`Blx Terminal Version: ${te}, `+ae);break;case"q":case"quit":Le();break;case"cls":$=[],void 0!==Z&&(document.getElementById("blxTerminalOut").innerText="(cleared)");break;case"s":case"store":try{if(i.length<=1){await blStore.count();let n=0,r=Date.now();Q("Store: "+blStore.result()+" Items"),await blStore.iterate(function(e){a=r-e.ts,t="",86400<=(a/=1e3)&&(a-=86400*(i=Math.floor(a/86400)),t+=i+"d"),a-=3600*(i=Math.floor(a/3600)),i<10&&(t+="0"),t+=i+"h",(i=Math.floor(a/60))<10&&(t+="0"),t+=i+"m",(a-=60*i)<10&&(t+="0");var t,a,i=t+=Math.floor(a)+"s";void 0!==e.v.akt_len?(a=e.v.akt_len,n+=a,Q("'"+e.k+"' ("+i+")': "+a+" Bytes")):Q("'"+e.k+"' ("+i+")'")}),Q("Total Data: "+(n/1024).toFixed(0)+" kB")}else switch(i[1]){case"c":case"clear":await blStore.clearStore(),Q("Store cleared");break;case"r":case"remove":{let e;e=i.length<3?z:i[2],await blStore.remove(e),Q("Removed '"+e+"' from Store")}break;case"l":case"list":try{let e;if(void 0===(e=i.length<3?z:i[2])){V="ERROR(Store): No Key";break}await blStore.get(e);var l=blStore.result();if(void 0===l){V="ERROR(Store): No Value for this Key";break}var c,d=(new TextDecoder).decode(l.v.bytebuf),f=d.replace(/\r/g,"").split(/\n/),u=(f.pop(),J);J<d.length+10&&(J=d.length+10),Q("List Key '"+l.k+"' Len: "+d.length+" Bytes => "+f.length+" Lines");let t=0;for(c of f)Q(t+": "+(c.length?c:"(empty)")),t++;J=u}catch(e){V="ERROR(Store): "+e}break;case"m":case"modify":try{let e;var v=i[2];if(void 0===v){V="ERROR(Store): No Index";break}var R=i[3];if(void 0===(e=i.length<5?z:i[4])){V="ERROR(Store): No Key";break}await blStore.get(e);var b=blStore.result();if(void 0===b){V="ERROR(Store): No Value for this Key";break}var g=(new TextDecoder).decode(b.v.bytebuf).replace(/\r/g,"").split(/\n/);if(g.pop(),v<0||v>g.length){V="ERROR(Store): Index Range";break}var m=g[v],w=(Q("Old: "+v+": "+(m.length?m:"(empty)")),g[v]=R,Q("New: "+v+": "+((m=g[v]).length?m:"(empty)")),new TextEncoder),p=(b.v.bytebuf=w.encode(g.join("\n")+"\n"),b.v.bytebuf.length);b.v.akt_len=p,b.v.crc32=ie(b.v.bytebuf),b.v.ctime=new Date,b.v.pos0=0,b.v.total_len=p,b.v.ucl_flag=!1,b.v.tssync=void 0,await blStore.set(e,b.v)}catch(e){V="ERROR(Store): "+e}break;default:V="ERROR(Store): Unknown Cmd"}}catch(e){V="ERROR(Store): "+e}break;case"e":case"export":try{let e;e=i.length<2?z:i[1],await blStore.get(e);var h=blStore.result();if(void 0===h){V="ERROR(StoreExport): Key not found";break}var y=h;try{if(void 0!==y.v&&void 0!==y.v.total_len&&y.v.total_len){var k=y.k.lastIndexOf(".");let e="application/octet-binary";if(1<k)switch(y.k.substring(k).toLowerCase()){case".jpg":e="image/jpeg";break;case".csv":e="application/csv;charset=utf-8";break;case".pdf":e="application/pdf";break;case".txt":case".log":e="text/plain;charset=utf-8"}var S=new Blob([y.v.bytebuf],{type:e}),E=y.k;saveAs(S,E),Q("Export '"+E+"'")}else V="ERROR(Export): No Length or Empty!"}catch(e){V="ERROR(Export): Export failed"}}catch(e){V="ERROR(StoreExport): "+e}break;case"a":case"audio":1<i.length&&(t=parseInt(i[1]),Ke=Boolean(t)),2<i.length&&(t=parseInt(i[2]),Ve=Boolean(t)),Q("Audio: RSSI: "+(Ke?"ON":"OFF")+", Term: "+(Ve?"ON":"OFF"));break;case"f":{let e=440,t,a;1<i.length&&(e=parseInt(i[1])),2<i.length&&(t=parseInt(i[2])),3<i.length&&(a=parseInt(i[3])),ee(e,t,a),Q("Audio-Ping Frq:"+e+" Hz, (Dur: "+t+" Vol: "+a+")")}break;case"k":case"keep":1<i.length&&(t=parseInt(i[1]),we=Boolean(t)),Q("Keep Connection: "+(we?"ON":"OFF"));break;case"rs":case"rssi":1<i.length&&(t=parseInt(i[1]),me=Boolean(t)),Q("RSSI: "+(me?"ON":"OFF"));break;case"cf":case"connectionfast":1<i.length&&(W="f"===i[1].charAt(0).toLowerCase()?"F":((t=parseInt(i[1]))<3?t=3:30<t&&(t=30),t.toString()),2<i.length)&&((t=parseInt(i[1]))<3?t=3:30<t&&(t=30),H=t.toString());{let e;e=void 0!==X?X:"(Unknown)",Q("Fast Connection Speed: "+W+", Current: "+e),Q("Fast Memory Download Speed: "+H)}break;case"l":case"lines":Q("Lines: "+(J=1<i.length?parseInt(i[1]):J));break;case"sl":case"sleep":Q("Sleep: "+(t=1<i.length?parseInt(i[1]):t)+" msec..."),await _(t),Q("...OK");break;case"d":case"disconnect":!0===L?M.gatt.disconnect():V="ERROR(Cmd): Not connected!";break;case"c":case"connect":!0===L&&M.gatt.disconnect(),1<i.length&&(P=i[1]),Q("Connect: Discover Devices");try{var O=await navigator.bluetooth.requestDevice({filters:[{services:[ne]}]});(M=O).addEventListener("gattserverdisconnected",pe)}catch(e){V="ERROR(Discover): "+e}await 0,V||await ye(1,1);break;case"r":case"reconnect":1<i.length&&(P=i[1]),!0===L?V="ERROR(Cmd): Already connected!":void 0===M?V="ERROR(Cmd): Nothing to Reconnect!":await ye(0,1);break;case"i":case"identify":1<i.length&&(P=i[1]),await j(),await xe(),!1===re&&(V="ERROR(Cmd): identify failed!"),!0===U&&We(500);break;case"m":case"memory":if(await Ce(),!V){let e,t=(e=0<G.max?(100*G.total/G.max).toFixed(2):"Unknown","???");switch(G.mode){case 2:case 0:t="Rec.OFF";break;case 1:t="LINEAR";break;case 3:t="RING"}Q("Data(Bytes): Total:"+G.total+"("+e+"%, "+t+"), New:"+G.incnew)}break;case"u":case"upload":{var[h,y=!0]=[i];let e=!1;if(1<h.length&&(e=Boolean(parseInt(h[1]))),!y||(await j(),!V)){for(;(await q("v",5e3),!V)&&(!0===e&&(await blStore.remove(F.deviceMAC+"_data.edt"),await blStore.remove(F.deviceMAC+"_data.edt.old")),await Ce(!0),!V)&&(Q("Available Data (Bytes): Total: "+G.total+", New: "+G.incnew),B&&(e?B("UPLOAD",G.total,"FULL"):B("UPLOAD",G.incnew,"INC")),await Ee("data.edt",e),!V);){await Ee("data.edt.old",e);break}y&&await Y()}}await 0;break;case"x":case"xtract":{let e;if(null==(e=i.length<=1?F.deviceMAC:i[1])||16!=e.length){V="ERROR(xtract): MAC Error";break}Q("Extract Data for MAC:'"+e+"' to Store");var O=e,C=(await blStore.get(O+"_data.edt"),blStore.result());if(null==C)V="ERROR(xtract): No Data";else{await blStore.get(O+"_data.edt.old");var I=blStore.result();void 0!==I&&((x=new Uint8Array(C.v.bytebuf.length+I.v.bytebuf.length)).set(I.v.bytebuf),x.set(C.v.bytebuf,I.v.bytebuf.length),C.v.bytebuf=x,C.v.total_len=x.length,C.v.akt_len=x.length),C.v.crc32=0,C.v.ctime=new Date;try{await blStore.set(O+"_xtract.edt",C.v)}catch(e){V="ERROR(xtract): "+e}}await 0,V||Q("Extracted")}break;case"g":case"get":await Se(i);break;case"p":case"put":{let e=i[1];Q("Put File (Syncflag: "+(e=void 0===e?0:e)+")"),await Te(e)}break;case"firmware":if(Q("Firmware Update"),1e3<=F.deviceType||void 0!==F.disk&&0<F.disk.diskSize){await Te(0,".sec");break}case"memput":{let e,t;if(32==F.cpu)e=294912,t=163840;else{if(40!=F.cpu){V="ERROR(memput): Unknown CPU";break}e=626688,t=356352}n=e,r=t,o="firmware"==s,(I=document.createElement("input")).type="file",I.onchange=e=>{e=e.target.files[0];Q('Selected File:"'+e.name+'" Size:'+e.size+" LastModified: ["+e.lastModifiedDate.toLocaleDateString()+" "+e.lastModifiedDate.toLocaleTimeString()+"]");let t=new FileReader;t.onload=async function(){var e=new Uint8Array(t.result);e.length?r<e.length?Q("ERROR: File too large"):(await De(e,void 0,!1,n),V&&Q(V),Q("Calculated CRC32: "+ie(e).toString(16)+"("+e.length+" Bytes)"),!0===o&&(Q("Reset Device"),await q("R",2e3),await _(1e3),V=0)):Q("ERROR: File is empty")},t.readAsArrayBuffer(e)},Q("Select File or Cancel"),await!I.click()}break;case"fput":{var x=i[1];if(void 0===x){V="ERROR(fput): No Filename";break}var A=x.substring(0,17);let e=x.substring(17);if(17!==A.length||"_"!==A.charAt(16)||"#"===e.charAt(0)||e.length<1||21<e.length){V="ERROR(fput): Filename Error";break}try{await blStore.get(x);var D=blStore.result();if(void 0===D){V="ERROR(fput): No Value for this Key";break}var T=D.v.akt_len,N=D.v.esync_flag;if(!T){V="ERROR(fput): Empty File";break}Q("Put File ('"+A+"...') '"+e+"' from Store"),Q("(Len: "+T+" Bytes, Syncflag: "+N+")"),await De(D.v.bytebuf,e,N)}catch(e){V="ERROR(fput): "+e}}break;case"del":void 0===(a=i[1])||a.length<1||21<a.length?V="ERROR: Filename":await q("D:"+a,1e4);break;case"format":C=parseInt(i[1]);0<C&&C<=2?(Q("Wait... (up to 240 secs)"),await q("F"+C,25e4)):V="ERROR: 'format 1'(Chip Erase) or 'format 2'(Soft)";break;case"reset":Q("Reset Device"),await q(""),V||(await q("R",2e3),await _(1e3),V=0);break;case"t":case"time":{let e="T";"set"===i[1]&&(e+=+(Date.now()/1e3).toFixed(0)),await q(e,5e3)}break;default:V="ERROR(SysCmd): Command unknown"}}async function xe(t=!0){let e=v,a=!0;var i,n,r;for(U=!1;e--;)if(await q("~",5e3),!V){!0===a&&(await blStore.get(F.deviceMAC+"_#PIN"),void 0!==(o=blStore.result())&&o.v.length&&(P=o.v),a=!1);let e=P;if(void 0!==m){var o=parseInt(P);if(isNaN(o))return Q("ERROR: "+(V="PIN required")),void ze();e=(i=o,n=m,r=void 0,i=i.toString(16).toUpperCase().padStart(8,"0"),r=new Uint8Array(16),(new TextEncoder).encodeInto(i,r),i=new Uint8Array(16),(new TextEncoder).encodeInto(n,i),n=await window.crypto.subtle.importKey("raw",r,{name:"AES-CBC",length:128},!1,["encrypt","decrypt"]),r=new Uint8Array(16),await(await crypto.subtle.encrypt({name:"AES-CBC",iv:r},n,i).then(function(e){e=new Uint8Array(e);return new DataView(e.buffer).getUint32(0)})).toString(16))}if(await q("/"+e,5e3),!0!==U)return await blStore.remove(F.deviceMAC+"_#PIN"),void(t&&await Y());if(!V&&(await q("T",5e3),!V)){if(200<=F.deviceType&&F.deviceType<1e3)B&&B("MSG",1,"Sensor, No Disk");else{if(await q("v",1e4),V)continue;await q("Y"),V&&(Q(V),V=0),await Oe("sys_param.lxp",!1),V&&(Q(V),V=0),await q("X"),V&&(Q(V),V=0),await Oe("iparam.lxp",!1),V&&(Q(V),V=0),F.diskCheckOK=!0,await q("V",1e4),V&&(Q(V),V=0,F.diskCheckOK=!1)}if(t&&await Y(),!V){re=!0,B&&B("CON",4,"Full Connected"),F.lastSeen=new Date,!0===U&&P.length&&!isNaN(Number(P))&&await blStore.set(F.deviceMAC+"_#PIN",P);{let e=!1,t=!1,a=(await blStore.get(F.deviceMAC+"_iparam.lxp"),blStore.result()),i=(void 0===a&&(await blStore.get(F.deviceMAC+"_#BAK_iparam.lxp"),void 0!==(a=blStore.result()))&&(Q("INFO: 'iparam.lxp' restored"),e=!0),await blStore.get(F.deviceMAC+"_sys_param.lxp"),blStore.result());void 0===i&&(await blStore.get(F.deviceMAC+"_#BAK_sys_param.lxp"),void 0!==(i=blStore.result()))&&(Q("INFO: 'sys_param.lxp' restored"),t=!0);let n,r;void 0!==a&&(n=(new TextDecoder).decode(a.v.bytebuf),(r=n.replace(/\r/g,"").split(/\n/)).pop(),19<r.length)&&(F.iparam=r,F.iparam_dirtyflag=e),null!=i&&(n=(new TextDecoder).decode(i.v.bytebuf),(r=n.replace(/\r/g,"").split(/\n/)).pop(),18<=r.length)&&(F.sys_param=r,F.sys_param_dirtyflag=t)}await 0;break}}}}async function Ae(e,t,a=!0){a&&1e3<t&&(await j(),V)||(await q("G "+t+" "+e,6e5),a&&1e3<t&&await Y())}async function De(t,e,a,i){let n=t.length,r=0;var o,s=Date.now()-1e3;let l=s;var c,d=be-2&65532;if(1e3<t.length&&(void 0===e?(H<15&&Q("*** WARNING: Memory Connection Speed: "+H),c=W,W=H,await j(),W=c):await j(),V))return;if(E=!1,void 0!==e)await q("P"+(a?"!":"")+":"+e,5e3);else{{let e=i,t=n;for(;0<t;){if(await q("K:"+e+" 1",5e3),V)return;e+=4096,t-=4096}}await q("I:"+i,5e3)}if(!V)if(!0!==E)V="ERROR: File Send Error";else{try{for(;;){let e=n;e>d&&(e=d);var f=new Uint8Array(e+2),u=(f[0]=e,f[1]=C,t.subarray(r,r+e));if(f.set(u,2),await R.writeValue(f.buffer),n-=e,r+=e,!n){var v=Date.now()-s;Q("Transfer OK ("+v/1e3+" sec, "+(t.length/v*1e3).toFixed(0)+" Bytes/sec)");break}1e3<(o=Date.now())-l&&(l=o,Q((100*r/t.length).toFixed(0)+"% / "+r+" Bytes"))}}catch(e){return void(V=!1===L?"ERROR: Connection lost":"ERROR: Transfer "+e)}await q("L",5e3),V||1e3<t.length&&await Y()}}async function Te(n,r){var e=document.createElement("input");e.type="file",void 0!==r&&(e.accept=r),e.onchange=e=>{let a=e.target.files[0];if(Q('Selected File:"'+a.name+'" Size:'+a.size+" LastModified: ["+a.lastModifiedDate.toLocaleDateString()+" "+a.lastModifiedDate.toLocaleTimeString()+"]"),void 0!==r&&".sec"==r){e="firmware_typ"+F.deviceType+"_";if(!a.name.startsWith(e)&&"_firmware.sec"==!a.name)return void Q(V="ERROR: No Firmware File for this Device")}let i=new FileReader;i.onload=async function(){var t=new Uint8Array(i.result);if(t.length){let e=a.name;await De(t,e=void 0!==r&&".sec"==r?"_firmware.sec":e,n),V&&Q(V),void 0!==r&&".sec"==r&&(Q("Reset Device"),await q("R",2e3),await _(1e3),V=0)}else Q(V="ERROR: File is empty")},i.readAsArrayBuffer(a)},Q("Select File or Cancel"),e.click()}let Ne=25,J,Z,$=[];function Q(e){for(void 0!==e?$.push(e):$[0]="*** BLX Terminal ***";$.length>J;)$.shift();void 0!==Z&&(document.getElementById("blxTerminalOut").innerText=$.join("\n"))}function _e(e){13===e.keyCode||10===e.keycode?(e.preventDefault(),document.getElementById("blxTerminalSend").click()):27===e.keyCode&&(e.preventDefault(),document.getElementById("blxTerminalCmd").value="")}function Fe(e){void 0!==Z&&(document.getElementById("blxTerminalSend").disabled=!e)}let Be="";async function Me(){var e=document.getElementById("blxTerminalCmd");let t=e.value.trim();e.value="",e.focus(),Q("> "+t),Fe(!1),ee(1e3,.05,.1),V=0,"*"==t&&Be.length?t=Be:t.length&&(Be=t),"help"==t||"-h"==t||"/h"==t||"-?"==t||"/?"==t?(Q(te+" - "+ae),Q(a)):(t.startsWith(".")?await Ie(t.substring(1)):await q(t),await ke(),V&&(ze(),Q(V)),Fe(!0))}function Le(e,t,a=Ne){void 0!==e?(J=a,(Z=document.getElementById(e)).innerHTML="<div id='blxTerminalOut' style='border: 1px solid var(--bleblue); margin: 6px 0; overflow:hidden;'></div><div style='display:flex; align-items: center;'><input id='blxTerminalCmd' typ='text' maxlength='80' placeholder='>' autocapitalize='none' style='flex-grow: 1; margin: 0 4px 0 2px; min-width: 16px;'><button id='blxTerminalSend'>&#10004;</button></div>",document.getElementById("blxTerminalCmd").addEventListener("keyup",_e),document.getElementById("blxTerminalSend").addEventListener("click",Me),Q(),Fe(!0)):(void 0!==Z&&(Z.innerHTML=""),Z=void 0),void 0!==t&&(B="function"==typeof t?t:void 0)}function l(t,e){var a="@"+e;for(let e=0;e<t.length;e++)if(t[e]===a)return e;return-1}function Pe(e){var t=l(e,0);let a=l(e,1);e=(a=a<0?e.length:a)-t;if(t<0)throw"FATAL_ERROR: iparam defect: Channel #0 not found";if(14!=e)throw"FATAL_ERROR: iparam defect: <> 14 Parameters/Channel!";return e}function i(e,t,a){e=parseInt(e);return!!(isNaN(e)||e<t||a<e)}function n(e){e=parseFloat(e);return!!isNaN(e)}let Ue=window.AudioContext||window.webkitAudioContext,r=null,Ke=!1,Ve=!0;function Ge(){ee(3e3,.04,.02)}function ze(){ee(30,.2,.3)}function We(e,t=.3,a=.05){ee(e,t,a),ee(1.259*e,t,a),ee(1.498*e,t,a)}function ee(e,t=.1,a=.05){var i;Ve&&((i=(r=r||new Ue).createOscillator()).frequency.value=e,(e=r.createGain()).gain.value=a,e.gain.exponentialRampToValueAtTime(a/5,r.currentTime+t),i.connect(e),e.connect(r.destination),i.type="square",i.start(),i.stop(r.currentTime+t))}var e;return"https:"!==location.protocol&&"file:"!==location.protocol&&"content:"!==location.protocol&&"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname?(e="https://"+location.hostname+location.pathname,alert("BLX-API: HTTPS required. Jump to '"+e+"'"),window.location.assign(e)):void 0===navigator.bluetooth&&alert("BLX-API: Browser does not support Bluetooth!"),{setTerminal:Le,userSendCmd:async(e,t)=>{if(t=t,Q("=> "+(e=(e=e).trim())),V=0,e.startsWith(".")?await Ie(e.substring(1)):null!=t?await q(e,t):await q(e),await ke(),await!(V&&(Q(V),B)&&B("ERR",0,V)),V)throw V;if(!0===w)throw new Error("*** BLX BUSY (Since "+(Date.now()-S).toFixed(0)+" msec) ***")},terminalPrint:Q,getDevice:()=>F,getMemory:()=>G,getPinOK:()=>U,frq_ping:ee,chordsound:We,getCrc32:ie,IparamAddChannel:function(t,a){let e=0;var i=parseInt(t[2]);let n;for(;;){var r=l(t,e);if(r<0)break;if(e++,n=r,e>=i)return!1}var o=Pe(t);t.push("@"+e);for(let e=0;e<o-1;e++)!0===a&&void 0!==n?0==e?t.push("0"):t.push(t[n+e+1]):t.push("");return!0},CompactIparam:function(e){let t=0,a=0;for(;;){var i=l(e,a);if(i<0)break;0<parseInt(e[i+1])&&(t=a),a++}var n=l(e,t)+Pe(e);e.splice(n,999)},IparamValidate:function(e){if(e.length<19)return"300: Size ";if("@100"!==e[0])return"301: File Format (ID not '@100')";if(i(e[1],1,999999))return"302: DEVICE_TYP";if(i(e[2],1,90))return"303: MAX_CHANNELS";if(i(e[3],0,255))return"304: HK_FLAGS";if(10!==e[4].length)return"305: Cookie (10 Digits)";if(41<e[5].length)return"306: Device Name Len";if(i(e[6],10,86400))return"307: Period";if(i(e[7],0,parseInt(e[6])-1))return"308: Period Offset";if(i(e[8],0,parseInt(e[6])))return"309: Alarm Period";if(i(e[9],0,604799))return"310: Internet Period";if(i(e[10],0,parseInt(e[9])))return"311: Internet Period";if(i(e[11],-43200,43200))return"312: UTC Offset";if(i(e[12],0,255))return"313: Record Flags";if(i(e[13],0,255))return"314: HK Flags";if(i(e[14],0,255))return"315: HK Reload";if(i(e[15],0,255))return"316: Net Mode";if(i(e[16],0,255))return"317: Error Policy";if(i(e[17],-40,10))return"318: MinTemp oC";if(i(e[18],0,2147483647))return"319: Config0_U31";if(79<e[19].length)return"320: Configuration Command Len";let t=l(e,0);if(t<19)return"600: Missing #0";let a=0;for(;;){if(e.length-t<13)return"601: No of Params #"+a;if(i(e[t+1],0,255))return"602: Action #"+a;if(i(e[t+2],0,65535))return"603: PhysChan #"+a;if(8<e[t+3].length)return"604: KanCaps Len #"+a;if(i(e[t+4],0,255))return"605: SrcIndex #"+a;if(8<e[t+5].length)return"606: Unit Len #"+a;if(i(e[t+6],0,255))return"607: MemFormat #"+a;if(i(e[t+7],0,2147483647))return"608: DB_ID #"+a;if(n(e[t+8]))return"609: Offset #"+a;if(n(e[t+9]))return"610: Factor #"+a;if(n(e[t+10]))return"611: Alarm_Hi #"+a;if(n(e[t+11]))return"612: Alarm_Low #"+a;if(i(e[t+12],0,65535))return"613: MeasBits #"+a;if(32<e[t+13].length)return"614: XBytes Len #"+a;if(void 0===e[t+14])break;if(e[t+14]!=="@"+(a+1).toString())return"615: Unexpected Line #"+a;t+=14,a++}},SysParamValidate:function(e){return e.length<19?"200: Size ":"@200"!==e[0]?"201: File Format (ID not '@200')":41<e[1].length?"202: APN Len":41<e[2].length?"203: Server Len":41<e[3].length?"204: Script Len":41<e[4].length?"205: API Key Len":i(e[5],0,255)?"206: ConFlags":i(e[6],0,65535)?"207: SIM PIN":41<e[7].length?"208: User Len":41<e[8].length?"209: Password Len":i(e[9],10,255)?"210: Max_creg":i(e[10],1,65535)?"211: Port":i(e[11],1e3,65535)?"212: Timeout_0":i(e[12],1e3,65535)?"213: Timeout_run":i(e[13],60,3600)?"214: Reload":i(e[14],0,1e5)?"215: Bat. Capacity":n(e[15])?"216: Bat. Volt 0%":n(e[16])?"217: Bat. Volt 100%":i(e[17],1e3,2e31)?"218: Max Ringsize":i(e[18],0,1e9)?"219: mAmsec/Measure":(e.length<20&&(e[19]="0"),i(e[19],0,255)?"220: Mobile_Protocol":void 0)},version:te}})();"undefined"!=typeof module&&void 0!==module.exports?module.exports.blx=blx:"function"==typeof define&&define.amd?define([],function(){return blx}):window.blx=blx;