import { Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Apply from './pages/apply';
import Town from './components/town';

import './styles/main.css';

/*
 * Default Background Colour: (40, 44, 52)
 * Default Background Colour: #282c34
 */

function App() {
  return (
    <main className='main'>
      
      <Switch>
        <Route path='/' component={ Main } exact />
        <Route path='/burley' component={() => <Town name="Burley" /> } exact />
        <Route path='/ilkley' component={() => <Town name="Ilkley" /> } exact />
        <Route path='/addingham' component={() => <Town name="Addingham" /> } exact />
        <Route path='/apply' component={ Apply } exact />
      </Switch>
    </main>
  );
}

export default App;
