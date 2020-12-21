const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.json());

app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
})

app.post("/api/",(req, res) => {
    let {name} = req.body;
    console.log(`Привет сказал ${name}`);
    res.json(`Привет! ${name}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Server is running"));