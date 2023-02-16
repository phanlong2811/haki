import FlashCard from 'components/UI/FlashCard';
import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { Button, Icon, Message, Segment } from 'semantic-ui-react';

function Explore() {
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-explore', []);
  }, []);
  window.electron.ipcRenderer.once('get-explore', (arg) => {
    if (arg.length) {
      setFlashCard(arg[0]);
    } else {
      setFlashCard([]);
    }
  });
  const addWord = (isKnown: boolean) => {
    try {
      window.electron.ipcRenderer.sendMessage('insert', [
        flashCard,
        isKnown ? 0 : 1,
      ]);
      window.electron.ipcRenderer.sendMessage('delete-explore', [flashCard.id]);
    } finally {
      window.electron.ipcRenderer.sendMessage('get-explore', []);
    }
  };
  return (
    <>
      {flashCard.word && (
        <Segment>
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
            <Button animated primary onClick={() => addWord(false)}>
              <Button.Content visible>Should learn</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <Button animated onClick={() => addWord(true)}>
              <Button.Content visible>Already Knew</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Segment>
      )}
      {!flashCard.word && (
        <Message positive>
          <Message.Header>Completed!</Message.Header>
        </Message>
      )}
    </>
  );
}
export default Explore;
