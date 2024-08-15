function calculateArithmetic(a,b,fnToCall){
    const ans = fnToCall(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const ans =calculateArithmetic(1,2,sum);
console.log(ans)
