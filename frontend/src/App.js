import {BrowserRouter, Route} from 'react-router-dom';
import InputDetails from './components/InputDetails/InputDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Administrator from './components/Administrator/Administrator';
import ReadDriver from './components/ReadDriver/ReadDriver';
import ReadAllDrivers from "./components/ReadAllDrivers/ReadAllDrivers";
import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
<div>
      <BrowserRouter>
        <div className="App">
        <NavBar/>
          <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
          <div>
            <Route exact path="/" component={InputDetails} />
          </div>
          <div>
            <Route exact path="/administrator" component={Administrator} />
          </div>
          <div>
            <Route exact path="/readDriver/:name" component={ReadDriver} />
          </div>
          <div>
            <Route exact path="/readalldrivers" component={ReadAllDrivers} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
  }
export default App;
