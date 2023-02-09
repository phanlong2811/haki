SELECT * FROM words
WHERE word LIKE (@filter)
ORDER BY word
LIMIT (@pageSize) * (@page) OFFSET @pageSize * (@page - 1)