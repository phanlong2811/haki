UPDATE words
SET word = @word, 
    type = @type,
    mean = @mean,
    image = @image,
    phonetic = @phonetic,
    example_en = @example_en
WHERE id = @id;