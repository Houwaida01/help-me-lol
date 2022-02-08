import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import Editing from './Editing';
import EditTask from './Editing';
function Task({todo}) {
  return (
  <div>
<Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>TODO LIST</Card.Header>
        <Card.Meta>cities</Card.Meta>
        <Card.Description>
          {todo.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Editing Task={todo} />
          <Button basic color='red'>
            DONE
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>);
}

export default Task;
