import React, { useContext, } from "react"
import { Card, } from "semantic-ui-react"
import { UserContext, } from "../providers/UserProvider"

const User = () => {
  const { character, dateCreated, skillLevel, } = useContext(UserContext)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ character }</Card.Header>
        <Card.Meta>
          Date Created: { dateCreated }
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Skill Level: { skillLevel }</p>
      </Card.Content>
    </Card>
  )
}

export default User