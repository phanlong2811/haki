import IFlashCard from 'interfaces/FlashCard';
import {
  Card,
  Container,
  Divider,
  Header,
  Label,
  Segment,
} from 'semantic-ui-react';

export default function DetailFlashCard({
  word,
  type,
  phonetic,
  mean,
  image,
  example_en,
}: IFlashCard) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: `auto`,
        color: `white`,
        paddingBottom: `53%`,
        display: 'flex',
        flexDirection: 'column',
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
          style={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
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
            {word}
          </Header>
          <h5>{phonetic}</h5>
          <Divider />
          <Segment style={{ backgroundColor: 'black' }}>
            <Label color="red" horizontal>
              {type}
            </Label>
            {mean}
            <div
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              <Divider hidden />
              <li>{example_en}</li>
            </div>
          </Segment>
        </Container>
      </div>
    </div>
  );
}
