import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Progress,
  Segment,
  Card,
  Image,
  Divider,
  Icon,
  Header,
  Grid,
  Statistic,
} from 'semantic-ui-react';

function DashBoard() {
  const [percent, setPercent] = useState<number>(80);
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-today', []);
  });
  const [numExplore, setNumExplore] = useState(0);
  const [numLearn, setNumLearn] = useState(0);
  window.electron.ipcRenderer.once('get-today', (arg) => {
    setNumExplore(arg[0].num_explore);
    setNumLearn(arg[0].num_learn);
  });
  return (
    <>
      <Segment>
        <Header as="h2" content="Today's tasks" />
        <Progress percent={percent} indicating progress />
        <Divider hidden />
        <Card.Group centered itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Header>Ôn tập lại các từ vựng</Card.Header>
              <Card.Meta>{numLearn} từ đã học</Card.Meta>
              <Card.Description>
                Ôn tập các từ giúp bạn nhớ lâu hơn
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button inverted as={Link} to="/review" color="green">
                  Start
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Khám phá các từ mới</Card.Header>
              <Card.Meta>{numExplore} từ đã khám phá</Card.Meta>
              <Card.Description>
                Khám phá các từ giúp bạn tích lũy thêm vốn từ vựng
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button inverted as={Link} to="/explore" color="green">
                  Start
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                <Icon name="check circle" color="green" />
                Xem phim
              </Card.Header>
              <Card.Meta>500 days of Summer</Card.Meta>
              <Card.Description>
                Xem một bộ phim mỗi ngày giúp làm quen với cách nói chuyện của
                người bản xứ
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="grey" disabled>
                  Done
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
      <Segment>
        <Header as="h2" content="Heatmap" />
        <Image
          src="https://script.gs/content/images/2022/04/mhawksey-github-aug-2019.png"
          centered
        />
      </Segment>
    </>
  );
}

export default function Home() {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('get-size-words', []);
  }, []);
  const [sizeWords, setSizeWords] = useState(0);
  window.electron.ipcRenderer.once('get-size-words', (arg) => {
    setSizeWords(arg[0]['COUNT(*)']);
  });
  return (
    <>
      <Grid columns={1} textAlign="center">
        <Grid.Column>
          <Statistic label="words" value={sizeWords} />
        </Grid.Column>
      </Grid>
      <Divider hidden />
      <DashBoard />
    </>
  );
}
