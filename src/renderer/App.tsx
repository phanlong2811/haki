import './App.css';
import MenuBar from 'components/MenuBar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'components/Home';
import { Button, Container, Divider } from 'semantic-ui-react';
import Review from 'components/Review';
import Explore from 'components/Explore';
import React, { useState } from 'react';
import SearchWord from 'components/SearchWord';
import Browser from 'components/Browser';
import NewWord from 'components/NewWord';

export default function App() {
  const [activeItem, setActiveItem] = useState('learn');
  const [isSearchWord, setSearchWord] = useState<boolean>(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setActiveItem('home');
    } else if (location.pathname === '/explore') {
      setActiveItem('explore');
    } else if (location.pathname === '/review') {
      setActiveItem('review');
    } else if (
      location.pathname === '/browser' ||
      location.pathname === '/browser/add'
    ) {
      setActiveItem('browser');
    }
  }, [location]);
  return (
    <>
      <MenuBar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        setSearchWord={setSearchWord}
      />
      <Divider hidden />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="review" element={<Review />} />
          <Route path="explore" element={<Explore />} />
          <Route path="browser">
            <Route index element={<Browser />} />
            <Route path="add" element={<NewWord />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <SearchWord isSearchWord={isSearchWord} setSearchWord={setSearchWord} />
    </>
  );
}
