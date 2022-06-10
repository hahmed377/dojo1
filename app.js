const http = require("http")

http.createServer(function(req, res){
    let referer = req.headers.referer || false
    console.log(req.headers)
    res.writeHeader(200, {"Content-Type":"text/plain"})
    res.write("Hello ")
    //res.end()
    if (req.headers.referer) {
        console.log(referer)
        var name = referer.split("/")[3]
        console.log(name)

        //console.log(req.headers)
        res.writeHeader(200, {"Content-Type":"text/plain"})
        res.write("Hello " + name)
        //console.log("this worked")
        res.end()
    }
}).listen(3000)

