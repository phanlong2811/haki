SELECT * FROM words
WHERE date(deadline) <= date('now')
LIMIT 1;