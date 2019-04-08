import React from "react"

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import "./Container.css"
import NavBar from "../components/NavBar/NavBar"
import Home from "../components/Home/Home"
import ProductList from "../components/ProductList/ProductList"
import EditProduct from "../components/EditProduct/EditProduct"
import CreateProduct from "../components/CreateProduct/CreateProduct"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log("CONTAINER PAGE PROPS:", this.props)
    console.log("CONTAINER PAGE STATE:", this.state)

    return (
      <div className="containerPage">
        <h1>PPM - Project Product Management</h1>
        <BrowserRouter>
          <NavBar />
          <div className="contentContainer">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />
              <Route path="/products/edit/:id" render={(props) => <EditProduct {...props} />} />
              <Route path="/products/new" component={CreateProduct} />
              <Route path="/products" component={ProductList} />
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
