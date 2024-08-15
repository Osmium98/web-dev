function a(){
    counter(30);
}
function counter(a){
    for(let i=a;i>=0;i--){
        console.log(i);  
        // return i;
    }
}


setTimeout(a,1*1000)


// setTimeout(function(){
//     for(let i=30;i>=0;i--){
//         console.log(i)
//     }
// },1000)