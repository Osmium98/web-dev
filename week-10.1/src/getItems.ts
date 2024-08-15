import { Client } from "pg";


async function getUser(email: string){
const client = new Client({
    connectionString: "postgresql://test_owner:XFfsHQd7Bip8@ep-gentle-paper-a5vcqlnp.us-east-2.aws.neon.tech/test?sslmode=require"
})

try{
    await client.connect();
    const SelectQuery = "SELECT * FROM users WHERE email=$1";
    const values =[email];
    const result = await client.query(SelectQuery,values)

    if (result.rows.length > 0) {
        console.log('User found:', result.rows[0]); // Output user data
        return result.rows[0]; // Return the user data
      } else {
        console.log('No user found with the given email.');
        return null; // Return null if no user was found
      }
}catch(e){
    console.error('Error during fetching user:', e);
    throw e; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }


}
getUser('user6@example.com').catch(console.error);