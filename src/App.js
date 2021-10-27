import './App.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu/Menu';
import Home from './Components/Home/Home';
import Topbar from './Components/Header/Topbar/Topbar';
import useMenu from './Components/Hooks/useMenu';
import ItemDetails from './Components/Menu/ItemDetails/ItemDetails';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
function App() {
  const { items } = useMenu();
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Topbar></Topbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/menu'>
              <Menu></Menu>
            </Route>
            <Route path='/item/:menuId'>
              <ItemDetails items={items}></ItemDetails>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
