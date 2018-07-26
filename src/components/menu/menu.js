import React from 'react'
//semantic menu
import { Menu } from 'semantic-ui-react'

const PageMenu = props => (
  <Menu inverted>
    <Menu.Item>Alerts: {props.alert}</Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item>Score: {props.score}</Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default PageMenu
