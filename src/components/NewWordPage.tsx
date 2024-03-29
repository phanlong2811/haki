import { Button, Form, Grid, Input, Message } from 'semantic-ui-react';
import FlashCard from 'components/UI/FlashCard';
import { useEffect, useState } from 'react';
import IFlashCard from 'interfaces/FlashCard';
import { Link, useSearchParams } from 'react-router-dom';
import DetailFlashCard from './UI/DetailFlashCard';

export default function NewWordPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [flashCard, setFlashCard] = useState<IFlashCard>({
    word: '',
    type: '',
    mean: '',
    image: '',
    phonetic: '',
    example_en: '',
  });
  const addWord = () => {
    window.electron.ipcRenderer.sendMessage('insert-explore', [flashCard, 1]);
  };
  useEffect(() => {
    setFlashCard({
      ...flashCard,
      word: searchParams.get('search') ? searchParams.get('search') : '',
    });
  }, [searchParams]);
  return (
    <>
      <Grid columns={1} stackable>
        <Grid.Column>
          <h2 style={{ color: 'black' }}>Information</h2>
          <Form>
            <Form.Field>
              <label>Word</label>
              <Input
                placeholder="Word"
                value={flashCard.word}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    word: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Word Type</label>
              <Input
                placeholder="Word type"
                value={flashCard.type}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    type: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Phonetic</label>
              <Input
                placeholder="Phonetic"
                value={flashCard.phonetic}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    phonetic: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Meaning</label>
              <Input
                placeholder="Meaning"
                value={flashCard.mean}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    mean: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Image Link</label>
              <Input
                placeholder="Image Link"
                value={flashCard.image}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    image: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Example</label>
              <Input
                placeholder="Example"
                value={flashCard.example_en}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    example_en: data.value,
                  });
                }}
              />
            </Form.Field>
            <Button
              as={Link}
              type="submit"
              primary
              onClick={addWord}
              to="/browser"
            >
              Add
            </Button>
          </Form>
        </Grid.Column>

        <Grid.Column>
          <h2 style={{ color: 'black' }}>Preview</h2>
          <DetailFlashCard
            word={flashCard.word}
            type={flashCard.type}
            mean={flashCard.mean}
            image={flashCard.image}
            phonetic={flashCard.phonetic}
            example_en={flashCard.example_en}
          />
        </Grid.Column>
      </Grid>
      <Message positive>
        <Message.Header>Completed!</Message.Header>
        <p>Now you can see your word in database!</p>
      </Message>
    </>
  );
}
