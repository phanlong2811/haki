import { Input, Label, Menu, MenuItemProps } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import IMenuBar from 'main/interfaces/MenuBar';

export default function MenuBar({
  activeItem,
  setActiveItem,
  setSearchWord,
}: IMenuBar) {
  const handleItemClick: Function = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => setActiveItem(name);
  return (
    <div style={{ backgroundColor: `white` }}>
      <Menu pointing secondary stackable>
        <Menu.Item
          name="home"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'home'}
          to="/"
        />
        <Menu.Item
          name="review"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'review'}
          to="/review"
        />
        <Menu.Item
          name="explore"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'explore'}
          to="/explore"
        />
        <Menu.Item
          name="browser"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'browser'}
          to="/browser"
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              onClick={() => {
                setSearchWord(true);
              }}
              icon="search"
              placeholder="Search or add new word..."
              size="mini"
            />
          </Menu.Item>
          <Menu.Item
            name="help"
            as={Link}
            active={activeItem === 'help'}
            onClick={handleItemClick}
            to="/help"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
