import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Divider, Grid, Input, Label } from 'semantic-ui-react';

export default function Browser() {
  const [tableData, setTableData] = useState([]);
  const [searchPrompt, setSearchPrompt] = useState<string>('');
  window.electron.ipcRenderer.once('get', (arg) => {
    setTableData(arg);
  });
  const getData = () => {
    window.electron.ipcRenderer.sendMessage('get', [
      `%${searchPrompt}%`,
      1,
      10,
    ]);
  };
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get', [
      `%${searchPrompt}%`,
      1,
      10,
    ]);
  }, [searchPrompt]);
  return (
    <>
      <Button floated="right" icon primary as={Link} to="/browser/add">
        Thêm từ mới
      </Button>
      <Input
        floated="left"
        icon="search"
        placeholder="Search"
        onChange={(event, data) => {
          setSearchPrompt(data.value);
        }}
      />
      {/* <Table color="blue" celled> */}
      {/*  <Table.Header fullWidth> */}
      {/*    <Table.Row> */}
      {/*      <Table.HeaderCell width={1} /> */}
      {/*      <Table.HeaderCell width={4}>Word</Table.HeaderCell> */}
      {/*      <Table.HeaderCell width={2}>Type</Table.HeaderCell> */}
      {/*      <Table.HeaderCell width={6}>Mean</Table.HeaderCell> */}
      {/*      <Table.HeaderCell width={4}>Deadline</Table.HeaderCell> */}
      {/*    </Table.Row> */}
      {/*  </Table.Header> */}
      {/*  <Table.Body> */}
      {/*    {tableData.map((data: any) => ( */}
      {/*      <Table.Row key={data.id}> */}
      {/*        <Table.Cell collapsing> */}
      {/*          <Button color="teal" as={Link} to={`/browser/edit/${data.id}`}> */}
      {/*            Edit */}
      {/*          </Button> */}
      {/*        </Table.Cell> */}
      {/*        <Table.Cell>{data.word}</Table.Cell> */}
      {/*        <Table.Cell>{data.type}</Table.Cell> */}
      {/*        <Table.Cell>{data.mean}</Table.Cell> */}
      {/*        <Table.Cell>{data.deadline}</Table.Cell> */}
      {/*      </Table.Row> */}
      {/*    ))} */}
      {/*  </Table.Body> */}
      {/* </Table> */}
      <Divider hidden />
      <Card.Group stackable itemsPerRow={3}>
        {tableData.map((data: any) => (
          <Card centered itemsPerRow={1} primary key={data.id}>
            <Card.Content as={Link} to={`/browser/detail/${data.id}`}>
              <Card.Header>{data.word}</Card.Header>
              <Card.Description>
                <Label color="red" horizontal>
                  {data.type}
                </Label>
                {data.mean}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Grid columns={2} stackable>
                <Grid.Column>
                  <div className="ui two buttons">
                    <Button
                      onClick={() => {
                        try {
                          window.electron.ipcRenderer.sendMessage('delete', [
                            data.id,
                          ]);
                        } finally {
                          getData();
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="ui two buttons">
                    <Button
                      inverted
                      color="blue"
                      as={Link}
                      to={`/browser/edit/${data.id}`}
                    >
                      Edit
                    </Button>
                  </div>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
}
