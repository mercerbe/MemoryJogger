import React from 'react'
//import semantic header here
import { Header, Segment, Icon } from 'semantic-ui-react'

const PageHeader = () => (
  <Segment inverted>
    <Header as='h1' icon inverted color='teal' textAlign='center'>
      <Icon name='trophy' />
      <Header.Content>Memory Jogger</Header.Content>
    </Header>
    <Header as='h5' inverted color='grey' textAlign='center'>
      Click all 12 icons without repeating any to win!
    </Header>
  </Segment>
)

export default PageHeader
