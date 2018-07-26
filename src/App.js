import React, {Component} from 'react'
import './App.css'
import Icons from './icons.json'
//components
import {Segment, Container, Card } from 'semantic-ui-react'
import IconCard from './components/card'
import PageHeader from './components/header'
import PageMenu from './components/menu'
import PageFooter from './components/footer'

//styles
const styles = {
  background: "rgb(109,255,255)"
}

//fisher-yates shuffle for rearranging
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class App extends Component {

  //set state
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

    //if an icon is clicked twice
    if (clickedIcons.includes(id)) {
      //loss, reset state
      this.setState({clickedIcons: [], score: 0, alert: "Game Over! Click an icon to play again."})
      return
    } else {
      //push new icon to clicked array
      clickedIcons.push(id)
      console.log(clickedIcons)

      //check for win
      if (clickedIcons.length === 12) {
        this.setState({clickedIcons: [], score: 12, alert: "You won! Continue playing to increase your score!"})
        return
      }
      //if new icon is clicked
      this.setState({Icons, clickedIcons, score: clickedIcons.length, alert: `Nice! You've got ${clickedIcons.length} out of 12!`})
      //rearrange Icons with shuffle
      shuffle(Icons)
    }
  }

  //render components
  render() {
    return (<div style={styles}>
      <Segment inverted>
        <PageMenu score={this.state.score} alert={this.state.alert}/>
        <PageHeader/>
      </Segment>
      <Container>
        <Segment inverted>
          <Card.Group itemsPerRow={4}>
          {this.state.Icons.map(icon => (<IconCard key={icon.key} id={icon.id} mixIcons={this.mixIcons} icon={icon.icon}/>))}
        </Card.Group>
        </Segment>
      </Container>
      <br/>
    <PageFooter/>
    </div>);
  }
}

export default App;
