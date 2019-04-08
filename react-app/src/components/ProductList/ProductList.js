import React from "react"
import "./ProductList.css"

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProduct } from "../../redux"

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log("PRODUCT-LIST PAGE PROPS:", this.props)
    console.log("PRODUCT-LIST PAGE STATE:", this.state)

    return (
      <div className="productsListContainer">
        <h1>Products List</h1>
        <ul>
          {this.props.products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.image} alt="" />
                <br />
                <h4>{product.title}</h4>${product.price}
                <br />
                <br />
                <Link to={"/products/edit/" + product.id}>
                  <button>Edit</button>
                </Link>
                <br />
                <button
                  onClick={() => {
                    this.props.destroyProduct(product.id)
                  }}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  destroyProduct: (id) => dispatch(deleteProduct(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
