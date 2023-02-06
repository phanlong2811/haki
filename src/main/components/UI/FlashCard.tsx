import IFlashCard from 'main/interfaces/FlashCard';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

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
        paddingBottom: `50%`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'between',
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
      >
        <Container
          textAlign="center"
          style={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            top: '50%',
            bottom: '50%',
            left: 0,
            right: 0,
            paddingLeft: '10%',
            paddingRight: '10%',
          }}
        >
          <Header as="h1" color="yellow">
            {vocabWord}
          </Header>
          <h5>{wordType}</h5>
          <p
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '1em',
              borderRadius: '1em',
              fontSize: '15px',
            }}
          >
            {wordDefinition}
          </p>
        </Container>
      </div>
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
