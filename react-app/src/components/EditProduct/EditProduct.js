import React from "react"

import { connect } from "react-redux"
import { updateProduct, deleteProduct } from "../../redux"
import { Redirect } from "react-router-dom"

class EditProduct extends React.Component {
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

  componentDidMount = () => {
    let title = ""
    let price = ""
    let image = ""

    for (let i = 0; i < this.props.products.length; i++) {
      if (parseInt(this.props.match.params.id) === this.props.products[i].id) {
        console.log(this.props.products[i])

        title = this.props.products[i].title
        price = this.props.products[i].price
        image = this.props.products[i].image

        this.setState({ title: title, price: price, image: image })
        break
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.title === "" && this.state.title.length < 4) {
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
  }

  handleUpdateButton = () => {
    this.props.reviseProduct(parseInt(this.props.match.params.id), {
      title: this.state.title,
      price: this.state.price,
      image: this.state.image
    })

    this.setState({
      toProductList: true
    })
  }

  render() {
    if (this.state.toProductList) {
      return <Redirect to="/products" />
    }
    return (
      <div>
        <h1>Edit Product</h1>
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
                  <input type="number" name="price" min="0" onChange={this.handleChange} value={this.state.price} />
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
          <input type="submit" value="Delete" onClick={this.deleteProduct} />
          <input
            type="submit"
            value="Update"
            disabled={!this.state.titleValid || !this.state.priceValid}
            onClick={this.handleUpdateButton}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  reviseProduct: (id, updatedProduct) => dispatch(updateProduct(id, updatedProduct)),
  destroyProduct: (id) => dispatch(deleteProduct(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
