import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form, Grid, Input } from 'semantic-ui-react';
import DetailFlashCard from './UI/DetailFlashCard';
import FlashCard from './UI/FlashCard';

export default function EditPage() {
  const params = useParams();
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-based-id', [params.id]);
  }, []);
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  window.electron.ipcRenderer.once('get-based-id', (arg) => {
    if (arg.length) {
      setFlashCard(arg[0]);
    } else {
      setFlashCard([]);
    }
  });

  return (
    <Grid columns={2} stackable>
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
            to="/browser"
            onClick={() => {
              window.electron.ipcRenderer.sendMessage('update-word', [
                flashCard,
              ]);
            }}
          >
            Update
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
  );
}
