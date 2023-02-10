UPDATE words
SET deadline = date('now', '+' || (@day) || ' day')
WHERE id = (@id)