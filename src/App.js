import './tailwind.output.css'
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage, Timeline } from './pages';


function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME} component={HomePage}/>
        <Route exact path={ROUTES.Timeline} component={Timeline}/>
      </Router>
    </>
  )
}

export default App;
