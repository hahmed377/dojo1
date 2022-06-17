const http = require("http")

http.createServer(function(req, res){
    res.writeHeader(200, {"Content-Type":"text/plain"})

    res.write("Hello " +  req.url)
    console.log("this worked")
  res.end()
}).listen(3000, function (i) {
  console.log('running')
})

