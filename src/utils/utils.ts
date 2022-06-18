import { MAX_RATING, ratingToText} from '../const';
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

export const getRatingAttributes = ( rating: number) => {
  const ratingAttributes = [];
  ratingAttributes.length = MAX_RATING;
  for (let i = 0; i < ratingAttributes.length; i++) {
    if ( i < rating) {
      ratingAttributes[i] = true;
    } else {
      ratingAttributes[i] = false;
    }
  }
  return ratingAttributes;
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
