import React from 'react'
//semantic card
import { Card } from 'semantic-ui-react'


const IconCard = props => (
  <Card.Group itemsPerRow = {4}>
    <Card
      key=""
      className='iconCards'
      color='teal'
      image={props.icon}
      id={props.id}
      onClick={() => props.mixIcons(props.id)}
      />
  </Card.Group>
)

export default IconCard
