(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
if(navigator.userAgent.indexOf('iPad')!==-1){var splashscreen=document.createElement('link');splashscreen.rel='apple-touch-startup-image';splashscreen.href='512.png';document.getElementsByTagName('head')[0].appendChild(splashscreen);}
window.addEventListener('load',function(){WhatToDo.style.display='block';NSB.List_jqm_init14('lstWhatToDo','',true,'100%',false);lstWhatToDo_ref=new IScroll(lstWhatToDo_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});lstWhatToDo.refresh=function(){if(typeof lstWhatToDo_ref!='undefined')setTimeout(NSB.refresh,100,lstWhatToDo_ref)};NSB.addProperties(lstWhatToDo,lstWhatToDo_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstWhatToDo_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(hBar);NSB.addDisableProperty(hBar);hBar_right.onclick=function(){ChangeForm(frmAbout)};if(typeof(hBar.onclick)=='function'){if(typeof(hBar_left)!='undefined')hBar_left.onclick=function(){hBar.onclick(hBar_left.getAttribute('nsbvalue'))};if(typeof(hBar_right)!='undefined')hBar_right.onclick=function(){hBar.onclick(hBar_right.getAttribute('nsbvalue'))}};WhatToDo.style.display='none';},false);WhatToDo.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(WhatToDo);lstWhatToDo.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
switch(True){case((i)==0):var sScripture;sScripture=GetSetting("reading");if(Len(sScripture)==0){NSB.MsgBox("There is no last scripture that was read yet. Read a scripture first!");return savethefunction_rvar;}
sourceForm="WhatToDo";ChangeForm(frmVerses);break;case((i)==2):sourceForm="frmPromises";ChangeForm(frmPromises);break;case((i)==1):sourceForm="WhatToDo";ChangeForm(frmBibles);}
return savethefunction_rvar;}
WhatToDo.onshow=function(){savethefunction_rvar="";var sScripture;sScripture=GetSetting("reading");sScripture=Trim(sScripture);if(Len(sScripture)==0){sScripture="Last Scripture";}
lstWhatToDo.Top=hBar.Height;lstWhatToDo.Height=WhatToDo.Height-hBar.Height;ListViewClear(lstWhatToDo);ListViewAddTitleDescription(lstWhatToDo,sScripture,"Read the last scripture that you were reading.");ListViewAddTitleDescription(lstWhatToDo,"Bibles","Select a bible to read from available bibles.");ListViewAddTitleDescription(lstWhatToDo,"Bible Promises","Read bible specific verses based on particular topics.");lstWhatToDo.refresh();lstWhatToDo_ref.scrollTo(0,0,0);return savethefunction_rvar;}
window.addEventListener('load',function(){frmBibles.style.display='block';NSB.List_jqm_init14('biblesL','',true,'100%',false);biblesL_ref=new IScroll(biblesL_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});biblesL.refresh=function(){if(typeof biblesL_ref!='undefined')setTimeout(NSB.refresh,100,biblesL_ref)};NSB.addProperties(biblesL,biblesL_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('biblesL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(biblesT);NSB.addDisableProperty(biblesT);if(typeof(biblesT.onclick)=='function'){if(typeof(biblesT_left)!='undefined')biblesT_left.onclick=function(){biblesT.onclick(biblesT_left.getAttribute('nsbvalue'))};if(typeof(biblesT_right)!='undefined')biblesT_right.onclick=function(){biblesT.onclick(biblesT_right.getAttribute('nsbvalue'))}};frmBibles.style.display='none';},false);frmBibles.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmBibles);function LoadBibles(){savethefunction_rvar="";NSB.WaitCursor(True);biblesL.Top=biblesT.Height;biblesL.Height=frmBibles.Height-biblesT.Height;biblesL.deleteItem("all");sqlList=[];sqlList[0]=["SELECT BibleName,Abbreviation FROM Bibles ORDER BY BibleName;",biblesH,biblesE];Sql(dbObj,sqlList);}
function biblesE(transaction,results){savethefunction_rvar="";NSB.WaitCursor(False);console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function biblesH(transaction,results){savethefunction_rvar="";var row,i,sBibleName,sAbbreviation;for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);sBibleName=row["BibleName"];sAbbreviation=row["Abbreviation"];SaveSetting(sBibleName,sAbbreviation);biblesL.addItem(sBibleName,"80.png");}
biblesL.refresh();biblesL_ref.scrollTo(0,0,0);NSB.WaitCursor(False);return savethefunction_rvar;}
biblesL.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
var strBible,strFile;strBible=biblesL.getItem(i);SaveSetting("bible",strBible);sourceForm="frmBibles";strFile=GetSetting(strBible);ChangeForm(frmBooks);return savethefunction_rvar;}
frmBibles.onshow=function(){savethefunction_rvar="";LoadBibles();return savethefunction_rvar;}
biblesT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="home"):ChangeForm(WhatToDo);break;case((choice)=="bullets"):ChangeForm(frmFiles);}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmBooks.style.display='block';NSB.addProperties(booksT);NSB.addDisableProperty(booksT);booksT_left.onclick=function(){ChangeForm(frmBibles)};if(typeof(booksT.onclick)=='function'){if(typeof(booksT_left)!='undefined')booksT_left.onclick=function(){booksT.onclick(booksT_left.getAttribute('nsbvalue'))};if(typeof(booksT_right)!='undefined')booksT_right.onclick=function(){booksT.onclick(booksT_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('booksL','',true,'35.9375%',false);booksL_ref=new IScroll(booksL_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});booksL.refresh=function(){if(typeof booksL_ref!='undefined')setTimeout(NSB.refresh,100,booksL_ref)};NSB.addProperties(booksL,booksL_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('booksL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.List_jqm_init14('chaptersL','',true,'34.375%',false);chaptersL_ref=new IScroll(chaptersL_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});chaptersL.refresh=function(){if(typeof chaptersL_ref!='undefined')setTimeout(NSB.refresh,100,chaptersL_ref)};NSB.addProperties(chaptersL,chaptersL_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('chaptersL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.List_jqm_init14('versesL','',true,'27.5%',false);versesL_ref=new IScroll(versesL_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});versesL.refresh=function(){if(typeof versesL_ref!='undefined')setTimeout(NSB.refresh,100,versesL_ref)};NSB.addProperties(versesL,versesL_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('versesL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmBooks.style.display='none';},false);frmBooks.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmBooks);function LoadBooks(){savethefunction_rvar="";var sonbooks;sonbooks=GetSetting("onbooks");if(sonbooks=="1"){return savethefunction_rvar;}
NSB.WaitCursor(True);var sWidth;sWidth=frmBooks.Width/3;booksL.Left=0;booksL.Top=booksT.Height;booksL.Height=frmBooks.Height-booksT.Height;booksL.Width="60%";chaptersL.Left=booksL.Width+1;chaptersL.Top=booksT.Height;chaptersL.Height=frmBooks.Height-booksT.Height;chaptersL.Width="20%";versesL.Top=booksT.Height;versesL.Height=frmBooks.Height-booksT.Height;versesL.Left=booksL.Width+chaptersL.Width+2;versesL.Width="20%";var strBible;strBible=GetSetting("bible");$("#booksT h1").text(strBible);booksL.deleteItem("all");booksL.setFilter("");chaptersL.deleteItem("all");versesL.deleteItem("all");sqlList=[];sqlList[0]=["SELECT * FROM Books ORDER BY BookID;",booksH,booksE];Sql(dbObj,sqlList);}
function booksE(transaction,results){savethefunction_rvar="";NSB.WaitCursor(False);console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function booksH(transaction,results){savethefunction_rvar="";var row,i,sBookID,sBookName,sChapters;var sKey,svalue;for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);sBookID=row["BookID"];sBookName=row["BookName"];sChapters=row["Chapters"];sKey="biblebook_"+sBookName;svalue=sBookID+"*"+sChapters;SaveSetting(sKey,svalue);booksL.addItem(sBookName);}
booksL.refresh();booksL_ref.scrollTo(0,0,0);SaveSetting("onbooks","1");NSB.WaitCursor(False);return savethefunction_rvar;}
booksL.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
var strBook;strBook=booksL.getItem(i);SaveSetting("book",strBook);LoadChapters();return savethefunction_rvar;}
function LoadChapters(){savethefunction_rvar="";NSB.WaitCursor(True);var strBible;strBible=GetSetting("bible");var strBook;strBook=GetSetting("book");$("#booksT h1").text(strBible+" \\ "+strBook);var sKey,sChapters,sBookID,sRecord,sWidth,schapCnt,schapName;sKey="biblebook_"+strBook;sRecord=GetSetting(sKey);sBookID=MvField(sRecord,1,"*");sChapters=MvField(sRecord,2,"*");SaveSetting("bookid",sBookID);SaveSetting("chapters",sChapters);chaptersL.deleteItem("ALL");versesL.deleteItem("ALL");for(schapCnt=1;schapCnt<=sChapters;schapCnt++){schapCnt=CStr(schapCnt);chaptersL.addItem(schapCnt);}
chaptersL.refresh;chaptersL_ref.scrollTo(0,0,0);SaveSetting("onbooks","1");NSB.WaitCursor(False);}
function verseSelectorE(transaction,results){savethefunction_rvar="";NSB.WaitCursor(False);console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function verseSelectorH(transaction,results){savethefunction_rvar="";var row,i,sVerse;sVerse=0;for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);sVerse=row["Verse"];}
SaveSetting("verses",sVerse);for(i=1;i<=sVerse;i++){versesL.addItem(CStr(i));}
versesL.refresh;versesL_ref.scrollTo(0,0,0);SaveSetting("onbooks","1");NSB.WaitCursor(False);return savethefunction_rvar;}
chaptersL.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
NSB.WaitCursor(True);versesL.deleteItem("all");var strBookID,strChapter,strBible,strBook;strBookID=GetSetting("bookid");strChapter=chaptersL.getItem(i);SaveSetting("chapter",strChapter);strBible=GetSetting("bible");strBook=GetSetting("book");$("#booksT h1").text(strBible+" \\ "+strBook+" \\ "+strChapter);sqlList=[];sqlList[0]=["SELECT MAX(Verse) as Verse FROM Chapters WHERE Book = "+strBookID+" and Chapter = "+strChapter+";",verseSelectorH,verseSelectorE];Sql(dbObj,sqlList);return savethefunction_rvar;}
versesL.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
var strVerse,strVerses;strVerse=versesL.getItem(i);strVerses=GetSetting("verses");SaveSetting("startverse",strVerse);SaveSetting("endverse",strVerses);sourceForm="frmBooks";ChangeForm(frmVerses);return savethefunction_rvar;}
frmBooks.onshow=function(){savethefunction_rvar="";LoadBooks();return savethefunction_rvar;}
window.addEventListener('load',function(){frmPromises.style.display='block';NSB.List_jqm_init14('promisesL','',true,'100%',false);promisesL_ref=new IScroll(promisesL_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false});promisesL.refresh=function(){if(typeof promisesL_ref!='undefined')setTimeout(NSB.refresh,100,promisesL_ref)};NSB.addProperties(promisesL,promisesL_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('promisesL_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(promisesT);NSB.addDisableProperty(promisesT);promisesT_left.onclick=function(){ChangeForm(WhatToDo)};if(typeof(promisesT.onclick)=='function'){if(typeof(promisesT_left)!='undefined')promisesT_left.onclick=function(){promisesT.onclick(promisesT_left.getAttribute('nsbvalue'))};if(typeof(promisesT_right)!='undefined')promisesT_right.onclick=function(){promisesT.onclick(promisesT_right.getAttribute('nsbvalue'))}};frmPromises.style.display='none';},false);frmPromises.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmPromises);function LoadPromises(){savethefunction_rvar="";promisesL.setFilter("");var sonpromise;sonpromise=GetSetting("onpromise");if(sonpromise=="1"){return savethefunction_rvar;}
NSB.WaitCursor(True);$("#promisesT h1").text("Bible Promises");promisesL.Left=0;promisesL.Top=promisesT.Height;promisesL.Height=frmPromises.Height-promisesT.Height;promisesL.deleteItem("all");promisesL.refresh();sqlList=[];sqlList[0]=["SELECT LessonTitle,LessonScriptures FROM Lessons ORDER BY LessonTitle;",promisesH,promisesE];Sql(dbObj,sqlList);}
function promisesE(transaction,results){savethefunction_rvar="";NSB.WaitCursor(False);console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function promisesH(transaction,results){savethefunction_rvar="";var row,i,sLessonTitle,sLessonScriptures;var lid;for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);sLessonScriptures=row["LessonScriptures"];sLessonTitle=row["LessonTitle"];SaveSetting(sLessonTitle,sLessonScriptures);lid=promisesL+"_"+CStr(i);ListViewAddSplit(promisesL,sLessonTitle,lid,"action","#","a","Edit");}
promisesL.refresh();promisesL_ref.scrollTo(0,0,0);SaveSetting("onpromise","1");NSB.WaitCursor(False);return savethefunction_rvar;}
promisesL.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
var strPromise;strPromise=promisesL.getItem(i);SaveSetting("promise",strPromise);ChangeForm(frmPromise);return savethefunction_rvar;}
frmPromises.onshow=function(){savethefunction_rvar="";LoadPromises();return savethefunction_rvar;}
promisesT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="home"):ChangeForm(WhatToDo);break;case((choice)=="refresh"):SaveSetting("onpromise","0");LoadPromises();}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmVerses.style.display='block';NSB.addProperties(versesT);NSB.addDisableProperty(versesT);if(typeof(versesT.onclick)=='function'){if(typeof(versesT_left)!='undefined')versesT_left.onclick=function(){versesT.onclick(versesT_left.getAttribute('nsbvalue'))};if(typeof(versesT_right)!='undefined')versesT_right.onclick=function(){versesT.onclick(versesT_right.getAttribute('nsbvalue'))}};txtVerses.ontouchmove=function(e){e.stopPropagation()};NSB.addProperties(txtVerses);frmVerses.style.display='none';},false);frmVerses.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmVerses);versesT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="home"):switch(True){case((sourceForm)=="WhatToDo"):ChangeForm(WhatToDo);break;case((sourceForm)=="frmPromise"):ChangeForm(frmPromise);break;case((sourceForm)=="frmBooks"):ChangeForm(frmBooks);break;}
break;case((choice)=="check"):}
return savethefunction_rvar;}
frmVerses.onshow=function(){savethefunction_rvar="";NSB.WaitCursor(True);var strBible,strBook,strChapter,strStartVerse,strEndVerse,strBookID;var strScripture;txtVerses.Left=10;txtVerses.Top=42;txtVerses.Height=frmVerses.Height-versesT.Height-10;txtVerses.Width=frmVerses.Width-20;txtVerses.value="";strBible=GetSetting("bible");strBook=GetSetting("book");strChapter=GetSetting("chapter");strStartVerse=GetSetting("startverse");strEndVerse=GetSetting("endverse");strBookID=GetSetting("bookid");strScripture=strBible+" \\ "+strBook+" \\ "+strChapter+":"+strStartVerse+"-"+strEndVerse;doEvents();ReadBible(strScripture);return savethefunction_rvar;}
function ReadBible(strScripture){savethefunction_rvar="";SaveSetting("reading",strScripture);$("#versesT h1").text(strScripture);var strBible,strBook,strChapter,strStart,strEnd,strVerses;var strBookID,strVerses1,sKey,strFile;strBible=MvField(strScripture,1,"\\");strBook=MvField(strScripture,2,"\\");strVerses=MvField(strScripture,3,"\\");strBible=Trim(strBible);strBook=Trim(strBook);strVerses=Trim(strVerses);strChapter=MvField(strVerses,1,":");strVerses1=MvField(strVerses,2,":");strChapter=Trim(strChapter);strVerses1=Trim(strVerses1);strStart=MvField(strVerses1,1,"-");strEnd=MvField(strVerses1,2,"-");strStart=Trim(strStart);strEnd=Trim(strEnd);if(Len(strEnd)==0){strEnd=strStart;}
sKey="biblebook_"+strBook;strBookID=GetSetting(sKey);strBookID=MvField(strBookID,1,"*");strFile=GetSetting(strBible);sqlList=[];sqlList[0]=["SELECT Verse,Scripture FROM ["+strFile+"] WHERE (Book = "+strBookID+" and Chapter = "+strChapter+" and Verse >= "+strStart+" and Verse <= "+strEnd+");",verseReadH,verseReadE];Sql(dbObj,sqlList);return savethefunction_rvar;}
function verseReadE(transaction,results){savethefunction_rvar="";NSB.WaitCursor(False);console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function verseReadH(transaction,results){savethefunction_rvar="";var row,i,sVerse,sDetails;var sAll;sAll="";for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);sVerse=row["Verse"];sDetails=row["Scripture"];sDetails=Replace(sDetails,CR,"");sDetails=Replace(sDetails,LF,"");sAll=sAll+sVerse+". "+sDetails+'\n';}
SaveSetting("scripture",sAll);txtVerses.text=sAll;NSB.WaitCursor(False);return savethefunction_rvar;}
window.addEventListener('load',function(){frmAbout.style.display='block';NSB.addProperties(Label12);NSB.addProperties(Label13);NSB.addProperties(Line1);NSB.addProperties(hAbout);NSB.addDisableProperty(hAbout);hAbout_left.onclick=function(){ChangeForm(WhatToDo)};if(typeof(hAbout.onclick)=='function'){if(typeof(hAbout_left)!='undefined')hAbout_left.onclick=function(){hAbout.onclick(hAbout_left.getAttribute('nsbvalue'))};if(typeof(hAbout_right)!='undefined')hAbout_right.onclick=function(){hAbout.onclick(hAbout_right.getAttribute('nsbvalue'))}};frmAbout.style.display='none';},false);frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmAbout);