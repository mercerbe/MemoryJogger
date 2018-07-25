import React from 'react'
//semantic card
import { Card } from 'semantic-ui-react'


const IconCard = props => (
  <Card.Group itemsPerRow = {4}>
    <Card
      className='iconCards'
      color='teal'
      image={props.image}
      id={props.id}
      onClick={() => props.mix(props.id)}
      />
  </Card.Group>
)

export default IconCard
