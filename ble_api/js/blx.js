let blx=(()=>{let se="V1.25 / 12.12.2024",le="(C)JoEmbedded.de",a="";async function L(t=1){return new Promise(e=>setTimeout(e,t))}let c=3988292384;function ce(t){let a=4294967295;for(let e=0;e<t.length;e++){a=(a^t[e])>>>0;for(let e=0;e<8;e++)1&a?a=a>>>1^c:a>>>=1}return a>>>0}let P={},g=!1,U,de="5c170001-b5a3-f393-e0a9-a37f42997c22",d="5c170002-b5a3-f393-e0a9-a37f42997c22",f="5c170003-b5a3-f393-e0a9-a37f42997c22",K,R,u,V=!1,fe=!1,z="",G=!1,h,W=!1,H=!1,X=0,q,o="?",Y={total:0,incnew:0,max:-1,mode:0},k=!1,S=0,v=3,b=16,E=17,O=32,C=33,I=34,x=35,A=1e4,D="unknown.dat",m,T,F,N,_,B,w,p,y,M,ue,j,ve=20,Re=40,be,ge,me=!1,we=!1,J="3",Z="15",$;function pe(){R=void 0,u=void 0,V=!1,g=!1,fe=!1,G=!1,h=void 0,!(W=!1)===H&&"R"!==o?(re("Disconnected while Busy('"+o+"')"),X="ERROR: Disconnected ('"+o+"')"):re("Disconnected"),H=!1,U&&(void 0!==K?U("CON",1,"Reconnectable"):U("CON",0,"Disconnected"))}function ye(e){var e=new Uint8Array(e.target.value.buffer),r=e.length;if(r<2)re("ERROR(Data): NUS RX blocklen: "+r),console.log(e);else{var o=e[0];if(o+2!==r)re("ERROR(Data): NUS RX blocklen/dlen(0): "+r+"/"+o),console.log(e);else{var s,r=e[1],l=e.subarray(2);let a,i,n,t;switch(r){case x:if(ze(),"~"===(a=(new TextDecoder).decode(l)).charAt(0)&&1<a.length)switch(a.charAt(1)){case"G":i=parseInt(a.substring(3)),(n=parseInt(a.substring(a.indexOf(" "))))?re("Get "+i+" Bytes from Position "+n):re("Get "+i+" Bytes"),w=i,y=0,p=new Uint8Array(i),M=Date.now(),ue=M-1e3;break;case"A":h=a.substring(3);break;case"D":i=parseInt(a.substring(a.indexOf("DS:")+3)),n=parseInt(a.substring(a.indexOf("DA:")+3)),t=new Date(1e3*parseInt(a.substring(a.indexOf("DF:")+3))),re("Disksize: "+(i/1024).toFixed(0)+" kB / Available: "+(n/1024).toFixed(0)+" kB Formated: ["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"]"),P.disk={},P.disk.diskSize=i,P.disk.available=n,P.disk.formated=t,P.disk.files=[],g=!0;break;case'"':{i=a.lastIndexOf('"');var c=a.substring(2,i),d=a.substring(i),f=(i=parseInt(d.substring(d.indexOf("L:")+2)),n=parseInt(d.substring(d.indexOf("CR:")+3),16),t=new Date(1e3*parseInt(d.substring(d.indexOf("T:")+2))),d.indexOf("UC ")),d=d.indexOf("ES ");let e=0<f?" (Unclosed)":"";isNaN(n)||(e+=" CRC: "+n.toString(16).toUpperCase()),0<d&&(e+=" ExtSync"),re(' - "'+c+'" Len: '+i+" Bytes"+e+" ["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"]");var u=[];u.fname=c,u.len=i,u.crc32=n,u.date=t,u.ucl_flag=Boolean(0<f),u.esync_flag=Boolean(0<d),P.disk.files.push(u),g=!0}break;case"X":we?(re("Keep Connection Ping..."),Q("")):(re("WARNING: Connection Auto-Disconnect soon"),U&&U("WARN",1,"Connection Auto-Disconnect soon"));break;case"e":i=parseInt(a.substring(3));var c=a.substring(a.indexOf(" ")+1);n=parseInt(c),0<i&&0<n?0<c.indexOf(" ")?(t=parseInt(c.substring(c.indexOf(" ")+1)),re("Measure ("+i+" Channels in "+n+" msec) Modemstate: "+t)):re("Measure ("+i+" Channels in "+n+" msec)"):re("Measure..."),U&&(U("MEAS_CH",i,"Channels"),U("MEAS_T",n,"msec"));break;case"H":case"#":{f=parseInt(a.substring(2));let e=a.substring(a.indexOf(" ")+1).trim();isNaN(f)?(re("Warning: "+e),U&&U("MEAS_V","Warning",e)):(re("("+(d=90<=f?"H"+f:f)+")"+e),U&&U("MEAS_V",d,e))}break;case"h":re("Alarmbits: "+(i=parseInt(a.substring(3))));break;case"@":i=parseInt(a.substring(2)),re("Wait max. "+((S=i)/1e3).toFixed(0)+" secs");break;case"!":re("Info: "+(i=a.substring(2))),U&&U("INFO",0,i);break;case"M":i=parseInt(a.substring(2));u=a.substring(a.indexOf(" ")+1);n=parseInt(u),re("Motion("+i+" Cnt), Measure in "+n+" secs"),oe(100,.3,.2),oe(99,.3,.2);break;case"Z":switch(i=parseInt(a.substring(2)),t=a.indexOf(" "),(n=0)<t&&(c=a.substring(t+1),n=parseInt(c)),i){case 1:2<n?re("Info: Measure (max. "+n+" sec)"):re("Info: Measure");break;case 9:re("Info: Internet in "+n+" sec");break;case 10:re("Info: Internet Transfer...");break;case 11:n?re("Info: Internet Transfer Error:"+n):re("Info: Internet Transfer OK")}U&&U("BZY",i,n);break;default:re("ERROR: '"+a+"' ???")}else{let e=a.trim();U&&U("MSG",0,e),H?re("Reply: '"+e+"'"):W?re("Modem: '"+e+"'"):re("Info: '"+e+"'")}break;case C:if(ze(),"~"===(a=(new TextDecoder).decode(l)).charAt(0)&&1<a.length)switch(a.charAt(1)){case"B":g=!0,P.deviceMAC="(UNKNOWN)",0<(t=a.indexOf(" "))?16===(n=a.substring(t+1)).length?(re("Device MAC:"+n),P.deviceMAC=n):X="ERROR: Invalid MAC":X="ERROR: No MAC",(i=parseInt(a.substring(3)))>=ve&&i<250?(re("BLE Blocksize: "+(be=i)+" Bytes"),i<Re&&(re("WARNING: Small BLE Blocksize!"),U)&&U("WARN",2,"Small BLE Blocksize!")):X="ERROR: BLE Blocksize: "+i;break;case"C":i=parseInt(a.substring(3)),$=i,0<(t=a.indexOf(" "))?1<(n=parseInt(a.substring(t+1)))?X="ERROR: Connection Speed: ("+i+"): "+n:re("Connection Speed: "+(50<i?"Standard (":"Fast (")+i+")"):X="ERROR: Connection Speed";break;case"T":{i=parseInt(a.substring(3));var v=new Date(1e3*i);let e=(Date.now()/1e3-i).toFixed(0),t;var R=a.substring(a.indexOf(" ")+1);n=parseInt(R),t=864e3<e||e<-864e3?" (Warning: DeviceTime Lost!)":" (Delta to App: "+(e=e<=1&&-1<=e?0:e)+" sec)",n&&(t+="(Run: "+(n/86400).toFixed(1)+" d)"),P.deltaToApp=e,re("Time: ["+v.toLocaleDateString()+" "+v.toLocaleTimeString()+"] "+t)}break;case"V":R=a.split(" ");i=parseInt(a.substring(3)),n=parseInt(R[1]),t=new Date(1e3*parseInt(R[2])),P.deviceType=i,P.firmwareVersion=(n/10).toFixed(1),P.firmwareBuilt=t.toUTCString(),P.cpu=-1,3<R.length&&(P.cpu=parseInt(R[3])),P.deviceHasInternet=0,4<R.length&&(P.deviceHasInternet=parseInt(R[4])),re("DeviceType: "+i+" V"+P.firmwareVersion+" (Built: "+P.firmwareBuilt+") CPU:"+P.cpu),P.deviceHasInternet&&re("Device has Internet"),G=!0;break;case"E":G=!1,X="PIN ERROR",re("ERROR: PIN ERROR"),Ge();break;case"N":i=parseInt(a.substring(3)),n=new Date(1e3*parseInt(a.substring(a.indexOf(" ")+1))),re("Filesize: "+i+" Bytes"),m=i,T=n;break;case"L":re((i=parseInt(a.substring(3)))+" Bytes transferred");break;case"P":re("File Ready"),k=!0;break;case"I":re("Memory Ready"),k=!0;break;case"K":break;default:re("ERROR: '"+a+"' ???"),X=a}else re("End: '"+a+"' (Runtime: "+(Date.now()-q).toFixed(0)+" msec)"),a.startsWith("ERR")&&(X=a);H=!1,W=!1;break;case O:switch((a=(new TextDecoder).decode(l)).charAt(0)){case"R":(i=parseInt(a.substring(2)))<-199&&0<=i?(ge="[NoSignal]",i=-200):ge=i,me&&re("Signal (dBm):"+ge),Ke&&(199<(s=-i)?oe(30,.2,.3):(s<30&&(s=30),oe(100*Math.pow(2,(100-s)/12),.5,.15))),U&&U("RSSI",i," dBm");break;case"V":i=a.substring(3),U&&U("VSENS",i,a.charAt(1));break;default:re("Info: '"+a+"'")}break;case I:if(i=w-y,l.length>i)X="ERROR: Too many data";else{p.set(l,y),y+=o;var b=Date.now();if(1e3<b-ue&&(i=(y/w*100).toFixed(0),U&&U("PROG",i,"%"),re("Get: "+i+"% / "+y+" Bytes"),ue=b),0===(i=w-y)){let e=Date.now()-M;e||e++;b=(y/e*1e3).toFixed(0);re("Get OK ("+e/1e3+" sec, "+b+" Bytes/sec)"),U&&U("GET_OK",b,"Bytes/sec")}}break;default:re("ERROR(Data): '"+a+"'")}}}}async function he(e,a,i=v){if(void 0===K)X="ERROR(Connect): Undefined Device";else if(null===K.name)X="ERROR(Connect): Unknown Device Name";else{e&&((P={}).advertisingName=K.name,g=!0);let t=0;for(;;){try{var n=e?"Connect":"Reconnect";re(n+=` to '${K.name}'...`),U&&U("CON",2,n),t++;var r=await(await K.gatt.connect()).getPrimaryService(de);R=await r.getCharacteristic(d),await(u=await r.getCharacteristic(f)).startNotifications(),u.addEventListener("characteristicvaluechanged",ye),re("Connected"),V=!0,U&&U("CON",3,"Connected, Identify..."),t=i,X=0}catch(e){re("RETRY(Connect("+t+"), Reason: '"+e.message.substring(0,40)+"...')"),X="ERROR(Connect("+t+")): '"+e.message+"'"}if(t>=i)break;var o="Failed, Retry to connect ("+(i-t+1)+" left)...";U&&U("WARN",5,o),re(o)}V&&(a&&await xe(!1),await ee(),!0===G)&&We(500)}}async function ke(){if(g){g=!1;var e=P.deviceMAC+"_#BlxIDs";try{await blStore.set(e,P)}catch(e){X="ERROR(CheckIDs): "+e}}}async function Q(e,t=A){if(!0===H)console.warn("*** BLX BUSY (Since "+(Date.now()-q).toFixed(0)+" msec) ***");else{if(!0!==V){if(void 0===K)return void(X="ERROR(DeviceCmd): Not Connected!");if(await he(0,1),X)return}!1===(W=e.startsWith("#")?!0:W)&&(H=!0),o=e,q=Date.now();var[e,a=b]=[e],i=e.length,n=new Uint8Array(i+2),r=n.subarray(2),i=(n[0]=i,n[1]=a,(new TextEncoder).encodeInto(e,r));if(void 0!==i)try{R.writeValue(n.buffer)}catch(e){let t;t=!1===V?"Connection lost":e,X="ERROR(DeviceSend): "+t}if(await 0,!1===W){a=t;for(S=a;!0===H;)if(await L(10),(S-=10)<0){X="ERROR(DeviceCmd): Timeout ('"+o+"')";break}await 0,H=!1}}}function s(t){let a=-1;for(let e=0;e<P.disk.files.length;e++)if(P.disk.files[e].fname===t){a=e;break}return a<0?(X="ERROR(Cmd): File not in Directory",-1):a}async function Se(a,i=!0){var n=a[1];if(void 0===n||n.length<1||21<n.length)X="ERROR(Cmd): Filename";else if(void 0===P.disk||void 0===P.disk.files)X="ERROR(Cmd): No Disk Info";else{var r=s(n);if(!(r<0||(m=-1,D=n,j=void 0,await Q("N:"+n),X)))if(m<0)X="ERROR(SysCmd): No File";else if(re('Get File "'+n+'": Total Len: '+m+" Bytes"),m!==P.disk.files[r].len)X="ERROR(SysCmd): File Size changed";else if(P.disk.files[r].date.getTime()!==T.getTime())X="ERROR(SysCmd): File Date changed";else{F=P.disk.files[r].crc32,N=P.disk.files[r].ucl_flag,_=P.disk.files[r].esync_flag;let e=m,t=0;a[2]&&(t=parseInt(a[2]),e=a[3]?parseInt(a[3]):m-t),t<0||e<1||t+e>m?X="ERROR(SysCmd): Out of range of File":(B=t,U&&U("GET",e,n),await Ae(t,e,i),X||(async()=>{if(void 0!==y&&y)if(void 0===p||p.length!==w)X="ERROR(Store): Inconsistent Data";else{var e=P.deviceMAC+"_"+D,t=[];t.total_len=m,t.pos0=B,t.akt_len=w,t.ctime=T,t.crc32=F,t.ucl_flag=N,t.esync_flag=_,t.bytebuf=p,t.tssync=void 0;try{await blStore.set(e,t)}catch(e){return X="ERROR(Store): "+e}re("Save to Store '"+e+"'"),p=void 0,j=e}else X="ERROR(Store): No Data to store"})())}}}async function Ee(e,t){var a,i,n=s(e);if(0<=n){if(await blStore.get(P.deviceMAC+"_"+e),void 0===(a=blStore.result())||!0===t)await Se([0,e],!1),X;else if(0<(t=P.disk.files[n].len-a.v.akt_len)&&(U&&U("GET",t,e),re('Get File (Missing Part) "'+e+'": Len: '+t+" Bytes"),n=e,e=a.v.akt_len,i=t,m=-1,D=void 0,j=void 0,await Q("N:"+n),await(!X&&!(m<0?X="ERROR(SysCmd): No File '"+n+"'":(F=0,N=!0,_=!1,await Ae(B=e,m=i,!1)))),!X))if(p.length!==t)X="ERROR(upload): Read Len";else{(n=new Uint8Array(a.v.bytebuf.length+t)).set(a.v.bytebuf),n.set(p,a.v.bytebuf.length),a.v.bytebuf=n,a.v.total_len+=t,a.v.akt_len+=t,a.v.tssync=void 0;try{await blStore.set(a.k,a.v)}catch(e){X="ERROR(upload): "+e}}}else X=""}async function ee(){for(let e=0;e<3&&(await L(1e3),$=-1,void 0===R?X="Disconnected":await Q("CS",32e3),!X)&&!(0<$);e++);}async function te(){for(let e=0;e<4&&(await L(1e3),$=-1,await Q("C"+J,32e3),!X)&&!($<=50);e++){var t=parseInt(J);if(isNaN(t))break;0<e&&(J=(++t).toString())}}async function Oe(e,t=!0){var a=s(e),i=(await blStore.get(P.deviceMAC+"_"+e),blStore.result());a<0?(void 0!==i&&await blStore.remove(i.k),X="ERROR(identify): No File '"+e+"' on Device",U&&U("WARN",3,"No File '"+e+"' on Device")):P.disk.files[a].len<=0||!0===P.disk.files[a].ucl_flag?(X="ERROR(identify): File corrupt '"+e+"' on Device",U&&U("WARN",4,"File corrupt '"+e+"' on Device")):void 0!==i&&P.disk.files[a].len===i.v.akt_len&&P.disk.files[a].crc32===i.v.crc32&&P.disk.files[a].date.getTime()===i.v.ctime.getTime()||(await Se([0,e],t),X)||(await blStore.get(P.deviceMAC+"_"+e),void 0!==(i=blStore.result())&&P.disk.files[a].len===i.v.akt_len&&P.disk.files[a].crc32===i.v.crc32&&P.disk.files[a].date.getTime()===i.v.ctime.getTime()&&await blStore.set(P.deviceMAC+"_#BAK_"+e,i.v))}async function Ce(e=!1){Y={total:0,incnew:0,max:-1,mode:-1};var t=s("data.edt");let a=s("data.edt.old"),i=(await blStore.get(P.deviceMAC+"_data.edt.old"),blStore.result()),n=(await blStore.get(P.deviceMAC+"_data.edt"),blStore.result());if(void 0!==P.iparam&&(Y.mode=parseInt(P.iparam[12]),2&Y.mode?null!=P.sys_param&&(Y.max=2*parseInt(P.sys_param[17])):Y.max=P.disk.diskSize-102400),0<=a&&null!=n&&P.disk.files[a].date.getTime()===n.v.ctime.getTime()&&((i=n).k=P.deviceMAC+"_data.edt.old",i.v.tssync=void 0,n=void 0,console.log("Shift 'data.edt'->'data.edt.old'"),!0===e))try{await blStore.remove(P.deviceMAC+"_data.edt"),await blStore.set(i.k,i.v)}catch(e){return void(X="ERROR(Store): "+e)}if(null!=i&&(a<0||P.disk.files[a].date.getTime()!==i.v.ctime.getTime())&&(a=-1,!(i=void 0)===e))try{await blStore.remove(P.deviceMAC+"_data.edt.old")}catch(e){return void(X="ERROR(Store): "+e)}if(null!=n&&(t<0||P.disk.files[t].date.getTime()!==n.v.ctime.getTime())&&!(n=void 0)===e)try{await blStore.remove(P.deviceMAC+"_data.edt")}catch(e){return void(X="ERROR(Store): "+e)}0<=t&&(Y.total+=P.disk.files[t].len),0<=a&&(Y.total+=P.disk.files[a].len),Y.incnew=Y.total,null!=n&&(Y.incnew-=n.v.akt_len),null!=i&&(Y.incnew-=i.v.akt_len),X=0}async function Ie(e){var i=e.split(" ");let t,a;var n,r,o,s,l,c,d=i[0].toLowerCase();if(!0===W)X='ERROR(Modem): Exit Modem Terminal ("~")!';else switch(d){case"?":re(`Blx Terminal Version: ${se}, `+le);break;case"q":case"quit":Le();break;case"cls":ne=[],void 0!==ie&&(document.getElementById("blxTerminalOut").innerText="(cleared)");break;case"s":case"store":try{if(i.length<=1){await blStore.count();let n=0,r=Date.now();re("Store: "+blStore.result()+" Items"),await blStore.iterate(function(e){a=r-e.ts,t="",86400<=(a/=1e3)&&(a-=86400*(i=Math.floor(a/86400)),t+=i+"d"),a-=3600*(i=Math.floor(a/3600)),i<10&&(t+="0"),t+=i+"h",(i=Math.floor(a/60))<10&&(t+="0"),t+=i+"m",(a-=60*i)<10&&(t+="0");var t,a,i=t+=Math.floor(a)+"s";void 0!==e.v.akt_len?(a=e.v.akt_len,n+=a,re("'"+e.k+"' ("+i+")': "+a+" Bytes")):re("'"+e.k+"' ("+i+")'")}),re("Total Data: "+(n/1024).toFixed(0)+" kB")}else switch(i[1]){case"c":case"clear":await blStore.clearStore(),re("Store cleared");break;case"r":case"remove":{let e;e=i.length<3?j:i[2],await blStore.remove(e),re("Removed '"+e+"' from Store")}break;case"v":case"var":3===i.length?(s=i[2],await blStore.get(s),re("Key:'"+s+"' => '"+blStore.result().v+"'")):4===i.length?(l=i[2],c=i[3],await blStore.set(l,c),re("Set Key:'"+l+"' to:'"+c+"'")):re("Syntax Error");break;case"l":case"list":try{let e;if(void 0===(e=i.length<3?j:i[2])){X="ERROR(Store): No Key";break}await blStore.get(e);var f=blStore.result();if(void 0===f){X="ERROR(Store): No Value for this Key";break}var u,v=(new TextDecoder).decode(f.v.bytebuf),R=v.replace(/\r/g,"").split(/\n/),b=(R.pop(),ae);ae<v.length+10&&(ae=v.length+10),re("List Key '"+f.k+"' Len: "+v.length+" Bytes => "+R.length+" Lines");let t=0;for(u of R)re(t+": "+(u.length?u:"(empty)")),t++;ae=b}catch(e){X="ERROR(Store): "+e}break;case"m":case"modify":try{let e;var g=i[2];if(void 0===g){X="ERROR(Store): No Index";break}var m=i[3];if(void 0===(e=i.length<5?j:i[4])){X="ERROR(Store): No Key";break}await blStore.get(e);var w=blStore.result();if(void 0===w){X="ERROR(Store): No Value for this Key";break}var p=(new TextDecoder).decode(w.v.bytebuf).replace(/\r/g,"").split(/\n/);if(p.pop(),g<0||g>p.length){X="ERROR(Store): Index Range";break}var y=p[g],h=(re("Old: "+g+": "+(y.length?y:"(empty)")),p[g]=m,re("New: "+g+": "+((y=p[g]).length?y:"(empty)")),new TextEncoder),k=(w.v.bytebuf=h.encode(p.join("\n")+"\n"),w.v.bytebuf.length);w.v.akt_len=k,w.v.crc32=ce(w.v.bytebuf),w.v.ctime=new Date,w.v.pos0=0,w.v.total_len=k,w.v.ucl_flag=!1,w.v.tssync=void 0,await blStore.set(e,w.v)}catch(e){X="ERROR(Store): "+e}break;default:X="ERROR(Store): Unknown Cmd"}}catch(e){X="ERROR(Store): "+e}break;case"e":case"export":try{let e;e=i.length<2?j:i[1],await blStore.get(e);var S=blStore.result();if(void 0===S){X="ERROR(StoreExport): Key not found";break}var E=S;try{if(void 0!==E.v&&void 0!==E.v.total_len&&E.v.total_len){var O=E.k.lastIndexOf(".");let e="application/octet-binary";if(1<O)switch(E.k.substring(O).toLowerCase()){case".jpg":e="image/jpeg";break;case".csv":e="application/csv;charset=utf-8";break;case".pdf":e="application/pdf";break;case".txt":case".log":e="text/plain;charset=utf-8"}var M=new Blob([E.v.bytebuf],{type:e}),C=E.k;saveAs(M,C),re("Export '"+C+"'")}else X="ERROR(Export): No Length or Empty!"}catch(e){X="ERROR(Export): Export failed"}}catch(e){X="ERROR(StoreExport): "+e}break;case"a":case"audio":1<i.length&&(t=parseInt(i[1]),Ke=Boolean(t)),2<i.length&&(t=parseInt(i[2]),Ve=Boolean(t)),re("Audio: RSSI: "+(Ke?"ON":"OFF")+", Term: "+(Ve?"ON":"OFF"));break;case"f":{let e=440,t,a;1<i.length&&(e=parseInt(i[1])),2<i.length&&(t=parseInt(i[2])),3<i.length&&(a=parseInt(i[3])),oe(e,t,a),re("Audio-Ping Frq:"+e+" Hz, (Dur: "+t+" Vol: "+a+")")}break;case"k":case"keep":1<i.length&&(t=parseInt(i[1]),we=Boolean(t)),re("Keep Connection: "+(we?"ON":"OFF"));break;case"rs":case"rssi":1<i.length&&(t=parseInt(i[1]),me=Boolean(t)),re("RSSI: "+(me?"ON":"OFF"));break;case"cf":case"connectionfast":1<i.length&&(J="f"===i[1].charAt(0).toLowerCase()?"F":((t=parseInt(i[1]))<3?t=3:30<t&&(t=30),t.toString()),2<i.length)&&((t=parseInt(i[1]))<3?t=3:30<t&&(t=30),Z=t.toString());{let e;e=void 0!==$?$:"(Unknown)",re("Fast Connection Speed: "+J+", Current: "+e),re("Fast Memory Download Speed: "+Z)}break;case"l":case"lines":re("Lines: "+(ae=1<i.length?parseInt(i[1]):ae));break;case"sl":case"sleep":re("Sleep: "+(t=1<i.length?parseInt(i[1]):t)+" msec..."),await L(t),re("...OK");break;case"d":case"disconnect":!0===V?K.gatt.disconnect():X="ERROR(Cmd): Not connected!";break;case"c":case"connect":!0===V&&K.gatt.disconnect(),1<i.length&&(z=i[1]),re("Connect: Discover Devices");try{var I=await navigator.bluetooth.requestDevice({filters:[{services:[de]}]});(K=I).addEventListener("gattserverdisconnected",pe)}catch(e){X="ERROR(Discover): "+e}await 0,X||await he(1,1);break;case"r":case"reconnect":1<i.length&&(z=i[1]),!0===V?X="ERROR(Cmd): Already connected!":void 0===K?X="ERROR(Cmd): Nothing to Reconnect!":await he(0,1);break;case"i":case"identify":1<i.length&&(z=i[1]),await te(),await xe(),!1===fe&&(X="ERROR(Cmd): identify failed!"),!0===G&&We(500);break;case"m":case"memory":if(await Ce(),!X){let e,t=(e=0<Y.max?(100*Y.total/Y.max).toFixed(2):"Unknown","???");switch(Y.mode){case 2:case 0:t="Rec.OFF";break;case 1:t="LINEAR";break;case 3:t="RING"}re("Data(Bytes): Total:"+Y.total+"("+e+"%, "+t+"), New:"+Y.incnew)}break;case"crun":re("Run Command-File (*.crun)");S=await(async e=>{var t=document.createElement("input");t.type="file";let a,i=!0;for(void 0!==e&&(t.accept=e),t.oncancel=e=>{i=!1},t.onchange=e=>{e=e.target.files[0];re('Selected File:"'+e.name+'" Size:'+e.size+" LastModified: ["+e.lastModifiedDate.toLocaleDateString()+" "+e.lastModifiedDate.toLocaleTimeString()+"]");let t=new FileReader;t.onabort=t.onerror=function(){i=!1},t.onload=async function(){a=t.result,i=!1},t.readAsText(e)},re("Select File or Cancel"),t.click();i;)await L(10);return a})(".crun");if(void 0!==S){var x=S.replace(/\r/g,"").trim().split(/\n/);for(let e=0;e<x.length;e++){if(await He(x[e]),X)break;if(!0===H){X="*** BLX BUSY (Since "+(Date.now()-q).toFixed(0)+" msec) ***";break}}}break;case"u":case"upload":{var[E,I=!0]=[i];let e=!1;if(1<E.length&&(e=Boolean(parseInt(E[1]))),!I||(await te(),!X)){for(;(await Q("v",5e3),!X)&&(!0===e&&(await blStore.remove(P.deviceMAC+"_data.edt"),await blStore.remove(P.deviceMAC+"_data.edt.old")),await Ce(!0),!X)&&(re("Available Data (Bytes): Total: "+Y.total+", New: "+Y.incnew),U&&(e?U("UPLOAD",Y.total,"FULL"):U("UPLOAD",Y.incnew,"INC")),await Ee("data.edt",e),!X);){await Ee("data.edt.old",e);break}I&&await ee()}}await 0;break;case"x":case"xtract":{let e;if(null==(e=i.length<=1?P.deviceMAC:i[1])||16!=e.length){X="ERROR(xtract): MAC Error";break}re("Extract Data for MAC:'"+e+"' to Store");var S=e,A=(await blStore.get(S+"_data.edt"),blStore.result());if(null==A)X="ERROR(xtract): No Data";else{await blStore.get(S+"_data.edt.old");var D=blStore.result();void 0!==D&&((T=new Uint8Array(A.v.bytebuf.length+D.v.bytebuf.length)).set(D.v.bytebuf),T.set(A.v.bytebuf,D.v.bytebuf.length),A.v.bytebuf=T,A.v.total_len=T.length,A.v.akt_len=T.length),A.v.crc32=0,A.v.ctime=new Date;try{await blStore.set(S+"_xtract.edt",A.v)}catch(e){X="ERROR(xtract): "+e}}await 0,X||re("Extracted")}break;case"g":case"get":await Se(i);break;case"p":case"put":{let e=i[1];re("Put File (Syncflag: "+(e=void 0===e?0:e)+")"),await Te(e)}break;case"firmware":if(re("Firmware Update"),1e3<=P.deviceType||void 0!==P.disk&&0<P.disk.diskSize){await Te(0,".sec");break}case"memput":{let e,t;if(32==P.cpu)e=294912,t=163840;else{if(40!=P.cpu){X="ERROR(memput): Unknown CPU";break}e=626688,t=356352}n=e,r=t,o="firmware"==d,(D=document.createElement("input")).type="file",D.onchange=e=>{e=e.target.files[0];re('Selected File:"'+e.name+'" Size:'+e.size+" LastModified: ["+e.lastModifiedDate.toLocaleDateString()+" "+e.lastModifiedDate.toLocaleTimeString()+"]");let t=new FileReader;t.onload=async function(){var e=new Uint8Array(t.result);e.length?r<e.length?re("ERROR: File too large"):(await De(e,void 0,!1,n),X&&re(X),re("Calculated CRC32: "+ce(e).toString(16)+"("+e.length+" Bytes)"),!0===o&&(re("Reset Device"),await Q("R",2e3),await L(1e3),X=0)):re("ERROR: File is empty")},t.readAsArrayBuffer(e)},re("Select File or Cancel"),await!D.click()}break;case"fput":{var T=i[1];if(void 0===T){X="ERROR(fput): No Filename";break}var F=T.substring(0,17);let e=T.substring(17);if(17!==F.length||"_"!==F.charAt(16)||"#"===e.charAt(0)||e.length<1||21<e.length){X="ERROR(fput): Filename Error";break}try{await blStore.get(T);var N=blStore.result();if(void 0===N){X="ERROR(fput): No Value for this Key";break}var _=N.v.akt_len,B=N.v.esync_flag;if(!_){X="ERROR(fput): Empty File";break}re("Put File ('"+F+"...') '"+e+"' from Store"),re("(Len: "+_+" Bytes, Syncflag: "+B+")"),await De(N.v.bytebuf,e,B)}catch(e){X="ERROR(fput): "+e}}break;case"del":void 0===(a=i[1])||a.length<1||21<a.length?X="ERROR: Filename":await Q("D:"+a,1e4);break;case"reset":re("Reset Device"),await Q(""),X||(await Q("R",2e3),await L(1e3),X=0);break;case"t":case"time":{let e="T";"set"===i[1]&&(e+=+(Date.now()/1e3).toFixed(0)),await Q(e,5e3)}break;default:X="ERROR(SysCmd): Command unknown"}}async function xe(t=!0){let e=v,a=!0;var i,n,r;for(G=!1;e--;)if(await Q("~",5e3),!X){!0===a&&(await blStore.get(P.deviceMAC+"_#PIN"),void 0!==(o=blStore.result())&&o.v.length&&(z=o.v),a=!1);let e=z;if(void 0!==h){var o=parseInt(z);if(isNaN(o))return re("ERROR: "+(X="PIN required")),void Ge();e=(i=o,n=h,r=void 0,i=i.toString(16).toUpperCase().padStart(8,"0"),r=new Uint8Array(16),(new TextEncoder).encodeInto(i,r),i=new Uint8Array(16),(new TextEncoder).encodeInto(n,i),n=await window.crypto.subtle.importKey("raw",r,{name:"AES-CBC",length:128},!1,["encrypt","decrypt"]),r=new Uint8Array(16),await(await crypto.subtle.encrypt({name:"AES-CBC",iv:r},n,i).then(function(e){e=new Uint8Array(e);return new DataView(e.buffer).getUint32(0)})).toString(16))}if(await Q("/"+e,5e3),!0!==G)return await blStore.remove(P.deviceMAC+"_#PIN"),void(t&&await ee());if(!X&&(await Q("T",5e3),!X)){if(200<=P.deviceType&&P.deviceType<1e3)U&&U("MSG",1,"Sensor, No Disk");else{if(await Q("v",1e4),X)continue;await Q("Y"),X&&(re(X),X=0),await Oe("sys_param.lxp",!1),X&&(re(X),X=0),await Q("X"),X&&(re(X),X=0),await Oe("iparam.lxp",!1),X&&(re(X),X=0),P.diskCheckOK=!0,await Q("V",1e4),X&&(re(X),X=0,P.diskCheckOK=!1)}if(t&&await ee(),!X){fe=!0,U&&U("CON",4,"Full Connected"),P.lastSeen=new Date,!0===G&&z.length&&!isNaN(Number(z))&&await blStore.set(P.deviceMAC+"_#PIN",z);{let e=!1,t=!1,a=(await blStore.get(P.deviceMAC+"_iparam.lxp"),blStore.result()),i=(void 0===a&&(await blStore.get(P.deviceMAC+"_#BAK_iparam.lxp"),void 0!==(a=blStore.result()))&&(re("INFO: 'iparam.lxp' restored"),e=!0),await blStore.get(P.deviceMAC+"_sys_param.lxp"),blStore.result());void 0===i&&(await blStore.get(P.deviceMAC+"_#BAK_sys_param.lxp"),void 0!==(i=blStore.result()))&&(re("INFO: 'sys_param.lxp' restored"),t=!0);let n,r;void 0!==a&&(n=(new TextDecoder).decode(a.v.bytebuf),(r=n.replace(/\r/g,"").split(/\n/)).pop(),19<r.length)&&(P.iparam=r,P.iparam_dirtyflag=e),null!=i&&(n=(new TextDecoder).decode(i.v.bytebuf),(r=n.replace(/\r/g,"").split(/\n/)).pop(),18<=r.length)&&(P.sys_param=r,P.sys_param_dirtyflag=t)}await 0;break}}}}async function Ae(e,t,a=!0){a&&1e3<t&&(await te(),X)||(await Q("G "+t+" "+e,6e5),a&&1e3<t&&await ee())}async function De(t,e,a,i){let n=t.length,r=0;var o,s=Date.now()-1e3;let l=s;var c,d=be-2&65532;if(1e3<t.length&&(void 0===e?(Z<15&&re("*** WARNING: Memory Connection Speed: "+Z),c=J,J=Z,await te(),J=c):await te(),X))return;if(k=!1,void 0!==e)await Q("P"+(a?"!":"")+":"+e,5e3);else{{let e=i,t=n;for(;0<t;){if(await Q("K:"+e+" 1",5e3),X)return;e+=4096,t-=4096}}await Q("I:"+i,5e3)}if(!X)if(!0!==k)X="ERROR: File Send Error";else{try{for(;;){let e=n;e>d&&(e=d);var f=new Uint8Array(e+2),u=(f[0]=e,f[1]=E,t.subarray(r,r+e));if(f.set(u,2),await R.writeValue(f.buffer),n-=e,r+=e,!n){var v=Date.now()-s;re("Transfer OK ("+v/1e3+" sec, "+(t.length/v*1e3).toFixed(0)+" Bytes/sec)");break}1e3<(o=Date.now())-l&&(l=o,re((100*r/t.length).toFixed(0)+"% / "+r+" Bytes"))}}catch(e){return void(X=!1===V?"ERROR: Connection lost":"ERROR: Transfer "+e)}await Q("L",5e3),X||1e3<t.length&&await ee()}}async function Te(n,r){var e=document.createElement("input");e.type="file",void 0!==r&&(e.accept=r),e.onchange=e=>{let a=e.target.files[0];if(re('Selected File:"'+a.name+'" Size:'+a.size+" LastModified: ["+a.lastModifiedDate.toLocaleDateString()+" "+a.lastModifiedDate.toLocaleTimeString()+"]"),void 0!==r&&".sec"==r){e="firmware_typ"+P.deviceType+"_";if(!a.name.startsWith(e)&&"_firmware.sec"==!a.name)return void re(X="ERROR: No Firmware File for this Device")}let i=new FileReader;i.onload=async function(){var t=new Uint8Array(i.result);if(t.length){let e=a.name;await De(t,e=void 0!==r&&".sec"==r?"_firmware.sec":e,n),X&&re(X),void 0!==r&&".sec"==r&&(re("Reset Device"),await Q("R",2e3),await L(1e3),X=0)}else re(X="ERROR: File is empty")},i.readAsArrayBuffer(a)},re("Select File or Cancel"),e.click()}let Fe=25,ae,ie,ne=[];function re(e){for(void 0!==e?ne.push(e):ne[0]="*** BLX Terminal ***";ne.length>ae;)ne.shift();void 0!==ie&&(document.getElementById("blxTerminalOut").innerText=ne.join("\n"))}function Ne(e){13===e.keyCode||10===e.keycode?(e.preventDefault(),document.getElementById("blxTerminalSend").click()):27===e.keyCode&&(e.preventDefault(),document.getElementById("blxTerminalCmd").value="")}function _e(e){void 0!==ie&&(document.getElementById("blxTerminalSend").disabled=!e)}let Be="";async function Me(){var e=document.getElementById("blxTerminalCmd");let t=e.value.trim();e.value="",e.focus(),re("> "+t),_e(!1),oe(1e3,.05,.1),X=0,"*"==t&&Be.length?t=Be:t.length&&(Be=t),"help"==t||"-h"==t||"/h"==t||"-?"==t||"/?"==t?(re(se+" - "+le),re(a)):(t.startsWith(".")?await Ie(t.substring(1)):await Q(t),await ke(),X&&(Ge(),re(X))),_e(!0)}function Le(e,t,a=Fe){void 0!==e?(ae=a,(ie=document.getElementById(e)).innerHTML="<div id='blxTerminalOut' style='border: 1px solid var(--bleblue); margin: 6px 0; overflow:hidden;'></div><div style='display:flex; align-items: center;'><input id='blxTerminalCmd' typ='text' maxlength='80' placeholder='>' autocapitalize='none' style='flex-grow: 1; margin: 0 4px 0 2px; min-width: 16px;'><button id='blxTerminalSend'>&#10004;</button></div>",document.getElementById("blxTerminalCmd").addEventListener("keyup",Ne),document.getElementById("blxTerminalSend").addEventListener("click",Me),re(),_e(!0)):(void 0!==ie&&(ie.innerHTML=""),ie=void 0),void 0!==t&&(U="function"==typeof t?t:void 0)}function l(t,e){var a="@"+e;for(let e=0;e<t.length;e++)if(t[e]===a)return e;return-1}function Pe(e){var t=l(e,0);let a=l(e,1);e=(a=a<0?e.length:a)-t;if(t<0)throw"FATAL_ERROR: iparam defect: Channel #0 not found";if(14!=e)throw"FATAL_ERROR: iparam defect: <> 14 Parameters/Channel!";return e}function i(e,t,a){e=parseInt(e);return!!(isNaN(e)||e<t||a<e)}function n(e){e=parseFloat(e);return!!isNaN(e)}let Ue=window.AudioContext||window.webkitAudioContext,r=null,Ke=!1,Ve=!0;function ze(){oe(3e3,.04,.02)}function Ge(){oe(30,.2,.3)}function We(e,t=.3,a=.05){oe(e,t,a),oe(1.259*e,t,a),oe(1.498*e,t,a)}function oe(e,t=.1,a=.05){var i;Ve&&((i=(r=r||new Ue).createOscillator()).frequency.value=e,(e=r.createGain()).gain.value=a,e.gain.exponentialRampToValueAtTime(a/5,r.currentTime+t),i.connect(e),e.connect(r.destination),i.type="square",i.start(),i.stop(r.currentTime+t))}async function He(e,t){e=e.trim();re("=> "+e),X=0,e.startsWith(".")?await Ie(e.substring(1)):null!=t?await Q(e,t):await Q(e),await ke(),X&&(re(X),U)&&U("ERR",0,X)}var e;return"https:"!==location.protocol&&"file:"!==location.protocol&&"content:"!==location.protocol&&"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname?(e="https://"+location.hostname+location.pathname,alert("BLX-API: HTTPS required. Jump to '"+e+"'"),window.location.assign(e)):void 0===navigator.bluetooth&&alert("BLX-API: Browser does not support Bluetooth!"),{setTerminal:Le,userSendCmd:async(e,t)=>{if(await He(e,t),X)throw X;if(!0===H)throw new Error("*** BLX BUSY (Since "+(Date.now()-q).toFixed(0)+" msec) ***")},terminalPrint:re,getDevice:()=>P,getMemory:()=>Y,getPinOK:()=>G,frq_ping:oe,chordsound:We,getCrc32:ce,IparamAddChannel:function(t,a){let e=0;var i=parseInt(t[2]);let n;for(;;){var r=l(t,e);if(r<0)break;if(e++,n=r,e>=i)return!1}var o=Pe(t);t.push("@"+e);for(let e=0;e<o-1;e++)!0===a&&void 0!==n?0==e?t.push("0"):t.push(t[n+e+1]):t.push("");return!0},CompactIparam:function(e){let t=0,a=0;for(;;){var i=l(e,a);if(i<0)break;0<parseInt(e[i+1])&&(t=a),a++}var n=l(e,t)+Pe(e);e.splice(n,999)},IparamValidate:function(e){if(e.length<19)return"300: Size ";if("@100"!==e[0])return"301: File Format (ID not '@100')";if(i(e[1],1,999999))return"302: DEVICE_TYP";if(i(e[2],1,90))return"303: MAX_CHANNELS";if(i(e[3],0,255))return"304: HK_FLAGS";if(10!==e[4].length)return"305: Cookie (10 Digits)";if(41<e[5].length)return"306: Device Name Len";if(i(e[6],10,86400))return"307: Period";if(i(e[7],0,parseInt(e[6])-1))return"308: Period Offset";if(i(e[8],0,parseInt(e[6])))return"309: Alarm Period";if(i(e[9],0,604799))return"310: Internet Period";if(i(e[10],0,parseInt(e[9])))return"311: Internet Period";if(i(e[11],-43200,43200))return"312: UTC Offset";if(i(e[12],0,255))return"313: Record Flags";if(i(e[13],0,255))return"314: HK Flags";if(i(e[14],0,255))return"315: HK Reload";if(i(e[15],0,255))return"316: Net Mode";if(i(e[16],0,255))return"317: Error Policy";if(i(e[17],-40,10))return"318: MinTemp oC";if(i(e[18],0,2147483647))return"319: Config0_U31";if(79<e[19].length)return"320: Configuration Command Len";let t=l(e,0);if(t<19)return"600: Missing #0";let a=0;for(;;){if(e.length-t<13)return"601: No of Params #"+a;if(i(e[t+1],0,255))return"602: Action #"+a;if(i(e[t+2],0,65535))return"603: PhysChan #"+a;if(8<e[t+3].length)return"604: KanCaps Len #"+a;if(i(e[t+4],0,255))return"605: SrcIndex #"+a;if(8<e[t+5].length)return"606: Unit Len #"+a;if(i(e[t+6],0,255))return"607: MemFormat #"+a;if(i(e[t+7],0,2147483647))return"608: DB_ID #"+a;if(n(e[t+8]))return"609: Offset #"+a;if(n(e[t+9]))return"610: Factor #"+a;if(n(e[t+10]))return"611: Alarm_Hi #"+a;if(n(e[t+11]))return"612: Alarm_Low #"+a;if(i(e[t+12],0,65535))return"613: MeasBits #"+a;if(32<e[t+13].length)return"614: XBytes Len #"+a;if(void 0===e[t+14])break;if(e[t+14]!=="@"+(a+1).toString())return"615: Unexpected Line #"+a;t+=14,a++}},SysParamValidate:function(e){return e.length<19?"200: Size ":"@200"!==e[0]?"201: File Format (ID not '@200')":41<e[1].length?"202: APN Len":41<e[2].length?"203: Server Len":41<e[3].length?"204: Script Len":41<e[4].length?"205: API Key Len":i(e[5],0,255)?"206: ConFlags":i(e[6],0,65535)?"207: SIM PIN":41<e[7].length?"208: User Len":41<e[8].length?"209: Password Len":i(e[9],10,255)?"210: Max_creg":i(e[10],1,65535)?"211: Port":i(e[11],1e3,65535)?"212: Timeout_0":i(e[12],1e3,65535)?"213: Timeout_run":i(e[13],60,3600)?"214: Reload":i(e[14],0,1e5)?"215: Bat. Capacity":n(e[15])?"216: Bat. Volt 0%":n(e[16])?"217: Bat. Volt 100%":i(e[17],1e3,2e31)?"218: Max Ringsize":i(e[18],0,1e9)?"219: mAmsec/Measure":(e.length<20&&(e[19]="0"),i(e[19],0,255)?"220: Mobile_Protocol":void 0)},version:se}})();"undefined"!=typeof module&&void 0!==module.exports?module.exports.blx=blx:"function"==typeof define&&define.amd?define([],function(){return blx}):window.blx=blx;