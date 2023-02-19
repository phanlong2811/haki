import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import DetailFlashCard from './UI/DetailFlashCard';

export default function Detail() {
  const params = useParams();
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-based-id', [params.id]);
  }, [params]);
  const [flashCard, setFlashCard] = useState<IFlashCard>([]);
  window.electron.ipcRenderer.once('get-based-id', (arg) => {
    if (arg.length) {
      setFlashCard(arg[0]);
    } else {
      setFlashCard([]);
    }
  });
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        padding: '5%',
        textAlign: 'center',
        minHeight: `95`,
      }}
    >
      <Segment>
        <DetailFlashCard
          word={flashCard.word}
          type={flashCard.type}
          mean={flashCard.mean}
          image={flashCard.image}
          phonetic={flashCard.phonetic}
          example_en={flashCard.example_en}
        />
      </Segment>
    </div>
  );
}
