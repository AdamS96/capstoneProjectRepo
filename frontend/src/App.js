import {BrowserRouter, Route} from 'react-router-dom';
import InputDetails from './components/InputDetails/InputDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Administrator from './components/Administrator/Administrator';
import UpdateDetails from './components/UpdateDetails/UpdateDetails';
import ReadDriver from './components/ReadDriver/ReadDriver';
import React from 'react'

function App() {
  


  return (
<div>
      <BrowserRouter>
        <div className="App">
          
          <div>
            <Route exact path="/" component={InputDetails} />
          </div>
          <div>
            <Route exact path="/administrator" component={Administrator} />
          </div>
          <div>
            <Route exact path="/updatedetails" component={UpdateDetails} />
          </div>     
          <div>
            <Route exact path="/readDriver/:name" component={ReadDriver} />
          </div>

        </div>

      </BrowserRouter>
    </div>

  );

  }
export default App;
