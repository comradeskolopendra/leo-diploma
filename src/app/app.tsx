import { Route, Routes } from 'react-router-dom';
import { AuthRoute, UnAuthRoute } from '../hocs/protected-route';

import Header from '../components/header/header';

import AddClub from '../pages/add-club/add-club';
import AdminPanel from '../pages/admin-panel/admin-panel';
import DeleteClub from '../pages/delete-club/delete-club';
import ErrorPage from '../pages/error-page/error-page';
import FormLogin from '../pages/login/login';
import Main from '../pages/main/main';
import { useAppDispatch } from '../redux/hooks';


const App = () => {
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
          path='/delete-club'
          element={
            <AuthRoute component={<DeleteClub />} />
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
