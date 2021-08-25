import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './components/Books/BooksPage';
import Nav from './components/Nav';
import Categories from './components/categories/Categories';
import './App.css';

const routes = [
  {
    path: '/',
    name: 'BOOKS',
    component: <BooksPage />,
  },
  {
    path: '/categories',
    name: 'CATEGORIES',
    component: <Categories />,
  },
];

const App = () => (
  <Router>
    <header className="App-header">
      <Nav pageHeader="Bookstore CMS" routes={routes} />
    </header>
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} exact key={path}>{component}</Route>
      ))}
    </Switch>
  </Router>
);

export default App;
