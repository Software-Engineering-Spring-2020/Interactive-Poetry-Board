function  createTable(rows, columns){
    var table = document.getElementById("crossword"), i;
    for(i = 0; i<rows; i++) this.appendRow(table);
    for(i = 0; i<columns; i++) this.appendColumn(table);
  }

function  appendRow(table){
    //var table = document.getElementById("crossword");
    var row = table.insertRow(table.rows.length);
    for (var i = 0; i < table.rows[0].cells.length; i++) this.appendCell(row, '&', 'temp');
  }

  // append column to the HTML table
function  appendColumn(table) {
      // open loop for each row and append cell
      for (var i = 0; i < table.rows.length; i++) this.appendCell(table.rows[i], '&', 'temp');
  }

function  removeRow(table){
    return table.deleteRow(table.rows.length-1);
  }

  // append column to the HTML table
function  removeColumn(table) {
      // open loop for each row and append cell
      for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].removeChild(table.rows[i].lastChild);
      }
  }

function styling(){
  return [
          "border: 1px solid black;",
          "height: 1vw;",
          "color: black;",
          "font-size: 2vmin;",
          "white-space: nowrap;",
          "overflow : hidden;"
        ].join('');
}

function  createCell(text, style) {
      /*var cell = document.createElement('TD'), // create DIV element
          txt = document.createTextNode(text); // create text node
      cell.appendChild(txt);                    // append text node to the DIV
      cell.setAttribute('class', style);        // set DIV class attribute
      cell.setAttribute('className', style);    // set DIV class attribute for IE (?!)
      */
      var cell = document.createElement('td'),
      txt = document.createTextNode(text); // create text node
      cell.appendChild(txt);                    // append text node to the DIV

      txt.innerHTML = text;
      cell.classList.add(style);
      //cell.setAttribute('class', style);        // set DIV class attribute
      //cell.setAttribute('className', style);    // set DIV class attribute for IE (?!)
      //alert(cell.className); //cell.class isn't a thing
      if(style == 'temp') cell.setAttribute('contentEditable', 'true');
      if(style == 'numero'){
        //cell.innerHTML = /[]?\d+(?:\.\d+)?/g.exec(text); ///[+-]?\d+(?:\.\d+)?/g.exec(text)
        //cell.setAttribute('id', 'numero');
      }
      cell.style.cssText = styling();
      //cell.style.all="inherit";
      //cell.style.cssText = document.defaultView.getComputedStyle(document.getElementById(), "").cssText;
      //div.appendChild(cell);
      //cell.style.cssText = document.defaultView.getComputedStyle(div, "").cssText;

    /*  const styles = window.getComputedStyle(document.getElementById("test"));
if (styles.cssText != '') {
    alert("case1");
    cell.style.cssText = styles.cssText;
} else {
    const cssText = Object.values(styles).reduce(
        (css, propertyName) =>
            `${css}${propertyName}:${styles.getPropertyValue(
                propertyName
            )};`
    );
    alert(cssText);
    div.style.cssText = cssText;
}*/
      return cell;
  }

function  appendCell(row, text, style) {
      var cell = this.createCell(text, style);
      row.appendChild(cell);

      //alert(cell.parentNode+" "+row.tagName+" "+cell.tagName);
  }

function  finalize(){
    this.fullTable(document.getElementById('crossword'), true);
  }

function  fullTable(table, clear){
    var cell, i, j;
    for(i=0; i<table.rows.length; i++){
      for(j=0; j<table.rows[0].childNodes.length; j++){
        cell = table.rows[i].childNodes[j];
        if(!clear) cell.parentNode.replaceChild(this.createCell('&','temp'), cell);
        else this.replaceCell(cell);
      }
    }
  }

function  replaceCell(cell) {

    var i = cell.innerHTML.indexOf('<br>');
    var node;
    if(i == -1 || i == 0) node = this.createCell('&', 'empty');
    else if (i == 1) node = this.createCell(cell.innerHTML, '');
    else node = this.createCell(cell.innerHTML, 'numero');

    cell.parentNode.replaceChild(node, cell);
  }
