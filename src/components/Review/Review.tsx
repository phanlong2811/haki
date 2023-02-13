import FlashCard from 'components/UI/FlashCard';
import IFlashCard from 'interfaces/FlashCard';
import { useState } from 'react';
import { Button, Icon, Message, Segment } from 'semantic-ui-react';

const LATER_CONSTANT = [0, 1, 2, 7, 14, 30];
function Review() {
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  window.electron.ipcRenderer.sendMessage('get-review', []);
  const getWord = async () => {
    try {
      if (flashCard.id) {
        window.electron.ipcRenderer.sendMessage('add-deadline', [
          flashCard.id,
          LATER_CONSTANT[flashCard.later],
        ]);
        window.electron.ipcRenderer.sendMessage('update-later', [
          flashCard.id,
          (flashCard.later + 1) % 6,
        ]);
      }
    } finally {
      window.electron.ipcRenderer.sendMessage('get-review', []);
    }
  };
  window.electron.ipcRenderer.once('get-review', (arg) => {
    if (arg.length) {
      setFlashCard(arg[0]);
    } else {
      setFlashCard([]);
    }
  });
  return (
    <Segment>
      {flashCard.word && (
        <>
          <FlashCard
            word={flashCard.word}
            type={flashCard.type}
            mean={flashCard.mean}
            image={flashCard.image}
          />

          <Button
            animated
            primary
            style={{
              position: 'absolute',
              bottom: 30,
              right: 30,
              textAlign: 'center',
            }}
            onClick={getWord}
          >
            <Button.Content visible>Review tommorrow</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </>
      )}
      {!flashCard.word && (
        <Message positive>
          <Message.Header>Completed!</Message.Header>
          <p>Now you can explore new word!</p>
        </Message>
      )}
    </Segment>
  );
}
export default Review;
