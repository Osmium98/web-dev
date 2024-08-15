const user1 = {
    firstName:"Subham",
    gender: "male"
}

const user2 = {
    firstName:"Happy",
    gender: "male"
}

const user3 = {
    firstName:"Rishi",
    gender: "female"
}
console.log(user1["firstName"])
console.log(user3["gender"])

//Array of Object

const allUsers=[{
    firstName:"Subham",
    gender: "male"
},{
    firstName:"Happy",
    gender: "male"
},{
    firstName:"Rishi",
    gender: "female"
}

]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}