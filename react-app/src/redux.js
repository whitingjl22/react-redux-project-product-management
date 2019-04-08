import { createStore } from "redux"

//ACTIONS
export const retrieveProducts = () => ({
  type: "RETRIEVE_PRODUCTS"
})
export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  id
})
export const createProduct = (newProduct) => ({
  type: "CREATE_PRODUCT",
  newProduct
})

///REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "RETRIEVE_PRODUCTS":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- RETRIEVE_PRODUCTS | state: ", state)
      console.log(" -- REDUCER -- RETRIEVE_PRODUCTS | action", action)
      return state.products

    case "DELETE_PRODUCT":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- DELETE_PRODUCT | state: ", state)
      console.log(" -- REDUCER -- DELETE_PRODUCT | action", action)
      let deleteIndex = state.products.findIndex((obj) => obj["id"] === action.id)
      return {
        ...state,
        products: [...state.products.slice(0, deleteIndex), ...state.products.slice(deleteIndex + 1)]
      }

    case "CREATE_PRODUCT":
      console.log(" -- REDUCER -- CREATE_PRODUCT | state: ", state)
      console.log(" -- REDUCER -- CREATE_PRODUCT | action", action)
      id++
      return {
        ...state,
        products: [
          ...state.products,
          {
            id,
            title: action.newProduct.title,
            price: action.newProduct.price,
            image: action.newProduct.image
          }
        ]
      }

    default:
      return state
  }
}

// Initial State
let id = 15
const initialState = {
  products: [
    {
      id: "1",
      title: "title 1",
      price: 62,
      image: "http://lorempixel.com/640/480/city"
    },
    {
      id: "2",
      title: "title 2",
      price: 77,
      image: "http://lorempixel.com/640/480/business"
    },
    {
      id: "3",
      title: "title 3",
      price: 32,
      image: "http://lorempixel.com/640/480/animals"
    },
    {
      id: "4",
      title: "title 4",
      price: 56,
      image: "http://lorempixel.com/640/480/abstract"
    },
    {
      id: "5",
      title: "title 5",
      price: 3,
      image: "http://lorempixel.com/640/480/business"
    },
    {
      id: "6",
      title: "title 6",
      price: "8",
      image: "http://lorempixel.com/640/480/city"
    },
    {
      id: "7",
      title: "title 7",
      price: 48,
      image: "http://lorempixel.com/640/480/transport"
    },
    {
      id: "8",
      title: "title 8",
      price: 58,
      image: "http://lorempixel.com/640/480/nature"
    },
    {
      id: "9",
      title: "title 9",
      price: 98,
      image: "http://lorempixel.com/640/480/technics"
    },
    {
      id: "10",
      title: "title 10",
      price: 80,
      image: "http://lorempixel.com/640/480/technics"
    },
    {
      id: "11",
      title: "title 11",
      price: 33,
      image: "http://lorempixel.com/640/480/technics"
    },
    {
      id: "12",
      title: "title 12",
      price: 90,
      image: "http://lorempixel.com/640/480/fashion"
    },
    {
      id: "13",
      title: "title 13",
      price: 49,
      image: "http://lorempixel.com/640/480/animals"
    },
    {
      id: "14",
      title: "title 14",
      price: 27,
      image: "http://lorempixel.com/640/480/animals"
    },
    {
      id: "15",
      title: "title 15",
      price: 24,
      image: "http://lorempixel.com/640/480/nature"
    }
  ]
}

// STORE -- store.js
export function configureStore(initialState = initialState) {
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  console.log(store)
  return store
}

export const store = configureStore()
