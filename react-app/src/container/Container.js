import React from "react"
import { connect } from "react-redux"
import "./Container.css"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Home from "../components/Home/Home"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="containerPage">
        <h1>PPM - Project Product Management</h1>
        <BrowserRouter>
          <NavBar />
          <div className="contentContainer">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
