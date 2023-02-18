UPDATE words
SET word = @word, 
    type = @type,
    mean = @mean,
    image = @image
WHERE id = @id;