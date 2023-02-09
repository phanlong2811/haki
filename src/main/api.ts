import { ipcMain } from 'electron';
import IFlashCard from 'interfaces/FlashCard';
import { deleteWord, filterWord, insertWord } from './database';

// ipcMain.on('ipc-example', async (event, arg) => {
//   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
//   console.log(msgTemplate(arg));
//   event.reply('ipc-example', msgTemplate('pong'));
// });

ipcMain.on('insert', (event, arg) => {
  const flashCard: IFlashCard = arg[0];
  insertWord(flashCard);
});

ipcMain.on('get', (event, arg) => {
  const [filterPrompt, page, pageSize] = arg;
  const data = filterWord(filterPrompt, page, pageSize);
  event.reply('get', data);
});

ipcMain.on('delete', (event, arg) => {
  const [id] = arg;
  deleteWord(id);
});
