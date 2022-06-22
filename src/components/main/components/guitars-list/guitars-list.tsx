import { GUITAR_STEP} from '../../../../const';
import { useAppSelector } from '../../../../hooks/hooks';
import { getSelectedPagination } from '../../../../store/selected-pagination/selectors';
import { Guitars } from '../../../../types/guitar';
import CardGuitar from '../card-guitar/card-guitar';
import Pagination from '../pagination/pagination';

type GuitarsListProps = {
    guitars: Guitars;
  }

function GuitarsList({guitars}: GuitarsListProps): JSX.Element {
  const currentPagination = useAppSelector(getSelectedPagination);
  const lastGuitarIndex = currentPagination * GUITAR_STEP;
  const firstGuitarIndex = lastGuitarIndex - GUITAR_STEP;
  const currentGuitar = guitars.slice(firstGuitarIndex, lastGuitarIndex);

  return (
    <>
      <div className="cards catalog__cards">
        {currentGuitar.map((guitar) => (
          <CardGuitar
            key={guitar.id}
            guitar={guitar}
          />
        ))}
      </div>
      <Pagination
        guitars={guitars}
      />
    </>
  );
}

export default GuitarsList;
