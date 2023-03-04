import MultipleChoiceCard from 'components/MultipleChoiceCard';
import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { Message, Segment } from 'semantic-ui-react';

function Review() {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-review', []);
  }, []);
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  window.electron.ipcRenderer.once('get-review', (arg) => {
    if (arg.length) {
      setFlashCard(arg[0]);
    } else {
      setFlashCard([]);
    }
  });
  return (
    <Segment>
      {flashCard.word && <MultipleChoiceCard flashCard={flashCard} />}
      {!flashCard.word && (
        <Message positive>
          <Message.Header>Completed!</Message.Header>
          <p>Bạn đã làm tốt trong ngày hôm nay</p>
        </Message>
      )}
    </Segment>
  );
}

export default Review;
