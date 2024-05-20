import { json, redirect } from "@remix-run/node";
import Client from "../../models/Client";
import { connectToDatabase } from "../../utils/db.server";
import { MongoClient } from "mongodb"

// export const action = async ({ request }) => {
//   await connectToDatabase();

//   if (request.method === "POST") {
//     const data = await request.json();
//     const newClient = new Client(data);
//     await newClient.save();
//     return json({ message: "Client created successfully", client: newClient });
//   }

//   return json({ error: "Invalid request method" }, { status: 405 });
// };

// export const loader = async () => {
//   await connectToDatabase();
//   const clients = await Client.find();
//   return json({ clients });
// };


// MONGODB_URL="mongodb+srv://hilatoar:1Qazse45!@petcare.cp8i9lx.mongodb.net/?retryWrites=true&w=majority&appName=PetCare"
//   const MONGODB_DB_NAME = "PetCare"; 
//   const COLLECTION_NAME = "Clients"; 
//   const client = new MongoClient(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// export async function action({request}){
// const formData = await request.formData();
// const name = formData.get('name');
// const email = formData.get('email');

// const newClient = new Client({name, email});
// try{
//   await client.connect()
//   const db = client.db(MONGODB_DB_NAME)
//   const collection = db.collection(COLLECTION_NAME)
//   await collection.insertOne(newClient)
//   return redirect("/Clients")
// }
// catch{
//   console.log(err)
// }
// finally {
//   await client.close();
// }
// }

