import React from 'react'
import {Card} from 'semantic-ui-react'

const Icon = () => (
  <Icon name='trophy' size='massive' />
)

const CardGroup = () => (
  <Card.Group itemsPerRow = {4}>
    <Card color="teal" image={Icon} />
  </Card.Group>
)

export default CardGroup
