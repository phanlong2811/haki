UPDATE words
SET deadline = datetime('now', '+' || (@day) || ' day')
WHERE id = (@id)