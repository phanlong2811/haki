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
        vocabWord="Hello World"
        wordType="(code)"
        wordDefinition="a sample program designed to familiarize users with most programming languages"
        imageLink="https://code.org/images/social-media/helloworld-og-image-1200x630.png"
      />
    </>
  );
}
export default LearnWords;
