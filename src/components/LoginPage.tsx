import { Button, Form, Segment } from 'semantic-ui-react';
import { useState } from 'react';

interface ILoginPage {
  setLogin: any;
}
export default function LoginPage({ setLogin }: ILoginPage) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        padding: '5%',
        minHeight: `95`,
      }}
    >
      <Segment>
        <Form>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e, data) => {
              setUsername(data.value);
            }}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="Username"
            type="password"
            value={password}
            onChange={(e, data) => {
              setPassword(data.value);
            }}
          />

          <Button
            content="Login"
            primary
            onClick={() => {
              if (username == 'admin' && password == 'admin') {
                setLogin(true);
              }
            }}
          />
        </Form>
      </Segment>
    </div>
  );
}
