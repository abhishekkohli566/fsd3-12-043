# NPM Project
1. go to folder (by cd)
2. type ```npm init -y ```
3. open package.json
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json 
```
script{
    "start " : "node app.js",
    "dev" : "nodemon prg7.js"
}
```
7. add node_modules to .gitignore
8. to run use `npm run dev`


## Rest api
### Represntaional state Transfer( REST)
- majorly bakend server return only data not html file
- REST API uses (get,post,put,ptach,delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API tester like postman.thunder client,echo api etc.

### REquest type
1. GET-all , GET-by Id
 - GET: /api/products (ye get all prducts ke liye h)
 - GET: /api/product/101 (ye get all products ke liye h ) 
 2. POST:/api/products and data will be shared by echo api body section  (  ye product add krne ke liye h)
 3. PUT/PATCH:/api/products/201 (isme hme product updatr krne ke liye use krte h)
 4. DELETE:/api/products/202 (isme hm single product ko delete kr ke ge)

# export
- export function can be exoperted by