import IFlashCard from 'interfaces/FlashCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <DetailFlashCard
      word={flashCard.word}
      type={flashCard.type}
      mean={flashCard.mean}
      image={flashCard.image}
    />
  );
}
