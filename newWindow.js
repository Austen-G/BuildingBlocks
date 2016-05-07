const electron = require('electron');
const app = electron.app;
const newWindow = electron.BrowserWindow;

let newWindow;

function newWindow()
{
  newWindow = new BrowserWindow({width: 1100, height: 900});
  newWindow.loadURL('file://' + __dirname + '/index.html');

  newWindow.on('closed', function ()
  {
    newWindow = null
  })
}
