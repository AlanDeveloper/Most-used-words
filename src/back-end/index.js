const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (e, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => {
            e.reply('process-subtitles', groupedWords);
        })

});