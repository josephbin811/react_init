import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import JosephPage from './pages/JosephPage';

import MainHeader from './components/MainHeader';



function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to = '/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/index.html'>
          <JosephPage />
        </Route>
        <Route path='*'>
          <h1>未授權</h1>
        </Route>        
      </Switch>
      </main>
    </div>
  );
}

export default App;
