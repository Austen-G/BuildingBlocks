var remote = require('remote');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
  {
    label: 'BuildingBlocks'
    submenu: [
      {
      label: 'Run Code'
      click: runCode()
      }
    ]

  }
])
Menu.setApplicationMenu(menu);
