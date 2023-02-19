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
  addCounterExplore,
  addCounterLearn,
  getProgressToday,
  needReview,
  needExplore,
  getProgressTable,
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
  updateWordFromWords(flashCard);
});
ipcMain.on('get-size-words', (event) => {
  const result = getSizeWords();
  event.reply('get-size-words', result);
});
ipcMain.on('get-need-review', (event) => {
  const result = needReview();
  event.reply('get-need-review', result);
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
ipcMain.on('get-need-explore', (event) => {
  const result = needExplore();
  event.reply('get-need-explore', result);
});

// progress
ipcMain.on('update-explore', () => {
  addCounterExplore();
});
ipcMain.on('update-learn', () => {
  addCounterLearn();
});
ipcMain.on('get-today', (event) => {
  const data = getProgressToday();
  event.reply('get-today', data);
});
ipcMain.on('get-progress-table', (event) => {
  const data = getProgressTable();
  event.reply('get-progress-table', data);
});
