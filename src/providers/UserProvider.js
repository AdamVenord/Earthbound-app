import React from "react"

// Create an exportable consumer that can be injected into components in a fancy way
export const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer


// Create the provider using a traditional React.Component class dohicky 
class UserProvider extends React.Component {
  state = {
    character: "Ness",
    dateCreated: "08/27/94",
    skillLevel: "God",
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user, })
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider
