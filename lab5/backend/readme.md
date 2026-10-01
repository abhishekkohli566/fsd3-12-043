# Express
Fast,unopionated,minimalist web framwork for Node.js

## Steps

1. create project folder (lab5)
2. create two folder (frontend,Backend)  in root (lab5)
3. open terminal and reach to lab5 backend by 
```
cd ..
cd lab5
cd backend
```
4. type `npm init -y`
5. install nodemon `nodemon i -d`
6. install express `npm i express`
7. update backend/package.json
    -  change type type: "module"
    - change script 
        ```
        script:{
            "start" : "node app.js",
            "dev" : "nodemon prg1.js"
        }
        ```

8. add lab5.backend/node_modules to .gitignore
9. create prg1.js in backend
10. write the script below to start express server
    ```
    import express from 'express'
    const app = express();
    app.get("/",(req,res)=>{
    res.send("Hello Express");});

    // this line must be the last line 
    app.listen(4444,()=>console.log('prg1 is running at 4444'));
    ```
    
