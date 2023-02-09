import path from 'path';
import fs from 'fs';
import IFlashCard from 'interfaces/FlashCard';

const sql = path.join(__dirname, './sql');

const db = require('better-sqlite3')('database/test.db');

export function createTable() {
  const create = fs
    .readFileSync(path.join(sql, 'create.sql'))
    .toString()
    .trim();
  db.exec(create);
}
export function insertWord(flashCard: IFlashCard) {
  const insert = fs
    .readFileSync(path.join(sql, 'insert.sql'))
    .toString()
    .trim();

  db.prepare(insert).run({
    word: flashCard.vocabWord,
    type: flashCard.wordType,
    phonetic: '',
    mean: flashCard.wordDefinition,
    image: flashCard.imageLink,
    audio: '',
    example_en: '',
    example_vi: '',
  });
}

export function filterWord(filter: string, page: number, pageSize: number) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'filterPagination.sql'))
    .toString()
    .trim();

  const data = db.prepare(filterPrompt).all({
    filter,
    page,
    pageSize,
  });
  return data;
}

export function deleteWord(id: number) {
  const filterPrompt = fs
    .readFileSync(path.join(sql, 'delete.sql'))
    .toString()
    .trim();

  db.prepare(filterPrompt).run({
    id,
  });
}
