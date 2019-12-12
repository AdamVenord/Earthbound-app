import React from "react";
import { Form } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider"

class UserForm extends React.Component {
  state = { 
    character: this.props.character, 
    skillLevel: this.props.skillLevel, 
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const user = { ...this.state, };
    this.props.updateUser(user);
  }
  
  render() {
    const { character, skillLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Character Name"
          type="text"
          name="character"
          value={character}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Skill Level"
          name="skillLevel"
          value={skillLevel}
          onChange={this.handleChange}
          options={SkillOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const SkillOptions = [
  { key: "n", text: "Novice", value: "Novice", },
  { key: "i", text: "Intermediate", value: "Intermediate", },
  { key: "e", text: "Expert", value: "Expert", },
  { key: "g", text: "God", value: "God", },
]

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          character={value.character}
          skillLevel={value.skillLevel}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;
