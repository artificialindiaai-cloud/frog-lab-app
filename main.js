const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  const w = new BrowserWindow({
    width: 1200, height: 850, minWidth: 380, minHeight: 600,
    title: 'Virtual Frog Lab', autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png')
  });
  if (process.platform !== 'darwin') Menu.setApplicationMenu(null);
  w.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) create(); });
