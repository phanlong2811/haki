import FlashCard from 'components/UI/FlashCard';
import { Button, Icon, Segment } from 'semantic-ui-react';

function Review() {
  return (
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
          textAlign: 'center',
        }}
      >
        <Button.Content visible>Review tommorrow</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Segment>
  );
}
export default Review;
