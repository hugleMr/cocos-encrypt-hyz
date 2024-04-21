'use strict';

module.exports = {
  load () {
    // execute when package loaded
  },

  unload () {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    'showPanel' () {
      Editor.Panel.open('hyz-encript');
      Editor.log('hyz-encript');
    },
  },
};