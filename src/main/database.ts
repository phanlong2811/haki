import path from 'path';
import fs from 'fs';
import IFlashCard from 'interfaces/FlashCard';

const sql = path.join(__dirname, './sql');

const db = require('better-sqlite3')('database/test.db');

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
    phonetic: '',
    mean: flashCard.mean,
    image: flashCard.image,
    audio: '',
    example_en: '',
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
updateLater(1, 1);

// function for table "explore"
export function insertWordToExplore(flashCard: IFlashCard) {
  const insert = fs
    .readFileSync(path.join(sql, 'explore/insert.sql'))
    .toString()
    .trim();

  db.prepare(insert).run({
    word: flashCard.word,
    type: flashCard.type,
    phonetic: '',
    mean: flashCard.mean,
    image: flashCard.image,
    audio: '',
    example_en: '',
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
