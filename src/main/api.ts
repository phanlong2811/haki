import { ipcMain } from 'electron';
import IFlashCard from 'interfaces/FlashCard';
import {
  addDeadlineToWords,
  deleteWordFromWords,
  filterWordFromWords,
  getReviewFromWords,
  insertWordToWords,
  insertWordToExplore,
  getWordFromExplore,
  deleteWordFromExplore,
  updateLater,
  getReviewMultipleChoice,
  selectBasedIdFromWords,
  updateWordFromWords,
  getSizeWords,
} from './database';

// review tab
ipcMain.on('insert', (event, arg) => {
  const flashCard: IFlashCard = arg[0];
  const later: number = arg[1];
  insertWordToWords(flashCard, later);
});

ipcMain.on('get', (event, arg) => {
  const [filterPrompt, page, pageSize] = arg;
  const data = filterWordFromWords(filterPrompt, page, pageSize);
  event.reply('get', data);
});

ipcMain.on('delete', (event, arg) => {
  const [id] = arg;
  deleteWordFromWords(id);
});

ipcMain.on('get-review', (event) => {
  const data = getReviewFromWords();
  event.reply('get-review', data);
});

ipcMain.on('add-deadline', (event, arg) => {
  const [id, day] = arg;
  addDeadlineToWords(id, day);
});
ipcMain.on('update-later', (event, arg) => {
  const [id, day] = arg;
  updateLater(id, day);
});

ipcMain.on('get-multiple', (event, arg) => {
  const [prompt] = arg;
  const data = getReviewMultipleChoice(prompt);
  event.reply('get-multiple', data);
});
ipcMain.on('get-based-id', (event, arg) => {
  const [id] = arg;
  const data = selectBasedIdFromWords(id);
  event.reply('get-based-id', data);
});
ipcMain.on('update-word', (event, arg) => {
  const flashCard: IFlashCard = arg[0];
  updateWordFromWords(
    flashCard.id,
    flashCard.word,
    flashCard.type,
    flashCard.mean,
    flashCard.image
  );
});
ipcMain.on('get-size-words', (event) => {
  const result = getSizeWords();
  event.reply('get-size-words', result);
});

// explore tab
ipcMain.on('insert-explore', (event, arg) => {
  const flashCard: IFlashCard = arg[0];
  insertWordToExplore(flashCard);
});

ipcMain.on('get-explore', (event) => {
  const data = getWordFromExplore();
  event.reply('get-explore', data);
});

ipcMain.on('delete-explore', (event, arg) => {
  const [id] = arg;
  deleteWordFromExplore(id);
});
