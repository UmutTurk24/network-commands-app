const { app, BrowserWindow } = require('electron');
const path = require('path');
const { Menu, ipcMain, shell } = require('electron');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const isMac = process.platform === 'darwin';
let main_window;
let command_window;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const create_main_window = () => {
  // Create the browser window.
  main_window = new BrowserWindow({
    width: 415,
    height: 500,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: true,
    },
    // frame:false,
  });

  // Load the index.html of the app and remove the menu bar
  main_window.removeMenu();
  main_window.loadFile(path.join(__dirname, './renderer/index.html'));

  // Open the DevTools.
  main_window.webContents.openDevTools();
};


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Create the main window for the application
  create_main_window();

  // Remove variable from memory
  main_window.on('closed', () => (main_window = null));
});


ipcMain.on('toMain', async (_, options) => {
  
  if (options.operation_option == "-No Option") {
    options.operation_option = "";
  }

  const operation = options.operation_name + " " + options.operation_option;
  let op_result = await perform_execution(operation);

  create_command_window();
  command_window.webContents.on('did-finish-load', function () { 
    command_window.webContents.send('fromMain', {op_result, operation});
  });

  // Inform the main_window that process was complete. Go back to the initial state
});

async function perform_execution(operation) {
  main_window.webContents.send('fromMain', "start-loading");
  // Execute the async exec function and retrieve the output (stdout)
  async function execution(operation) {
    const { stdout, stderr } = await exec(operation);
    // No error handling. Given operations will not be invalid.
    return stdout;
  }
  let result = await execution(operation);
  main_window.webContents.send('fromMain', "end-loading");

  return result;
}

const create_command_window = () => {
  command_window = new BrowserWindow({
    width: 600,
    height: 500,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: true,
    },
    // frame:false,
  });
  command_window.removeMenu();
  command_window.loadFile(path.join(__dirname, './renderer/html/web-template.html'));
  command_window.webContents.openDevTools();
}



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    create_main_window();
  }
});

