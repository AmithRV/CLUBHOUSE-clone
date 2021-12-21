import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { Route } from 'react-router';
import PhoneConformation from './pages/phoneConformation';
import codeConfirm from './pages/CodeConfirm';
import allow_notification from './pages/AllowNotification';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home'; 
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() 
{
  return (
    <BrowserRouter>
    <Route
      exact
      path={[
        "/",
        "/profile",
        "/invite",
        "/explore",
        "/get_username",
        "/code_confirm",
        "/allow_notification"
      ]}
    >
      <Switch>
        <PlanLayout >
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/invite' component={PhoneConformation}/>
          <Route exact path='/code_confirm' component={codeConfirm}/>
          <Route exact path='/allow_notification' component={allow_notification}/>
          <Route exact path='/explore' component={Explore}/>
        </PlanLayout>
      </Switch>
    </Route>

    <Route exact path={['/home']}>
      <AppLayout>
      <Switch>
        <Route exact path="/home" component={()=><Home/>}/>
      </Switch>
      </AppLayout>
    </Route>
    </BrowserRouter>
  );
}

export default App;
