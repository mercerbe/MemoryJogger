import React from 'react'
//semantic card
import { Card } from 'semantic-ui-react'


const IconCard = props => (

    <Card
      className='iconCards'
      color='teal'
      image={props.icon}
      id={props.id}
      onClick={() => props.mixIcons(props.id)}
      />

)

export default IconCard
