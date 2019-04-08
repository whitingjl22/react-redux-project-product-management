import React from "react"

import { connect } from "react-redux"
import { createProduct } from "../../redux"
import { Redirect } from "react-router-dom"

class CreateProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      price: "",
      image: "",
      titleValid: false,
      priceValid: false,
      toProductList: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.title.length < 4) {
        this.setState({ titleValid: false })
      } else {
        this.setState({ titleValid: true })
      }
      if (this.state.price === "") {
        this.setState({ priceValid: false })
      } else {
        this.setState({ priceValid: true })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.makeProduct({
      title: this.state.title,
      price: this.state.price,
      image: this.state.image
    })

    this.setState({
      toProductList: true
    })
  }

  render() {
    if (this.state.toProductList === true) {
      return <Redirect to="/products" />
    }
    return (
      <div>
        <h1>Create a New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <input type="number" name="price" onChange={this.handleChange} value={this.state.price} min="0" />
                </td>
              </tr>
              <tr>
                <td>Image Url</td>
                <td>
                  <input type="text" name="image" onChange={this.handleChange} value={this.state.image} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Create" disabled={!this.state.titleValid || !this.state.priceValid} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  makeProduct: (newProduct) => dispatch(createProduct(newProduct))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct)
