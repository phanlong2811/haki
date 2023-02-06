import {
  Button,
  Card,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
} from 'semantic-ui-react';
import Explore from './Explore';

interface ISearchWord {
  isSearchWord: boolean;
  setSearchWord: any;
}
function SearchWord({ isSearchWord, setSearchWord }: ISearchWord) {
  return (
    <Modal
      basic
      onClose={() => setSearchWord(false)}
      onOpen={() => setSearchWord(true)}
      open={isSearchWord}
      size="large"
    >
      <Segment style={{ backgroundColor: 'white' }}>
        <Explore />
      </Segment>
    </Modal>
  );
}

export default SearchWord;
