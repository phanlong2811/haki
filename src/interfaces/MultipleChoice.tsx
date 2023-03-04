import IFlashCard from './FlashCard';

export default interface IMultipleChoice {
  flashCard: IFlashCard;
  isDarkMode?: boolean;
  word1?: string;
  word2?: string;
  word3?: string;
}
