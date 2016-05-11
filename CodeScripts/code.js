function toCode(lang)
{
  if(lang === 'Python')
  {
    editor.getSession().setMode("ace/mode/python");
    syntaxMode = "PY";
  }
  else if(lang === 'JavaScript')
  {
    editor.getSession().setMode("ace/mode/javascript");
    syntaxMode = "JS";
  }
  var output = document.getElementById('importExport');
  var text = Blockly[lang].workspaceToCode(workspace);
  editor.setValue(text);
}

function runCode()
{
  // this redefines console.log in a program so it prints to the textArea
  // in real-js this function is not needed
  // * Note: This function is only added when code is compiled, and is not part
  // of the program when the file is created. *
  var code = "(function () {" + "\n";
    code += ("var old = console.log;" + "\n");
    code += ("var logger = document.getElementById('textBox');" + "\n");
    code += ("console.log = function (message)" + "\n");
    code += ("{" + "\n");
    code += ("if (typeof message == 'object') {" + "\n");
    code += ("logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';" + "\n");
    code += ("} else {" + "\n");
    code += ("logger.innerHTML += message;" + "\n");
    code += ("}}})();" + "\n");

    code += ("\n" + editor.getValue());
    eval(code);

}

function downloadCode() // this will be completed at a later date
{
    var content = editor.getValue();
    if(syntaxMode === "JS")
    {

    }
    else if(syntaxMode === "PY")
    {

    }
}
