import { Input, Label, Menu, MenuItemProps } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar({ activeItem, setActiveItem }) {
  const handleItemClick: Function = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => setActiveItem(name);
  return (
    <div style={{ backgroundColor: `white` }}>
      <Menu pointing secondary stackable>
        <Menu.Item
          name="learn"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'learn'}
          to="/"
        />
        <Menu.Item
          name="explore"
          as={Link}
          onClick={handleItemClick}
          active={activeItem === 'explore'}
          to="/explore"
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." size="mini" />
          </Menu.Item>
          <Menu.Item
            name="help"
            active={activeItem === 'help'}
            onClick={handleItemClick}
          />
          <Menu.Item>
            <Label color="yellow" image>
              Admin
            </Label>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
