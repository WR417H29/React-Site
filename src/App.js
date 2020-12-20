import './main.css';
import './styles/test.css';

import Main from './pages/main';
import { Route, Switch } from 'react-router-dom';

/*
 * Default Background Colour: (40, 44, 52)
 * Default Background Colour: #282c34
 */

function App() {
  return (
    <main className='main'>
      <Switch>
        <Route path='/' component={ Main } exact />

      </Switch>
    </main>
  );
}

export default App;
