import React from 'react'
//semantic menu
import { Menu } from 'semantic-ui-react'

const PageMenu = props => (
  <Menu inverted>
    <Menu.Item name='alerts: {props.alert}'/>
    <Menu.Menu position='right'>
    <Menu.Item name='score: {props.score}'/>
    </Menu.Menu>
  </Menu>
)

export default PageMenu
