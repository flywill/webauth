function getHtmlForButton(nameStr, str, bClass,onClickFn){
     if(nameStr == null || nameStr ==""
       || str == null || str ==""
       || onClickFn == null || onClickFn =="") {
          return;
     } 
     document.writeln('<input type="button" name="',nameStr,'" value="',str,'"  onClick="',onClickFn,'">');
}
