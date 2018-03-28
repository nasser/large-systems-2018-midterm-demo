const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

console.log("main.js", process.argv);

function createWindow() {
  let window = new BrowserWindow({width: 800, height: 600 });
  window.loadURL(`file:///${__dirname}/empty-example/index.html`);
}

app.on('ready', createWindow);