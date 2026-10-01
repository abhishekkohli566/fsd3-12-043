import express from 'express'
import path from 'path'
import { fileURLToPath } from "node:url";
import { join } from 'node:path';


const app =express();
const filename= fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

app.get("/",(req,res) =>{
    res.sendFile(path.join(dirname,'pages','product.html'))

});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(dirname,'pages',"contactUs.html"))
});
// this route  must be last route
app.use((req,res) =>{
    req.statusCode(404).send("<h1> page not found</h1>")
})



app.listen(4444,()=>console.log('prg2 is running at 4444'));
