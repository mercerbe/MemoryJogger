import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Icons from './icons.json'
//components
import { Segment } from 'semantic-ui-react'
import IconCard from './components/card'
import PageHeader from './components/header'
import PageMenu from './components/menu'

class App extends Component {

  //state
  state = {
    Icons,
    clickedIcons: [],
    score: 0,
    win: 12,
    alert: ""
  }

  //mix icons function
  mixIcons = id => {
    let clickedIcons = this.state.clickedIcons

  }

  render() {
    return (
      <div>
        <Segment inverted>
        <PageMenu score={this.state.score} alert={this.state.alert} />
        <PageHeader/>
        </Segment>
      </div>

    );
  }
}

export default App;
