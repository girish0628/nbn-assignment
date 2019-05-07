import React, { Component } from 'react'
import EarthQuakeList from './EarthQuakeList';
import '../style/style.css';
import Header from '../components/Header';

//Entry point to load all the components 
class App extends Component {
  render() {
    return (
      <div className="app" data-test="app">
        <Header/>
        <EarthQuakeList/>             
      </div>
    )
  }
}
export default App;