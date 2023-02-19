SELECT * FROM words
WHERE date(deadline) <= date('now') and later > 0
ORDER BY datetime(deadline) ASC
LIMIT 1;