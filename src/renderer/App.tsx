import './App.css';
import MenuBar from 'main/components/MenuBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Learn from 'main/components/Learn/Learn';
import { Container, Divider } from 'semantic-ui-react';
import LearnWords from 'main/components/Learn/LearnWords';
import Explore from 'main/components/Explore';

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
