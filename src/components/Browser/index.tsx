import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Browser() {
  return (
    <Button as={Link} to="/browser/add">
      Thêm từ mới
    </Button>
  );
}
