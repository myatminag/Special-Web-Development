let fs = require("fs")
fs.writeFile("text.html" , "created from node js" , function () {
    console.log("created")
})