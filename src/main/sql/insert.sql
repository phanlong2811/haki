INSERT INTO words (word, type, phonetic, mean, image, audio, example_en, example_vi, deadline)
VALUES (@word, @type, @phonetic, @mean, @image, @audio, @example_en, @example_vi, date('now'))