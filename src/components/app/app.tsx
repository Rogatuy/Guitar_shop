import { Navigate} from 'react-router';
import {Routes, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import GuitarFull from '../guitar-full/guitar-full';
import Main from '../main/main';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getGuitarsLoadedDataStatus } from '../../store/guitars-data/selectors';
import { getServerStatus } from '../../store/server-status/selectors';
import HistoryRouter from '../history-route/history-route';
import LoadingScreen from '../loading-screen/loading-screen';
import ServerErorMessage from '../server-error-message/server-error-message';

function App(): JSX.Element {
  const isGuitarsLoaded = useAppSelector(getGuitarsLoadedDataStatus);
  const serverDataLoadingStatus = useAppSelector(getServerStatus);

  if (!isGuitarsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!serverDataLoadingStatus) {
    return (
      <ServerErorMessage />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} >
          <Route index element={<Navigate to={AppRoute.MainFirstPage} />} />
          <Route path='page_:idPag' element={<Main />} />
        </Route>

        <Route path={AppRoute.Guitar}>
          <Route index element={<GuitarFull />} />
          <Route path=':id/:typeTab' element={<GuitarFull />} />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
