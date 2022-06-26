import { ratingToText} from '../const';
import { Comments } from '../types/comments';


export const convertRatingToText = ( ratingNumber: number) => {
  const wholeRating = Math.round(ratingNumber);
  switch (wholeRating) {
    case ratingToText.VeryBad :
      return 'Очень плохо';
    case ratingToText.Bad :
      return 'Плохо';
    case ratingToText.Normal :
      return 'Удовлетворительно';
    case ratingToText.Good :
      return 'Хорошо';
    case ratingToText.VeryGood :
      return 'Отлично';
  }
};

export const convertTypeGuitarToText = ( typeGuitar: string) => {
  switch (typeGuitar) {
    case 'electric' :
      return 'Электрическая';
    case 'acoustic' :
      return 'Акустическая';
    case 'ukulele' :
      return 'Укулеле';
  }
};

export const getSortComment = (comments: Comments) => comments.slice().sort((a, b) => Date.parse(b.createAt) - Date.parse(a.createAt));

export const scrollOnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const isNumber = (value: string | number ): boolean =>
  ((value !== null) && !isNaN(Number(value.toString())) && (value !== undefined));

export const validateString = (text: string): string => {
  let result = text.replace(/\s+/g, ' ');
  if (result === ' ') {
    result = '';
  }
  return result;
};
