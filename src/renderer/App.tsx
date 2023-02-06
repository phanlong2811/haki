import './App.css';
import MenuBar from 'main/components/MenuBar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Learn from 'main/components/Learn/Learn';
import { Container, Divider } from 'semantic-ui-react';
import LearnWords from 'main/components/Learn/LearnWords';
import Explore from 'main/components/Explore';
import React, { useState } from 'react';

export default function App() {
  const [activeItem, setActiveItem] = useState('learn');
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setActiveItem('learn');
    } else if (location.pathname === '/explore') {
      setActiveItem('explore');
    }
  }, [location]);
  return (
    <>
      <MenuBar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Divider hidden />

      <Container>
        <Routes>
          <Route
            path="/"
            onEnter={() => setActiveItem('learn')}
            element={<Learn />}
          />
          <Route path="/learn-words" element={<LearnWords />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}
