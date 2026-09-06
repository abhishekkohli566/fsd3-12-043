import http from 'http'

const server = http.createServer((req, res) => {
if(req.url=="/"){
    res.end("<h1> Home page</h1>");
   res.end(`
    <a href='/product'>Product page</a>
    <a href='/contact'>Conactt us</a>
    `);
   } else if(req.ur=="/product"){
    res.write(`
        <h1> Iphone 18 pro</h1>
        <h2> Price: 90000</h2>
        <h3> Discount: 30%</h3>
        `);
    res.end();
}
else if (req.url==="/contact"){
    res.end("<h1> Contact us</h1>");
}else{
    res.statusCode=404;
    res.end(`
        <h1> page not found</h1>
        <a href="/">Home</a>
        `);

}


});
server.listen(3000, () => console.log("server runs in 3000...!."));