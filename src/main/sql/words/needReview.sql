SELECT COUNT(*) FROM words
WHERE date(deadline) = date('now') AND later != 0;