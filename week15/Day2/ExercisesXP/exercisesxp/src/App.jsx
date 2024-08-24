import { useState } from 'react'

import './App.css'
//3. In the App.js file, add this line:
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
// 4. You can also install React Bootstrap in your app. In the App.js file, add this line:
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './component/ErrorBoundary';


function HomeScreen() {
  return <h1>Home</h1>
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>
}

//if the message changes according to ErrorBoundary error message and not this one, why do we need this function exactly? 
function ShopScreen() {
  throw new Error('An error has ocurred!');
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg bg-light">

    <div className="container-fluid">
      
    {/*5. In the App.js file, display a Bootstrap navbar, containing three React Router <NavLink></NavLink>: (not so sure I did this one right ) */}

<NavLink className="navbar-brand" to="/" > Home </NavLink>

<NavLink className="navbar-brand" to= "/profile"> Profile </NavLink>

<NavLink className="navbar-brand" to= "/shop" > Shop </NavLink>

    </div>
    
    </nav>


    {/* 7. Add a Route for each of the functional component. Each one has a different path.

    8. Wrap each of the functional component with the ErrorBoundary component. */}

    <Routes>
      <Route path='/' element={
        <ErrorBoundary>
          <HomeScreen />
        </ErrorBoundary>
      } />
      <Route path='/profile' element={
        <ErrorBoundary>
          <ProfileScreen />
        </ErrorBoundary>
      } />
      <Route path='/shop' element={
        <ErrorBoundary>
          <ShopScreen />
        </ErrorBoundary>
      } />
    </Routes>
      
    </BrowserRouter>
  );
};

export default App
