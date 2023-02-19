import FlashCard from 'components/UI/FlashCard';
import { Button, Card, Divider, Icon, Modal } from 'semantic-ui-react';
import IMultipleChoice from 'interfaces/MultipleChoice';
import { useState } from 'react';
import DetailFlashCard from './UI/DetailFlashCard';

const LATER_CONSTANT = [0, 1, 2, 7, 14, 30];
export default function MultipleChoice({ flashCard }: IMultipleChoice) {
  window.electron.ipcRenderer.sendMessage('get-multiple', [flashCard.word]);
  const [multipleChoice, setMultipleChoice] = useState([]);
  window.electron.ipcRenderer.once('get-multiple', (arg) => {
    setMultipleChoice([...arg, { word: flashCard.word, isAnswer: 1 }]);
  });
  const [isEnd, setIsEnd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const getAnswer = (isAnswer: boolean) => {
    setIsEnd(true);
    setIsCorrect(isAnswer);
    window.electron.ipcRenderer.sendMessage('add-deadline', [
      flashCard.id,
      isAnswer ? LATER_CONSTANT[flashCard.later] : 0,
    ]);
    window.electron.ipcRenderer.sendMessage('update-later', [
      flashCard.id,
      isAnswer ? (flashCard.later + 1) % 6 : 1,
    ]);
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <FlashCard mean={flashCard.mean} image={flashCard.image} />
      <Divider hidden />
      <Card.Group
        centered
        itemsPerRow={4}
        style={{ fontSize: `17px`, fontWeight: `bold`, textColor: `black` }}
      >
        {multipleChoice.map((data: any) => {
          return (
            <>
              {!isEnd && (
                <Card
                  style={{ padding: `30px`, textAlign: `center` }}
                  centered
                  onClick={() => {
                    setOpen(true);
                    getAnswer(data.isAnswer);
                  }}
                >
                  {data.word}
                </Card>
              )}
              {isEnd && (
                <Card
                  style={{
                    padding: `30px`,
                    textAlign: `center`,
                    color: data.isAnswer ? 'green' : 'red',
                  }}
                  centered
                  onClick={() => getAnswer(data.isAnswer)}
                >
                  {data.word}
                </Card>
              )}
            </>
          );
        })}
      </Card.Group>
      {isEnd && (
        <div
          style={{
            position: 'absolute',
            bottom: 150,
            right: 50,
            textAlign: 'center',
          }}
        >
          <Button
            animated
            primary
            onClick={() => {
              window.electron.ipcRenderer.sendMessage('get-review', []);
              if (isCorrect)
                window.electron.ipcRenderer.sendMessage('update-learn', []);
              setIsEnd(false);
            }}
          >
            <Button.Content visible>
              Review in {LATER_CONSTANT[flashCard.later]} day
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      )}

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content>
          <DetailFlashCard
            word={flashCard.word}
            type={flashCard.type}
            mean={flashCard.mean}
            image={flashCard.image}
            example_en={flashCard.example_en}
            phonetic={flashCard.phonetic}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            content={`Review in ${LATER_CONSTANT[flashCard.later]} day`}
            labelPosition="right"
            icon="checkmark"
            onClick={() => {
              setOpen(false);
              window.electron.ipcRenderer.sendMessage('get-review', []);
              window.electron.ipcRenderer.sendMessage('update-learn', []);
              setIsEnd(false);
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
