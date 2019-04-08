import { createStore } from "redux"

//ACTIONS
export const getResultsStateAction = (data) => ({
  type: "GET_RESULTS_STATE",
  payload: data
})
export const updateResultsStateAction = (data) => ({
  type: "UPDATE_RESULTS_STATE",
  payload: data
})

///REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESULTS_STATE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- GET_RESULTS_STATE | state: ", state)
      console.log(" -- REDUCER -- GET_RESULTS_STATE | action", action)
      return {
        ...state,
        resultsList: action.payload[0].resultsList,
        cumulativeGoldCount: action.payload[0].cumulativeGoldCount
      }
    case "UPDATE_RESULTS_STATE":
      console.log(" -- REDUCER -- UPDATE_RESULTS_STATE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_RESULTS_STATE | action", action)
      return {}

    default:
      return state
  }
}

// Initial State
// Minimal representation of the data in the app
const initialState = {
  cumulativeGoldCount: null,
  resultsList: []
}

// STORE -- store.js
export function configureStore(initialState = initialState) {
  // initialState = initialState | {}
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  console.log(store)
  return store
}

export const store = configureStore()
