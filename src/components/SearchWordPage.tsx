import {
  Modal,
  Segment,
  Card,
  Divider,
  Button,
  Grid,
  Label,
  Container,
} from 'semantic-ui-react';
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function InputCustom({ setSearchWord }) {
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, inputRef.current.value.length);
  }, []);
  window.electron.ipcRenderer.once('get', (arg) => {
    setTableData(arg);
  });
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get', [`%${inputValue}%`, 1, 10]);
  }, [inputValue]);
  return (
    <>
      <div
        className="ui huge icon input"
        style={{
          display: 'flex',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <i className="search icon" />
      </div>
      {inputValue && (
        <>
          <Divider />
          <Container
            style={{ padding: '11px', maxHeight: 200, overflow: 'auto' }}
          >
            <Card.Group centered stackable itemsPerRow={1}>
              {tableData.map((data: any) => (
                <Card
                  as={Link}
                  to={`/browser/detail/${data.id}`}
                  itemsPerRow={1}
                  onClick={() => setSearchWord(false)}
                  centered
                >
                  <Card.Content>
                    <Card.Header>{data.word}</Card.Header>
                    <Card.Description>
                      <Label color="red" horizontal>
                        {data.type}
                      </Label>
                      {data.mean}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Container>
        </>
      )}
      {inputValue && (
        <>
          <Divider hidden />
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Button
                  icon="plus"
                  content="Thêm từ mới"
                  primary
                  as={Link}
                  to={`/browser/add?search=${inputValue}`}
                  onClick={() => setSearchWord(false)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </>
  );
}

interface ISearchWord {
  isSearchWord: boolean;
  setSearchWord: any;
}

function SearchWordPage({ isSearchWord, setSearchWord }: ISearchWord) {
  return (
    <Modal
      basic
      onClose={() => setSearchWord(false)}
      onOpen={() => setSearchWord(true)}
      open={isSearchWord}
      size="small"
    >
      <Segment>
        <InputCustom setSearchWord={setSearchWord} />
      </Segment>
    </Modal>
  );
}

export default SearchWordPage;
