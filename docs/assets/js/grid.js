function reset(ids, crossword){
  for (let key in ids) {
    let value = ids[key];
    let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
    let number = Number(key.substring(0, key.length-1));
    crossword[value["startY"]][value["startX"]] = number;
    if(key.charAt(key.length-1) == "d") {
      for(var i=0; i<chars.length; i++){
        crossword[value["startY"]+i+1][value["startX"]] = '|';
      }
    }
    else{
      for(var i=0; i<chars.length; i++){
        crossword[value["startY"]][value["startX"]+i+1] = '|';
      }
    }
  }
}

function reveal(ids, crossword, id){
  let value = ids[id];
  let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
  if(id.charAt(id.length-1) == "d") {
    for(var i=0; i<chars.length; i++){
      let c = chars[i].toString();
      if(c.charCodeAt(0)==32) c = '|';
      crossword[value["startY"]+i+1][value["startX"]] = c;
    }
  }
  else{
    for(var i=0; i<chars.length; i++){
      let c = chars[i].toString();
      if(c.charCodeAt(0)==32) c = '|';
      crossword[value["startY"]][value["startX"]+i+1] = c;
    }
  }
}

function fullPopulate(ids, crossword){
  for (let key in ids) {
    let value = ids[key];
    let chars = Array.from(value["word"].toUpperCase()); //Spaces are char 32: SPACE
    let number = key.substring(0, key.length-1);
    crossword[value["startY"]][value["startX"]] = number;
    if(key.charAt(key.length-1) == "d") {
      for(var i=0; i<chars.length; i++){
        let c = chars[i].toString();
        if(c.charCodeAt(0)==32) c = '|';
        crossword[value["startY"]+i+1][value["startX"]] = c;//chars[i].toString().charCodeAt(0).toString();
      }
    }
    else{
      for(var i=0; i<chars.length; i++){
        let c = chars[i].toString();
        if(c.charCodeAt(0)==32) c = '|';
        crossword[value["startY"]][value["startX"]+i+1] = c;//chars[i].toString().charCodeAt(0).toString();
      }
    }
  }
}
