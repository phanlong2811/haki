SELECT * FROM words
WHERE date(deadline) <= date('now') and later > 0
LIMIT 1;