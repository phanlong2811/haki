import {
  Button,
  Container,
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
      style={{
        position: 'relative',
        backgroundImage: `url(${imageLink})`,
        backgroundSize: `auto`,
        color: `white`,
        paddingBottom: `40%`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <Container
        textAlign="center"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Header as="h1" color="yellow">
          {vocabWord}
        </Header>
        <h3>{wordType}</h3>
        <p
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '1em',
            borderRadius: '1em',
          }}
        >
          {wordDefinition}
        </p>
      </Container>
      <Button
        animated
        primary
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
      >
        <Button.Content visible>Review tomorrow</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Segment>
  );
}
