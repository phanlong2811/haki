import { ipcMain } from 'electron';
import IFlashCard from 'interfaces/FlashCard';
import {
  addDeadline,
  deleteWord,
  filterWord,
  getReview,
  insertWord,
} from './database';

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

ipcMain.on('get-review', (event) => {
  const data = getReview();
  event.reply('get-review', data);
});

ipcMain.on('add-deadline', (event, arg) => {
  const [id, day] = arg;
  addDeadline(id, day);
});
