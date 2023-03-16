const { contextBridge, ipcRenderer } = require('electron');
// const Toastify = require('toastify-js');


// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld( 'commandTransfer', {
      send: (channel, data) => {
          // whitelist channels
          let validChannels = ["toMain"];
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      },
      receive: (channel, func) => {
        let validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender` 
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
  }
);

// contextBridge.exposeInMainWorld( 'aboutTransfer', {
//     send: (channel, data) => {
//         // whitelist channels
//         let validChannels = ["toAboutMain"];
//         if (validChannels.includes(channel)) {
//             ipcRenderer.send(channel, data);
//         }
//     },
//     receive: (channel, func) => {
//       let validChannels = ["fromAboutMain"];
//       if (validChannels.includes(channel)) {
//           // Deliberately strip event as it includes `sender` 
//           ipcRenderer.on(channel, (event, ...args) => func(...args));
//       }
//   }
// }
// );


// contextBridge.exposeInMainWorld('Toastify', {
//   toast: (options) => Toastify(options).showToast(),
// });
