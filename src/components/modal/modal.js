import React from 'react'
//semantic modal
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const StartModal = () => (
  <Modal trigger={<Button>Instructions</Button>} basic size='small'>
    <Header icon='bullhorn' content='Instructions' />
    <Modal.Content>
      <p>Welcome! Exercise your brain with this short-term memory jogger! You will
      be presented with 12 different icons. Your job is to attempt to click on all 12
      icons without repeating an icon. It's never easy though, every time you click
      an icon, they will all be mixed into a different order... Good luck!</p>
    </Modal.Content>
  </Modal>
)

export default StartModal
