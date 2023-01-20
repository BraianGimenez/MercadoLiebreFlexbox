const express = require("express")
const app = express()
const path = require("path")
const PORT = 3010;

app.use(express.static("public"))

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/home.html"));
 })
 
app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))
