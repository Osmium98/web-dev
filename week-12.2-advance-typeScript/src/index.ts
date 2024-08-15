interface User {
    name: string,
    age: number,
    id: string,
    email:string,
    password:string
}

type UpdateProps = Pick<User,'name'|'age'|'email'>
type UpdatePropsOptional = Partial<UpdateProps>

function user(user:UpdatePropsOptional) {
    console.log(`${user.name}`);
}


const userInfo = {
    name:"subham",
    age:12,
    email:'bnvsjjvfs'
}
user(userInfo);
console.log('Success')