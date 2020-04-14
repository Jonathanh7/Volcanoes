import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { loginUser, registerUser} from "./services/Constants";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import Footer from "./components/Footer";
import SignOut from './components/SignOut'
import { verifyUser } from './services/Constants'

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      formData: {
        email: "",
        password: "",
      },
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.formData);
    this.setState({
      currentUser,
      loggedIn: true,
    });
  };
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.formData);
    this.setState({
      currentUser,
    });
  };
  
  clearUser = () => this.setState({ user: null, loggedIn:false});

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
//   componentDidMount = () => {
//   this.handleVerify()
// }

  render() {
    let { user } = this.state.currentUser !== null && this.state.currentUser 

    console.log('loggein', this.state.loggedIn);
    const australia =
      this.state.loggedIn && this.state.loggedIn ? (
        <Redirect to="/main" />
      ) : null;
    
  
    

    return (
      <div className="contain">
        <Header />
        {australia}
        <div className="time">
          <Switch>
            <Route path="/" exact />
            <Route
              path="/login"
              render={() => (
                <Login
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <Signup
                  handleRegister={this.handleRegister}
                  handleLogin={this.handleLogin}
                  handleChange={this.handleChange}
                />
              )}
            />
            <Route path="/main" component={Main} />
            <Route
              exact
              path="/sign-out"
              render={(props) => (
                <SignOut {...props} clearUser={this.clearUser} user={user}/>
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
