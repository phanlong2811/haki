import FlashCard from 'main/components/UI/FlashCard';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

function LearnWords() {
  return (
    <>
      <Button as={Link} to="/">
        <Icon name="angle double left" /> Back to Home screen
      </Button>
      <FlashCard
        vocabWord="word"
        wordType="(n)"
        wordDefinition="Day la dinh nghia cua tu"
        imageLink="https://code.org/images/social-media/helloworld-og-image-1200x630.png"
      />
    </>
  );
}
export default LearnWords;
