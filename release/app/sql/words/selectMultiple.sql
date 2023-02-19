SELECT word, 0 as isAnswer FROM words
WHERE word NOT LIKE @prompt
LIMIT 3;