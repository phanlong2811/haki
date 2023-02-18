SELECT COUNT(*) FROM words
WHERE date(deadline) = date('now');