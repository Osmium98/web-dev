let arr =[1,2,3,4,5]

const newArr = arr.map((i)=>{
     return i*3;
})
console.log(newArr)

const filteredArr = arr.filter((i)=>{
    if(i%2 == 0){
        return true;
    }
})
console.log("The even numbers of arr is ",filteredArr)