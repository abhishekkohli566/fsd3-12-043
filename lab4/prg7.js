import http from "http";
import { getAllUsers, getUsersById, updateUsers, addUsers, deleteUser} from "./users.js";

const server = http.createServer((req, res) => {

  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getAllUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body ='';
    req.on('data',(chunk)=>{
      body += chunk;
    });
    req.on("end", () => {
      const user =JSON.parse(body);
      const userCreated=addUsers(user);
       res.end(JSON.stringify({ msg: "user added",userCreated }));
    });
   
  } else if (req.url.startsWith( "/api/users/") && req.method == "GET") {
   const userId =Number(req.url.split('/').pop())
    const userFound = getUsersById(userId);
    if(!userFound){
      req.end(JSON.stringify({msg: `user not found`}));
    }else{
      req.end(JSON.stringify(userFound));
    }
    res.end(JSON.stringify({ msg: `Showing detail of user with id  ${userId
        
    }` }));
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000, () => console.log("prg7 is running..."));
