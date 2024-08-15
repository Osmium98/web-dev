//write a fuction to create user table
import { Client } from 'pg'
 
const client = new Client({
    connectionString: "postgresql://test_owner:XFfsHQd7Bip8@ep-gentle-paper-a5vcqlnp.us-east-2.aws.neon.tech/test?sslmode=require"
  })
  
  client.connect()

  async function createUserTable(){
    const result = await client.query(`
         CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)
        console.log(result)
  }

//   createUserTable();


//   async function insertDataToUserTable(){
//     const result = await client.query(`
//         INSERT INTO users (username,email,password)
//         VALUES ('subham','subham@gmail.com','122334'),
//         ('Bapi','Bapi@gmail.com','122334'),
//         ('Happy','happy@gmail.com','122334');

//         `)
//         console.log(result)
//   }

//   insertDataToUserTable();