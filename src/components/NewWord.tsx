import { Button, Form, Grid, Input, Message } from 'semantic-ui-react';
import FlashCard from 'components/UI/FlashCard';
import { useState } from 'react';
import IFlashCard from 'interfaces/FlashCard';
import { Link } from 'react-router-dom';

export default function NewWord() {
  const [flashCard, setFlashCard] = useState<IFlashCard>({
    vocabWord: 'Hello World',
    wordType: '(code)',
    wordDefinition:
      'a sample program designed to familiarize users with most programming languages',
    imageLink:
      'https://code.org/images/social-media/helloworld-og-image-1200x630.png',
  });
  const addWord = async () => {
    window.electron.ipcRenderer.sendMessage('insert', [flashCard]);
  };
  return (
    <>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <h2 style={{ color: 'black' }}>Information</h2>
          <Form>
            <Form.Field>
              <label>Word</label>
              <Input
                placeholder="Word"
                value={flashCard.vocabWord}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    vocabWord: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Word Type</label>
              <Input
                placeholder="Word type"
                value={flashCard.wordType}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    wordType: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Meaning</label>
              <Input
                placeholder="Meaning"
                value={flashCard.wordDefinition}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    wordDefinition: data.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Image Link</label>
              <Input
                placeholder="Image Link"
                value={flashCard.imageLink}
                onChange={(e, data) => {
                  setFlashCard({
                    ...flashCard,
                    imageLink: data.value,
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
          <FlashCard
            vocabWord={flashCard.vocabWord}
            wordType={flashCard.wordType}
            wordDefinition={flashCard.wordDefinition}
            imageLink={flashCard.imageLink}
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
