import IFlashCard from 'interfaces/FlashCard';
import { Container, Header } from 'semantic-ui-react';

export default function FlashCard({ word, type, mean, image }: IFlashCard) {
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
            {word}
          </Header>
          <h5>{type}</h5>
          {mean && (
            <p
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '1em',
                borderRadius: '1em',
                fontSize: '16px',
              }}
            >
              {mean}
            </p>
          )}
        </Container>
      </div>
    </div>
  );
}
