//we use in memory database
let users=[
{ id:1,
    name:'Abhishek kohli',
    mob:'9219264188',
    email:'abhishekkohli566@gmail.com'},
{ id:2,
    name:'aayush sharma',
    mob:'7055829486',
    email:'aayush.4723@gmail.com'},

]
let nextId=3;


 export const getAllUsers = () =>{
    return users;
}
 export const getUsersById = (pid) =>{
    const found= users.find((user)=> user.id==pid)
    return found;
}

export const addUsers =(user) =>{
    user.id=nextId++;
    users.push(user);
    return user;
};

 export const updateUsers =(pid,updateData) =>{
    const index= users.findIndex((user)=> user.id ===pid);
    if(index == -1){
        return false;
    }
    updateData.id =pid;
    users[index]=updateData;
    return updateData;

}

export const deleteUser =(pid)=>{
       const index= users.findIndex((user)=> user.id ===pid);
    if(index == -1){
        return false;
    }
    users.splice(index,1);
}
