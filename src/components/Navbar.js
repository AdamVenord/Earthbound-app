import React from "react"
import { NavLink, } from "react-router-dom"
import { Menu, } from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider"

const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Earthbound
          </Menu.Item>
        </NavLink>
        <NavLink to="/user/profile">
          <Menu.Item>
          { value.character }
          </Menu.Item>
        </NavLink>
      </Menu> 
    )}
  </UserConsumer>
)

export default Navbar
