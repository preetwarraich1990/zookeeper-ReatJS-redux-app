import React, {Component} from 'react';
import AnimalList from  '../containers/AnimalList'
import AnimalDetails from '../containers/AnimalDetails'

class App extends Component {
    render(){
       return(<div>
            <h1>Hello Zoo-Keeper</h1>
            <div className="row" >
              <div className="col-4">
                   <AnimalList/>
              </div>
              <div className="col-1">
                  <h1>Details</h1>
                  <AnimalDetails/>
              </div>
            </div>
        </div>);
    }

}

export default App;