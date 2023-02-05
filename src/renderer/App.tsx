import './App.css';
import MenuBar from 'main/components/MenuBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Learn from 'main/components/Learn/Learn';
import { Container, Divider, Grid, Statistic } from 'semantic-ui-react';
import LearnWords from 'main/components/Learn/LearnWords';

function Explore() {
  return (
    <h2>
      <a href="https://www.facebook.com/">Click me</a>
    </h2>
  );
}

export default function App() {
  return (
    <>
      <MenuBar />
      <Divider hidden />

      <Container>
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/learn-words" element={<LearnWords />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}
