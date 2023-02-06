import { Button, Grid } from 'semantic-ui-react';

export default function Explore() {
  return (
    <>
      <Button labelPosition="left" icon="plus" content="Thêm từ mới" primary />
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <h2>Hello</h2>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Button content="Sign up" icon="signup" size="big" />
        </Grid.Column>
      </Grid>
    </>
  );
}
