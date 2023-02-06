import FlashCard from 'main/components/UI/FlashCard';
import { Link } from 'react-router-dom';
import { Button, Icon, Segment } from 'semantic-ui-react';

function Review() {
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
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
        >
          <Button animated primary>
            <Button.Content visible>Should learn</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Button animated>
            <Button.Content visible>Already Knew</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </Segment>
    </>
  );
}
export default Review;
