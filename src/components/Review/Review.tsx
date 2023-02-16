import MultipleChoice from 'components/MultipleChoice';
import FlashCard from 'components/UI/FlashCard';
import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { Button, Icon, Message, Segment } from 'semantic-ui-react';

const LATER_CONSTANT = [0, 1, 2, 7, 14, 30];
function Review() {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-review', []);
  }, []);
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  const getWord = async (isRemembered: boolean) => {
    try {
      if (flashCard.id) {
        window.electron.ipcRenderer.sendMessage('add-deadline', [
          flashCard.id,
          isRemembered ? LATER_CONSTANT[flashCard.later] : 0,
        ]);
        window.electron.ipcRenderer.sendMessage('update-later', [
          flashCard.id,
          isRemembered ? (flashCard.later + 1) % 6 : 1,
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
      <MultipleChoice flashCard={flashCard} />
      {/* {flashCard.word && (
        <>
          <FlashCard
            word={flashCard.word}
            type={flashCard.type}
            mean={flashCard.mean}
            image={flashCard.image}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            <Button animated primary onClick={() => getWord(false)}>
              <Button.Content visible>No</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <Button animated primary onClick={() => getWord(true)}>
              <Button.Content visible>Yes</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </>
      )}
      {!flashCard.word && (
        <Message positive>
          <Message.Header>Completed!</Message.Header>
          <p>Now you can explore new word!</p>
        </Message>
      )} */}
    </Segment>
  );
}
export default Review;
