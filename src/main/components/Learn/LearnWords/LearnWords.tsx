import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

function LearnWords() {
  return (
    <>
      <Button as={Link} to="/">
        <Icon name="angle double left" /> Back to Home screen
      </Button>
      <Segment
        textAlign="center"
        color="red"
        style={{
          backgroundImage: `url(https://code.org/images/social-media/helloworld-og-image-1200x630.png)`,
          backgroundSize: `auto`,
          color: `white`,
        }}
      >
        <Container textAlign="center">
          <Header as="h1" color="yellow">
            Word
          </Header>
          <h3>(adv)</h3>
          <p>Một dòng dài dài để mô tả ý nghĩa từ</p>
        </Container>
        <Divider hidden />
        <Button animated floated="right" primary>
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
