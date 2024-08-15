interface UserInfo{
    name: string,
    age: number,
    email: string
}

type Users = Record<string,UserInfo>;

const users:Users = {
    "dbnfjbh":{
        name:"subham",
        age:22,
        email:"jmndfgkhjfdgj"    
    },
    "njkfshjh":{
        name:"subham",
        age:22,
        email:"jmndfgkhjfdgj"
    }
}