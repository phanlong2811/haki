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
