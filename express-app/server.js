const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 4000
const cors = require("cors")
const axios = require("axios")
const path = require("path")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "./../react-app/build/"))

// GET Results
app.get("/api/results", (request, response) => {
  axios
    .get("http://5c992ab94236560014393239.mockapi.io/results")
    .then((mockResultsGetResponse) => {
      return response.json(mockResultsGetResponse.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

// PUT Results
app.put("/api/results", (request, response) => {
  console.log("PUT Request", request.body)

  axios
    .get("http://5c992ab94236560014393239.mockapi.io/results")
    .then((mockResultsGetResponse) => {
      console.log("Get1 reponse", mockResultsGetResponse.data)
      let result = mockResultsGetResponse.data[0]

      // result.cumulativeGoldCount
      console.log("result", result)

      // return response.json(mockResultsGetResponse.data)
      axios
        .put("http://5c992ab94236560014393239.mockapi.io/results/1", {
          cumulativeGoldCount: result.cumulativeGoldCount + request.body.goldEarned,
          resultsList: [
            ...result.resultsList,
            {
              id: parseInt(result.resultsList[result.resultsList.length - 1].id) + 1,
              type: request.body.actionType,
              goldGenerated: request.body.goldEarned
            }
          ]
        })
        .then((mockResultsPutResponse) => {
          console.log("Completed API to MockAPI to Update Record")
        })
        .catch((err) => console.log(err))
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "./../react-app/build/index.html"))
})

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT)
})
