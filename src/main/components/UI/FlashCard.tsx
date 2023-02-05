import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';

interface IFlashCard {
  vocabWord: string;
  wordType: string;
  wordDefinition: string;
  imageLink?: string;
}
export default function FlashCard({
  vocabWord,
  wordType,
  wordDefinition,
  imageLink,
}: IFlashCard) {
  return (
    <Segment
      textAlign="center"
      color="red"
      style={{
        backgroundImage: `url(${imageLink})`,
        backgroundSize: `auto`,
        color: `white`,
      }}
    >
      <Container textAlign="center">
        <Header as="h1" color="yellow">
          {vocabWord}
        </Header>
        <h3>{wordType}</h3>
        <p>{wordDefinition}</p>
      </Container>
      <Divider hidden />
      <Button animated floated="right" primary>
        <Button.Content visible>Review tomorrow</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Segment>
  );
}
