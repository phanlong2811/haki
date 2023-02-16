import FlashCard from 'components/UI/FlashCard';
import { Button, Card, Divider, Icon } from 'semantic-ui-react';
import IMultipleChoice from 'interfaces/MultipleChoice';
import { useState } from 'react';

const LATER_CONSTANT = [0, 1, 2, 7, 14, 30];
export default function MultipleChoice({ flashCard }: IMultipleChoice) {
  window.electron.ipcRenderer.sendMessage('get-multiple', [flashCard.word]);
  const [multipleChoice, setMultipleChoice] = useState([]);
  window.electron.ipcRenderer.once('get-multiple', (arg) => {
    setMultipleChoice([...arg, { word: flashCard.word, isAnswer: 1 }]);
  });
  const [isEnd, setIsEnd] = useState(false);
  const getAnswer = (isAnswer: boolean) => {
    setIsEnd(true);
    // window.electron.ipcRenderer.sendMessage('add-deadline', [
    //     flashCard.id,
    //     isAnswer ? LATER_CONSTANT[flashCard.later] : 0,
    //   ]);
    //   window.electron.ipcRenderer.sendMessage('update-later', [
    //     flashCard.id,
    //     isAnswer ? (flashCard.later + 1) % 6 : 1,
    //   ]);
  };
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
                  onClick={() => getAnswer(data.isAnswer)}
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
              console.log(1);
            }}
          >
            <Button.Content visible>Review next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      )}
    </>
  );
}
