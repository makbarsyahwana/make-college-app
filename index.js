var express = require("express")
const app = express()

const router = express.Router()

router.get("/", async (req, res) => {
  res.send("Hello World")
})

app.set("port", process.env.PORT || 3000)

app.use("/", router)

app.listen(app.get("port"), () => {
  console.log("Hello world!")
})
