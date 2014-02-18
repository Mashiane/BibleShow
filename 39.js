function Trial_CreateTable(){var tbls;tbls=new Object();tbls["IMEI"]="text";tbls["Runs"]="integer";CreateTable("Trial",tbls,"IMEI","");CreateTableIndexes("Trial","Runs");}
function Main(){SaveSetting("onbooks","0");SaveSetting("onpromise","0");NSB.MsgBoxStyle="";sqlList=[];dbName="bibleshow.db";dbObj=SqlOpenDatabase(dbName);if(dbObj==0){NSB.MsgBox("Error opening bibleshow database!");}}
var dbName;var dbObj;var sourceForm;var catFrom,sqlList,rCnt,query,recid,isnew;var DB_REAL="REAL";var DB_INTEGER="INTEGER";var DB_BLOB="BLOB";var DB_TEXT="TEXT";var DB_FLOAT="FLOAT";var DB_NUMERIC="NUMERIC";var VM=Chr(253);var FM=Chr(254);var Quote=Chr(34);var DQuote=Chr(34)+Chr(34);var InsertCommands,UpdateCommands,dbExport,dbJSON,dbImport;function FormSlide(sourceForm,targetForm){savethefunction_rvar="";sourceForm.style.webkitTransitionDuration="1000ms";sourceForm.style.webkitTransform="translateX(-"+SysInfo(0)+"px)";var xShow;xShow=ShowAnotherForm(sourceForm,targetForm);setTimeout(xShow,1000);return savethefunction_rvar;}
function ShowAnotherForm(sourceForm,targetForm){nsbDOMAttr(sourceForm,'style.display',"none");nsbDOMAttr(targetForm,'style.display',"block");targetForm.style.webkitTransform="translateX(0px)";}
function NormalizeText(sText){savethefunction_rvar="";sText="<span style="+Quote+"font-weight:normal;font-size:small;"+Quote+">"+sText+"</span>";return sText;return savethefunction_rvar;}
function CleanHeader(sHeader){savethefunction_rvar="";return sHeader;return savethefunction_rvar;}
function InDoubleQuotes(svalue){savethefunction_rvar="";svalue=Quote+svalue+Quote;return svalue;return savethefunction_rvar;}
function TableDistinctList(sourceTable,sourceField){savethefunction_rvar="";SaveSetting("distinct",sourceField);var cboList;cboList=[];query="SELECT ["+sourceField+"]  FROM ["+sourceTable+"] ORDER BY ["+sourceField+"];";cboList[0]=[query,TableDistinctList1];Sql(dbObj,cboList);return savethefunction_rvar;}
function TableDistinctList1(transaction,results){savethefunction_rvar="";var row,i,sdistinct,svalue,svalues;sdistinct=GetSetting("distinct");svalues="";for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);svalue=row[sdistinct];svalues=svalues+svalue+FM;}
svalues=RemoveDelim(svalues,FM);SaveSetting("distinct_"+sdistinct,svalues);return savethefunction_rvar;}
function ComboBoxDef(){savethefunction_rvar="";var strDef;strDef="<html><Select style="+DQuote;strDef=strDef+" name="+DQuote;strDef=strDef+" data-role="+InDoubleQuotes("none")+">";strDef=strDef+"<option value="+DQuote+"></option></Select>";strDef=strDef+"<span class="+InDoubleQuotes("arrow")+"></span></html>";return strDef;return savethefunction_rvar;}
function NumericOnly(svalue){savethefunction_rvar="";var sout,lenvalue,i,spart;sout="";lenvalue=Len(svalue);for(i=1;i<=lenvalue;i++){spart=Mid(svalue,i,1);switch(True){case((spart)=="1"):sout=sout+spart;break;case((spart)=="2"):sout=sout+spart;break;case((spart)=="3"):sout=sout+spart;break;case((spart)=="4"):sout=sout+spart;break;case((spart)=="5"):sout=sout+spart;break;case((spart)=="6"):sout=sout+spart;break;case((spart)=="7"):sout=sout+spart;break;case((spart)=="8"):sout=sout+spart;break;case((spart)=="9"):sout=sout+spart;break;case((spart)=="0"):sout=sout+spart;break;case((spart)=="-"):sout=sout+spart;}}
return sout;return savethefunction_rvar;}
function FixMonths(smonths){savethefunction_rvar="";smonths=CStr(smonths);var lenx;lenx=Len(smonths);if(lenx==1){return smonths;}else{var part1,part2;part1=Left(smonths,1);part2=Mid(smonths,2);smonths=part1+"."+part2;smonths=Round(smonths,0);return smonths;}
return savethefunction_rvar;}
function InitializeList(lstname,stritems,delim,bclear){var spitems,rscnt,rstot,stritem;if(bclear==True){lstname.deleteItem("all");}
spitems=Split(stritems,delim);rstot=spitems.length-1;for(rscnt=0;rscnt<=rstot;rscnt++){stritem=spitems[rscnt];lstname.addItem(stritem);}
lstname.refresh();}
function ListAddTextDescription(targetList,sText,sdescription){sText="<span class="+InDoubleQuotes("name")+">"+sText+"</span><span class="+InDoubleQuotes("comment")+">"+sdescription+"</span>";targetList.addItem(sText);}
function ResizeHeaderList(form,header,child){child.Left=0;child.Top=header.Height;child.Height=form.Height-header.Height;child.refresh();}
function RemoveDelim(strmv,delim){savethefunction_rvar="";var lendelim,rightpart,strout;lendelim=Len(delim);rightpart=Right(strmv,lendelim);strout=strmv;if(rightpart==delim){strout=Left(strmv,Len(strmv)-lendelim);}
return strout;return savethefunction_rvar;}
function MvRemoteItem(strmv,sremove,delim){savethefunction_rvar="";sremove=LCase(sremove);var sout,lendelim;sout="";var spv;spv=Split(strmv,delim);var stot,scnt,sitem;lendelim=Len(delim);stot=spv.length-1;for(scnt=0;scnt<=stot;scnt++){sitem=LCase(spv[scnt]);if(sitem!=sremove){sout=sout+spv[scnt]+delim;}}
sout=Left(sout,Len(sout)-lendelim);return sout;return savethefunction_rvar;}
function MvSearch(searchvalues,strsearch,delim){savethefunction_rvar="";if(Len(searchvalues)==0){return-1;}
var spvalues,i,itot,ivalue;spvalues=Split(searchvalues,delim);strsearch=LCase(strsearch);itot=spvalues.length-1;for(i=0;i<=itot;i++){ivalue=spvalues[i];ivalue=LCase(ivalue);if(ivalue==strsearch){return i;}}
return-1;return savethefunction_rvar;}
function DbDateOut(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"DD/MM/YYYY");return xToday;return savethefunction_rvar;}
function DbDateOut1(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"YYYYMMDD");return xToday;return savethefunction_rvar;}
function ToDay(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"DD/MM/YYYY");return savethefunction_rvar;}
function ToDay1(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"YYYYMMDD");return savethefunction_rvar;}
function MvField(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue;mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
xvalue=mvalues[iposition];return xvalue;return savethefunction_rvar;}
function MvRest(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue,x,y,resultx;var lendelim;lendelim=Len(delimiter);mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
resultx="";x=iposition+1;for(y=x;y<=tvalues;y++){xvalue=mvalues[y];resultx=resultx+xvalue+delimiter;}
resultx=Left(resultx,Len(resultx)-lendelim);return resultx;return savethefunction_rvar;}
function MakeMoney(svalue){savethefunction_rvar="";svalue=ProperAmount(svalue);svalue=FormatNumber(svalue);return svalue;return savethefunction_rvar;}
function ProperAmount(svalue){savethefunction_rvar="";svalue=Replace(svalue,",","");dpos=InStr(1,svalue,".");if(dpos==0){svalue=svalue+".00";}
return svalue;return savethefunction_rvar;}
function InSingleQuote(strV){savethefunction_rvar="";return"'"+strV+"'";}
function MonthNames(intM){savethefunction_rvar="";return MonthName(intM,True);return savethefunction_rvar;}
function MonthNumber(strM){savethefunction_rvar="";strM=LCase(strM);switch(True){case((strM)=="jan"):return 1;break;case((strM)=="feb"):return 2;break;case((strM)=="mar"):return 3;break;case((strM)=="apr"):return 4;break;case((strM)=="may"):return 5;break;case((strM)=="jun"):return 6;break;case((strM)=="jul"):return 7;break;case((strM)=="aug"):return 8;break;case((strM)=="sep"):return 9;break;case((strM)=="oct"):return 10;break;case((strM)=="nov"):return 11;break;case((strM)=="dec"):return 12;}
return savethefunction_rvar;}
function SetHeaderTitle(hdObj,hdTitle){var shd;shd="#"+hdObj+" h1";$(shd).text(hdTitle);}
function GridRowColColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.color=colour;grdName.refresh();}
function GridRowColBackgroundColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.backgroundColor=colour;grdName.refresh();}
function GridRowColor(grdName,rowPos,colour){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.color=color;}
grdName.refresh();}
function GridCenterAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="center";}}
grdName.refresh();}
function GridRightAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="right";}}
grdName.refresh();}
function GridSetHeight(grdName,grdRowHeight){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){grdName.setRowHeight(i,grdRowHeight);}
grdName.refresh();}
function GridBoldRow(grdName,rowPos){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.fontWeight="bold";}
grdName.refresh();}
function GridAlternateColor(grdName){var grdRows,grdCols,i;grdRows=grdName.getRowCount();grdCols=grdName.getColCount();for(i=1;i<=grdRows-1;i++){for(col=0;col<=grdCols-1;col++){if((Math.abs(i)%2)==1){grdName.cell(i,col).style.backgroundColor=RGB(255,255,240);}else{grdName.cell(i,col).style.backgroundColor=RGB(240,248,255);}}}
grdName.refresh();}
function InsertRecord(tblName,tblRecord){savethefunction_rvar="";var sqlInst;sqlInst=[];var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);sqlInst[0]="INSERT OR REPLACE INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";Sql(dbObj,sqlInst);return savethefunction_rvar;}
function InsertRecord1(tblName,tblRecord,Position){savethefunction_rvar="";var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);InsertCommands[Position]="INSERT OR REPLACE INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";return savethefunction_rvar;}
function CreateTable(TableName,FieldsAndTypes,PrimaryKey,AutoIncrement){savethefunction_rvar="";var sb,fdef,sqlCreate;TableName=Replace(TableName," ","_");sb="(";for(item in FieldsAndTypes){fdef="["+item+"] "+UCase(FieldsAndTypes[item]);sb=sb+fdef;if(item==PrimaryKey){sb=sb+" NOT NULL PRIMARY KEY";}
if(item==AutoIncrement){sb=sb+" AUTOINCREMENT";}
sb=sb+", ";}
sb=Left(sb,Len(sb)-2);sb=sb+")";sb="CREATE TABLE IF NOT EXISTS ["+TableName+"] "+sb+";";sqlCreate=[];sqlCreate[0]=sb;console.log(sb);Sql(dbObj,sqlCreate);}
function DeleteIndex(TableName,idxname){savethefunction_rvar="";var idxkey,sb,delidx;TableName=Replace(TableName," ","_");idxkey=TableName+"_"+idxname;delidx=[];delidx[0]="DROP INDEX IF EXISTS "+idxkey+";";delidx[1]="DROP INDEX IF EXISTS "+idxname+";";Sql(dbObj,delidx);return savethefunction_rvar;}
function CreateTableIndexes(TableName,Indexes){savethefunction_rvar="";TableName=Replace(TableName," ","_");var sb,idef,sqlCreateIdx,idxname;var spidx,idxtot,idxcnt,idx;spidx=Split(Indexes,",");idxtot=spidx.length-1;sqlCreateIdx=[];for(idxcnt=0;idxcnt<=idxtot;idxcnt++){idx=spidx[idxcnt];idxname=TableName+"_"+idx;idef="CREATE INDEX IF NOT EXISTS ["+idxname+"] ON ["+TableName+"] (["+idx+"]);";sqlCreateIdx[idxcnt]=idef;console.log(idef);}
Sql(dbObj,sqlCreateIdx);return savethefunction_rvar;}
function ResetInsertCommands(){savethefunction_rvar="";InsertCommands=[];return savethefunction_rvar;}
function ExecuteInsertCommands(){savethefunction_rvar="";Sql(dbObj,InsertCommands);return savethefunction_rvar;}
function ExecuteUpdateCommands(){savethefunction_rvar="";Sql(dbObj,UpdateCommands);return savethefunction_rvar;}
function MvSum(strvalues,delim){savethefunction_rvar="";var dtot,i;dtot=0;var spvalues;spvalues=Split(strvalues,delim);var dlen;dlen=spvalues.length-1;for(i=0;i<=dlen;i++){dtot=parseFloat(dtot)+parseFloat(spvalues[i]);}
dtot=Round(dtot,2);return dtot;return savethefunction_rvar;}
function DeleteTable(tblName){savethefunction_rvar="";var sqlD;sqlD=[];sqlD[0]=["DROP TABLE IF EXISTS ["+tblName+"];"];Sql(dbObj,sqlD);return savethefunction_rvar;}
function UpdateRecord(tblName,tblRecord,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="UPDATE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function UpdateRecords(tblName,tblRecord){savethefunction_rvar="";var sqlUpd,vals;sqlUpd=[];vals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);sqlUpd[0]="UPDATE ["+tblName+"] SET "+vals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecord(tblName,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var wvals;wvals="";for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="DELETE FROM ["+tblName+"] WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecords(tblName){savethefunction_rvar="";var sqlDel;sqlDel=[];sqlDel[0]="DELETE FROM ["+tblName+"];";Sql(dbObj,sqlDel);return savethefunction_rvar;}
function UpdateRecord1(tblName,tblRecord,tblWhere,Position){savethefunction_rvar="";var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);UpdateCommands[Position]="UPDATE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";return savethefunction_rvar;}
function ComboIndexOf(cboBox,cboSearch){savethefunction_rvar="";var cboOut;cboOut=-1;var cboTot;cboTot=cboBox.getItemCount();var xitem,i;for(i=0;i<=cboTot-1;i++){xitem=cboBox.List(i);if(xitem==cboSearch){return i;}}
return cboOut;return savethefunction_rvar;}
function GridDefault(grdName){savethefunction_rvar="";GridSetHeight(grdName,"32px");GridAlternateColor(grdName);return savethefunction_rvar;}
function GridAddRow(grdName,colValues,delim,rowPos){savethefunction_rvar="";var vTot,spvalues,i;spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddNextRow(grdName,colValues,delim){savethefunction_rvar="";var vTot,rowPos,spvalues,i;rowPos=grdName.getRowCount();spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddImage(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImage(grdName,rowPos,colPos,text,img){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"<img src='"+img+"' align='right' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImageDefinition(grdName,rowPos,colPos,text,img){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"  <img width=20px height=20px src='"+img+"' align='right' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinition(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinitionAction(grdName,grdAction,grdId,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+grdAction+"_"+grdId;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDelete(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"delete.png");return savethefunction_rvar;}
function GridAddImageEdit(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"edit.png");return savethefunction_rvar;}
function GridAddImageChart(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"chart.png");return savethefunction_rvar;}
function GridAddImageView(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"view.png");return savethefunction_rvar;}
function GridAddImagePayTo(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"payto.png");return savethefunction_rvar;}
function GridAddImageDrillDown(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"drill.png");return savethefunction_rvar;}
function GridAddImageDuplicate(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"duplicate.png");return savethefunction_rvar;}
function GridAddImageReverse(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"reverse.png");return savethefunction_rvar;}
function email(t,subject,body){savethefunction_rvar="";location="mailto:"+encodeURI(t)+"?subject="+encodeURI(subject)+"&body="+encodeURI(body);return savethefunction_rvar;}
function phone(tel){savethefunction_rvar="";location="tel:"+tel;return savethefunction_rvar;}
function skype(tel){savethefunction_rvar="";location="skype:"+tel;return savethefunction_rvar;}
function sms(tel,body){savethefunction_rvar="";location="sms:"+tel+"?body="+encodeURL(body);return savethefunction_rvar;}
function ReadTableRecord(stable,sprimarykey,svalue,sfields){savethefunction_rvar="";var skey;skey=stable+"*"+svalue;SaveSetting("read_table",stable);SaveSetting("read_pk",sprimarykey);SaveSetting("read_id",svalue);SaveSetting("read_flds",sfields);SaveSetting(skey,"");query="select * from ["+stable+"] where ["+sprimarykey+"] = "+svalue+";";var sqlRead;sqlRead=[];sqlRead[0]=[query,ReadTableRecordH,ReadRecordE];Sql(dbObj,sqlRead);return savethefunction_rvar;}
function ReadTableRecordH(transaction,results){savethefunction_rvar="";var stable,spk,svalue,sfields,skey,spfields,ftot,row,rtot,fcnt,fstr,fvalue,sout;stable=GetSetting("read_table");spk=GetSetting("read_pk");svalue=GetSetting("read_id");sfields=GetSetting("read_flds");if(IsNull(stable)==True){return savethefunction_rvar;}
if(IsNull(spk)==True){return savethefunction_rvar;}
if(IsNull(svalue)==True){return savethefunction_rvar;}
if(IsNull(sfields)==True){return savethefunction_rvar;}
sout="";skey=stable+"*"+svalue;rtot=results.rows.length-1;if(_jsCint(rtot)==-1){return savethefunction_rvar;}
row=results.rows.item(0);spfields=Split(sfields,",");ftot=spfields.length-1;for(fcnt=0;fcnt<=ftot;fcnt++){fstr=spfields[fcnt];fvalue=row[fstr];if(IsNull(fvalue)==True){fvalue="";}
sout=sout+fvalue+FM;}
sout=RemoveDelim(sout,FM);SaveSetting(skey,sout);return savethefunction_rvar;}
function ReadRecordE(transaction,results){savethefunction_rvar="";currentRecord=null;NSB.MsgBox("SQL Error: "+results.code+": "+results.message);return savethefunction_rvar;}
function NextAvailableId(frmToShow){savethefunction_rvar="";var stable,sprimarykey,sqlList;SaveSetting("action","new");SaveSetting("form",frmToShow);stable=GetSetting("table");sprimarykey=GetSetting("primarykey");sqlList=[];sqlList[0]=["SELECT MAX("+sprimarykey+") as MaxValue FROM ["+stable+"];",NextAvailableIdH,NextAvailableIdE];Sql(dbObj,sqlList);return savethefunction_rvar;}
function NextAvailableIdH(transaction,results){savethefunction_rvar="";var sid,sform;sform=GetSetting("form");sid=results.rows.item(0)["MaxValue"];sid=_jsCint(sid)+1;SaveSetting("id",sid);return savethefunction_rvar;}
function NextAvailableIdE(transaction,results){savethefunction_rvar="";SaveSetting("id","-1");NSB.MsgBox("SQL Error: "+results.code+": "+results.message);return savethefunction_rvar;}
function MapSum(mapobj,mapkey,mapitem){var xitem;xitem=mapobj[mapkey];if(IsNull(xitem)==True){mapobj[mapkey]=mapitem;}else{xitem=parseFloat(xitem)+parseFloat(mapitem);mapobj[mapkey]=xitem;}}
function MapUpdate(mapobj,mapkey,mapitem){var xitem;xitem=mapobj[mapkey];if(IsNull(xitem)==True){mapobj[mapkey]=mapitem;}else{mapobj[mapkey]=mapitem;}}
function MapSearch(mapobj,keySearch){savethefunction_rvar="";var xitem;xitem=mapobj[keySearch];if(IsNull(xitem)==True){return True;}else{return False;}
return savethefunction_rvar;}
function ListViewAddTitleDescription(lstView,Title,Description){savethefunction_rvar="";var sText;sText="<h2>"+Title+"</h2><p>"+Description+"</p>";lstView.addItem(sText);return savethefunction_rvar;}
function ListViewAddTitleDescriptionSideContent(lstView,Title,Description,Counted,Content){savethefunction_rvar="";var sText;sText="<h2>"+Title+"</h2><p>"+Description+"</p>";if(Len(Content)>0){sText=sText+"<span class='ui-li-aside'>"+Content+"</span>";}
if(Len(Counted)>0){sText=sText+"<span class='ui-li-count'>"+Counted+"</span>";}
console.log(sText);lstView.addItem(sText);return savethefunction_rvar;}
function ListViewClear(lstView){savethefunction_rvar="";lstView.deleteItem("all");return savethefunction_rvar;}
function ListViewRefresh(lstView){savethefunction_rvar="";lstView.refresh();return savethefunction_rvar;}
function ListViewAddTitleCount(lstView,Title,Counted){savethefunction_rvar="";var sText;sText=Title+"<span class='ui-li-count'>"+Counted+"</span>";lstView.addItem(sText);return savethefunction_rvar;}
function Alphabets(svalue){savethefunction_rvar="";var sout,slen,i,schar,isnum;sout="";slen=Len(svalue);schar=Mid(svalue,slen,1);isnum=IsNumeric(schar);do{if(isnum==False)break;svalue=Left(svalue,slen-1);slen=Len(svalue);schar=Mid(svalue,slen,1);isnum=IsNumeric(schar);}while(0<1);return svalue;return savethefunction_rvar;}
function ListViewAddTitleAsideContent(lstView,Title,Content){savethefunction_rvar="";var sText;sText=Title+"<span class='ui-li-aside'><p>"+Content+"</p></span>";lstView.addItem(sText);return savethefunction_rvar;}
function ListViewAddTextBoxWithLabel(lstView,id,caption){savethefunction_rvar="";var slabel;slabel="<label for='"+id+"'>"+caption+"</label>";var sText;sText="<input type='text' name='"+id+"' id='"+id+"' value=''/>";lstView.addItem(slabel+sText);return savethefunction_rvar;}
function ListViewAddTextBox(lstView,id,caption){savethefunction_rvar="";var sText;sText="<input type='text' name='"+id+"' id='"+id+"' value=''/>";lstView.addItem(sText);return savethefunction_rvar;}
function SaveSetting(key,value){savethefunction_rvar="";localStorage.setItem(key,value);return savethefunction_rvar;}
function GetSetting(key){savethefunction_rvar="";var svalue;svalue=localStorage.getItem(key);if(IsNull(svalue)==True){svalue="";}
return svalue;return savethefunction_rvar;}
function Users_CreateTable(){var tblStructure;tblStructure=new Object();tblStructure["ID"]="INTEGER";tblStructure["FirstName"]="TEXT";tblStructure["LastName"]="TEXT";tblStructure["Email"]="TEXT";tblStructure["MobileNo"]="TEXT";CreateTable("Users",tblStructure,"ID","");CreateTableIndexes("Users","FirstName,LastName,Email,MobileNo");}
function Bible_CreateTable(sTableName){var tblStructure;tblStructure=new Object();tblStructure["Book"]="INTEGER";tblStructure["Chapter"]="INTEGER";tblStructure["Verse"]="INTEGER";tblStructure["Scripture"]="TEXT";CreateTable(sTableName,tblStructure,"","");CreateTableIndexes(sTableName,"Verse,Chapter,Book");}
window.addEventListener('load',function(){frmFiles.style.display='block';NSB.List_jqm_init14('lstFiles','',false,'100%',false);lstFiles.refresh=function(){if(typeof lstFiles_ref!='undefined')setTimeout(NSB.refresh,100,lstFiles_ref)};NSB.addProperties(lstFiles);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstFiles_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(hdrFiles);NSB.addDisableProperty(hdrFiles);hdrFiles_left.onclick=function(){ChangeForm(frmBibles)};if(typeof(hdrFiles.onclick)=='function'){if(typeof(hdrFiles_left)!='undefined')hdrFiles_left.onclick=function(){hdrFiles.onclick(hdrFiles_left.getAttribute('nsbvalue'))};if(typeof(hdrFiles_right)!='undefined')hdrFiles_right.onclick=function(){hdrFiles.onclick(hdrFiles_right.getAttribute('nsbvalue'))}};frmFiles.style.display='none';},false);frmFiles.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmFiles);var files;var selectedFileName;var strFile;frmFiles.onshow=function(){savethefunction_rvar="";NSB.WaitCursor(True);var isjson;lstFiles.Top=hdrFiles.Height;lstFiles.Height=frmFiles.Height-hdrFiles.Height;lstFiles.deleteItem("all");req=Ajax("phpView.php");if(req.status==200){files=Split(req.responseText,'\n');for(i=0;i<=files.length-1;i++){if(Trim(files[i])!=""){strFile=files[i];isjson=InStr(1,strFile,".js");if(isjson>0){strFile=Replace(strFile,".js","");strFile=Replace(strFile,"_"," ");lstFiles.addItem(strFile);}}}}else{if(req.status==404){req.err="No files found!";}
_msgbox_confirm("Error while retrieving files: "+req.err);}
NSB.WaitCursor(False);return savethefunction_rvar;}
lstFiles.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
NSB.WaitCursor(True);var strBible,strName,fileName;strName=lstFiles.getItem(i);SaveSetting("importbible",strName);strBible=strName+".js";strBible=Replace(strBible," ","_");fileName="http://www.mbangas.com/bibleshow/bibles/"+strBible;GetJSON(fileName,"",gotBible);return savethefunction_rvar;}
function gotBible(data){savethefunction_rvar="";if(data["error"]){NSB.MsgBox("An error was experienced reading the bible named "+strName);}else{var dbSource;var strName;var strImport;strName=GetSetting("importbible");strImport=Replace(strName," ","_");dbSource=SqlOpenDatabase(strImport);if(dbSource==0){NSB.MsgBox("Error opening "+strName+" bible!");NSB.WaitCursor(False);return savethefunction_rvar;}
dbImport=JSON.parse(data);SQLImport(dbImport,dbSource,importComplete);}
return savethefunction_rvar;}
function importComplete(){savethefunction_rvar="";NSB.WaitCursor(False);return savethefunction_rvar;}
window.addEventListener('load',function(){browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');WhatToDo.style.display='block';Main();if(typeof(WhatToDo.onshow)=='function')WhatToDo.onshow();},false);var NSBCurrentForm=WhatToDo;