import React from 'react'
//bottom menu from semantic
import {Segment, Container, Grid, List, Header } from 'semantic-ui-react'


const PageFooter = () => (
<Segment inverted vertical style={{ padding: '5em 0em' }}>
  <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='About' />
          <List link inverted>
            <List.Item as='a'>GitHub Repo</List.Item>
            <List.Item as='a'>Home</List.Item>
            <List.Item as='a'>This</List.Item>
            <List.Item as='a'>That</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Resources' />
          <List link inverted>
            <List.Item as='a'>React</List.Item>
            <List.Item as='a'>Semantic UI</List.Item>
            <List.Item as='a'>Node</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header as='h4' inverted>
            Connect with me
          </Header>
          <p>
            space for social media here...
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
</Segment>
)

export default PageFooter
