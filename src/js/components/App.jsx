import React, { Component } from "react";
import DigitalMarketing from "./Pages/DigitalMarketing/Digital";
import Seo from "./pages/Seo/Seo"; 
import Sem from "./pages/Sem/Sem";
import { Route } from "react-router-dom";
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
       
       
        <Route path='/' exact component={Home}/>
        <Route path="/digital-marketing-sem"
        component={DigitalMarketing}/>
        <Route path="/seo" component={Seo}/>
        <Route path="/sem" component={Sem}/>
       

      </div>
    );
  }
}
export default App;
