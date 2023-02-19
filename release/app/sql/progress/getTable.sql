SELECT id as 'date', num_explore, num_learn
FROM progress
WHERE DATE(id) >= DATE('now', '-1 years');