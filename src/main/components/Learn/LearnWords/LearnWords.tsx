import FlashCard from 'main/components/UI/FlashCard';
import { Link } from 'react-router-dom';
import { Button, Icon, Segment } from 'semantic-ui-react';

function LearnWords() {
  return (
    <>
      <Button as={Link} to="/">
        <Icon name="angle double left" /> Back to Home screen
      </Button>
      <Segment>
        <FlashCard
          vocabWord="Hello World"
          wordType="(code)"
          wordDefinition="a sample program designed to familiarize users with most programming languages"
          imageLink="https://code.org/images/social-media/helloworld-og-image-1200x630.png"
        />
        <Button
          animated
          primary
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
        >
          <Button.Content visible>Review tomorrow</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Segment>
    </>
  );
}
export default LearnWords;
