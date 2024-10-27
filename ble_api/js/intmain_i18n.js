let VERSION="V0.17 / 09.09.2024",COPYRIGHT="(C)JoEmbedded.de",i18_availLang=["EN - English","DE - Deutsch"],i18_defaultLang="en",i18_currentLang="en",translations={en:{"Storage: Used Memory":"*",Fontsize:"*","Theme Dark/White":"*","Remote Server":"*","Access-Token":"*","Server-Synchronize":"*",ERROR:"*",Connecting:"*","Reading IDs...":"*","(No Data)":"*","(No Changes)":"*","Show Graph":"*",sec:"*",min:"*",hr:"*",d:"*",Connected:"*","Memory Info":"*","Sync Device Time":"*",Measure:"*","Wait...":"*",Channels:"*","Wait Max:":"*","Clear Device?":"*","Clear Device":"*","OK to clear Device Memory?":"*","Edit Parameter":"*","Send...":"*","Add Channel":"*","Edit Parameters cancelled":"*","Parameter Check":"*",Disconnect:"*",Connect:"*","Reconnect?":"*","Reconnect to Device?":"*",Name:"*","OK to Reconnect (or close)":"*","Device Info":"*",Remove:"*",File:"*",Age:"*","Remove Device?":"*","Time lost!":"*",Unknown:"*","Rec.OFF":"*",LINEAR:"*",RING:"*","Start new Measure, Clear all Data":"*","Start new Measure, Clear all Data (Clean FlashDisk, may need up to 240 sec)":"*","Set PIN":"*","Send Parameters":"*",Info:"*",Info:"*","Internet in":"*","Internet Transfer":"*",ALARM:"*","Can't Open Server on GITs":"*","No Files!":"*",Reason:"*","Contact/Info":"*",Language:"*",Greeting:"Hello!",Menu:"*","Main Content":"*",Terminal:"*",Graphics:"*",Setup:"*",Devices:"*","Server-Sync":"*",Scan:"*",Memory:"*","Synchronize Time":"*",Delta:"*","Load Data from Device":"*","Clear Memory":"*","Device Parameter":"*","Device SysPar":"*",Result:"*",Values:"*","Install APP":"*"},de:{"Storage: Used Memory":"Speicherverbrauch",Fontsize:"Schriftgröße","Theme Dark/White":"Thema Dunkel/Hell","Remote Server":"Remote Server","Access-Token":"Zugriffs-Tocken","Server-Synchronize":"Server Sync.",ERROR:"FEHLER",Connecting:"Verbinden","Reading IDs...":"IDs lesen","(No Data)":"(Keine Daten)","(No Changes)":"(Keine Änderungen)","Show Graph":"Zeige Grafik",sec:"*",min:"*",hr:"*",d:"*",Connected:"Verbunden","Memory Info":"Speicherinfo","Sync Device Time":"Gerätezeit sync.",Measure:"Messen","Wait...":"Warten...",Channels:"Kanäle","Wait Max:":"Warte Max:","Clear Device?":"Gerät löschen?","Clear Device":"Gerät löschen","OK to clear Device Memory?":"OK um Gerät zu löschen","Edit Parameter":"Parameter editieren","Send...":"Senden...","Add Channel":"Kanal zufügen","Edit Parameters cancelled":"Param. editieren abgebrochen","Parameter Check":"Prüfe Parameter",Disconnect:"Trennen",Connect:"Verbinden","Reconnect?":"Erneut verbinden?","Reconnect to Device?":"Erneut mit Gerät verbinden?",Name:"Name","OK to Reconnect (or close)":"OK zum Erneut Verbinden (oder Schließen)","Device Info":"Geräte Info",Remove:"Entfernen",File:"Datei",Age:"Alter","Remove Device?":"Geräte entfernen?","Time lost!":"Uhrzeit verloren!",Unknown:"Unbekannt","Rec.OFF":"Rec.AUS",LINEAR:"*",RING:"*","Start new Measure, Clear all Data":"Neue Messung starten, alte Daten löschen","Start new Measure, Clear all Data (Clean FlashDisk, may need up to 240 sec)":"Neue Messung starten, alte Daten löschen (Disk löschen kann bis zu 240 sec dauern)","Set PIN":"PIN setzen","Send Parameters":"Sende Parameter",Info:"*",Info:"*","Internet in":"*","Internet Transfer":"*",ALARM:"*","Can't Open Server on GITs":"Kann Server nicht öffnen auf GITs","No Files!":"Keine Dateien!",Reason:"Grund","Contact/Info":"Kontakt/Informationen",Language:"Sprache",Greeting:"Willkommen!",Menu:"*","Main Content":"Hauptseite",Terminal:"Konsole",Graphics:"Grafik",Setup:"*",Devices:"Geräte","Server-Sync":"*",Scan:"*",Memory:"Speicher","Synchronize Time":"Zeit synchronisieren",Delta:"*","Load Data from Device":"Daten vom Gerät laden","Clear Memory":"Speicher löschen","Device Parameter":"Geräteparameter","Device SysPar":"Geräte Systemparameter",Result:"Ergebnis",Values:"Werte","Install APP":"APP Installieren"}},notFoundList=[];function notFound(){console.log(`--- i18: Not Found:${notFoundList.length}---`),notFoundList.forEach(e=>{console.log(`"${e}": "*",`)})}function ll(e){var n=translations[i18_currentLang][e];return"*"===n?e:void 0!==n?n:window.jdDebug?(notFoundList.includes(e)||notFoundList.push(e),console.warn(`i18: ll('${i18_currentLang}:${e}') not found!`),`(??? ${i18_currentLang}:'${e}')`):e}function i18localize(e){let a;var n=e.substr(0,2).toLowerCase();for(let e=0;e<i18_availLang.length;e++)i18_availLang[e].substring(0,2).toLowerCase()==n&&(a=n);void 0===a&&(a=i18_defaultLang,console.warn(`i18: New Language:'${e}' not found, Fallback:'${a}'`));let r=translations[a],t=document.querySelectorAll("[data-ll]");t.forEach(e=>{var n=e.dataset.ll,t=r[n];"*"===t?e.textContent=n:void 0!==t?e.textContent=t:(console.warn(`i18: '${a}': ll('${n}'): not found!`),notFoundList.includes(n)||notFoundList.push(n))}),(t=document.querySelectorAll("[data-llt]")).forEach(e=>{var n=e.dataset.llt,t=r[n];"*"===t?e.setAttribute("title",n):void 0!==t?e.setAttribute("title",t):(console.warn(`i18: '${a}': llt('${n}'): not found!`),notFoundList.includes(n)||notFoundList.push(n))}),document.querySelector("html").setAttribute("lang",a),i18_currentLang=a}console.log("intmain_i18n.js init, Version:",VERSION);export{i18_availLang,notFound,ll,i18localize};