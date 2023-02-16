CREATE TABLE words  (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "word" TEXT,
    "type" TEXT,
    "phonetic" TEXT,
    "mean" TEXT,
    "image" TEXT,
    "audio" TEXT,
    "example_en" TEXT,
    "example_vi" TEXT,
    "deadline" TEXT,
    "later" NUMBER
)