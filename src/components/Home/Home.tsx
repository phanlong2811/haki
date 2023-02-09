import { useState } from 'react';
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
              <Card.Meta>500 từ</Card.Meta>
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
              <Card.Meta>100 từ</Card.Meta>
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
  return (
    <>
      <Grid columns={1} textAlign="center">
        <Grid.Column>
          <Statistic label="words" value="2811" />
        </Grid.Column>
      </Grid>
      <Divider hidden />
      <DashBoard />
    </>
  );
}
