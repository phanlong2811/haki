import path from 'path';
import fs from 'fs';
import IFlashCard from 'interfaces/FlashCard';
import webpackPaths from '../../.erb/configs/webpack.paths';

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

const sql = isDevelopment
  ? path.join(webpackPaths.appPath, 'sql')
  : path.join(__dirname, '../../sql'); // In prod, __dirname is release/app/dist/main. We want release/app/sql
const db = require('better-sqlite3')(
  isDevelopment
    ? path.join(webpackPaths.appPath, 'database/sqlite.db')
    : path.join(__dirname, '../../database/sqlite.db')
);

export function createTable() {
  const createWords = fs
    .readFileSync(path.join(sql, 'words/createTable.sql'))
    .toString()
    .trim();
  const createExplore = fs
    .readFileSync(path.join(sql, 'explore/createTable.sql'))
    .toString()
    .trim();
  db.exec(createExplore);
  db.exec(createWords);
}
// function for table "words"
export function insertWordToWords(flashCard: IFlashCard, later: number) {
  const insert = fs
    .readFileSync(path.join(sql, 'words/insert.sql'))
    .toString()
    .trim();

  db.prepare(insert).run({
    word: flashCard.word,
    type: flashCard.type,
    phonetic: flashCard.phonetic,
    mean: flashCard.mean,
    image: flashCard.image,
    audio: '',
    example_en: flashCard.example_en,
    example_vi: '',
    later,
  });
}

export function filterWordFromWords(
  filter: string,
  page: number,
  pageSize: number
) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'words/filterPagination.sql'))
    .toString()
    .trim();

  const data = db.prepare(filterPrompt).all({
    filter,
    page,
    pageSize,
  });
  return data;
}

export function deleteWordFromWords(id: number) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'words/delete.sql'))
    .toString()
    .trim();

  db.prepare(filterPrompt).run({
    id,
  });
}

export function upsertWordFromWords(id: number) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'words/delete.sql'))
    .toString()
    .trim();

  db.prepare(filterPrompt).run({
    id,
  });
}

export function getReviewFromWords() {
  const getReviewPrompt = fs
    .readFileSync(path.join(sql, 'words/getReview.sql'))
    .toString()
    .trim();
  const data = db.prepare(getReviewPrompt).all();
  return data;
}

export function getReviewMultipleChoice(prompt: string) {
  const getReviewPrompt = fs
    .readFileSync(path.join(sql, 'words/selectMultiple.sql'))
    .toString()
    .trim();
  const data = db.prepare(getReviewPrompt).all({ prompt });
  return data;
}

export function addDeadlineToWords(id: number, day: string) {
  const addDeadlinePrompt = fs
    .readFileSync(path.join(sql, 'words/addDeadline.sql'))
    .toString()
    .trim();

  db.prepare(addDeadlinePrompt).run({ id, day });
}
export function updateLater(id: number, later: number) {
  const updateLaterFromWords = fs
    .readFileSync(path.join(sql, 'words/updateLater.sql'))
    .toString()
    .trim();

  db.prepare(updateLaterFromWords).run({ id, later });
}
export function selectBasedIdFromWords(id: number) {
  const getPrompt = fs
    .readFileSync(path.join(sql, 'words/selectBasedId.sql'))
    .toString()
    .trim();

  const data = db.prepare(getPrompt).all({
    id,
  });
  return data;
}
export function updateWordFromWords(flashCard: IFlashCard) {
  const prompt = fs
    .readFileSync(path.join(sql, 'words/update.sql'))
    .toString()
    .trim();

  db.prepare(prompt).run({
    id: flashCard.id,
    word: flashCard.word,
    type: flashCard.type,
    mean: flashCard.mean,
    image: flashCard.image,
    phonetic: flashCard.phonetic,
    example_en: flashCard.example_en,
  });
}
export function getSizeWords() {
  const prompt = fs
    .readFileSync(path.join(sql, 'words/getSizeWords.sql'))
    .toString()
    .trim();
  const data = db.prepare(prompt).all();
  return data;
}

export function needReview() {
  const prompt = fs
    .readFileSync(path.join(sql, 'words/needReview.sql'))
    .toString()
    .trim();
  const data = db.prepare(prompt).all();
  return data[0]['COUNT(*)'];
}

// function for table "explore"
export function insertWordToExplore(flashCard: IFlashCard) {
  const insert = fs
    .readFileSync(path.join(sql, 'explore/insert.sql'))
    .toString()
    .trim();

  db.prepare(insert).run({
    word: flashCard.word,
    type: flashCard.type,
    phonetic: flashCard.phonetic,
    mean: flashCard.mean,
    image: flashCard.image,
    audio: '',
    example_en: flashCard.example_en,
    example_vi: '',
  });
}

export function getWordFromExplore() {
  const getExplore = fs
    .readFileSync(path.join(sql, 'explore/getExplore.sql'))
    .toString()
    .trim();
  const data = db.prepare(getExplore).all();
  return data;
}

export function deleteWordFromExplore(id: number) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'explore/delete.sql'))
    .toString()
    .trim();

  db.prepare(filterPrompt).run({
    id,
  });
}
export function needExplore() {
  const prompt = fs
    .readFileSync(path.join(sql, 'explore/needExplore.sql'))
    .toString()
    .trim();
  const data = db.prepare(prompt).all();
  return data[0]['COUNT(*)'];
}

// function for "progress"
export function addCounterExplore() {
  const prompt = fs
    .readFileSync(path.join(sql, 'progress/updateExplore.sql'))
    .toString()
    .trim();

  db.prepare(prompt).run();
}

export function addCounterLearn() {
  const prompt = fs
    .readFileSync(path.join(sql, 'progress/updateLearn.sql'))
    .toString()
    .trim();

  db.prepare(prompt).run();
}

export function getProgressToday() {
  const prompt = fs
    .readFileSync(path.join(sql, 'progress/getToday.sql'))
    .toString()
    .trim();

  const data = db.prepare(prompt).all();
  return data;
}

export function getProgressTable() {
  const prompt = fs
    .readFileSync(path.join(sql, 'progress/getTable.sql'))
    .toString()
    .trim();

  const data = db.prepare(prompt).all();
  return data;
}
export function insertProgress() {
  const prompt = fs
    .readFileSync(path.join(sql, 'progress/insert.sql'))
    .toString()
    .trim();
  db.prepare(prompt).run();
}
