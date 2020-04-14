import { Component } from 'react'
import { signOut } from '../services/Constants'

class SignOut extends Component {
  componentDidMount() {

     const { clearUser } = this.props
    // console.log( clearUser, user)
    // signOut(user)
    //   .then(() => clearUser())
    //   // .finally(() => history.push('/'))
    try {
      localStorage.removeItem("jwt");
      clearUser()
      return true
    } catch (error) {
      throw error
    }
  }
  render() {
    return ''
  }
}

export default SignOut