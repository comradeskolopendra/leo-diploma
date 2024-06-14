import { Route, Routes } from 'react-router-dom';
import { AuthRoute, UnAuthRoute } from '../hocs/protected-route';

import Header from '../components/header/header';

import { useEffect } from 'react';
import { requestClubs, requestReviews, requestSlides } from '../constants';
import AddClub from '../pages/add-club/add-club';
import AdminPanel from '../pages/admin-panel/admin-panel';
import ErrorPage from '../pages/error-page/error-page';
import FormLogin from '../pages/login/login';
import Main from '../pages/main/main';
import { useAppDispatch } from '../redux/hooks';
import { setClubs, setContentLoading, setReviews, setSlides } from '../redux/store';


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setContentLoading(true))

    Promise.all([
      requestClubs,
      requestSlides,
      requestReviews
    ])
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(data => {
        const [clubs, slides, reviews] = data;

        dispatch(setSlides(slides));
        dispatch(setClubs(clubs));
        dispatch(setReviews(reviews));
      }).finally(() => {
        dispatch(setContentLoading(false))
      })
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route
          path='/login'
          element={
            <UnAuthRoute component={<FormLogin />} />
          }
        />
        <Route
          path='/admin-panel'
          element={
            <AuthRoute component={<AdminPanel />} />
          }
        />
        <Route
          path='/add-club'
          element={
            <AuthRoute component={<AddClub />} />
          }
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </>
  );
}

export default App;
