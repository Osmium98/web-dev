const { promises } = require("dns");
const fs = require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })


// console.log("hii there ")


//Promise


function subhamRead(){
   let p = new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
    return p;
}
function onDone(data){
    console.log(data);

}

// subhamRead().then(onDone);
// console.log("hii")

//async await

async function main(){
    const value = await subhamRead();
    onDone(value)
    // console.log(value)
}

main();